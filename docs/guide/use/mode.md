---
title: 线程池模式
icon: select
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 线程池模式
  - dynamictp
sticky: true
star: true

---

### 线程池模式

目前框架提供如下 5 种线程池模式，可以根据业务场景选择合适的线程池模式

+ common 模式：对应线程池 DtpExecutor，DtpExecutor 是该框架的核心顶层设计类，其他类都继承自该类，common 模式是默认的线程池模式，适用于 cpu 密集型场景，当核心线程数满了优先放入队列等待

+ eager 模式：对应线程池 EagerDtpExecutor，eager 模式适用于 IO 密集型场景，在线程池没达到设置的最大值之前优先创建新线程执行任务而不是放入队列等待，比如 tomcat 线程池、dubbo 线程池都是采用这种模式

+ ordered 模式：对应线程池 OrderedDtpExecutor，适用于需要保证任务有序执行的场景，比如消费消息队列消息，需保证同一 uid 的消息按序消费

+ priority 模式：对应线程池 PriorityDtpExecutor，适用于需要根据任务优先级执行的场景，比如优先级高的任务先执行

+ scheduled 模式：对应线程池 ScheduledDtpExecutor，适用于定时任务场景

DtpExecutor 类图如下

<img :src="$withBase('/images/dynamictp/dtp-diagram.jpg')" style="zoom: 35%">