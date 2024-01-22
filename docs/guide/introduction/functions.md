---
title: 功能特性
icon: enum
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 功能特性
  - dynamictp
sticky: false
star: true
---

### 功能特性

基于以上背景分析，我们对线程池 ThreadPoolExecutor 做一些扩展增强，主要实现以下目标

> 1. 实现对运行中线程池参数的动态修改，实时生效
>
> 2. 实时监控线程池的运行状态，触发设置的报警策略时报警，报警信息推送办公平台
>
> 3. 定时采集线程池指标数据，配合像 Grafana 这种可视化监控平台做大盘监控
> 
> 4. 集成常用三方中间件内部线程池管理


**经过多个版本的迭代，目前最新版本 v1.1.6.1 具有以下特性** ✅

- **代码零侵入**：我们改变了线程池以往的使用姿势，所有配置均放在配置中心，服务启动时会从配置中心拉取配置生成线程池对象放到 Spring 容器中，使用时直接从 Spring 容器中获取，对业务代码零侵入

- **通知告警**：提供多种通知告警维度（配置变更通知、活性报警、队列容量阈值报警、拒绝触发报警、任务执行或等待超时报警），触发配置阈值实时推送告警信息，已支持企微、钉钉、飞书、邮件、云之家报警，同时提供 SPI 接口可自定义扩展实现

- **运行监控**：定时采集线程池指标数据（20 多种指标，包含线程池维度、队列维度、任务维度、tps、tp99等），支持通过 MicroMeter、JsonLog、JMX 三种方式，也可以通过 SpringBoot Endpoint 端点实时获取最新指标数据，同时提供 SPI 接口可自定义扩展实现

- **任务增强**：提供任务包装功能（比 Spring 线程池任务包装更强大），实现 TaskWrapper 接口即可，如 MdcTaskWrapper、TtlTaskWrapper、SwTraceTaskWrapper、OpenTelemetryWrapper，可以支持线程池上下文信息传递

- **多配置中心支持**：支持多种主流配置中心，包括 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb，同时也提供 SPI 接口可自定义扩展实现

- **中间件线程池管理**：集成管理常用第三方组件的线程池，已集成 Tomcat、Jetty、Undertow、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 等组件的线程池管理（调参、监控报警）

- **轻量简单**：使用起来极其简单，引入相应依赖，接入只需简单 4 步就可完成，顺利 3 分钟搞定，相当丝滑

- **多模式**：提供了增强线程池 DtpExecutor，IO 密集型场景使用的线程池 EagerDtpExecutor，调度线程池 ScheduledDtpExecutor，有序线程池 OrderedDtpExecutor，可以根据业务场景选择合适的线程池

- **兼容性**：JUC 普通线程池和 Spring 中的 ThreadPoolTaskExecutor 也可以被框架管理，@Bean 定义时加 @DynamicTp 注解即可

- **可靠性**：依靠 Spring 生命周期管理，可以做到优雅关闭线程池，在 Spring 容器关闭前尽可能多的处理队列中的任务

- **高可扩展**：框架核心功能都提供 SPI 接口供用户自定义个性化实现（配置中心、配置文件解析、通知告警、监控数据采集、任务包装等等）

- **线上大规模应用**：参考[美团线程池实践](https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html)，美团内部已经有该理论成熟的应用经验
