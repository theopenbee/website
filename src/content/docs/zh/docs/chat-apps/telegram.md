---
title: Telegram
description: 把 Telegram 机器人接入 OpenBee。
---

插件 ID `telegram`。Bee 回复私聊和群聊。

## 1. 创建机器人

1. 给 [@BotFather](https://t.me/BotFather) 发送 `/newbot`，复制 Token。
2. 群聊选做：发送 `/setprivacy` 并选 **Disable**，让机器人能看到所有消息，然后把它重新拉进群。

## 2. 接入 OpenBee

在 **设置 → 插件 → 插件市场** 里安装 **Telegram**，填好以下配置并启用：

| 配置项 | 填写 |
| --- | --- |
| Bot Token | @BotFather 提供 |
| 授权码 | 会自动生成一个随机码。每个人第一次使用前发送 `/auth <授权码>`。清空则任何人都能用。 |
| 机器人名称 | 机器人的用户名 |

回复是纯文本。插件支持 `HTTPS_PROXY` 代理。
