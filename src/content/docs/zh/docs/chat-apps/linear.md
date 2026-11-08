---
title: Linear
description: 让 Bee 处理带指定标签的 Linear issue，并在评论里回复。
---

插件 ID `linear`。Bee 处理带有指定标签的 issue，并在评论里回复。

## 1. 准备 Linear

1. 在 [linear.app/settings/api](https://linear.app/settings/api) 创建个人 API Key，回复会以这个用户的身份发出。
2. 创建一个给 Bee 用的标签，例如 `openbee`。

## 2. 接入 OpenBee

在 **设置 → 插件 → 插件市场** 里安装 **Linear**，填好以下配置并启用：

| 配置项 | 填写 |
| --- | --- |
| Linear API Key | 第 1 步获取 |
| 触发标签 | 默认 `openbee` |
| 项目白名单 | 必填，项目名称，每行一个 |
| 状态白名单 | 必填，状态名称，例如 `Todo`、`In Progress` |

名称必须和 Linear 里完全一致。

:::caution
启用时，所有已经符合条件的 issue 会一次性交给 Bee。请先收紧筛选条件。
:::

## 工作方式

- 每个 issue 是一个对话，每条新评论是一条新消息，不需要 @。
- 👀 表示 Bee 已收到这条评论。Bee 的回复以 `[openbee-bot]` 开头。
