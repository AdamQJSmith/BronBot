# Architecture Overview

BronBot is designed around a simple loop:

1. Receive a short user command from a messaging surface.
2. Classify the intent and target source.
3. Retrieve or simulate relevant work signals.
4. Rank the most important items.
5. Render a concise reply with next actions.

## Public Architecture

```text
Messaging Surface
  -> Input Normalizer
  -> Intent Router
  -> Source Adapter Layer
  -> Priority/Ranking Layer
  -> Response Formatter
  -> Messaging Surface
```

## Source Categories

- Email and inbox triage
- Calendar and meeting preparation
- Document/task systems
- Social and professional feeds
- News and external signal monitoring

## Privacy Boundary

This public repo shows the architecture and demo interface only. Production source adapters, prompts, ranking rules, message memory, deployment automation, and operational runbooks live in a restricted private repository.

