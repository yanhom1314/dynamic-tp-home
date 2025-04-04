---
title: okhttp3 线程池管理
icon: http
order: 1
author: yanhom
date: 2023-02-11
tag:
  - okhttp3
  - httpclient
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
    <artifactId>dynamic-tp-spring-boot-starter-adapter-okhttp3</artifactId>
    <version>1.2.0</version>
</dependency>
```
SpringBoot3x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-adapter-okhttp3</artifactId>
     <version>1.2.0-x</version>
 </dependency>
 ```

2. 配置文件中配置 okhttp3 线程池

```yaml
dynamictp:
  enabledCollect: true          # 是否开启监控指标采集，默认false
  collectorTypes: micrometer    # 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer
  monitorInterval: 5            # 监控时间间隔（报警判断、指标采集），默认5s
  okhttp3Tp:                                    # okhttp3 线程池配置
    - threadPoolName: okHttpClientTp
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
DynamicTp adapter, okhttp3 executors init end, executors: {okHttpClientTp=ExecutorWrapper(threadPoolName=okHttpClientTp, executor=java.util.concurrent.ThreadPoolExecutor@f336fd[Running, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], threadPoolAliasName=null, notifyItems=[NotifyItem(platforms=null, enabled=true, type=liveness, threshold=70, interval=120, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=change, threshold=0, interval=1, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=capacity, threshold=70, interval=120, clusterLimit=1)], notifyEnabled=true)}
DynamicTp okhttp3Tp adapter, [okHttpClientTp] refreshed end, changed keys: [corePoolSize, maxPoolSize], corePoolSize: [0 => 100], maxPoolSize: [2147483647 => 200], keepAliveTime: [60 => 60]
```

::: tip

- 服务启动会自动从 Spring 容器中获取所有被 Spring 容器管理的 OkHttpClient 实例 

- 线程池名称规则：beanName + Tp（可以在启动日志找输出的线程池名称）

- okhttp3 线程池只在异步请求时生效，同步请求不会使用 okhttp3 线程池

- okhttp3 线程池享有动态调参、监控、通知告警完整的功能

- 队列大小不能调整
:::