---
title: DingTalk
description: Connect a DingTalk robot in Stream mode to OpenBee.
---

Plugin ID `dingtalk`. Bee answers direct messages and group @mentions.

## 1. Create the app

1. In the [DingTalk developer console](https://open-dev.dingtalk.com), create an internal enterprise app.
2. Add the **Robot** capability with **Stream mode**.
3. Grant the robot's messaging permissions, including `qyapi_robot_sendmsg`. Scheduled results need it.
4. Copy the **Client ID (AppKey)** and **Client Secret (AppSecret)**, publish a version and add the robot to a group.

## 2. Connect OpenBee

Install **DingTalk** from **Settings → Plugins → Marketplace**, fill in these settings and enable it:

| Setting | Value |
| --- | --- |
| Client ID, Client Secret | From step 4 |
| Bot name | The robot's name |

Optional: point **ffprobe path** and **ffmpeg path** at those tools to give the robot's voice and video files a length and a thumbnail.

People outside your organization are ignored. The robot sends files up to 20 MB.
