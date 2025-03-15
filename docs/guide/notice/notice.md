---
title: 调参通知
icon: change
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 调参通知
  - dynamictp
sticky: true
star: true
---

### 调参通知

配置变更会推送通知消息，且会高亮变更的字段

<img src="/images/dynamictp/notice.jpg">

如果接入了 adapter 适配模块，服务启动时也会判断配置中心配置和相应组件线程池参数是否一致，不一致会用配置中心的配置进行刷新，同时会推送通知消息。

