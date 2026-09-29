---
title: About
layout: about
description: A small group that builds the runtime agents execute inside, and teaches on it.
---

Zero Day AI Labs is a small research and training group. We teach how AI
systems are attacked, and how to run the ones you put in production inside a
boundary that holds. We teach on code we wrote, because that is the only way
to know it is true.

## Who teaches this

Department of Defense and high-frequency trading. That is where I spent
fifteen years, and both are places where being wrong is expensive.

For the DoD I built air-gapped Kubernetes platforms and, most recently, AI
for command and control, with the model running on a box in the room and
nothing leaving it. For HFT I built the trading infrastructure at the
exchange colos, where a microsecond was money.

Along the way I ran the security program, the on-call rotation, and the
teams. I have been the person who broke it, the person who got paged for it,
and the person who had to explain it the next morning.

I built Gibson because every one of those jobs had the same hole in it. An
agent could do the work, and nothing in the stack could say what it was not
allowed to do. That hole is what this company is about, and closing it is
what every course here teaches.

## What we built

All of it is under [zeroroot-ai](https://github.com/zeroroot-ai) on GitHub.
Gibson is the [product](/products/) of our sibling company,
[zeroroot.ai](https://www.zeroroot.ai/). It is the lab in every course and the
reference design in every engagement.

**[Gibson](https://github.com/zeroroot-ai/gibson).** The runtime. It gives an
agent an identity, a grant for every tool it touches, a sandbox for untrusted
work, and a replayable record of what it did. Identity is SPIFFE inside the
cluster and a signed capability grant outside it. Every tool call is checked
against the grant at call time, not assumed at start time. The brain is a
Bayes net over the tenant's graph, and the write-up on
[why](/research/stop-asking-the-model-how-sure-it-is/) is the first thing we
published. Elastic License 2.0.

**[Setec](https://github.com/zeroroot-ai/setec).** The sandbox layer, and a
Kubernetes operator you can use without the rest. One CRD. Apply a
`Sandbox` and you get a Firecracker microVM, a QEMU microVM, or gVisor,
whichever the node can run. Per-sandbox network policy, tenant scoping, and
metrics out of the box. Alpha, and it says so on the tin. Apache 2.0.

**[Zerocool](https://github.com/zeroroot-ai/zerocool-plugins).** A plugin for
Claude Code, and one for opencode, that give the coding agent you already use
every Gibson tool through one MCP server. Cursor, Codex CLI, Gemini CLI and
Windsurf get the same server from a config snippet. Your own login pays for
the model. The plugin never routes it. Elastic License 2.0.

**[SDK](https://github.com/zeroroot-ai/sdk) and [ADK](https://github.com/zeroroot-ai/adk).**
The surface you build against. The SDK is the Go contract for an agent, a
tool, or a plugin. The ADK is the `gibson` CLI, which scaffolds a component
with an `AGENTS.md` at the top so a coding agent can finish it. Both Apache
2.0, so what you build with them is yours.

**[gibson-executor](https://github.com/zeroroot-ai/gibson-executor).** The
image that runs inside the microVM. One Go binary, and a parser per security
tool, that turns raw nmap, httpx and nuclei output into typed graph nodes.
Early, and the first three parsers are the whole of it today. Elastic License 2.0.

## Contact

Two forms. One is for training, one is for consulting. A person reads both,
and you get a reply from that person.
