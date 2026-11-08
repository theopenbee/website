---
title: Discord
description: 把 Discord 机器人接入 OpenBee。
---

插件 ID `discord`。Bee 回复私信，以及服务器里 @ 它或回复它的消息。

## 1. 创建机器人

1. 在 [Discord 开发者后台](https://discord.com/developers/applications)创建 **New Application**。
2. 在 **Bot** 页面点 **Reset Token** 复制 Token，并打开 **Message Content Intent**。
3. 在 **OAuth2 → URL Generator** 勾选 scope `bot`，以及权限 **View Channels**、**Send Messages**、**Read Message History** 和 **Attach Files**。打开生成的链接，把机器人加入服务器。

## 2. 接入 OpenBee

在 **设置 → 插件 → 插件市场** 里安装 **Discord**，填好以下配置并启用：

| 配置项 | 填写 |
| --- | --- |
| 机器人 Token | 第 2 步获取 |
| 允许的服务器 ID | 选填，每行一个。私信不受限制。 |

**机器人名称** 留空即可。超过 10 MB 的附件只会以文件名交给 Bee。
