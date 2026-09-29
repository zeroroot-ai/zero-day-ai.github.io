---
title: Gibson Runtime
layout: product
eyebrow: "Products · from zeroroot.ai"
description: Gibson is the runtime our agents execute inside. It is the lab in every course and the reference design in every engagement. zeroroot.ai builds and sells it.
lede: >
  Gibson is the runtime an agent executes inside. The boundary is a property
  of execution, not a check that runs afterwards.
cta: { label: "Go to zeroroot.ai", url: "https://www.zeroroot.ai/" }
cta_ghost: { label: "Read the code", url: "https://github.com/zeroroot-ai/gibson" }
parts:
  - name: Gibson Runtime
    blurb: The substrate. It identifies, budgets, and journals every call an agent makes, and it can refuse any of them.
    license: Elastic-2.0
    url: https://github.com/zeroroot-ai/gibson
  - name: Gibson Console
    blurb: It shows missions, grants, traces, and replay. It is the screen for the person who has to answer for the agent.
    license: Elastic-2.0
    url: https://github.com/zeroroot-ai/dashboard
  - name: Execution environment
    blurb: Setec gives microVM isolation as a Kubernetes primitive. Untrusted work goes in. Only what the grant allows comes out.
    license: Apache-2.0
    url: https://github.com/zeroroot-ai/setec
  - name: ADK
    blurb: You build agents with it, and it ships the gibson CLI. It is Apache licensed, so what you build on it is yours.
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
use: read, write, and execute. The rights are bounded by what that person
holds. The person sets them once, up front. There is no runtime approval
pop-up, because a pop-up is a prompt with a button on it.

**Enforced, not advisory.** A control that inspects the output and scores it
afterwards is advice. A control that makes the disallowed thing
unrepresentable is a guarantee. Gibson only claims the second kind.

Everything else is plumbing for those two ideas. Every agent gets an
identity. Untrusted work gets a sandbox. Every session gets a budget. Every
run gets a journal you can replay for the person who asks what happened.

Our sibling company, [zeroroot.ai](https://www.zeroroot.ai/), builds and
sells Gibson. We teach on it because we wrote it. You do not need it to take
a course, and you do not need a course to run it.
