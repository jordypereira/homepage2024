# Reading

Articles and resources worth reading on agentic engineering. One line per source: `<date added> · [Title](url) · author · one line on what it is`, newest first within each topic.

## What an agent and a harness are

- 2026-10-16 · [I think "agent" may finally have a widely enough agreed upon definition](https://simonwillison.net/2025/Sep/18/agents/) · Simon Willison · The short definition the later pieces build on: tools in a loop toward a goal.
- 2026-10-16 · [The Anatomy of an Agent Harness](https://x.com/Vtrivedy10/status/2031408954517971368) · Viv Trivedy · Where "Agent = Model + Harness" comes from. About 20 min.
- 2026-10-16 · [Building Effective AI Agents](https://www.anthropic.com/engineering/building-effective-agents) · Anthropic · Anthropic's base text on agents versus workflows.

## Harness engineering

- 2026-10-16 · [Skill Issue: harness engineering for coding agents](https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents) · HumanLayer · The practical levers: AGENTS.md, skills, sub-agents, hooks and back-pressure. About 20 min.
- 2026-10-16 · [Agent harness engineering](https://addyosmani.com/blog/agent-harness-engineering/) · Addy Osmani · A survey that draws the other harness pieces together. About 15 min.
- 2026-10-16 · [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html) · Birgitta Böckeler · Guides and sensors: a frame for the controls around a coding agent.
- 2026-10-16 · [My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey) · Mitchell Hashimoto · A practitioner's account.

## Context and memory

- 2026-10-16 · [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) · Andrej Karpathy · A pattern for a plain-markdown wiki that an agent keeps and reads. About 10 min.
- 2026-10-16 · [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) · Anthropic · On choosing what goes into an agent's context.
- 2026-10-16 · [Context Rot](https://research.trychroma.com/context-rot) · Chroma · The research behind "longer context, worse results".
- 2026-10-16 · [12-factor agents](https://github.com/humanlayer/12-factor-agents) · Dex Horthy, HumanLayer · Principles for building LLM-powered software.
- 2026-10-16 · [Memory overview](https://docs.langchain.com/oss/python/concepts/memory) · LangChain · The short-term and long-term memory terms, defined.

## Work order: what starts, how many at once

- 2026-10-16 · [Bets, Not Backlogs](https://basecamp.com/shapeup/2.1-chapter-07) · Ryan Singer, Basecamp · Shape Up on betting on shaped work instead of keeping a backlog.
- 2026-10-16 · [The Betting Table](https://basecamp.com/shapeup/2.2-chapter-08) · Ryan Singer, Basecamp · How a team decides what to bet on.
- 2026-10-16 · [Write the Pitch](https://basecamp.com/shapeup/1.5-chapter-06) · Ryan Singer, Basecamp · How to write the pitch that gets bet on.
- 2026-10-16 · [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) · Simon Willison · Running agents in parallel, where review is the limit.
- 2026-10-16 · [The bottleneck AI coding assistants moved rather than removed](https://thinkpieces.stavros.io/posts/the-bottleneck-ai-coding-assistants-moved-rather-than-remove/) · Stavros · Review, not writing, is the limit.
- 2026-10-16 · [WIP-1, Little's law and agent throughput](https://agentpatterns.ai/patterns/agent-design/wip-1-littles-law-agent-throughput/) · Agent Patterns · One task open per agent until it is verified.

## Long-running agents and review

- 2026-10-20 · [Long-running Agents](https://addyosmani.com/blog/long-running-agents) · Addy Osmani · The shared pattern: a plan file, a progress file, a done-condition written first and a separate evaluator.
- 2026-10-16 · [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) · Anthropic · Keeping an agent on track across long-running work.
- 2026-10-16 · [Scaling Managed Agents](https://www.anthropic.com/engineering/managed-agents) · Anthropic · Running hosted agents at scale, the headless route.
- 2026-10-16 · [Code Review for Claude Code](https://claude.com/blog/code-review) · Anthropic · A model reviewing every pull request, with its numbers.
- 2026-10-16 · [From Industry Claims to Empirical Reality: Code Review Agents in Pull Requests](https://arxiv.org/html/2604.03196v1) · arXiv 2604.03196 · 3,109 agent PRs: why a human still approves the merge.

## Tooling for agents

- 2026-10-16 · [ViteConf 2026 livestream](https://www.youtube.com/watch?v=PfyIEgLzNYI) · Evan You · "Developer Tooling in the Agentic Era", from 0:03:30, about 25 min: the Vite Plus direction.

## Tracking an effort against its target

- 2026-10-20 · [Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl](https://www.martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) · Birgitta Böckeler · What spec tools leave open when a spec changes after work exists.
- 2026-10-20 · [Burndown and burnup charts](https://docs.gitlab.com/user/project/milestones/burndown_and_burnup_charts/) · GitLab · How a scope line tells a moved target apart from finished work.
- 2026-10-20 · [llm-wikid](https://github.com/shannhk/llm-wikid) · shannhk · An agent-kept wiki that grades each page by how many sources agree and lists its data gaps.

## Evals: turning failures into checks

- 2026-11-17 · [Trusting agents before running them in parallel](https://www.youtube.com/watch?v=I_oMJk6barY) · Lauren Tan, Cursor · Verification skills that drive the real app, skills grown from observed failures, evals as unit tests for a skill, and review comments turned into lints. Livestream reupload, about 45 min.
- 2026-11-17 · [pstack](https://github.com/cursor/plugins/tree/main/pstack) · Lauren Tan, Cursor · Skills for a verification skill per app (drive the real app, a feature map) and for turning a repeated correction into structure before prose.
- 2026-11-17 · [Cut The Noise: Building a Code Reviewer You Can Trust](https://www.youtube.com/watch?v=f6OVURAlYXI) · Joah Gerstenberg, Block · A reviewer measured offline on past expert reviews, then online by findings acted on and later fixes; precision first.
- 2026-11-17 · [State of Software Factories // Slop Bench](https://www.youtube.com/watch?v=ix1qQK1IvmA) · Dex Horthy, HumanLayer · Why tests and evals cannot see maintainability, and Slop Code Bench. About 10 min.
- 2026-11-17 · [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) · Anthropic · Start with 20 to 50 cases from real failures; code graders first, judges checked against people; capability against regression suites.
- 2026-11-17 · [evals-skills](https://github.com/hamelsmu/evals-skills) · Hamel Husain · Agent skills for error analysis, writing one-question judges and checking a judge against your own labels (TPR and TNR).
- 2026-11-17 · [Plugin evals](https://code.claude.com/docs/en/plugin-evals) · Anthropic · Claude Code's own runner for skill and plugin evals: cases as files, free and judged graders, a with-and-without baseline, a spend cap.
- 2026-11-17 · [Many SWE-bench-passing PRs would not be merged into main](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/) · METR · Passing tests against a maintainer's merge decision: about half of passing agent PRs would be rejected.
- 2026-11-17 · [Does AI code review lead to code changes?](https://arxiv.org/abs/2508.18771) · Sun et al. · Grading a review bot by whether code changed after its comment, across 22,000 comments.
