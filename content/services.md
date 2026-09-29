---
title: Services
layout: services
description: Two fixed offers for the organization whose AI pilots work and whose AI production does not exist yet. An assessment that attacks your agents. A build that stands up an agentic software factory on your own cluster.
intro: >
  Your pilots work. Your production does not exist. The agent that impressed
  the room in March is still on a laptop in September. Nobody can say who it
  runs as, what it may touch, or what it did last Tuesday. We close that gap
  with a runtime we built. We also bring fifteen years of platforms that
  passed review at the Department of Defense and at the trading exchanges.
contact_heading: Talk to us
contact_blurb: >
  Leave an address. You get a reply from a person, not a sequence, within two
  working days.
---

## What an agentic software factory is

A software factory is a place that builds, tests, and ships code the same
way every time, where a reviewer can see all of it. An agentic
software factory does the same for agents. Every agent has an identity. Every
tool call passes a grant. Untrusted work runs in a sandbox. Every session has
a budget. Every run leaves a journal a person can replay.

That is what Gibson is. It is one Helm chart. It installs on the Kubernetes
cluster you already run, in any cloud or in your own datacenter, and it
brings the identity, the authorization, the isolation, and the audit trail
with it. Your engineers build agents on an Apache-licensed SDK and keep
everything they build.

The rest of this page says what each offer delivers, where the platform runs,
and how it fits the systems you have.

## The Agentic Software Factory, in detail

### Why this is not a build from scratch

A platform built from scratch takes a year, and the consultant who built it
is the only one who can maintain it. We bring Gibson instead. It is a runtime
that already runs, with identity, grants, sandboxes, budgets, and replay
built in, and with every design decision written down in the repository.
The engagement is the work of installing it on your cluster, linking it to
your systems, and putting your agents on it. That is weeks, not quarters,
and at the end your engineers hold all of it.

### Where it runs

- On your Kubernetes cluster. The baseline profile assumes a cluster with a
  default StorageClass and nothing else. It runs on OpenShift, Rancher,
  kubeadm, bare metal, and air-gapped estates.
- On EKS, GKE, or AKS with a provider overlay that carries only that cloud's
  differences. The edge, the WAF, and the rate limiter are the same on every
  substrate.
- Beside what you already run. If your cluster owns cert-manager, External
  Secrets, ExternalDNS, or CloudNativePG, the guest profile uses yours and
  installs none of its own.
- From your registry. One value repoints every image at your mirror, so an
  air-gapped install pulls nothing from the internet.
- The platform needs five things from outside the cluster: an S3-compatible
  bucket, a DNS sub-zone, an SMTP relay, a keyring, and the cluster itself.
  Nothing else outlives a teardown, so a rebuild from a named backup brings a
  tenant back exactly.

### Who signs in, and how

- People sign in through Zitadel, the identity provider inside the platform.
  MFA is on by default. One tenant per person. Tenant admins assign roles.
- We link Zitadel to your identity provider over OIDC or SAML during the
  build, so your people use the login they already have.
- No agent ever holds a person's credential. A person delegates a grant to an
  agent, and the grant is bounded by what that person holds.

### What an agent is allowed to do

- Every agent has its own SPIFFE identity inside the cluster and a signed
  capability grant outside it. There is no shared service account.
- Gibson checks every tool call against the grant at call time, with OpenFGA.
  Deny wins wherever two rules disagree.
- There is no runtime approval prompt. The grant is the control. A reviewer
  reads it once and knows what the agent can and cannot do.

### Where untrusted work runs

- A tool or an agent that handles untrusted input runs inside a Setec
  microVM, on Firecracker or gVisor, on your own nodes.
- Egress is declared up front. The network refuses a destination that was
  never declared, whether or not the attacker fooled the model.
- A coding agent gets a fresh sandbox per run and loses it after. One
  compromised run cannot reach another.

### Which models

- Yours. Gibson ships providers for Anthropic, OpenAI, Amazon Bedrock, Google
  Vertex, Azure Foundry, Mistral, Ollama, and any OpenAI-compatible endpoint.
- A self-hosted model stays inside your network. The platform never needs a
  cloud model to run.
- Gibson identifies, budgets, and journals every model call, whichever
  provider answers it.

### How it reaches your systems

- Any MCP server becomes a connector. It runs as a pod in your tenant
  namespace, and the agent reaches it only through its grant.
- Credentials come from your secret store through External Secrets. The
  platform runs OpenBao for its own secrets and never asks for yours in the
  clear.
- Your existing tools stay where they are. The agent comes to them.

### What your security reviewer gets

- An event-sourced journal of every mission. Replay any run, step by step,
  and get the same result.
- A WAF and a per-client rate limit at the one edge, on every substrate.
- A signed chart. Production runs the exact digest staging tested, and the
  promotion step refuses a mismatch.
- A map from the OWASP Top 10 for Agentic Applications to the control that
  refuses each one, written for your platform, not copied from ours.

### How your engineers keep it

- They build agents, tools, and plugins on the Gibson SDK, which is Apache
  2.0. What they build is theirs.
- The ADK scaffolds a component with an `AGENTS.md` at the top, so the coding
  agent they already use can finish it.
- Claude Code and opencode get every Gibson tool through the Zerocool plugin.
  Their own login pays for the model.
- A bank of always-on coding agents takes jobs from people, from other
  agents, and from the pipeline. A scorer closes each job, never the agent
  that did it.

### The twelve weeks

1. Weeks one and two. We map the agents you have, the systems they must
   reach, and the reviewer who must sign. We write the threat model together.
2. Weeks three to six. The platform comes up on your cluster, linked to your
   identity provider, your secret store, and your models.
3. Weeks seven to ten. The first three agents you named run in production,
   with their grants, their sandboxes, and their journals.
4. Weeks eleven and twelve. Your engineers ship the fourth agent without us.
   We hand over the runbooks and the reviewer's map, and we leave.

## The Agent Production Readiness Assessment, in detail

### What we look at

- The agents you have, what they must reach, and who has to approve them.
- Identity and authorization. Who each agent runs as, what it may touch, and
  whether anyone can say so in writing.
- Isolation and egress. Where untrusted work runs and where it can send data.
- Models and cost. Which providers, which data leaves your network, and what
  a runaway loop costs before something stops it.
- Audit. Whether anyone can replay what an agent did last Tuesday.
- Operations. How an agent ships, who gets the page, and how you roll one back.
- The attacks. Indirect injection through pages, mail, and tool results. Tool
  poisoning and rug pulls over MCP. Memory poisoning. Zero-click hijack of
  browser agents. Privilege escalation across tools. Delegation between
  agents. The scope follows the OWASP Top 10 for Agentic Applications and
  the MITRE ATLAS agentic techniques.

### How it runs

1. We map every agent, every tool it holds, every credential it can reach,
   and every path out. We interview the people who have to sign.
2. We run the attacks against the real deployment from an isolated sandbox,
   inside the rules of engagement, and we capture the evidence.
3. We replay every successful attack for your team. We rank every gap, and
   we write the plan that takes the agents to production.

The length depends on how many agents you have and how many systems they
reach. We scope it with you on the first call and fix the price before we
start.

### You do not have to run Gibson

The assessment is not a sales call for the runtime. Most teams we meet have
already built something: an agent framework, a gateway, a set of tools, a
half-finished platform. Some want to keep building in house. Some cannot
adopt a new runtime for a year. We assess what you have and design for what
you will run.

Gibson is where our answers come from. It is the design we tested, and every
control we recommend has a working example in it. If you run something else,
you get the same control mapped onto your stack, with the trade-off named
where your stack cannot do what the runtime does.

### What you get

- A readiness report. Every gap ranked, with the control or the change that
  closes it.
- The attack results. Each finding names the input that produced it and the
  control that stops it.
- A live replay of every successful attack, in your environment, for your
  team.
- A reference architecture for your agents on your stack. It names every
  component, every identity, every boundary, and every data flow, and it
  fits the systems you have. If you build it in house, this is the drawing
  your team builds from.
- A plan to production, with the order of work, and a fixed price for the
  build if you want us to do it.

## Who this is for

You have agents that work in a demo and a security review that will not let
them out. You run Kubernetes, in a cloud or on your own metal. You want your
own engineers to own the result. If that is you, the form below reaches a
person.
