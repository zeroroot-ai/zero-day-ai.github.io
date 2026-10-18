---
title: Gibson Runtime
layout: product
eyebrow: "Products · from zeroroot.ai"
description: Gibson takes your agents from a demo to production on your own Kubernetes cluster, and gives your security team what it needs to sign off. zeroroot.ai builds and sells it.
lede: >
  Gibson takes your agents from a demo to production, on your own Kubernetes
  cluster, and gives your security team what it needs to sign off.
cta: { label: "Go to zeroroot.ai", url: "https://www.zeroroot.ai/" }
cta_ghost: { label: "Read the code", url: "https://github.com/zeroroot-ai/gibson" }
outcomes_heading: What you get
outcomes:
  - name: Your security team signs off
    blurb: They read what each agent may do in one place, and they replay any run step by step. That is the evidence a review asks for.
  - name: A hijacked agent cannot send your data out
    blurb: Untrusted work runs in a microVM on your own nodes. The network refuses every destination you did not list, even if an attacker fools the model.
  - name: No agent holds a person's password
    blurb: Each agent has its own identity. A person gives it only rights that person already holds, and Gibson checks them on every tool call.
  - name: A runaway loop stops at the budget you set
    blurb: Every run has a limit on tokens, cost, and steps. When a run goes over its limit, Gibson stops it.
  - name: You can say what the agent did last Tuesday
    blurb: Every run leaves a journal. Replay it for the auditor, the incident review, or the person who asks.
  - name: It runs where you already run
    blurb: One Helm chart on any Kubernetes cluster, in any cloud, on bare metal, or air-gapped. Use your own models, from Anthropic, OpenAI, Bedrock, Vertex, Azure, Mistral, or Ollama.
  - name: Your engineers own what they build
    blurb: The SDK is Apache 2.0. Gibson is source-available under ELv2. Read it, run it, change it, and send merge requests. You need a license only to resell it.
parts_heading: What you install
parts:
  - name: Gibson Runtime
    blurb: Runs your agents. Gives each one an identity, a budget, and a journal, and stops every call it is not allowed to make.
    license: Elastic-2.0
    url: https://github.com/zeroroot-ai/gibson
  - name: Gibson Console
    blurb: The screen for the person who answers for the agent. See every run and what it touched, and replay it.
    license: Elastic-2.0
    url: https://github.com/zeroroot-ai/dashboard
  - name: Setec
    blurb: Runs untrusted work in a microVM on your own nodes, so one compromised run cannot reach another.
    license: Apache-2.0
    url: https://github.com/zeroroot-ai/setec
  - name: ADK
    blurb: Build agents and ship them with the gibson CLI. It is Apache 2.0, so what you build is yours.
    license: Apache-2.0
    url: https://github.com/zeroroot-ai/adk
outro: >
  Every course runs its lab on Gibson. Every engagement ships with it. If you
  want to run it yourself, the product company is next door.
---

We built Gibson because every assessment found the same thing. The agents
worked. Nobody could say what they were allowed to touch, and nobody could
show what they had done. So the agents stayed in the demo.

Our sibling company, [zeroroot.ai](https://www.zeroroot.ai/), builds and
sells Gibson. We teach on it because we wrote it. You do not need it to take
a course, and you do not need a course to run it.
