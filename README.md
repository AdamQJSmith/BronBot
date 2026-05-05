# BronBot

BronBot is a personal AI operations assistant prototype for turning scattered work signals into concise, action-oriented updates.

This public repository is the showcase edition. It documents the product shape, architecture, message formats, and demo behavior without publishing the private production workflows, prompts, routing logic, deployment scripts, or live integration configuration.

## What It Demonstrates

- Multi-channel assistant UX across messaging surfaces such as Signal and Telegram.
- Source-aware summaries for email, calendar, documents, social, and internal tools.
- Action-oriented response formatting with clear next moves.
- A demo routing layer that shows how requests can be classified without exposing production rules.
- A public architecture that is useful for evaluation, discussion, and portfolio review.

## What Is Private

The production companion repository contains the operational implementation:

- Production workflow JSON
- Private routing and ranking logic
- Prompt and writing-style memory experiments
- Deployment scripts and runbooks
- Live integration assumptions and environment-specific glue
- Regression tests that encode production behavior

Access to the production companion repo is restricted.

## Repository Layout

```text
docs/
  architecture.md      Public architecture overview
  demo.md              Demo scenarios and sample commands
examples/
  messages/            Sanitized assistant output examples
  workflows/           Minimal workflow sketches
src/
  mock-router.js       Small demo router, not production logic
.env.example           Safe environment template
LICENSE                All rights reserved notice
```

## Demo

Run the mock router with Node.js:

```bash
node src/mock-router.js "update my gmail"
node src/mock-router.js "what should I focus on today?"
node src/mock-router.js "draft a reply"
```

The demo output is intentionally simple. It illustrates product behavior while keeping the real implementation private.

## Status

BronBot is an active personal automation project. This public version is maintained as a portfolio and architecture showcase, not as a turnkey deployable system.

