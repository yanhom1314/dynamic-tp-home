---
title: 运行报警
icon: warn
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 运行报警
  - dynamictp
sticky: true
star: true
---

### 告警类型

框架目前提供以下告警功能，每一个告警项都可以独立配置是否开启、告警阈值、告警间隔时间、平台等，具体代码请看 core 模块 notifier 包，
告警信息同时会高亮与该告警项相关的字段。

+ 线程池活跃度告警

::: tip 线程池活跃度告警
- 活跃度 = (activeCount / maximumPoolSize) * 100

- 比如 threshold 阈值配置 80，表示活跃度达到 80% 时触发告警

- 服务启动后会开启一个定时监控任务，每隔一定时间（可配置）去计算线程池的活跃度，达到配置的 threshold 阈值后会触发一次告警，告警间隔内多次触发不会发送告警通知

<img src="/images/dynamictp/liveness.png" width="50%" height="50%">
:::

+ 队列容量告警

::: tip 队列容量告警
- 容量使用率 = (queueSize / queueCapacity) * 100

- 比如 threshold 阈值配置 80，表示队列容量使用率达到 80% 时触发告警

- 服务启动后会开启一个定时监控任务，每隔一定时间去计算任务队列的使用率，达到配置的 threshold 阈值后会触发一次告警，告警间隔内多次触发不会发送告警通知

<img src="/images/dynamictp/capacity.png" width="50%" height="50%">
:::

+ 拒绝策略告警

::: tip 拒绝策略告警
- 线程池线程数达到配置的最大线程数，且任务队列已满，再提交任务会触发拒绝策略
 
- DtpExecutor 线程池用到的 RejectedExecutionHandler 是经过动态代理包装过的，
 在执行具体的拒绝策略之前会执行 RejectedAware 类 beforeReject() 方法

- beforeReject 方法会去做拒绝数量累加（总数值累加、周期值累加）。且判断如果周期累计值达到配置的阈值，
 则会触发一次告警通知（同时重置周期累加值为 0 及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知

<img src="/images/dynamictp/reject.png" width="50%" height="50%">
:::

+ 任务排队超时告警

::: tip 任务排队超时告警
- 重写 ThreadPoolExecutor 的 execute() 方法和 beforeExecute() 方法，采用时间轮处理任务排队超时逻辑

- 任务提交时用 queueTimeout 开启一个处理排队超时的 TimerTask，排队超时后执行 TimerTask 的 run 方法，累加排队超时任务数量（总数值累加、周期值累加）。 且判断如果周期累计值达到配置的阈值，
 则会触发一次告警通知（同时重置周期累加值为 0 及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知

<img src="/images/dynamictp/queue_timeout.png" width="50%" height="50%">
:::

+ 任务执行超时告警

::: tip 任务执行超时告警
- 重写 ThreadPoolExecutor 的 beforeExecute() 和 afterExecute() 方法，采用时间轮处理任务执行超时逻辑

- beforeExecute() 阶段根据 runTimeout 开启一个处理执行超时的 TimerTask，超时后执行 TimerTask 的 run 方法，
 累加执行超时任务数量（总数值累加、周期值累加）。且判断如果周期累计值达到配置的阈值，则会触发一次告警通知
（同时重置周期累加值为 0 及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知

<img src="/images/dynamictp/run_timeout.jpg" width="50%" height="50%">
:::
