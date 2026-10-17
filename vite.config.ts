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

const reading = () => ({
  name: "reading",
  transformIndexHtml(html: string) {
    return html.replace("<!-- reading -->", () =>
      renderReading(readFileSync(new URL("reading.md", import.meta.url), "utf8")),
    );
  },
});

export default defineConfig({
  plugins: [tailwindcss(), reading()],
  build: {
    rollupOptions: {
      input: ["index.html", "life.html", "reading.html"],
    },
  },
});
