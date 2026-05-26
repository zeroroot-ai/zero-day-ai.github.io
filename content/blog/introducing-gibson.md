---
title: "Introducing Gibson: Autonomous Agent Orchestration for Security"
date: 2024-01-15
author: "zero-day.ai"
tags: ["gibson", "agents", "security", "orchestration"]
---

Gibson is an autonomous agent orchestration platform. Think Kubernetes, but for AI agents instead of containers.

## What Gibson Actually Is

Gibson is an autonomous agent orchestration platform. Think Kubernetes, but for security testing agents instead of containers.

You write agents in Go using the SDK. They run on your cluster. They reason with LLMs (Claude, GPT, Gemini, or local models via Ollama). They execute tools via distributed Redis queues. They accumulate knowledge in a Neo4j graph database. And they do it all inside your infrastructure, not ours.

I've spent too many years watching security tools promise the world from someone else's cloud, then fail the moment they need to test something behind a firewall. Or in an air-gapped environment. Or anywhere that requires actual deployment work instead of a SaaS login.

Gibson exists because those tools couldn't.

## The Architecture

Here's what the stack looks like:

```
CLI/gRPC Client → Gibson Daemon → Mission Orchestrator
                        ↓
         ┌──────────┬────────┬──────────┐
         ↓          ↓        ↓          ↓
       etcd      SQLite    Redis      Neo4j
    (Registry)  (State)   (Queues)  (GraphRAG)
                            ↓
                      Tool Workers
```

The daemon orchestrates missions. Missions are DAG-based workflows that define what agents do. Agents run an Observe-Think-Act loop:

1. **OBSERVE**: Query the knowledge graph. What do we know?
2. **THINK**: LLM reasons about findings and decides next action.
3. **ACT**: Execute a tool, delegate to a sub-agent, or store a finding.
4. **LEARN**: Write results back to Neo4j.

Every iteration is a "turn." Turns get traced in Langfuse so you can see exactly what the agent was thinking and why it made the decisions it did.

## The SDK

Agents, tools, and plugins are all Go interfaces:

```go
// Agents reason and make decisions
type Agent interface {
    Name() string
    Version() string
    Description() string
    LLMSlots() []SlotDefinition  // Declare which models you need
    Execute(ctx, task, harness) (Result, error)
}

// Tools do stateless work
type Tool interface {
    ExecuteProto(ctx, input proto.Message) (proto.Message, error)
    InputMessageType() string
    OutputMessageType() string
}
```

The harness gives agents everything they need:

- `Complete()` — LLM completion with slot-based model selection
- `CompleteWithTools()` — Function calling
- `CompleteStructured()` — JSON output with schema validation
- `ExecuteTool()` — Dispatch work to tool pods via Redis
- `DelegateToAgent()` — Spawn sub-agents for complex tasks
- `Memory()` — Three-tier memory (working, mission, long-term)
- `GraphQuery()` — Raw Cypher against Neo4j
- `SubmitFinding()` — Report security findings with full provenance

Tools use Protocol Buffers for type-safe I/O. No more stringly-typed JSON garbage. You define the schema, the compiler catches mistakes.

## The Knowledge Graph

Neo4j stores everything agents learn. The taxonomy covers:

- **Network**: Hosts, Services, Ports, DNS Records
- **Application**: Endpoints, APIs, Parameters, Auth Flows
- **Security**: Vulnerabilities, Findings, Attack Paths, Exploits
- **Identity**: Credentials, Users, Roles, Permissions
- **Infrastructure**: Containers, Clusters, Cloud Resources

Relationships like HOSTS, EXPOSES, CONNECTS_TO, EXPLOITS, and LEADS_TO let agents reason about attack paths. Vector embeddings enable semantic similarity search. MITRE ATT&CK and ATLAS mappings are built in.

Knowledge persists across missions. An agent that discovered a credential last week can use it this week. Patterns compound. The system gets smarter over time.

## Full Observability

OpenTelemetry traces everything. GenAI semantic conventions track LLM calls. Langfuse integration gives you:

- Mission traces with hierarchical agent execution
- Token usage and cost tracking per agent, per model
- Decision logging with reasoning traces
- Memory operation visibility

Prometheus exports metrics: agent execution times, tool latencies, queue depths, finding counts by severity. Standard stuff that plugs into your existing monitoring.

## The CLI

```bash
# Start the daemon
gibson daemon start

# Run a mission
gibson mission run pentest.yaml

# Check progress
gibson mission show abc123

# Pause and resume (checkpointing works)
gibson mission pause abc123
gibson mission resume abc123

# Manage agents and tools
gibson agent list
gibson agent install ghcr.io/my-org/my-agent:latest
gibson tool list

# Export findings
gibson finding list
gibson finding export --format sarif
```

## Deployment

Helm charts in `/deploy/`. Alpine-based container. Runs on any Kubernetes: EKS, GKE, AKS, k3s, OpenShift, air-gapped clusters.

gRPC ports: 50001 (callback), 50002 (API), 9090 (metrics). Standard health probes at `/healthz` and `/readyz`. Graceful shutdown on SIGTERM.

Data stays in your network. Your API keys. Your findings. Your knowledge graph. We don't see any of it.

## What People Build

| Domain | Examples |
|--------|----------|
| Security Testing | Vulnerability scanners, pentest automation, threat hunting |
| LLM Security | Prompt injection testing, jailbreak detection, data extraction |
| DevOps | K8s troubleshooting, log analysis, incident response |
| Compliance | Evidence collection, audit automation, policy validation |

## Why Not LangChain/LangGraph?

LangChain is a Python library for chaining LLM calls. It's fine for prototypes.

Gibson is infrastructure. It handles distributed tool execution, persistent knowledge graphs, multi-agent delegation, mission checkpointing, and deployment to environments where "pip install" isn't an option.

Different tools for different problems.

## Getting Started

```bash
git clone https://github.com/zero-day-ai/gibson
cd gibson
make build

# Set your LLM provider
export ANTHROPIC_API_KEY=sk-...
# or OPENAI_API_KEY, GOOGLE_API_KEY, OLLAMA_HOST

gibson daemon start
gibson mission run examples/recon.yaml
```

Check the [GitHub repo](https://github.com/zero-day-ai/gibson) for SDK examples and agent templates.

## License

BSL 1.1. Use it however you want. Build commercial products on top of it. Just don't resell Gibson itself as a competing platform.

---

*Questions? [Schedule a call](https://calendly.com/zero-day-ai) or open an issue on GitHub.*
