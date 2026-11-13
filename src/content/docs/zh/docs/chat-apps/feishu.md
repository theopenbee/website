---
title: 飞书 / Lark
description: 把飞书或 Lark 自建应用接入 OpenBee。
---

插件 ID `feishu`。Bee 回复单聊和群里的 @。

## 1. 创建应用

1. 在[飞书](https://open.feishu.cn/app)或 [Lark](https://open.larksuite.com/app) 开发者后台创建企业自建应用，添加 **机器人** 能力。
2. 开通权限 `im:message`、`im:message.p2p_msg:readonly`、`im:message.group_at_msg:readonly` 和 `im:resource`。
3. 在 **凭证与基础信息** 里复制 **App ID** 和 **App Secret**。

## 2. 接入 OpenBee

在 **设置 → 插件 → 插件市场** 里安装 **飞书**，填好以下配置并启用：

| 配置项 | 填写 |
| --- | --- |
| App ID、App Secret | 第 1 步获取 |
| 开放平台域名 | `feishu`（默认）或 `lark` |
| 机器人名称 | 机器人的显示名称，必须完全一致 |

## 3. 订阅消息

插件运行时再做这一步，因为后台会检查连接。

1. 在 **事件与回调** 里选择 **使用长连接接收事件**。
2. 添加事件 `im.message.receive_v1`。
3. 在 **回调配置** 里同样选择长连接，添加回调 `card.action.trigger`（卡片回传交互）。不加的话，点卡片上的按钮会报错。
4. 发布版本，把机器人拉进群。

回复支持 Markdown。机器人发送的文件上限 30 MB。
