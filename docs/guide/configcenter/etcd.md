---
title: etcd 应用接入
icon: contrast
order: 1
author: yanhom
date: 2022-06-11
tag:
  - etcd 应用接入
  - dynamictp
sticky: true
star: true
---

::: tip

1. 动态线程池配置文件，建议单独开一个文件放到配置中心 etcd

2. 如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好

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
         <artifactId>dynamic-tp-spring-boot-starter-etcd</artifactId>
         <version>1.1.3</version>
     </dependency>
 ```

### 线程池配置文件

#### properties 格式

```properties
config/user-center/spring.dynamic.tp.enabled=true
config/user-center/spring.dynamic.tp.enabledCollect=true
config/user-center/spring.dynamic.tp.collectorTypes=micrometer,logging
config/user-center/spring.dynamic.tp.logPath=/home/logs
config/user-center/spring.dynamic.tp.monitorInterval=5
config/user-center/spring.dynamic.tp.platforms[0].platform=wechat
config/user-center/spring.dynamic.tp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
config/user-center/spring.dynamic.tp.platforms[0].receivers=test1,test2
config/user-center/spring.dynamic.tp.platforms[1].platform=ding
config/user-center/spring.dynamic.tp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
config/user-center/spring.dynamic.tp.platforms[1].secret=SECb5441fa6f375d5b9d21
config/user-center/spring.dynamic.tp.platforms[1].receivers=18888888888
config/user-center/spring.dynamic.tp.platforms[2].platform=lark
config/user-center/spring.dynamic.tp.platforms[2].urlKey=0d944ae7-b24a-40
config/user-center/spring.dynamic.tp.platforms[2].receivers=test1,test2
config/user-center/spring.dynamic.tp.platforms[3].platform=email
config/user-center/spring.dynamic.tp.platforms[3].receivers=123456@qq.com,789789@qq.com
config/user-center/spring.dynamic.tp.executors[0].threadPoolName=dtpExecutor1
config/user-center/spring.dynamic.tp.executors[0].threadPoolAliasName=测试线程池
config/user-center/spring.dynamic.tp.executors[0].executorType=common
config/user-center/spring.dynamic.tp.executors[0].corePoolSize=6
config/user-center/spring.dynamic.tp.executors[0].maximumPoolSize=8
config/user-center/spring.dynamic.tp.executors[0].queueCapacity=200
config/user-center/spring.dynamic.tp.executors[0].queueType=VariableLinkedBlockingQueue
config/user-center/spring.dynamic.tp.executors[0].rejectedHandlerType=CallerRunsPolicy
config/user-center/spring.dynamic.tp.executors[0].keepAliveTime=50
config/user-center/spring.dynamic.tp.executors[0].allowCoreThreadTimeOut=false
config/user-center/spring.dynamic.tp.executors[0].threadNamePrefix=test
config/user-center/spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown=false
config/user-center/spring.dynamic.tp.executors[0].awaitTerminationSeconds=5
config/user-center/spring.dynamic.tp.executors[0].preStartAllCoreThreads=false
config/user-center/spring.dynamic.tp.executors[0].runTimeout=200
config/user-center/spring.dynamic.tp.executors[0].queueTimeout=100
config/user-center/spring.dynamic.tp.executors[0].taskWrapperNames[0]=ttl
config/user-center/spring.dynamic.tp.executors[0].taskWrapperNames[1]=mdc
config/user-center/spring.dynamic.tp.executors[0].notifyEnabled=true
config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].type=capacity
config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].enabled=true
config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].threshold=80
config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]=ding
config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]=wechat
config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].interval=120
config/user-center/spring.dynamic.tp.executors[0].notifyItems[1].type=liveness
config/user-center/spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
config/user-center/spring.dynamic.tp.executors[0].notifyItems[1].threshold=80
config/user-center/spring.dynamic.tp.executors[0].notifyItems[2].type=reject
config/user-center/spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
config/user-center/spring.dynamic.tp.executors[0].notifyItems[2].threshold=1
config/user-center/spring.dynamic.tp.executors[0].notifyItems[3].type=run_timeout
config/user-center/spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
config/user-center/spring.dynamic.tp.executors[0].notifyItems[3].threshold=1
config/user-center/spring.dynamic.tp.executors[0].notifyItems[4].type=queue_timeout
config/user-center/spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
config/user-center/spring.dynamic.tp.executors[0].notifyItems[4].threshold=1
```
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/559df634c7c84aed99da4e345c8d3f45~tplv-k3u1fbpfcp-zoom-1.image)

#### json 格式

```json
{
    "spring": {
        "dynamic": {
            "tp": {
                "enabled": true,
                "enabledCollect": true,
                "collectorTypes": "micrometer,logging",
                "logPath": "/home/logs",
                "monitorInterval": 5,
                "platforms": [
                    {
                        "platform": "wechat",
                        "urlKey": "3a700-127-4bd-a798-c53d8b69c",
                        "receivers": "test1,test2"
                    },
                    {
                        "platform": "ding",
                        "urlKey": "f80dad441fcd655438f4a08dcd6a",
                        "secret": "SECb5441fa6f375d5b9d21",
                        "receivers": 18888888888
                    },
                    {
                        "platform": "lark",
                        "urlKey": "0d944ae7-b24a-40",
                        "receivers": "test1,test2"
                    },
                    {
                        "platform": "email",
                        "receivers": "123456@qq.com,789789@qq.com"
                    }
                ],
                "executors": [
                    {
                        "threadPoolName": "dtpExecutor1",
                        "threadPoolAliasName": "测试线程池",
                        "executorType": "common",
                        "corePoolSize": 6,
                        "maximumPoolSize": 8,
                        "queueCapacity": 200,
                        "queueType": "VariableLinkedBlockingQueue",
                        "rejectedHandlerType": "CallerRunsPolicy",
                        "keepAliveTime": 50,
                        "allowCoreThreadTimeOut": false,
                        "threadNamePrefix": "test",
                        "waitForTasksToCompleteOnShutdown": false,
                        "awaitTerminationSeconds": 5,
                        "preStartAllCoreThreads": false,
                        "runTimeout": 200,
                        "queueTimeout": 100,
                        "taskWrapperNames": [
                            "ttl",
                            "mdc"
                        ],
                        "notifyEnabled": true,
                        "notifyItems": [
                            {
                                "type": "capacity",
                                "enabled": true,
                                "threshold": 80,
                                "platforms": [
                                    "ding",
                                    "wechat"
                                ],
                                "interval": 120
                            },
                            {
                                "type": "liveness",
                                "enabled": true,
                                "threshold": 80
                            },
                            {
                                "type": "reject",
                                "enabled": true,
                                "threshold": 1
                            },
                            {
                                "type": "run_timeout",
                                "enabled": true,
                                "threshold": 1
                            },
                            {
                                "type": "queue_timeout",
                                "enabled": true,
                                "threshold": 1
                            }
                        ]
                    }
                ]
            }
        }
    }
}
```

### application.yml 配置

```yaml
spring:
  dynamic:
    tp:
      config-type: properties
      etcd:
        endpoints: http://127.0.0.1:2379
        auth-enable: false
        key: /config/user-center-dtp
  application:
    name: user-center
```