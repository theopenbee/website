---
title: WeChat
description: Connect WeChat to OpenBee by scanning a QR code.
---

Plugin ID `weixin`. Bee answers direct messages only. No developer account is needed.

## Connect OpenBee

1. Install **WeChat** from **Settings → Plugins → Marketplace**.
2. On the plugin page, start **WeChat QR code login**, scan the code with WeChat and confirm. If WeChat shows a number, type it in.
3. Enable the plugin.

From the command line, `openbee plugin configure weixin` runs the same login. Run it on the OpenBee host.

## Limits

- **WeChat allows at most 10 bot messages per message you send.** Long replies split into several, and scheduled results count too. After that, sending fails until you write again.
- If the login expires, scan again on the plugin page.
