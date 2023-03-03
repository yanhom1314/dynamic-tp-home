---
title: etcd 应用接入
icon: install
order: 1
author: yanhom
date: 2022-06-11
category:
  - etcd 应用接入
  - dynamictp
tag:
  - etcd 应用接入
  - dynamictp
sticky: true
star: true
---

<div class="wwads-cn wwads-vertical wwads-sticky" data-id="212" style="max-width:180px"></div>

### maven 依赖

 ```xml
     <dependency>
         <groupId>cn.dynamictp</groupId>
         <artifactId>dynamic-tp-spring-boot-starter-etcd</artifactId>
         <version>1.1.0</version>
     </dependency>
 ```

### 线程池配置文件

#### yml 配置

建议单独开一个配置文件放在 etcd 中

#### json 配置

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
        key: /config/user-center
  application:
    name: user-center
```