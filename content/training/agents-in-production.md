---
title: Agents in Production
course: agents-in-production
description: Twelve weeks, live. Identity, grants, sandboxed execution, budgets, and replay for an agent fleet that runs unattended.
---

## Who it is for

You have agents that work in a demo. You need them to run every day, for many
users, without a person watching each one. You have to answer for what they
did afterwards.

## What you leave with

- An agent fleet with one identity per agent, and a grant that bounds each one
  to what its owner may do.
- Untrusted work dispatched into a sandbox that cannot reach what it was not
  given.
- A budget per session that stops a runaway loop before the invoice does.
- A journal that replays any run, step by step, for the person who asks why.
- Your own agent, shipped through GitOps, with a security sign-off packet.

## The twelve weeks

This outline is the shape of the course. We revise the order and the tools
between cohorts.

### Week 1. Onboarding and the agent you bring

You reach the cluster, your tenant on Gibson, and the course repository. You
bring an agent you run today, or you take ours. Lab: run it once, unbounded,
and read everything it did.

### Week 2. What an agent is

A model, a harness, a set of tools, and a loop. Which of your problems each
one solves, and where the safety boundary sits in a tool call. Lab: a one-shot
agent on the SDK that does one narrow job and exits.

### Week 3. Identity

Why a shared service account is the root of every agent incident. One SPIFFE
identity per agent inside the cluster, and a signed grant outside it. Lab:
give your agent an identity and watch its first unauthorized call refused.

### Week 4. Authorization on every call

A grant, not a prompt. What a person may delegate, why deny wins, and why
there is no approval pop-up. Lab: write the grant for your agent, then run
the tool it needs and the tool it does not.

### Week 5. Sandboxed execution

Untrusted work in a microVM. Firecracker, gVisor, and declared egress. Lab:
run an untrusted tool, then try to send a file somewhere it was never allowed
to go.

### Week 6. Tools and connectors

Any MCP server as a connector, running in your namespace, reached only
through the grant. Lab: bring your own MCP server and wire it to your agent.

### Week 7. Missions and the shared graph

One graph per tenant. Agents emit observations, and the graph is the memory.
Lab: two agents share one graph, and the second one finishes what the first
one started.

### Week 8. Budgets and cost

A budget per session, and what a runaway loop costs before something stops
it. Lab: write a loop that never ends, and watch the budget end it.

### Week 9. Journals and replay

Every step of every run on a timeline, and a replay that gives the same
answer. Lab: replay a run for a reviewer and answer the question "why did it
do that" with a number.

### Week 10. Banks of always-on agents

Long-lived coding agents that take jobs from people, from other agents, and
from the pipeline. A scorer closes the job, never the agent. Lab: a bank of
two members, one job each, one verifier.

### Week 11. Shipping an agent

An agent through GitOps. A signed chart, a promotion that refuses a mismatch,
and a rollback you have tried. Lab: promote your agent, break it, and roll it
back.

### Week 12. Ship it

Your agent in production, with the packet your security team signs. Lab:
assemble the packet: the grant, the sandbox, the journal, and the replay.

## The lab

Each student gets their own tenant on Gibson, on a live cluster. Nothing is
a simulation. Your work stays up for a week after the course so you can
finish what you started.
