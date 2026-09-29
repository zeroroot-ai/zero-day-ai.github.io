---
title: Attacking and Defending AI Agents
course: attacking-and-defending-ai-agents
description: Two days, live. Day one you break agents the way the published attacks do. Day two you rebuild one that refuses every attack from day one, and you measure it.
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
- The proof that each attack from day one now fails, and the numbers to show
  your security review.
- The recordings, the manifests, and the code. All of it is yours.

## The syllabus follows the published record

The attacks come from the OWASP Top 10 for Agentic Applications, the MITRE
ATLAS agentic techniques, and the incidents behind them. The defenses come
from the design-pattern papers and the systems that hold up on AgentDojo. We
name the source for every attack and every control, so you can check our
work.

## Day one: break it

1. The threat model. The lethal trifecta: private data, untrusted content,
   and a path out. OWASP ASI01 through ASI10. The ATLAS agentic techniques.
   You map the agent you brought to all three before lunch.
2. Indirect prompt injection. A web page, an email, a document, or a tool
   result carries the instruction. EchoLeak is the case study: one email,
   zero clicks, and the files left the tenant. Lab: hijack an email agent.
3. Tool poisoning over MCP. A poisoned description, a rug pull after
   approval, and a tool that shadows another. Lab: publish a poisoned tool
   and watch the agent obey it.
4. Memory and context poisoning. An instruction that survives into the next
   session. Lab: plant it, close the session, and watch it fire tomorrow.
5. Browser and computer-use agents. The zero-click class: PleaseFix,
   ZombieAgent, and their kin. Lab: a page that drives the agent.
6. Excessive agency. The shared service account. The confused deputy across
   two tools. Lab: start with a read tool and end with a write.
7. Multi-agent. Delegation is an attack path. One compromised agent instructs
   another. Lab: pivot through a sub-agent.
8. Measure it. You run your agent against AgentDojo and record the number.
   That number is the one you beat on day two.

## Day two: secure it, then ship it

1. Why prompts and classifiers do not hold. Adaptive attacks against prompt
   defenses and detectors. What "no formal guarantee" costs you in
   production.
2. The patterns that hold. Action selector, plan then execute, dual LLM,
   code then execute, and context minimization. The Rule of Two, and which
   leg you cut for your agent.
3. Enforce outside the model. CaMeL: a privileged planner, a quarantined
   reader, provenance on every value, and a policy check before every tool
   call. Lab: rebuild the email agent under a reference monitor.
4. Identity and grants. One SPIFFE identity per agent. A grant bounded by the
   human who gave it. Authorization at call time with OpenFGA, not at start
   time. Lab: the same attack from day one, now refused.
5. Sandbox untrusted work. Firecracker microVMs and gVisor. Egress declared up
   front and refused otherwise. Lab: the exfiltration fails at the network,
   whether or not the attacker fooled the model.
6. The tool supply chain. Pin every tool description by hash. Refuse a
   description that changed. Allowlist the servers. Lab: the rug pull fails.
7. Budgets, journals, and replay. A budget per session stops the runaway
   loop. A journal replays the run for the reviewer. Lab: replay every attack
   from day one and show where each one stopped.
8. Ship it. Run AgentDojo again on the defended agent. Compare utility and
   security against your day-one number. Leave with the numbers, the
   manifests, and a report your security review will accept.

## The lab

Day one runs against a deliberately vulnerable agent environment. Day two
runs on Gibson, which is the reference control for identity, grants,
sandboxed execution, and replay. Each student gets their own tenant. Nothing
is a simulation. Your work stays up for a week after the course so you can
finish what you started.
