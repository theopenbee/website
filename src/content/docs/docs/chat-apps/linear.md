---
title: Linear
description: Let Bee work on labelled Linear issues and reply in comments.
---

Plugin ID `linear`. Bee works on issues that carry a chosen label and replies in their comments.

## 1. Prepare Linear

1. Create a personal API key at [linear.app/settings/api](https://linear.app/settings/api). Replies are posted as this user.
2. Create a label for Bee, such as `openbee`.

## 2. Connect OpenBee

Install **Linear** from **Settings → Plugins → Marketplace**, fill in these settings and enable it:

| Setting | Value |
| --- | --- |
| Linear API key | From step 1 |
| Gating label | `openbee` by default |
| Project allow-list | Required. Project names, one per line. |
| Workflow state allow-list | Required. State names such as `Todo` and `In Progress`. |

Names must match Linear exactly.

:::caution
On enable, every issue that already matches goes to Bee at once. Narrow the filters first.
:::

## How it works

- Each issue is one conversation. Every new comment is a new message, with no @mention needed.
- 👀 marks comments Bee has picked up. Bee's replies start with `[openbee-bot]`.
