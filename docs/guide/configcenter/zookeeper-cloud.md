---
title: zookeeper-cloud 应用接入
icon: install
order: 1
author: yanhom
date: 2022-06-11
category:
  - zookeeper-cloud 应用接入
  - dynamictp
tag:
  - zookeeper-cloud 应用接入
  - dynamictp
sticky: true
star: true
---

<div class="wwads-cn wwads-vertical wwads-sticky" data-id="212" style="max-width:180px"></div>

### maven 依赖

 ```xml
     <dependency>
         <groupId>cn.dynamictp</groupId>
         <artifactId>dynamic-tp-spring-cloud-starter-zookeeper</artifactId>
         <version>1.1.0</version>
     </dependency>
 ```

### 线程池配置文件

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
spring.dynamic.tp.executors[0].notifyItems[1].type=liveness
spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
spring.dynamic.tp.executors[0].notifyItems[1].threshold=80
spring.dynamic.tp.executors[0].notifyItems[2].type=reject
spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
spring.dynamic.tp.executors[0].notifyItems[2].threshold=1
spring.dynamic.tp.executors[0].notifyItems[3].type=run_timeout
spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
spring.dynamic.tp.executors[0].notifyItems[3].threshold=1
spring.dynamic.tp.executors[0].notifyItems[4].type=queue_timeout
spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
spring.dynamic.tp.executors[0].notifyItems[4].threshold=1
```

#### 通过 `ZKUI` 工具导入

```text
/configserver/dev/user-center,dev=spring.dynamic.tp.enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.enabledCollect=true
/configserver/dev/user-center,dev=spring.dynamic.tp.collectorTypes=micrometer,logging
/configserver/dev/user-center,dev=spring.dynamic.tp.logPath=/home/logs
/configserver/dev/user-center,dev=spring.dynamic.tp.monitorInterval=5
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[0].platform=wechat
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[0].receivers=test1,test2
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].platform=ding
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].secret=SECb5441fa6f375d5b9d21
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[1].receivers=18888888888
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].platform=lark
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].urlKey=0d944ae7-b24a-40
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[2].receivers=test1,test2
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[3].platform=email
/configserver/dev/user-center,dev=spring.dynamic.tp.platforms[3].receivers=123456@qq.com,789789@qq.com
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].threadPoolName=dtpExecutor1
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].threadPoolAliasName=测试线程池
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].executorType=common
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].corePoolSize=6
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].maximumPoolSize=8
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].queueCapacity=200
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].queueType=VariableLinkedBlockingQueue
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].rejectedHandlerType=CallerRunsPolicy
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].keepAliveTime=50
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].allowCoreThreadTimeOut=false
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].threadNamePrefix=test
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown=false
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].awaitTerminationSeconds=5
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].preStartAllCoreThreads=false
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].runTimeout=200
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].queueTimeout=100
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].taskWrapperNames[0]=ttl
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].taskWrapperNames[1]=mdc
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyEnabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].type=capacity
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].threshold=80
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]=ding
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]=wechat
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[0].interval=120
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].type=liveness
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[1].threshold=80
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[2].type=reject
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[2].threshold=1
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[3].type=run_timeout
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[3].threshold=1
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[4].type=queue_timeout
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
/configserver/dev/user-center,dev=spring.dynamic.tp.executors[0].notifyItems[4].threshold=1
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

::: tip
1. zookpeer-cloud 应用只支持 properties 配置
2. 可以通过 `ZKUI` 工具快速导入上述格式的配置
:::