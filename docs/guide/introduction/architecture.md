---
title: 架构设计
icon: structure
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 架构设计 
  - dynamictp
sticky: false
star: true
---

### 模块划分

+ 配置变更监听模块

::: tip 配置变更监听模块
1. 监听配置中心配置变动（已实现 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb）的监听器，可通过内部提供的 SPI 接口扩展其他实现

2. 解析配置文件内容，内置实现 yml、properties、json 配置文件的解析，可通过内部提供的 SPI 接口扩展其他实现

3. 通知线程池管理模块实现配置参数的刷新
:::

+ 线程池管理模块

::: tip 线程池管理模块
1. 服务启动时从配置中心拉取配置，生成线程池实例注册到内部线程池注册中心以及 Spring 容器中
 
2. 接受配置监听模块的刷新事件，实现线程池参数的刷新
 
3. 代码中通过依赖注入（推荐）或者 DtpRegistry.getDtpExecutor("name") 方法根据线程池名称来获取线程池实例
:::

+ 监控模块

实现监控指标采集以及输出，已支持以下三种方式，也可通过内部提供的 SPI 接口扩展其他实现

::: tip 监控模块
1. 提供定时任务采集 + 实时获取两种采集方式
 
2. 定时以 JsonLog 输出到磁盘指定目录，可以自己采集解析日志存储，结合 Grafana 做监控大盘

3. 定时将指标注册到 MicroMeter 中，引入 MicroMeter 相关采集器依赖（如 Prometheus），暴露相关端点，采集指标数据，结合 Grafana 做监控大盘

4. 暴露自定义 SpringBoot Endpoint 端点（dynamic-tp），通过 http 方式实时访问
:::

+ 通知告警模块

对接办公平台，实现通知告警功能，已支持钉钉、企微、飞书、邮件、云之家，可通过内部提供的 SPI 接口扩展其他实现，通知告警类型如下

::: tip 通知告警模块
1. 线程池主要参数变更通知

2. 阻塞队列容量达到设置的告警阈值

3. 线程池活性达到设置的告警阈值

4. 触发拒绝策略告警，包含 A、B 两项指标，A：该报警项前后两次报警区间累加值，B：该报警项累计值

5. 任务执行超时告警，包含 A、B 两项指标，A：该报警项前后两次报警区间累加值，B：该报警项累计值

6. 任务等待超时告警，包含 A、B 两项指标，A：该报警项前后两次报警区间累加值，B：该报警项累计值
 
7. 其中 2 3 两项是依赖监控模块的定时任务触发，4 5 6 三项是实时触发
:::

+ 三方组件线程池管理模块

利用 Spring 的事件机制和核心逻辑解耦

::: tip 三方包管理模块
1. 服务启动获取第三方中间件的线程池，被框架管理起来，已集成 Tomcat、Jetty、Undertow、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 等组件线程池

2. 接受参数刷新、指标收集、通知报警事件，进行相应的处理
:::

### 代码结构

以多 Module 的方式组织代码，提升代码的可维护性，方便扩展

![图片.png](/images/dynamictp/code.png)

::: tip 代码结构
1. adapter 模块：主要是适配一些第三方组件的线程池管理，目前已经实现的有 SpringBoot 内置的三大 web 容器（Tomcat、Jetty、Undertow）、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 的线程池管理，
后续会接入其他常用组件的线程池管理

2. common 模块：主要是一些各个模板都会用到的类，解耦依赖，复用代码，大家日常开发中可能也经常会这样组织代码

3. core 模块：该框架的核心代码都在这个模块里，包括动态调整参数，监控报警，以及串联整个项目流程都在此处

4. example 模块：提供一个简单使用示例，方便使用者参照

5. extension 模块：放一些扩展功能实现，比如基于 redis 的流控扩展、邮件发送扩展、skywalking 上下文传递扩展等

6. logging 模块：用于配置框架内部日志的输出，目前主要用于输出线程池监控指标数据到指定文件

7. starter 模块：提供独立功能模块的依赖封装、自动配置等相关

8. test 模块：主要是一些单元测试
:::

### 架构图

![技术架构](/images/dynamictp/arch.svg)