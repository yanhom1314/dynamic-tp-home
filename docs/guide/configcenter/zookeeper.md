---
title: zookeeper 应用接入
icon: Zookeeper
order: 1
author: yanhom
date: 2022-06-11
tag:
  - zookeeper 应用接入
  - dynamictp
sticky: true
star: true
---

::: tip 

- 动态线程池配置文件，建议单独开一个文件放到 zookeeper 中，方便管理

- 如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好

- 给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量

- 集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈。 

- zookpeer 支持 properties / json 两种配置 

- 可以通过 `ZKUI` 工具快速导入下述格式的配置

:::

::: danger

- 下述配置项的值都是随便填写的，请不要直接使用该值，根据自己项目做调整

:::

### maven 依赖

SpringBoot1x、2x 用此依赖

 ```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-zookeeper</artifactId>
     <version>1.2.1</version>
 </dependency>
 ```
SpringBoot3x 用此依赖

 ```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-zookeeper</artifactId>
     <version>1.2.1-x</version>
 </dependency>
 ```
### 线程池配置文件

#### properties 格式

```properties
dynamictp.enabled=true                                  # 是否启用 dynamictp，默认true
dynamictp.enabledCollect=true                           # 是否开启监控指标采集，默认true
dynamictp.collectorTypes=micrometer,logging             # 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer
dynamictp.logPath=/home/logs/dynamictp/user-center/    # 监控日志数据路径，默认 ${user.home}/logs，采集类型非logging不用配置
dynamictp.monitorInterval=5                             # 监控时间间隔（报警检测、指标采集），默认5s

# 告警渠道
dynamictp.platforms[0].platform=wechat                  # 第一个通知平台为微信
dynamictp.platforms[0].platformId=1                     # 平台id，自定义
dynamictp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c # webhook 中的 key
dynamictp.platforms[0].receivers=test1,test2            # 接受人企微账号

dynamictp.platforms[1].platform=ding                    # 第二个通知平台为钉钉
dynamictp.platforms[1].platformId=2                     # 平台id，自定义
dynamictp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a # webhook 中的 access_token
dynamictp.platforms[1].secret=SECb5441fa6f375d5b9d21    # 安全设置在验签模式下才的秘钥，非验签模式没有此值
dynamictp.platforms[1].receivers=18888888888            # 钉钉账号手机号

dynamictp.platforms[2].platform=lark                    # 第三个通知平台为飞书
dynamictp.platforms[2].platformId=3                     # 平台id，自定义
dynamictp.platforms[2].urlKey=0d944ae7-b24a-40          # webhook 中的 token
dynamictp.platforms[2].secret=3a750012874bdac5c3d8b69c  # 安全设置在签名校验模式下才的秘钥，非验签模式没有此值
dynamictp.platforms[2].receivers=test1,test2            # 接受人username / openid

dynamictp.platforms[3].platform=email                   # 第四个通知平台为邮件
dynamictp.platforms[3].platformId=4                     # 平台id，自定义
dynamictp.platforms[3].receivers=123456@qq.com,789789@qq.com # 收件人邮箱，多个用逗号隔开

# 全局配置    
dynamictp.globalExecutorProps.rejectedHandlerType=CallerRunsPolicy
dynamictp.globalExecutorProps.queueType=VariableLinkedBlockingQueue
dynamictp.globalExecutorProps.waitForTasksToCompleteOnShutdown=true
dynamictp.globalExecutorProps.awaitTerminationSeconds=3
dynamictp.globalExecutorProps.taskWrapperNames=swTrace,ttl,mdc
dynamictp.globalExecutorProps.queueTimeout=300
dynamictp.globalExecutorProps.runTimeout=300
# 核心参数变更通知
dynamictp.globalExecutorProps.notifyItems[0].type=change
dynamictp.globalExecutorProps.notifyItems[0].silencePeriod=120

# 队列容量使用率报警
dynamictp.globalExecutorProps.notifyItems[1].type=capacity
dynamictp.globalExecutorProps.notifyItems[1].threshold=80
dynamictp.globalExecutorProps.notifyItems[1].count=2
dynamictp.globalExecutorProps.notifyItems[1].period=30
dynamictp.globalExecutorProps.notifyItems[1].silencePeriod=0

# 线程池活性报警
dynamictp.globalExecutorProps.notifyItems[2].type=liveness
dynamictp.globalExecutorProps.notifyItems[2].threshold=80
dynamictp.globalExecutorProps.notifyItems[2].count=3
dynamictp.globalExecutorProps.notifyItems[2].period=30
dynamictp.globalExecutorProps.notifyItems[2].silencePeriod=0

# 拒绝策略触发报警
dynamictp.globalExecutorProps.notifyItems[3].type=reject
dynamictp.globalExecutorProps.notifyItems[3].count=1
dynamictp.globalExecutorProps.notifyItems[3].period=30
dynamictp.globalExecutorProps.notifyItems[3].silencePeriod=0

# 任务执行超时报警
dynamictp.globalExecutorProps.notifyItems[4].type=run_timeout
dynamictp.globalExecutorProps.notifyItems[4].count=20
dynamictp.globalExecutorProps.notifyItems[4].period=30
dynamictp.globalExecutorProps.notifyItems[4].silencePeriod=30

# 任务排队超时报警
dynamictp.globalExecutorProps.notifyItems[5].type=queue_timeout
dynamictp.globalExecutorProps.notifyItems[5].count=5
dynamictp.globalExecutorProps.notifyItems[5].period=30
dynamictp.globalExecutorProps.notifyItems[5].silencePeriod=0

# 线程池配置      
dynamictp.executors[0].threadPoolName=dtpExecutor1         # 线程池名称，必填
dynamictp.executors[0].threadPoolAliasName=测试线程池        # 线程池别名，可选
dynamictp.executors[0].executorType=common                 # 线程池类型 common、eager、ordered、scheduled、priority，默认 common
dynamictp.executors[0].corePoolSize=6                      # 核心线程数，默认1
dynamictp.executors[0].maximumPoolSize=8                   # 最大线程数，默认cpu核数
dynamictp.executors[0].queueCapacity=2000                  # 队列容量，默认1024
dynamictp.executors[0].queueType=VariableLinkedBlockingQueue         # 任务队列，查看源码QueueTypeEnum枚举类，默认VariableLinkedBlockingQueue
dynamictp.executors[0].rejectedHandlerType=CallerRunsPolicy          # 拒绝策略，查看RejectedTypeEnum枚举类，默认AbortPolicy
dynamictp.executors[0].keepAliveTime=60                              # 空闲线程等待超时时间，默认60
dynamictp.executors[0].threadNamePrefix=test                         # 线程名前缀，默认dtp
dynamictp.executors[0].allowCoreThreadTimeOut=false                  # 是否允许核心线程池超时，默认false
dynamictp.executors[0].waitForTasksToCompleteOnShutdown=true         # 参考spring线程池设计，优雅关闭线程池，默认true
dynamictp.executors[0].awaitTerminationSeconds=5                     # 优雅关闭线程池时，阻塞等待线程池中任务执行时间，默认3，单位（s）
dynamictp.executors[0].preStartAllCoreThreads=false                  # 是否预热所有核心线程，默认false
dynamictp.executors[0].runTimeout=200                                # 任务执行超时阈值，单位（ms），默认0（不统计）
dynamictp.executors[0].queueTimeout=100                              # 任务在队列等待超时阈值，单位（ms），默认0（不统计）
dynamictp.executors[0].taskWrapperNames=ttl,mdc                      # 任务包装器名称，继承TaskWrapper接口
dynamictp.executors[0].notifyEnabled=true                            # 是否开启报警，默认true
dynamictp.executors[0].platformIds=1,2
```

#### json 格式

```json
{
  "dynamictp": {
    "enabled": true,
    "enabledCollect": true,
    "collectorTypes": "micrometer,logging",
    "logPath": "/home/logs/dynamictp/user-center/",
    "monitorInterval": 5,
    "platforms": [
      {
        "platform": "wechat",
        "platformId": 1,
        "urlKey": "3a700-127-4bd-a798-c53d8b69c",
        "receivers": "test1,test2"
      },
      {
        "platform": "ding",
        "platformId": 2,
        "urlKey": "f80dad441fcd655438f4a08dcd6a",
        "secret": "SECb5441fa6f375d5b9d21",
        "receivers": "18888888888"
      },
      {
        "platform": "lark",
        "platformId": 3,
        "urlKey": "0d944ae7-b24a-40",
        "secret": "3a750012874bdac5c3d8b69c",
        "receivers": "test1,test2"
      },
      {
        "platform": "email",
        "platformId": 4,
        "receivers": "123456@qq.com,789789@qq.com"
      }
    ],
    "globalExecutorProps": {
      "rejectedHandlerType": "CallerRunsPolicy",
      "queueType": "VariableLinkedBlockingQueue",
      "waitForTasksToCompleteOnShutdown": true,
      "awaitTerminationSeconds": 3,
      "taskWrapperNames": [
        "swTrace",
        "ttl",
        "mdc"
      ],
      "queueTimeout": 300,
      "runTimeout": 300,
      "notifyItems": [
        {
          "type": "change",
          "silencePeriod": 120
        },
        {
          "type": "capacity",
          "threshold": 80,
          "count": 2,
          "period": 30,
          "silencePeriod": 0
        },
        {
          "type": "liveness",
          "threshold": 80,
          "count": 3,
          "period": 30,
          "silencePeriod": 0
        },
        {
          "type": "reject",
          "count": 1,
          "period": 30,
          "silencePeriod": 0
        },
        {
          "type": "run_timeout",
          "count": 20,
          "period": 30,
          "silencePeriod": 30
        },
        {
          "type": "queue_timeout",
          "count": 5,
          "period": 30,
          "silencePeriod": 0
        }
      ]
    },
    "executors": [
      {
        "threadPoolName": "dtpExecutor1",
        "threadPoolAliasName": "测试线程池",
        "executorType": "common",
        "corePoolSize": 6,
        "maximumPoolSize": 8,
        "queueCapacity": 2000,
        "queueType": "VariableLinkedBlockingQueue",
        "rejectedHandlerType": "CallerRunsPolicy",
        "keepAliveTime": 60,
        "threadNamePrefix": "test",
        "allowCoreThreadTimeOut": false,
        "waitForTasksToCompleteOnShutdown": true,
        "awaitTerminationSeconds": 5,
        "preStartAllCoreThreads": false,
        "runTimeout": 200,
        "queueTimeout": 100,
        "tryInterrupt": false,
        "taskWrapperNames": [
          "ttl",
          "mdc"
        ],
        "notifyEnabled": true,
        "platformIds": [
          1,
          2
        ]
      }
    ]
  }
}
```

#### 通过 `ZKUI` 工具导入 properties 格式

```properties
/configserver/dev/user-center=dynamictp.enabled=true
/configserver/dev/user-center=dynamictp.enabledCollect=true
/configserver/dev/user-center=dynamictp.collectorTypes=micrometer,logging
/configserver/dev/user-center=dynamictp.logPath=/home/logs/dynamictp/user-center/
/configserver/dev/user-center=dynamictp.monitorInterval=5
/configserver/dev/user-center=dynamictp.platforms[0].platform=wechat
/configserver/dev/user-center=dynamictp.platforms[0].platformId=1
/configserver/dev/user-center=dynamictp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
/configserver/dev/user-center=dynamictp.platforms[0].receivers=test1,test2
/configserver/dev/user-center=dynamictp.platforms[1].platform=ding
/configserver/dev/user-center=dynamictp.platforms[1].platformId=2
/configserver/dev/user-center=dynamictp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
/configserver/dev/user-center=dynamictp.platforms[1].secret=SECb5441fa6f375d5b9d21
/configserver/dev/user-center=dynamictp.platforms[1].receivers=18888888888
/configserver/dev/user-center=dynamictp.platforms[2].platform=lark
/configserver/dev/user-center=dynamictp.platforms[2].platformId=3
/configserver/dev/user-center=dynamictp.platforms[2].urlKey=0d944ae7-b24a-40
/configserver/dev/user-center=dynamictp.platforms[2].secret=3a750012874bdac5c3d8b69c
/configserver/dev/user-center=dynamictp.platforms[2].receivers=test1,test2
/configserver/dev/user-center=dynamictp.platforms[3].platform=email
/configserver/dev/user-center=dynamictp.platforms[3].platformId=4
/configserver/dev/user-center=dynamictp.platforms[3].receivers=123456@qq.com,789789@qq.com
/configserver/dev/user-center=dynamictp.executors[0].threadPoolName=dtpExecutor1
/configserver/dev/user-center=dynamictp.executors[0].threadPoolAliasName=测试线程池
/configserver/dev/user-center=dynamictp.executors[0].executorType=common
/configserver/dev/user-center=dynamictp.executors[0].corePoolSize=6
/configserver/dev/user-center=dynamictp.executors[0].maximumPoolSize=8
/configserver/dev/user-center=dynamictp.executors[0].queueCapacity=2000
/configserver/dev/user-center=dynamictp.executors[0].queueType=VariableLinkedBlockingQueue
/configserver/dev/user-center=dynamictp.executors[0].rejectedHandlerType=CallerRunsPolicy
/configserver/dev/user-center=dynamictp.executors[0].keepAliveTime=60
/configserver/dev/user-center=dynamictp.executors[0].threadNamePrefix=test
/configserver/dev/user-center=dynamictp.executors[0].allowCoreThreadTimeOut=false
/configserver/dev/user-center=dynamictp.executors[0].waitForTasksToCompleteOnShutdown=true
/configserver/dev/user-center=dynamictp.executors[0].awaitTerminationSeconds=5
/configserver/dev/user-center=dynamictp.executors[0].preStartAllCoreThreads=false
/configserver/dev/user-center=dynamictp.executors[0].runTimeout=200
/configserver/dev/user-center=dynamictp.executors[0].queueTimeout=100
/configserver/dev/user-center=dynamictp.executors[0].taskWrapperNames[0]=ttl
/configserver/dev/user-center=dynamictp.executors[0].taskWrapperNames[1]=mdc
/configserver/dev/user-center=dynamictp.executors[0].notifyEnabled=true
/configserver/dev/user-center=dynamictp.executors[0].platformIds[0]=1
/configserver/dev/user-center=dynamictp.executors[0].platformIds[1]=2
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[0].type=change
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[0].enabled=true
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[1].type=capacity
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[1].enabled=true
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[1].threshold=80
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[1].platformIds[0]=2
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[1].interval=120
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[2].type=liveness
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[2].enabled=true
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[2].threshold=80
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[3].type=reject
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[3].enabled=true
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[3].threshold=100
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[4].type=run_timeout
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[4].enabled=true
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[4].threshold=100
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[5].type=queue_timeout
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[5].enabled=true
/configserver/dev/user-center=dynamictp.executors[0].notifyItems[5].threshold=100
```

### application.yml 配置

```yaml
spring:
  application:
    name: user-center
  dynamic:
    tp:
      config-type: json               # zookeeper 支持 properties / json 配置
      zookeeper:
        zk-connect-str: 127.0.0.1:2181
        root-node: /configserver/dev
        node: dtp-group
        config-key: user-center-dtp-json   # json 格式会用到
```
