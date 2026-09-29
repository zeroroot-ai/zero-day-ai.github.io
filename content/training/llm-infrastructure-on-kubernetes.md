---
title: LLM Infrastructure on Kubernetes
course: llm-infrastructure-on-kubernetes
description: Two days, live. GPU nodes, schedulers, model serving, and the boundary around the agents that call the models.
---

## Who it is for

You run, or are about to run, models on your own hardware or your own cloud
account. You know Kubernetes. You have not yet put a GPU node pool, a training
scheduler, and a serving layer into one cluster and kept it up.

## What you leave with

- A cluster with GPU nodes, drivers, and the NVIDIA GPU Operator installed
  the way you will install them again on Monday.
- A serving layer on KServe that scales a model to zero and back.
- Slurm and Kubernetes on the same hardware, and a rule for which job goes where.
- An agent that calls your model through a boundary that refuses what it was
  never allowed to do.
- The recordings, the manifests, and the Terraform. All of it is yours.

## Day one: the metal and the scheduler

1. GPU nodes on Kubernetes. Drivers, the device plugin, the GPU Operator, and
   what breaks on upgrade.
2. Sharing a GPU. MIG and time-slicing, and when each one lies to you.
3. Scheduling and quotas. Node pools, taints, priority, and preemption.
4. Weights on disk. Storage classes, caching, and the load time nobody budgets.
5. Serving. KServe and vLLM, autoscaling, and the cold start problem.

## Day two: training, tenancy, and the boundary

1. Slurm next to Kubernetes. Slinky, what it solves, and what it does not.
2. Observability. DCGM, the four metrics that matter, and the alert that
   fires before the node dies.
3. Cost. Spot, capacity blocks, and the bill you get in month two.
4. Multi-tenancy. One cluster, many teams, and the isolation that holds.
5. The boundary. An agent calls your model. What it may read, what it may
   reach, and how the runtime refuses the rest. The lab runs on Gibson.

## The lab

Each student gets their own tenant on a live cluster with real GPUs. Nothing
is simulated. Your work stays up for a week after the course so you can finish
what you started.
