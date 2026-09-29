---
title: Attacking and Defending AI Agents
course: attacking-and-defending-ai-agents
description: Twelve weeks, live. The first half breaks agents the way the published attacks do. The second half rebuilds one that refuses every attack from the first half, and measures it.
---

## Who it is for

You defend, or will defend, agents that read the web, hold credentials, and
run tools. You want to know what an attacker does first, and what a control
must refuse for that attack to fail. You bring an agent you run today, or you
use ours.

## What you leave with

- A working set of the attacks that broke production agents in the last two
  years: indirect injection, tool poisoning, memory poisoning, zero-click
  browser hijack, and privilege escalation across tools.
- Your agent scored against the AgentDojo benchmark before and after you
  defend it. That is 629 security cases and 97 utility tasks.
- The same agent rebuilt inside a boundary: one identity, a grant checked on
  every call, a sandbox with declared egress, pinned tools, and a journal you
  can replay.
- The proof that each attack from the first half now fails, and the numbers
  to show your security review.
- The recordings, the manifests, and the code. All of it is yours.

## The syllabus follows the published record

The attacks come from the OWASP Top 10 for Agentic Applications, the MITRE
ATLAS agentic techniques, and the incidents behind them. The defenses come
from the design-pattern papers and the systems that hold up on AgentDojo. We
name the source for every attack and every control, so you can check our
work.

## The twelve weeks

This outline is the shape of the course. We revise the attacks between
cohorts, because the attacks change.

### Week 1. The threat model

The lethal trifecta: private data, untrusted content, and a path out. OWASP
ASI01 through ASI10. The ATLAS agentic techniques. Lab: map the agent you
brought to all three before the hour is up.

### Week 2. Indirect prompt injection

A web page, an email, a document, or a tool result carries the instruction.
EchoLeak is the case study: one email, zero clicks, and the files left the
tenant. Lab: hijack an email agent.

### Week 3. Tool poisoning over MCP

A poisoned description, a rug pull after approval, and a tool that shadows
another. Lab: publish a poisoned tool and watch the agent obey it.

### Week 4. Memory and context poisoning

An instruction that survives into the next session. Lab: plant it, close the
session, and watch it fire in the next one.

### Week 5. Browser and computer-use agents

The zero-click class: PleaseFix, ZombieAgent, and their kin. Lab: a page that
drives the agent.

### Week 6. Excessive agency and delegation

The shared service account. The confused deputy across two tools. One
compromised agent that instructs another. Lab: start with a read tool, end
with a write, then pivot through a sub-agent.

### Week 7. Measure it

AgentDojo, and what a benchmark can and cannot tell you. Lab: run your agent
against AgentDojo and record the number. That number is the one you beat.

### Week 8. What holds and what does not

Adaptive attacks against prompt defenses and detectors. The patterns that
hold: action selector, plan then execute, dual LLM, code then execute, and
context minimization. The Rule of Two. Lab: rebuild the email agent under a
reference monitor, CaMeL style.

### Week 9. Identity and grants

One SPIFFE identity per agent. A grant bounded by the human who gave it.
Authorization at call time with OpenFGA. Lab: the attack from week two, now
refused.

### Week 10. Sandboxes, egress, and the tool supply chain

Firecracker microVMs and gVisor. Egress declared up front. Every tool
description pinned by hash. Lab: the exfiltration fails at the network, and
the rug pull fails at the pin.

### Week 11. Budgets, journals, and replay

A budget per session stops the runaway loop. A journal replays the run for
the reviewer. Lab: replay every attack from weeks two through six and show
where each one stopped.

### Week 12. Ship it

Run AgentDojo again on the defended agent. Compare utility and security
against your week seven number. Lab: the report your security review will
accept, with the numbers in it.

## The lab

The first half runs against a deliberately vulnerable agent environment. The
second half runs on Gibson, which is the reference control for identity,
grants, sandboxed execution, and replay. Each student gets their own tenant.
Nothing is a simulation. Your work stays up for a week after the course so
you can finish what you started.
