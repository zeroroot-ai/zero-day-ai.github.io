---
title: Gibson Runtime
layout: product
eyebrow: "Products · from zeroroot.ai"
description: The runtime our agents execute inside. It is the lab in every course and the reference design in every engagement. Built and sold by zeroroot.ai.
lede: >
  The runtime an agent executes inside, where the boundary is a property of
  execution and not a check applied afterwards.
cta: { label: "Go to zeroroot.ai", url: "https://www.zeroroot.ai/" }
cta_ghost: { label: "Read the code", url: "https://github.com/zeroroot-ai/gibson" }
parts:
  - name: Gibson Runtime
    blurb: The substrate. Every call an agent makes is identified, budgeted, journaled, and refusable.
    license: Elastic-2.0
    url: https://github.com/zeroroot-ai/gibson
  - name: Gibson Console
    blurb: Missions, grants, traces, and replay. The screen the person who has to answer for the agent looks at.
    license: Elastic-2.0
    url: https://github.com/zeroroot-ai/dashboard
  - name: Execution environment
    blurb: Setec. microVM isolation as a Kubernetes primitive. Untrusted work goes in, and only what was granted comes out.
    license: Apache-2.0
    url: https://github.com/zeroroot-ai/setec
  - name: ADK
    blurb: Build agents, and the gibson CLI. Apache licensed, so what you build on it is yours.
    license: Apache-2.0
    url: https://github.com/zeroroot-ai/adk
outro: >
  Every course runs its lab on Gibson. Every engagement ships with it. If you
  want to run it yourself, the product company is next door.
---

We built Gibson because we kept finding the same thing on every assessment.
The agent was fine. The model was fine. The thing that was missing was a line
the agent could not cross, and a record of every step it took up to that line.

So there are two ideas in it, and only two.

**A grant, not a prompt.** A named person gives an agent the rights it may
use. Read, write, execute. Bounded by what that person holds. Set once, up
front. There is no runtime approval pop-up, because a pop-up is a prompt with
a button on it.

**Enforced, not advisory.** A control that inspects the output and scores it
afterwards is advice. A control that makes the disallowed thing
unrepresentable is a guarantee. Gibson only claims the second kind.

Everything else is plumbing for those two ideas. Identity for every agent.
A sandbox for untrusted work. A budget per session. A journal you can replay
in front of the person who asks what happened.

Gibson is built and sold by [zeroroot.ai](https://www.zeroroot.ai/), our
sibling company. We teach on it because we wrote it. You do not need it to
take a course, and you do not need a course to run it.
