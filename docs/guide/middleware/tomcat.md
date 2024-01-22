---
title: tomcat 线程池管理
icon: Apache
order: 1
author: yanhom
date: 2023-02-11
tag:
  - tomcat
  - webserver
  - dynamictp
sticky: true
star: true
---

### 使用步骤

1. 引入下述依赖

```xml
   <dependency>
        <groupId>org.dromara.dynamictp</groupId>
        <artifactId>dynamic-tp-spring-boot-starter-adapter-webserver</artifactId>
        <version>1.1.6.1</version>
    </dependency>
```

2. 配置文件中配置 tomcat 线程池

```yaml
spring:
  dynamic:
    tp:
      enabledCollect: true          # 是否开启监控指标采集，默认false
      collectorTypes: micrometer    # 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer
      monitorInterval: 5            # 监控时间间隔（报警判断、指标采集），默认5s
      tomcatTp:                                    # tomcat webserver 线程池配置
        threadPoolAliasName: tomcat 线程池          # 线程池别名，可选
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
DynamicTp adapter, web server executor init end, executor: org.apache.tomcat.util.threads.ThreadPoolExecutor@114579e[Running, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0]
DynamicTp adapter [tomcatTp] refreshed end, corePoolSize: [10 => 100], maxPoolSize: [200 => 200], keepAliveTime: [60 => 60]
```

::: tip

1. 线程池名称：tomcatTp
2. tomcat 线程池享有动态调参、监控、通知告警完整的功能
3. tomcat 线程池并没用 juc 线程池，自己维护了一个 ThreadPoolExecutor
:::