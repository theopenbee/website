---
title: Tasks
description: Run jobs now, later or on a schedule, and stop or cancel them.
---

Tell Bee what you need. Bee creates the task and picks the worker.

| Kind | Example |
| --- | --- |
| Now | "Fix the login redirect bug." |
| Once, later | "In 30 minutes, check whether the deploy finished." |
| Recurring | "Every weekday at 9:00, summarize yesterday's commits." |

Recurring tasks follow a cron schedule in the server's time zone and run until you cancel them.

## Results

- **Chat app:** in the same chat, prefixed with the worker's name.
- **Desktop app and web console:** in the worker's own chat. Open it from Bee's handoff card.

Failures and cancellations are reported in the same place. Failed tasks are not retried.

## Queue and limits

- A worker runs one task at a time. The rest wait in line. Different workers run in parallel.
- A worker run stops after 24 hours, a Bee run after 10 minutes. Change `bee.engine.timeout.worker` and `bee.engine.timeout.bee` in `~/.openbee/config.yaml`, then run `openbee restart`.
- Tasks that run now continue the worker's earlier conversation in that chat. Later and recurring tasks start fresh.
- After a restart, unfinished tasks run again.

## Stop and cancel

| To | Do |
| --- | --- |
| Stop the current work | **Stop** in the worker's chat, or `/stop <worker>` |
| Cancel a scheduled task | Tell Bee: "Cancel the daily commit summary." |
| See scheduled tasks | Ask Bee: "Which recurring tasks do I have?" |
| Start over | **New conversation** or `/clear`. Scheduled tasks are kept. |
