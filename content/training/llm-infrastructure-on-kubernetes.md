---
title: LLM Infrastructure on Kubernetes
course: llm-infrastructure-on-kubernetes
description: Twelve weeks, live. GPU nodes, schedulers, model serving, Slurm beside Kubernetes, and the boundary around the agents that call the models.
---

## Who it is for

You run, or are about to run, models on your own hardware or your own cloud
account. You know Kubernetes. You have not yet put a GPU node pool, a training
scheduler, and a serving layer into one cluster and kept it up.

## What you leave with

- A cluster with GPU nodes, drivers, and the NVIDIA GPU Operator installed
  the way you will install them again on Monday.
- A serving layer on KServe that scales a model to zero and back.
- Slurm and Kubernetes on the same hardware, and a rule for which job goes
  where.
- An agent that calls your model through a boundary that refuses what it was
  never allowed to do.
- A repository that brings all of it back on a fresh cluster in one command.
- The recordings, the manifests, and the Terraform. All of it is yours.

## The twelve weeks

This outline is the shape of the course. We revise the order and the tools
between cohorts, because the tools in this space ship fast and the course
tracks them.

### Week 1. Onboarding and the coding agent

You reach the cluster, your namespace, and your quota. You run a coding agent
against the course repository and review its diff before you accept it. Lab:
deploy a workload, then break it twice on purpose and read what the cluster
tells you.

### Week 2. The GPU as a scheduled resource

Everything you know about scheduling CPU and memory, and the ways an
accelerator breaks it. The device plugin, Dynamic Resource Allocation, node
pools, taints, and queues. Lab: schedule a GPU job, then break it at three
layers, quota, taint, and capacity.

### Week 3. The NVIDIA stack on Kubernetes

Drivers, the device plugin, the GPU Operator, and DCGM. What each one owns
and what breaks on upgrade. Lab: install the operator, upgrade it, and watch
what fails first.

### Week 4. Sharing the accelerator

Time-slicing, MPS, and MIG, and what each one guarantees. Lab: put two
tenants on one GPU, make one run out of memory, and watch the neighbor die
with it.

### Week 5. Weights, storage, and the cold start

What happens when fifteen gigabytes of weights load, and where the time goes.
Storage classes, caching, and the budget nobody writes down. Lab: measure a
cold start, then cut it in half.

### Week 6. Serving with KServe and vLLM

An InferenceService from zero to a working endpoint. Autoscaling, scale to
zero, and the request that wakes it. Lab: deploy, scale to zero, and scale
back under load.

### Week 7. Batching, throughput, and the cost per token

Why inference is bound by memory bandwidth, and what follows from that.
Continuous batching, the KV cache, and the knee of the latency curve. Lab:
benchmark your endpoint and turn the numbers into a cost per million tokens.

### Week 8. Distributed inference and quantization

One model across two cards, and the same model in half the memory. Lab:
tensor parallel across two GPUs, then quantize and compare the numbers from
week seven.

### Week 9. Slurm beside Kubernetes

Why training teams want Slurm and why platform teams want one cluster.
Slinky, what it solves, and what it does not. Lab: run a training job through
Slurm on the same nodes that serve inference.

### Week 10. Multi-tenancy and quotas

One cluster, many teams, and the isolation that holds. Borrowing,
preemption, and the policy a second team can read. Lab: two teams, one
budget, and a preemption you can explain.

### Week 11. The boundary

An agent calls your model. What it may read, what it may reach, and how the
runtime refuses the rest. Identity, grants, and declared egress. Lab: an
agent on Gibson calls your endpoint, then tries something it was never
allowed to do.

### Week 12. Ship it

Bring the whole platform up from Git on a fresh cluster. Observability, cost,
and the runbook you hand to the next person. Lab: a full rebuild in one hour,
timed.

## The lab

Each student gets their own tenant on a live cluster with real GPUs. Nothing
is a simulation. Your work stays up for a week after the course so you can
finish what you started.
