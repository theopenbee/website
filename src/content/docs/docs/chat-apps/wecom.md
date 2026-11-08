---
title: WeCom
description: Connect a WeCom AI bot to OpenBee.
---

Plugin ID `wecom`. Bee answers direct messages and group @mentions.

## 1. Create the bot

In the WeCom admin console, open **AI bot**, create a bot in **API mode** with a **long connection**, and copy its **Bot ID** and **Secret**.

## 2. Connect OpenBee

Install **WeCom** from **Settings → Plugins → Marketplace**, fill in these settings and enable it:

| Setting | Value |
| --- | --- |
| Bot ID, Secret | From step 1 |
| Bot name | The bot's name in WeCom |

One bot serves one OpenBee server: a second server using the same bot takes it over. The bot sends files up to 20 MB.
