---
title: Telegram
description: Connect a Telegram bot to OpenBee.
---

Plugin ID `telegram`. Bee answers private chats and groups.

## 1. Create the bot

1. Message [@BotFather](https://t.me/BotFather), send `/newbot` and copy the token.
2. For groups, optional: send `/setprivacy` and choose **Disable**, so the bot sees every message. Then re-add it to the group.

## 2. Connect OpenBee

Install **Telegram** from **Settings → Plugins → Marketplace**, fill in these settings and enable it:

| Setting | Value |
| --- | --- |
| Bot token | From @BotFather |
| Auth code | Filled with a random code. Each person sends `/auth <code>` once before using the bot. Clear it to let anyone in. |
| Bot name | The bot's username |

Replies are plain text. The plugin honours `HTTPS_PROXY`.
