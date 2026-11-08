---
title: 钉钉
description: 把 Stream 模式的钉钉机器人接入 OpenBee。
---

插件 ID `dingtalk`。Bee 回复单聊和群里的 @。

## 1. 创建应用

1. 在[钉钉开发者后台](https://open-dev.dingtalk.com)创建企业内部应用。
2. 添加 **机器人** 能力，消息接收模式选 **Stream 模式**。
3. 开通机器人收发消息的权限，包括 `qyapi_robot_sendmsg`，定时任务的结果需要它。
4. 复制 **Client ID（AppKey）** 和 **Client Secret（AppSecret）**，发布版本，把机器人拉进群。

## 2. 接入 OpenBee

在 **设置 → 插件 → 插件市场** 里安装 **钉钉**，填好以下配置并启用：

| 配置项 | 填写 |
| --- | --- |
| Client ID、Client Secret | 第 4 步获取 |
| 机器人名称 | 机器人的名字 |

选填：配置 **ffprobe 路径** 和 **ffmpeg 路径** 后，机器人发送的语音和视频会带上时长和缩略图。

组织外的人发的消息会被忽略。机器人发送的文件上限 20 MB。
