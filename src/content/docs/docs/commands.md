---
title: Chat commands
description: Slash commands to stop work, reset context, check status, switch engines and cancel scheduled tasks.
---

Commands work in every chat app, the desktop app and the web console. Send the command as the whole message.

| Command | Does |
| --- | --- |
| `/stop` | Stops Bee's current reply in this chat. |
| `/stop <worker>` | Stops the worker's tasks from this chat. Its context is kept. |
| `/clear` | Resets Bee's and every worker's context in this chat. |
| `/clear <worker>` | Resets one worker's context in this chat. |
| `/clear cancel` | Drops a `/clear` that is waiting for confirmation. |
| `/status` | Shows active contexts and running tasks. |
| `/list [keyword]` | Lists workers. The keyword filters by description. |
| `/engine` | Shows the default engine. |
| `/engine <engine>` | Sets the default engine: `claude`, `codex` or `pi`. |
| `/engine <engine> <worker>` | Sets one worker's engine. |
| `/cancel` | Lists this chat's scheduled and countdown tasks. |
| `/cancel <task ID>` | Cancels one of them. The first 8 characters of the ID are enough. |

## Notes

- `/clear` asks for confirmation while tasks are running: send it again within 30 seconds, or `/clear cancel`. Scheduled tasks are kept.
- In Lark / Feishu, `/status`, `/engine`, `/cancel` and the `/clear` confirmation come with buttons, so you can click instead of typing.
- `/engine` waits until nothing is running.
- In a worker's own chat, `/stop` and `/clear` act on that worker.
- In groups, `@bot /status` works too.
- Telegram adds `/auth <code>`, see [Telegram](/docs/chat-apps/telegram/).
