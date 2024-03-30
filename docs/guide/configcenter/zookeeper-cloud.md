---
title: zookeeper-cloud 应用接入
icon: interact
order: 1
author: yanhom
date: 2022-06-11
tag:
  - zookeeper-cloud 应用接入
  - dynamictp
sticky: true
star: true
---

::: tip 

1. 动态线程池配置文件，建议单独开一个文件放到 zookeeper 中，方便管理

2. 如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好

3. 给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量

4. 集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈

5. zookpeer-cloud 应用只支持 properties 配置

6. 可以通过 `ZKUI` 工具快速导入下述格式的配置

:::

::: danger

1. 下述配置项的值都是随便填写的，请不要直接使用该值，根据自己项目做调整

:::

### maven 依赖

SpringBoot1x、2x 用此依赖

 ```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-cloud-starter-zookeeper</artifactId>
     <version>1.1.7</version>
 </dependency>
 ```
SpringBoot3x 用此依赖

 ```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-cloud-starter-zookeeper</artifactId>
     <version>1.1.7-3.x</version>
 </dependency>
 ```
### 线程池配置文件

#### properties 格式

```properties
spring.dynamic.tp.enabled=true
spring.dynamic.tp.enabledCollect=true
spring.dynamic.tp.collectorTypes=micrometer,logging
spring.dynamic.tp.logPath=/home/logs/dynamictp/user-center/
spring.dynamic.tp.monitorInterval=5
spring.dynamic.tp.platforms[0].platform=wechat
spring.dynamic.tp.platforms[0].platformId=1
spring.dynamic.tp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
spring.dynamic.tp.platforms[0].receivers=test1,test2
spring.dynamic.tp.platforms[1].platform=ding
spring.dynamic.tp.platforms[1].platformId=2
spring.dynamic.tp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
spring.dynamic.tp.platforms[1].secret=SECb5441fa6f375d5b9d21
spring.dynamic.tp.platforms[1].receivers=18888888888
spring.dynamic.tp.platforms[2].platform=lark
spring.dynamic.tp.platforms[2].platformId=3
spring.dynamic.tp.platforms[2].urlKey=0d944ae7-b24a-40
spring.dynamic.tp.platforms[2].secret=3a750012874bdac5c3d8b69c
spring.dynamic.tp.platforms[2].receivers=test1,test2
spring.dynamic.tp.platforms[3].platform=email
spring.dynamic.tp.platforms[3].platformId=4
spring.dynamic.tp.platforms[3].receivers=123456@qq.com,789789@qq.com
spring.dynamic.tp.executors[0].threadPoolName=dtpExecutor1
spring.dynamic.tp.executors[0].threadPoolAliasName=测试线程池
spring.dynamic.tp.executors[0].executorType=common
spring.dynamic.tp.executors[0].corePoolSize=6
spring.dynamic.tp.executors[0].maximumPoolSize=8
spring.dynamic.tp.executors[0].queueCapacity=2000
spring.dynamic.tp.executors[0].queueType=VariableLinkedBlockingQueue
spring.dynamic.tp.executors[0].rejectedHandlerType=CallerRunsPolicy
spring.dynamic.tp.executors[0].keepAliveTime=60
spring.dynamic.tp.executors[0].threadNamePrefix=test
spring.dynamic.tp.executors[0].allowCoreThreadTimeOut=false
spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown=true
spring.dynamic.tp.executors[0].awaitTerminationSeconds=5
spring.dynamic.tp.executors[0].preStartAllCoreThreads=false
spring.dynamic.tp.executors[0].runTimeout=200
spring.dynamic.tp.executors[0].queueTimeout=100
spring.dynamic.tp.executors[0].taskWrapperNames[0]=ttl
spring.dynamic.tp.executors[0].taskWrapperNames[1]=mdc
spring.dynamic.tp.executors[0].notifyEnabled=true
spring.dynamic.tp.executors[0].platformIds[0]=1
spring.dynamic.tp.executors[0].platformIds[1]=2
spring.dynamic.tp.executors[0].notifyItems[0].type=change
spring.dynamic.tp.executors[0].notifyItems[0].enabled=true
spring.dynamic.tp.executors[0].notifyItems[1].type=capacity
spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
spring.dynamic.tp.executors[0].notifyItems[1].threshold=80
spring.dynamic.tp.executors[0].notifyItems[1].platformIds[0]=2
spring.dynamic.tp.executors[0].notifyItems[1].interval=120
spring.dynamic.tp.executors[0].notifyItems[2].type=liveness
spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
spring.dynamic.tp.executors[0].notifyItems[2].threshold=80
spring.dynamic.tp.executors[0].notifyItems[3].type=reject
spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
spring.dynamic.tp.executors[0].notifyItems[3].threshold=100
spring.dynamic.tp.executors[0].notifyItems[4].type=run_timeout
spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
spring.dynamic.tp.executors[0].notifyItems[4].threshold=100
spring.dynamic.tp.executors[0].notifyItems[5].type=queue_timeout
spring.dynamic.tp.executors[0].notifyItems[5].enabled=true
spring.dynamic.tp.executors[0].notifyItems[5].threshold=100
```

#### 通过 `ZKUI` 工具导入 properties 格式

```properties
/configserver/dev/user-center,dev=spring.dynamic.tp.enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.enabledCollect=true
/configserver/dev/user-center,dev=spring.dynamic.tp.collectorTypes=micrometer,logging
/configserver/dev/user-center,dev=spring.dynamic.tp.logPath=/home/logs/dynamictp/user-center/
/configserver/dev/user-center,dev=spring.dynamic.tp.monitorInterval=5
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[0].platform=wechat
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[0].platformId=1
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[0].receivers=test1,test2
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].platform=ding
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].platformId=2
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].secret=SECb5441fa6f375d5b9d21
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].receivers=18888888888
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].platform=lark
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].platformId=3
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].urlKey=0d944ae7-b24a-40
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].secret=3a750012874bdac5c3d8b69c
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].receivers=test1,test2
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[3].platform=email
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[3].platformId=4
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[3].receivers=123456@qq.com,789789@qq.com
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].threadPoolName=dtpExecutor1
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].threadPoolAliasName=测试线程池
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].executorType=common
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].corePoolSize=6
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].maximumPoolSize=8
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].queueCapacity=2000
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].queueType=VariableLinkedBlockingQueue
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].rejectedHandlerType=CallerRunsPolicy
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].keepAliveTime=60
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].threadNamePrefix=test
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].allowCoreThreadTimeOut=false
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].awaitTerminationSeconds=5
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].preStartAllCoreThreads=false
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].runTimeout=200
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].queueTimeout=100
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].taskWrapperNames[0]=ttl
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].taskWrapperNames[1]=mdc
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyEnabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].platformIds[0]=1
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].platformIds[1]=2
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].type=change
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].type=capacity
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].threshold=80
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].platformIds[0]=2
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].interval=120
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[2].type=liveness
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[2].threshold=80
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[3].type=reject
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[3].threshold=100
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[4].type=run_timeout
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[4].threshold=100
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[5].type=queue_timeout
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[5].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[5].threshold=100
```
### bootstrap.yml 配置

```yaml
spring:
  application:
    name: user-center
  cloud:
    zookeeper:
      connect-string: 127.0.0.1:2181
      config:
        root: /configserver/dev
      enabled: true
  profiles:
    active: dev
```