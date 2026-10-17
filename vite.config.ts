import { readFileSync } from "node:fs";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// `- <date> · [Title](url) · author · one line`, under `## Topic` headings
const LINE = /^- (\d{4}-\d{2}-\d{2}) · \[(.+?)\]\((https?:\/\/[^)\s]+)\) · (.+?) · (.+)$/;
// The repo and the site are public: nothing private may reach the page
const PRIVATE = /#\d+|briefs|wish list|agent-config|research-data|research-decisions/i;

function renderReading(markdown: string) {
  let html = "";
  let open = false;
  for (const line of markdown.split("\n")) {
    if (line.startsWith("## ")) {
      if (open) html += "</ul>\n";
      html += `<h2>${escapeHtml(line.slice(3).trim())}</h2>\n<ul>\n`;
      open = true;
    } else if (line.startsWith("- ")) {
      const match = LINE.exec(line);
      if (!match || !open) throw new Error(`reading.md: line does not fit the format: ${line}`);
      if (PRIVATE.test(line)) throw new Error(`reading.md: line names something private: ${line}`);
      const [, date, title, url, author, about] = match;
      html += `<li><time datetime="${date}">${date}</time> · <a href="${escapeHtml(url)}">${escapeHtml(title)}</a> · ${escapeHtml(author)} · ${escapeHtml(about)}</li>\n`;
    }
  }
  return open ? html + "</ul>\n" : html;
}

// A link into a repo on GitHub, deep links (`/blob/…`, `/issues/…`) included. Gists are another host.
const GITHUB_REPO = /^https?:\/\/(?:www\.)?github\.com\/([^/?#\s]+)\/([^/?#\s]+)/i;

// An unauthenticated request answers 404 for a private repo. Anything but 200 or 404 is no answer.
async function checkGithubRepos(markdown: string) {
  const lines = new Map<string, string[]>();
  for (const line of markdown.split("\n")) {
    const match = LINE.exec(line);
    const repo = match && GITHUB_REPO.exec(match[3]);
    if (!repo) continue;
    const slug = `${repo[1]}/${repo[2]}`;
    lines.set(slug, [...(lines.get(slug) ?? []), line]);
  }
  const results = await Promise.all(
    [...lines.keys()].map(async (slug) => {
      try {
        const response = await fetch(`https://github.com/${slug}`, {
          signal: AbortSignal.timeout(5000),
        });
        return { slug, status: response.status };
      } catch {
        return { slug, status: 0 };
      }
    }),
  );
  const unreachable = results.filter((r) => r.status !== 200 && r.status !== 404);
  if (unreachable.length) {
    const detail = unreachable.map((r) => `${r.slug} (${r.status || "no answer"})`).join(", ");
    throw new Error(
      `reading.md: GitHub could not be reached, so its links are unchecked: ${detail}`,
    );
  }
  const hidden = results.filter((r) => r.status === 404);
  if (hidden.length) {
    const detail = hidden.flatMap((r) => lines.get(r.slug) ?? []).join("\n");
    throw new Error(`reading.md: line links into a private GitHub repo:\n${detail}`);
  }
}

const reading = () => ({
  name: "reading",
  transformIndexHtml(html: string) {
    return html.replace("<!-- reading -->", () =>
      renderReading(readFileSync(new URL("reading.md", import.meta.url), "utf8")),
    );
  },
});

// Build only: the dev server makes no request
const readingLinks = () => ({
  name: "reading-links",
  apply: "build" as const,
  async buildStart() {
    await checkGithubRepos(readFileSync(new URL("reading.md", import.meta.url), "utf8"));
  },
});

export default defineConfig({
  plugins: [tailwindcss(), reading(), readingLinks()],
  build: {
    rollupOptions: {
      input: ["index.html", "life.html", "reading.html"],
    },
  },
});
