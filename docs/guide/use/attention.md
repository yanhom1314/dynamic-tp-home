---
title: 注意事项
icon: info
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 注意事项
  - dynamictp
sticky: true
star: true

---

### 内存泄露

当 dynamictp 跟一些 javaagent 组件一起使用时，如果这些 agent 会对线程池做增强，可能会导致内存泄露问题，
比如 skywalking 9.0 线程池插件会对提交的任务做增强，导致 dynamictp 在线程池生命周期中先后拿到的不是同一个对象，会导致
一些功能 Map 清理不掉，使用时需注意。

当有使用 skywalking 线程池插件时，引入以下依赖可解决这个问题，同时也会失去部分（tps、tp99）等统计功能

```xml
  <dependency>
      <groupId>org.dromara.dynamictp</groupId>
      <artifactId>dynamic-tp-extension-skywalking</artifactId>
      <version>1.1.6.1</version>
  </dependency>
 ```
其他线程池增强 agent 也可能会有类似问题，使用时需注意，可以通过设置下述环境变量来解决。

```java
System.setProperty(DTP_EXECUTE_ENHANCED, FALSE_STR);

```