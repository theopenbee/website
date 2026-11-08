---
title: Lark / Feishu
description: Connect a Lark or Feishu custom app to OpenBee.
---

Plugin ID `feishu`. Bee answers direct messages and group @mentions.

## 1. Create the app

1. In the [Feishu](https://open.feishu.cn/app) or [Lark](https://open.larksuite.com/app) developer console, create a custom app and add **Bot**.
2. Add the scopes `im:message`, `im:message.p2p_msg:readonly`, `im:message.group_at_msg:readonly` and `im:resource`.
3. Copy the **App ID** and **App Secret** from **Credentials & Basic Info**.

## 2. Connect OpenBee

Install **Feishu / Lark** from **Settings → Plugins → Marketplace**, fill in these settings and enable it:

| Setting | Value |
| --- | --- |
| App ID, App Secret | From step 1 |
| Open platform domain | `feishu` (default) or `lark` |
| Bot name | The bot's exact display name |

## 3. Subscribe to messages

Do this while the plugin is running, because the console checks the connection.

1. Under **Events & Callbacks**, choose **Receive events through persistent connection**.
2. Add the event `im.message.receive_v1`.
3. Publish a version and add the bot to your groups.

Replies render Markdown. The bot sends files up to 30 MB.
