---
title: Discord
description: Connect a Discord bot to OpenBee.
---

Plugin ID `discord`. Bee answers DMs and server messages that @mention the bot or reply to it.

## 1. Create the bot

1. In the [Discord Developer Portal](https://discord.com/developers/applications), create a **New Application**.
2. Under **Bot**, choose **Reset Token**, copy the token and turn on **Message Content Intent**.
3. Under **OAuth2 → URL Generator**, pick the scope `bot` and the permissions **View Channels**, **Send Messages**, **Read Message History** and **Attach Files**. Open the URL to add the bot to your server.

## 2. Connect OpenBee

Install **Discord** from **Settings → Plugins → Marketplace**, fill in these settings and enable it:

| Setting | Value |
| --- | --- |
| Bot token | From step 2 |
| Allowed server IDs | Optional, one per line. DMs always work. |

Leave **Bot name** empty. Attachments over 10 MB reach Bee as their file name only.
