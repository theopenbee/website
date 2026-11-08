---
title: Chat apps
description: Talk to Bee from Lark, DingTalk, WeCom, WeChat, Telegram, Discord or Linear.
sidebar:
  label: Overview
---

Each chat app is a channel plugin. You can run several at once.

| App | Plugin ID | Bee answers | You need |
| --- | --- | --- | --- |
| [Lark / Feishu](/docs/chat-apps/feishu/) | `feishu` | Direct messages, group @mentions | A custom app with a bot |
| [DingTalk](/docs/chat-apps/dingtalk/) | `dingtalk` | Direct messages, group @mentions | An internal app with a Stream mode robot |
| [WeCom](/docs/chat-apps/wecom/) | `wecom` | Direct messages, group @mentions | An AI bot in API mode |
| [WeChat](/docs/chat-apps/weixin/) | `weixin` | Direct messages only | A WeChat account to scan a QR code |
| [Telegram](/docs/chat-apps/telegram/) | `telegram` | Direct messages and groups | A bot token from @BotFather |
| [Discord](/docs/chat-apps/discord/) | `discord` | DMs, server @mentions | A bot with Message Content Intent |
| [Linear](/docs/chat-apps/linear/) | `linear` | Labelled issues and their comments | A personal API key |

## Set up

1. Create the bot on the platform, as its page describes.
2. Install the plugin from **Settings → Plugins → Marketplace**, or run `openbee plugin install <id>`.
3. Fill in its settings and enable it, in the app or with `openbee plugin configure <id>`.

## Good to know

- No webhook or public address is needed.
- Set **Bot name** to the bot's display name, so OpenBee strips the @mention in groups.
- In a group, each member has their own conversation with Bee.
- The platform decides who can reach the bot. Telegram adds an auth code, Discord a server allow-list.
- If the platform rejects the credentials, the plugin stays failed until you fix its settings.
