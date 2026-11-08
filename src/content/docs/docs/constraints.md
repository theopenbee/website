---
title: Work constraints
description: Standing rules a worker follows in every conversation.
---

Work constraints are a worker's standing rules: how to address you, what it may do, what counts as done. The worker gets them at the start of every conversation.

## Set

- **New worker:** **Advanced settings → Work constraints**.
- **Existing worker:** its profile → **Constraints** → **Edit constraints**. Three templates help you start.
- **Through Bee:** "Tell Maya never to push to main."

## Example

```text
[Scope of work]
- Allowed: fixes and tests in ~/code/api.
- Forbidden: deleting data, pushing to main, publishing without asking.

[Delivery standards]
- Run the tests before reporting done, and say whether they pass.
```

Keep rules short and concrete. What the worker is for goes in its description.

## When changes apply

From the next conversation. Start one with **New conversation** in the worker's chat, or `/clear <worker>` in a chat app. Scheduled tasks pick up changes on their next run.

## Bee's memory

Bee also remembers preferences you tell it, such as "Remember I want summaries in Chinese." Tell it to forget them the same way.
