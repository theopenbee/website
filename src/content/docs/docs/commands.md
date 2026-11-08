---
title: Chat commands
description: Slash commands to stop work, reset context, check status and switch engines.
---

Commands work in every chat app, the desktop app and the web console. Send the command as the whole message.

| Command | Does |
| --- | --- |
| `/stop` | Stops Bee's current reply in this chat. |
| `/stop <worker>` | Stops the worker's tasks from this chat. Its context is kept. |
| `/clear` | Resets Bee's and every worker's context in this chat. |
| `/clear <worker>` | Resets one worker's context in this chat. |
| `/status` | Shows active contexts and running tasks. |
| `/list [keyword]` | Lists workers. The keyword filters by description. |
| `/engine <engine>` | Sets the default engine: `claude`, `codex` or `pi`. |
| `/engine <engine> <worker>` | Sets one worker's engine. |

## Notes

- `/clear` asks for confirmation while tasks are running: send it again within 30 seconds. Scheduled tasks are kept.
- `/engine` waits until nothing is running.
- In a worker's own chat, `/stop` and `/clear` act on that worker.
- In groups, `@bot /status` works too.
- Telegram adds `/auth <code>`, see [Telegram](/docs/chat-apps/telegram/).
