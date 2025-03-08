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

::: tip 线程池模式
1. common 模式：对应线程池 DtpExecutor，DtpExecutor 是该框架的核心顶层设计类，其他类都继承自该类，common 模式是默认的线程池模式，适用于 cpu 密集型场景，当核心线程数满了优先放入队列等待

2. eager 模式：对应线程池 EagerDtpExecutor，eager 模式适用于 IO 密集型场景，在线程池没达到设置的最大值之前优先创建新线程执行任务而不是放入队列等待，比如 tomcat 线程池、dubbo 线程池都是采用这种模式

3. ordered 模式：对应线程池 OrderedDtpExecutor，适用于需要保证任务有序执行的场景，比如消费消息队列消息，需保证同一 uid 的消息按序消费

4. priority 模式：对应线程池 PriorityDtpExecutor，适用于需要根据任务优先级执行的场景，比如优先级高的任务先执行

5. scheduled 模式：对应线程池 ScheduledDtpExecutor，适用于定时任务场景
:::

### 模式设定

通过线程池配置中的 executorType 指定所用模式

```yaml 
dynamictp:   
  executors:                               # 动态线程池配置，都有默认值，采用默认值的可以不配置该项，减少配置量
    - threadPoolName: dtpExecutor1         # 线程池名称，必填
      executorType: common                 # 线程池类型 common、eager、ordered、scheduled、priority，默认 common
      corePoolSize: 10                     # 核心线程数，默认1
      maximumPoolSize: 20                  # 最大线程数，默认cpu核数
      queueCapacity: 4000                  # 队列容量，默认1024
      rejectedHandlerType: CallerRunsPolicy          # 拒绝策略，查看RejectedTypeEnum枚举类，默认AbortPolicy
      keepAliveTime: 60                              # 空闲线程等待超时时间，默认60
      threadNamePrefix: test                         # 线程名前缀，默认dtp
```