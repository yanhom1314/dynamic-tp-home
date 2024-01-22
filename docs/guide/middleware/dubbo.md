---
title: dubbo 线程池管理
icon: selection
order: 1
author: yanhom
date: 2023-02-11
tag:
  - apache dubbo
  - alibaba dubbo
  - dubbox
  - dynamictp
sticky: true
star: true
---

你还在为 Dubbo 线程池耗尽而烦恼吗？😭😭😭

快快使用 DynamicTp 的三方中间件线程池管理功能吧，一定程度上能减少你的烦恼。😅😅😅

::: tip
同时支持以下三种 dubbo 版本

1. apache dubbo
2. alibaba dubbo
3. dubbox
:::

### 使用步骤

1. 引入下述依赖

```xml
   <dependency>
        <groupId>org.dromara.dynamictp</groupId>
        <artifactId>dynamic-tp-spring-boot-starter-adapter-dubbo</artifactId>
        <version>1.1.6.1</version>
    </dependency>
```

2. 配置文件中配置 dubbo 线程池

```yaml
spring:
  dynamic:
    tp:
      enabledCollect: true          # 是否开启监控指标采集，默认false
      collectorTypes: micrometer    # 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer
      monitorInterval: 5            # 监控时间间隔（报警判断、指标采集），默认5s
      dubboTp:                                     # dubbo 线程池配置
        - threadPoolName: dubboTp#20880            # 名称规则：dubboTp + "#" + 协议端口
          threadPoolAliasName: 测试线程池
          corePoolSize: 100
          maximumPoolSize: 200
          keepAliveTime: 60
          runTimeout: 200
          queueTimeout: 100
          platformIds: [1,2]               # 通知报警平台id，不配置默认拿上层platforms配置的所有平台
          notifyItems:                     # 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）
            - type: change
              enabled: true

            - type: capacity               # 队列容量使用率，报警项类型，查看源码 NotifyTypeEnum枚举类
              enabled: true
              threshold: 80                # 报警阈值，默认70，意思是队列使用率达到70%告警
              platformIds: [2]             # 可选配置，本配置优先级 > 所属线程池platformIds > 全局配置platforms
              interval: 120                # 报警间隔（单位：s），默认120

            - type: liveness               # 线程池活性
              enabled: true
              threshold: 80                # 报警阈值，默认 70，意思是活性达到70%告警

            - type: reject                 # 触发任务拒绝告警
              enabled: true
              threshold: 100               # 默认阈值10

            - type: run_timeout            # 任务执行超时告警
              enabled: true
              threshold: 100               # 默认阈值10

            - type: queue_timeout          # 任务排队超时告警
              enabled: true
              threshold: 100               # 默认阈值10
```

3. 启动日志

服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知

```bash
DynamicTp adapter, apache dubbo provider executors init end, executors: {dubboTp#20880=ExecutorWrapper(threadPoolName=dubboTp#20880, executor=java.util.concurrent.ThreadPoolExecutor@1b3960b[Running, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], threadPoolAliasName=null, notifyItems=[NotifyItem(platforms=null, enabled=true, type=liveness, threshold=70, interval=120, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=change, threshold=0, interval=1, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=capacity, threshold=70, interval=120, clusterLimit=1)], notifyEnabled=true)}
DynamicTp dubboTp adapter, [dubboTp#20880] refreshed end, changed keys: [keepAliveTime, corePoolSize], corePoolSize: [200 => 100], maxPoolSize: [200 => 200], keepAliveTime: [0 => 60]
```

::: tip

1. 线程池名称规则：dubboTp + "#" + 协议端口（可以在启动日志找输出的线程池名称）
2. dubbo 线程池享有动态调参、监控、通知告警完整的功能
:::