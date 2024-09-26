---
title: 全局配置
icon: info
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 全局配置
  - dynamictp
sticky: true
star: true

---

### 内存泄露

新增全局配置功能，减少配置量，项目中可能会定义多个线程池，除了一些核心参数外，其他配置可能都是相同的，新增 globalExecutorProps 配置项，如果线程池某一配置项没配置，则从全局配置中取。

```yml
spring:
  dynamic:
    tp:
      globalExecutorProps:
        queueType: VariableLinkedBlockingQueue
        rejectedHandlerType: CallerRunsPolicy
        allowCoreThreadTimeOut: false
        awaitTerminationSeconds: 5
        taskWrapperNames: ["ttl", "mdc"]
        
      executors:
        - threadPoolName: dtpExecutor1
          executorType: eager
          corePoolSize: 10
          maximumPoolSize: 20
          queueCapacity: 2000
          threadNamePrefix: test
          
        - threadPoolName: dtpExecutor2
          corePoolSize: 20
          maximumPoolSize: 40
          queueCapacity: 1000
          threadNamePrefix: test2
```