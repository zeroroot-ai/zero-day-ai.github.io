---
title: About
layout: about
description: We are a small group. We build the runtime agents execute inside, and we teach on it.
---

Zero Day AI Labs is a small research and training group. We teach how
attackers break AI systems, and how to run the ones you put in production
inside a boundary that holds. We teach on code we wrote, because that is the
only way to know it is true.

## Who teaches this

The Department of Defense and high-frequency trading are where I spent
fifteen years. Both are places where a mistake is expensive.

For the DoD I built air-gapped Kubernetes platforms. Most recently I built
AI for command and control, with the model on a box in the room and no data
leaving it. For HFT I built the trading infrastructure inside the trading
exchanges, where a microsecond was money.

Along the way I ran the security program, the on-call rotation, and the
teams. I have been the person who broke it, the person who got paged, and
the person who explained it the next morning.

I built Gibson because every one of those jobs had the same hole in it. An
agent could do the work, and nothing in the stack could say what it was not
allowed to do. That hole is what this company is about, and closing it is
what every course here teaches.

## What we built

All of it is under [zeroroot-ai](https://github.com/zeroroot-ai) on GitHub.
Gibson is the [product](/products/) of our sibling company,
[zeroroot.ai](https://www.zeroroot.ai/). It is the lab in every course and the
reference design in every engagement.

**[Gibson](https://github.com/zeroroot-ai/gibson).** Gibson is the runtime.
It gives an agent an identity, a grant for every tool it touches, a sandbox
for untrusted work, and a replayable record of what it did. Identity is
SPIFFE inside the cluster and a signed capability grant outside it. Gibson
checks every tool call against the grant at call time. It does not assume
the grant at start time. The brain is a Bayes net over the tenant's graph,
and the write-up on [why](/research/stop-asking-the-model-how-sure-it-is/)
is the first thing we published. Elastic License 2.0.

**[Setec](https://github.com/zeroroot-ai/setec).** Setec is the sandbox
layer, and a Kubernetes operator you can use without the rest. It has one
CRD. Apply a `Sandbox` and you get a Firecracker microVM, a QEMU microVM, or
gVisor, whichever the node can run. It ships per-sandbox network policy,
tenant scoping, and metrics. It is alpha, and its README says so. Apache 2.0.

**[Zerocool](https://github.com/zeroroot-ai/zerocool-plugins).** Zerocool is
a plugin for Claude Code and one for opencode. Each gives the coding agent
you already use every Gibson tool through one MCP server. Cursor, Codex CLI,
Gemini CLI and Windsurf get the same server from a config snippet. Your own
login pays for the model. The plugin never routes it. Elastic License 2.0.

**[SDK](https://github.com/zeroroot-ai/sdk) and [ADK](https://github.com/zeroroot-ai/adk).**
These are the surface you build against. The SDK is the Go contract for an
agent, a tool, or a plugin. The ADK is the `gibson` CLI. It scaffolds a
component with an `AGENTS.md` at the top, so a coding agent can finish it.
Both are Apache 2.0, so what you build with them is yours.

**[gibson-executor](https://github.com/zeroroot-ai/gibson-executor).** This
is the image that runs inside the microVM. One Go binary and a parser per
security tool turn raw nmap, httpx and nuclei output into typed graph nodes.
It is early. The first three parsers are the whole of it today. Elastic
License 2.0.

## Contact

There are two forms. One is for training and one is for consulting. A
person reads both, and you get a reply from that person.
