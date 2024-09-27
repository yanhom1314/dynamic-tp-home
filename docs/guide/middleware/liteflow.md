---
title: liteflow 线程池管理
icon: mesh
order: 1
author: yanhom
date: 2023-02-11
tag:
  - liteflow
  - dynamictp
sticky: true
star: true
---

### 使用步骤

1. 引入下述依赖

SpringBoot1x、2x 用此依赖

```xml
<dependency>
    <groupId>org.dromara.dynamictp</groupId>
    <artifactId>dynamic-tp-spring-boot-starter-adapter-liteflow</artifactId>
    <version>1.1.9</version>
</dependency>
```

SpringBoot3x 用此依赖

 ```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-adapter-liteflow</artifactId>
     <version>1.1.9-3.x</version>
 </dependency>
 ```

2. 配置文件中配置 brpc 线程池

```yaml
spring:
  dynamic:
    tp:
      enabledCollect: true          # 是否开启监控指标采集，默认false
      collectorTypes: micrometer    # 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer
      monitorInterval: 5            # 监控时间间隔（报警判断、指标采集），默认5s
      liteflowTp:
        - threadPoolName: liteflowTp#LiteFlowDefaultWhenExecutorBuilder
          corePoolSize: 10
          maximumPoolSize: 20
          keepAliveTime: 60
```

3. 启动日志

服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知

```bash
DynamicTp adapter, liteflowTp init end, executors: {liteflowTp#LiteFlowDefaultWhenExecutorBuilder=ExecutorWrapper(threadPoolName=liteflowTp#LiteFlowDefaultWhenExecutorBuilder, executor=java.util.concurrent.ThreadPoolExecutor@162475a[Running, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], threadPoolAliasName=null, notifyItems=[NotifyItem(platforms=null, enabled=true, type=liveness, threshold=70, interval=120, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=change, threshold=0, interval=1, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=capacity, threshold=70, interval=120, clusterLimit=1)], notifyEnabled=true)}
DynamicTp adapter, [liteflowTp#LiteFlowDefaultWhenExecutorBuilder] refreshed end, changed keys: [corePoolSize, maxPoolSize], corePoolSize: [17 => 100], maxPoolSize: [500 => 200], keepAliveTime: [60 => 60]
```

::: tip

1. 线程池名称规则：liteflowTp + "#" + 线程池构建者的 Class 类名（可以在启动日志找输出的线程池名称）
2. liteflow 线程池享有动态调参、监控、通知告警完整的功能
:::
