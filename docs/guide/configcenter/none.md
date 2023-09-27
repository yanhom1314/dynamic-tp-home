---
title: 无配置中心应用接入
icon: discover
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 无配置中心应用接入
  - dynamictp
sticky: true
star: true
---

无配置中心可以用此依赖，将配置放到本地配置文件中，无动态调参功能，但有监控告警功能

::: tip

1. 动态线程池配置文件，建议单独开一个配置文件，方便管理

2. 建议最好使用 yml 文件配置，可读性、可操作性更友好

3. 给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量

4. 集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈。

:::

::: danger

1. 下述配置项的值都是随便填写的，请不要直接使用该值，根据自己项目做调整

:::

### maven 依赖

 ```xml
     <dependency>
         <groupId>org.dromara.dynamictp</groupId>
         <artifactId>dynamic-tp-spring-boot-starter-common</artifactId>
         <version>1.1.4</version>
     </dependency>
 ```

### 线程池配置文件

#### yml 格式

```yaml
spring:
  dynamic:
    tp:
      enabled: true
      enabledCollect: true                    # 是否开启监控指标采集，默认false
      collectorTypes: micrometer,logging      # 监控数据采集器类型（logging | micrometer | internal_logging），默认micrometer
      logPath: /home/logs                     # 监控日志数据路径，默认 ${user.home}/logs，采集类型非logging不用配置
      monitorInterval: 5                      # 监控时间间隔（报警检测、指标采集），默认5s
      platforms:                              # 通知报警平台配置
        - platform: wechat
          platformId: 1                            # 平台id
          urlKey: 3a700-127-4bd-a798-c53d8b69c     # 替换
          receivers: test1,test2                   # 接受人企微名称
        - platform: ding
          platformId: 2                            # 平台id
          urlKey: f80dad441fcd655438f4a08dcd6a     # 替换
          secret: SECb5441fa6f375d5b9d21           # 替换，非sign模式可以没有此值
          receivers: 18888888888                   # 钉钉账号手机号
        - platform: lark
          platformId: 3                           
          urlKey: 0d944ae7-b24a-40                 # 替换
          receivers: test1,test2                   # 接受人飞书名称/openid
        - platform: email
          platformId: 4
          receivers: 123456@qq.com,789789@qq.com   # 收件人
      executors:                                   # 动态线程池配置，都有默认值，采用默认值的可以不配置该项，减少配置量
        - threadPoolName: dtpExecutor1
          threadPoolAliasName: 测试线程池             # 线程池别名
          executorType: common                     # 线程池类型common、eager：适用于io密集型
          corePoolSize: 6
          maximumPoolSize: 8
          queueCapacity: 200
          queueType: VariableLinkedBlockingQueue   # 任务队列，查看源码QueueTypeEnum枚举类
          rejectedHandlerType: CallerRunsPolicy    # 拒绝策略，查看RejectedTypeEnum枚举类
          keepAliveTime: 50
          allowCoreThreadTimeOut: false                  # 是否允许核心线程池超时
          threadNamePrefix: test                         # 线程名前缀
          waitForTasksToCompleteOnShutdown: false        # 参考spring线程池设计，优雅关闭线程池
          awaitTerminationSeconds: 5                     # 单位（s）
          preStartAllCoreThreads: false                  # 是否预热所有核心线程，默认false
          runTimeout: 200                                # 任务执行超时阈值，目前只做告警用，单位（ms）
          queueTimeout: 100                              # 任务在队列等待超时阈值，目前只做告警用，单位（ms）
          taskWrapperNames: ["ttl", "mdc"]               # 任务包装器名称，继承TaskWrapper接口
          notifyEnabled: true                            # 是否开启报警，默认true
          notifyItems:                     # 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）
            - type: capacity               # 报警项类型，查看源码 NotifyTypeEnum枚举类
              enabled: true
              threshold: 80                # 报警阈值
              platforms: [ding,wechat]     # 可选配置，不配置默认拿上层platforms配置的所以平台
              interval: 120                # 报警间隔（单位：s）
            - type: change
              enabled: true
            - type: liveness
              enabled: true
              threshold: 80
            - type: reject
              enabled: true
              threshold: 1
            - type: run_timeout
              enabled: true
              threshold: 1
            - type: queue_timeout
              enabled: true
              threshold: 1
```

#### properties 格式

```properties
spring.dynamic.tp.enabled=true
spring.dynamic.tp.enabledCollect=true
spring.dynamic.tp.collectorTypes=micrometer,logging
spring.dynamic.tp.logPath=/home/logs
spring.dynamic.tp.monitorInterval=5
spring.dynamic.tp.platforms[0].platform=wechat
spring.dynamic.tp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
spring.dynamic.tp.platforms[0].receivers=test1,test2
spring.dynamic.tp.platforms[1].platform=ding
spring.dynamic.tp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
spring.dynamic.tp.platforms[1].secret=SECb5441fa6f375d5b9d21
spring.dynamic.tp.platforms[1].receivers=18888888888
spring.dynamic.tp.platforms[2].platform=lark
spring.dynamic.tp.platforms[2].urlKey=0d944ae7-b24a-40
spring.dynamic.tp.platforms[2].receivers=test1,test2
spring.dynamic.tp.platforms[3].platform=email
spring.dynamic.tp.platforms[3].receivers=123456@qq.com,789789@qq.com
spring.dynamic.tp.executors[0].threadPoolName=dtpExecutor1
spring.dynamic.tp.executors[0].threadPoolAliasName=测试线程池
spring.dynamic.tp.executors[0].executorType=common
spring.dynamic.tp.executors[0].corePoolSize=6
spring.dynamic.tp.executors[0].maximumPoolSize=8
spring.dynamic.tp.executors[0].queueCapacity=200
spring.dynamic.tp.executors[0].queueType=VariableLinkedBlockingQueue
spring.dynamic.tp.executors[0].rejectedHandlerType=CallerRunsPolicy
spring.dynamic.tp.executors[0].keepAliveTime=50
spring.dynamic.tp.executors[0].allowCoreThreadTimeOut=false
spring.dynamic.tp.executors[0].threadNamePrefix=test
spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown=false
spring.dynamic.tp.executors[0].awaitTerminationSeconds=5
spring.dynamic.tp.executors[0].preStartAllCoreThreads=false
spring.dynamic.tp.executors[0].runTimeout=200
spring.dynamic.tp.executors[0].queueTimeout=100
spring.dynamic.tp.executors[0].taskWrapperNames[0]=ttl
spring.dynamic.tp.executors[0].taskWrapperNames[1]=mdc
spring.dynamic.tp.executors[0].notifyEnabled=true
spring.dynamic.tp.executors[0].notifyItems[0].type=capacity
spring.dynamic.tp.executors[0].notifyItems[0].enabled=true
spring.dynamic.tp.executors[0].notifyItems[0].threshold=80
spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]=ding
spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]=wechat
spring.dynamic.tp.executors[0].notifyItems[0].interval=120
spring.dynamic.tp.executors[0].notifyItems[1].type=change
spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
spring.dynamic.tp.executors[0].notifyItems[2].type=liveness
spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
spring.dynamic.tp.executors[0].notifyItems[2].threshold=80
spring.dynamic.tp.executors[0].notifyItems[3].type=reject
spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
spring.dynamic.tp.executors[0].notifyItems[3].threshold=1
spring.dynamic.tp.executors[0].notifyItems[4].type=run_timeout
spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
spring.dynamic.tp.executors[0].notifyItems[4].threshold=1
spring.dynamic.tp.executors[0].notifyItems[5].type=queue_timeout
spring.dynamic.tp.executors[0].notifyItems[5].enabled=true
spring.dynamic.tp.executors[0].notifyItems[5].threshold=1

```