---
title: Workers
description: Create and manage workers, and set their engine, folder, rules and permissions.
---

A worker is an agent CLI with its own engine, working folder, rules and permissions. Bee hands each job to a worker, and several workers can run at once.

## Create

Tell Bee:

> Create a worker named Maya for backend fixes, working in ~/code/api.

Or click **+** at the top of the chat list. In the desktop app, ⌘N or Ctrl+N also works.

| Field | Notes |
| --- | --- |
| Name | Required and unique. |
| AI engine | Required. Starts on the default engine. |
| Description | What the worker is for. Bee routes jobs by it, so fill it in. |
| Work constraints | Standing rules, see [Work constraints](/docs/constraints/). |
| Engine args | Extra CLI flags, such as `--effort high`. |
| Work directory | Defaults to `~/.openbee/worker/<worker id>`. Created if missing. |
| Permissions | See [Permissions](#permissions). |

The last four are under **Advanced settings**.

## Hand out work

- Tell Bee the job. Bee picks the worker by description.
- Start the message with a worker's name to skip Bee: `Maya check the login test`. This needs a name without spaces.
- In the desktop app and the web console, every worker also has its own chat.

## Status

The dot on the avatar shows **Idle**, **Working** or **Error**. A working worker queues further tasks. Error means the last run failed, for example because the engine is not installed. `/list` shows every worker's status.

## Edit

Click the worker's name at the top of its chat, then **Edit**. The **Constraints**, **Permissions** and **Env** tabs are there too. Or tell Bee.

A worker without its own engine uses the default engine: Settings → **Default engine**, or `/engine <engine>`. Switching engines starts a fresh conversation.

## Permissions

A worker can always message you. To let it read OpenBee data while it works, grant:

| Permission | Reads |
| --- | --- |
| Read Workers | Workers and their status |
| Read Tasks | Tasks and their runs |
| Read Messages | Message history |

New workers have none. Only Bee can create or change workers and tasks.

## Environment variables

They reach the engine on every run. Set **Global variables** and **Bee variables** in Settings → **Env**, and per-worker ones in the worker's **Env** tab. The worker's value wins on the same key.

## Delete

Open the worker's profile, choose **Delete worker** and type its name to confirm. Tick **Also delete work directory** to remove its folder. Its chat history goes too.
