---
title: FGCU Service Learning Event Matcher
date: "2024-11-15"
description: A cloud-based system to efficiently match organizations with relevant service learning opportunities.
tag: search
author: Luis Cabrera
---

## FGCU Service Learning Event Matcher
A cloud-based system to efficiently match organizations with relevant service learning opportunities. This application leverages advanced similarity search algorithms for near-instant event retrieval and ranking.

### Purpose
To connect service-learning organizations and interested participants while ensuring rapid, relevant matches. This system showcases the power of FAISS for vector-based indexing, combined with AWS for hosting.

### Key Features
Vector-based Search (FAISS): Enables near-instant retrieval and ranking of event data.
AWS Deployment: Scalable and highly available architecture to handle traffic spikes and large data sets.
CI/CD Pipelines (Jenkins): Streamlined deployment workflow, ensuring fast and reliable updates.
PySide GUI: Provides real-time searching and filtering of events for an enhanced user experience.
Performance Metrics: Sub-2 second query responses and 95%+ relevance in matched results.

### Technologies
- C++
- Python
- AWS (EC2, S3, etc.)
- FAISS (Facebook AI Similarity Search)
- Jenkins (CI/CD)
- PySide (GUI framework)