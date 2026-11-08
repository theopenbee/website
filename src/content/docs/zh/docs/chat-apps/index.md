---
title: 聊天平台
description: 在飞书、钉钉、企业微信、微信、Telegram、Discord 或 Linear 里和 Bee 对话。
sidebar:
  label: 概览
---

每个聊天平台都是一个渠道插件，可以同时启用多个。

| 平台 | 插件 ID | Bee 在哪里回复 | 需要准备 |
| --- | --- | --- | --- |
| [飞书 / Lark](/zh/docs/chat-apps/feishu/) | `feishu` | 单聊、群里 @ 它 | 带机器人能力的自建应用 |
| [钉钉](/zh/docs/chat-apps/dingtalk/) | `dingtalk` | 单聊、群里 @ 它 | Stream 模式机器人的企业内部应用 |
| [企业微信](/zh/docs/chat-apps/wecom/) | `wecom` | 单聊、群里 @ 它 | API 模式的智能机器人 |
| [微信](/zh/docs/chat-apps/weixin/) | `weixin` | 仅单聊 | 一个用来扫码的微信号 |
| [Telegram](/zh/docs/chat-apps/telegram/) | `telegram` | 私聊和群聊 | @BotFather 发的 Bot Token |
| [Discord](/zh/docs/chat-apps/discord/) | `discord` | 私信、服务器里 @ 它 | 开启 Message Content Intent 的机器人 |
| [Linear](/zh/docs/chat-apps/linear/) | `linear` | 带指定标签的 issue 及评论 | 个人 API Key |

## 接入步骤

1. 按各平台页面的说明创建机器人。
2. 在 **设置 → 插件 → 插件市场** 里安装插件，或执行 `openbee plugin install <插件 ID>`。
3. 填好配置并启用，在应用里操作或执行 `openbee plugin configure <插件 ID>`。

## 注意

- 不需要 Webhook，也不需要公网地址。
- **机器人名称** 填机器人的显示名称，群里的 @ 才会被去掉。
- 群里每个成员和 Bee 都是各自独立的对话。
- 谁能找到机器人由平台决定。Telegram 另有授权码，Discord 可以限定服务器。
- 平台拒绝凭证时，插件会保持失败状态，直到你改好配置。
