---
title: "Stop asking the model how sure it is."
date: 2026-09-29
summary: >
  An agent that says "90 percent confident" is making a noise, not a
  measurement. Here is how Gibson gets a real number instead: a Bayes net that
  the agent cannot write to, bets the agent has to back, and a settlement
  rule with no LLM in it.
tags: ["gibson", "belief", "agents", "bayes"]
---

Ask an agent how sure it is and it will tell you. Ninety percent. Eighty-five.
"High confidence." It says this the way it says everything, by predicting the
next token, and the number has about as much to do with reality as the
adjective before it.

We know this because we tried to use those numbers. We ran red-team agents
against real infrastructure and asked them to rank what they found. The
rankings changed between runs on the same target. They changed when we
rephrased the prompt. They were expensive to produce and impossible to
replay. A model is not a probability calculator. It is a very good guesser
that has been trained to sound sure.

So we took the number away from it.

## Three kinds of statement, and the agent may write two

Everything an agent in Gibson knows lives in one graph per tenant. There is
one thing to read and one thing to write. What goes onto that graph comes in
three kinds, and they never mix.

**Evidence** is what the agent saw. Port 443 is open. The response had this
header. This is a fact, attributed to the agent that observed it.

**A hypothesis** is what the agent thinks but has not shown. "This service is
the same build as the one with the deserialization bug." It is attributed,
it is dated, and it is marked unproven until it settles.

**Belief** is what the system computed from the evidence. The agent cannot
write it. It is derived, never asserted. That single rule is what keeps it
honest.

The agent's write surface is only the first two. It emits what it saw and what
it suspects. The number comes from somewhere else.

## Where the number comes from

Belief is a Bayesian network laid over the attack graph. Every asset carries
three variables, `reachable`, `exploitable`, `juicy`, and the edges that let
one compromise enable another, a credential that grants access, a trust
relationship, a service that runs on a host, carry the probability across.

Two things about this are unusual, and both are on purpose.

**Inference is exact.** Not sampled. Variable elimination, the textbook
algorithm, on a bounded slice of the graph around the node in question. The
same evidence produces the same posterior every time, to the last digit, which
means a replay of a mission reproduces the numbers the fleet was working from.
When someone asks why an agent went after that box, the answer is a number you
can recompute, not a vibe you have to trust.

**The tables are learned, not typed in.** Nobody sits down and writes "if the
service is unpatched, 0.8 chance it is exploitable." Every strength in the
network is a posterior fit from recorded outcomes. On day one, with no data,
an edge starts at a flat prior of one half. That sounds weak. It is the
opposite. A half because you have no data yet is defensible. An expert's
"point eight" is not, and it never corrects itself.

The math runs today in about two hundred lines of numpy. It used to run on a
graphical-model library that pulled in a deep-learning stack, three gigabytes
of it, to marginalize a seven-node binary network. We deleted the stack, kept
the algorithm, and the parity test agrees with the old library to one part in
a trillion. The Go port of the same code is on a branch this week, so the
brain will be one language and one process.

A node with many enabling causes would need a table with two to the N
columns. It gets a noisy-OR decomposition instead, so the cost grows with N
and not with two to the N. That is not an approximation. It is the same
distribution, factored.

## Skin in the game

A hypothesis on its own is cheap. Any agent can write ten before lunch. So a
hypothesis the fleet decides to pursue becomes a **bet**: the agent stakes a
calibrated confidence on it, and being wrong costs standing.

The interesting part is how a bet settles.

It settles TRUE when the fleet demonstrates the claim and a typed predicate
fires against the captured evidence. The predicate comes from the technique,
not from the agent, so the agent cannot invent a trivially-true test for its
own claim. It settles FALSE when the attempt budget runs out with no proof.
That is a recorded outcome, not silence. And where objective proof is not
possible, a person labels it, out of band, with the fleet still running.

An LLM never judges a bet. Not once. A model judging a model is the black box
we were trying to get out of, it can be gamed, and it breaks replay.

Settled bets do two things. They feed the training set that refits the
network, so the tenant's belief gets better calibrated over time. And they
build a reputation, which attaches to a technique in an environment, never to
an agent. Agents are interchangeable and short-lived. What lasts is knowing
that this kind of move pays off in this kind of network, and a new agent
inherits that on its first turn.

## What decides the next move

The model still decides what the fleet does next. It does not get to decide
from the whole menu.

A planner scores every candidate move by how much it would reduce uncertainty
about the goal, plus a surprise term so the off-path find is never curated
away, divided by what it costs and what it risks. The top ten go to the
model. The model picks one, with all the context and judgment it has. It
cannot pick an eleventh.

Today that score is exact for one step and recomputed every cycle as evidence
lands. The full multi-step version, a Bayes-adaptive tree search over the
network, is designed and not yet built. The seam for it is in the code, and
the code says so in a comment, because a plan you cannot find in the source
is a plan you will forget.

## Why you would care

Because the alternative is a report that says "critical, high confidence" and
a person who has to decide whether to believe it.

In Gibson a finding is real because a predicate fired against evidence that
was recorded when it happened. The confidence on it is a posterior you can
recompute. The path to it is a journal you can replay in front of whoever
asks. None of that depends on the model being honest about how sure it is,
because we stopped asking.

Gibson is the runtime our sibling company, [zeroroot.ai](https://www.zeroroot.ai/),
builds and sells. The decisions above are written down as architecture
records in the [repository](https://github.com/zeroroot-ai/gibson), numbers
0005, 0021 through 0023, 0026, 0027, 0029, 0034, and 0037, and the code is
next to them. Read the records first. They are shorter than the code and
they say why.
