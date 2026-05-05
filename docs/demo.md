# Demo Guide

The public demo uses deterministic mock behavior. It is meant to communicate the product concept without exposing production routing rules or real integrations.

## Example Commands

```bash
node src/mock-router.js "update my gmail"
node src/mock-router.js "daily pack"
node src/mock-router.js "prepare me for my next meeting"
node src/mock-router.js "draft a reply"
node src/mock-router.js "what should I focus on today?"
```

## Example Output Shape

```text
Work signal summary

What happened:
One high-priority thread needs a response before the next meeting.

Why it matters:
The decision is blocking follow-up work.

Next move:
Send the short confirmation reply today.

Next actions
- draft 1 - draft the selected reply
- details - show more context
- refresh - rerun this pull
```

## Not Included

- Live Gmail, Signal, Telegram, Notion, Slack, or LinkedIn connections
- Production prompt chains
- Private ranking logic
- Personal workflow JSON
- Deployment automation

