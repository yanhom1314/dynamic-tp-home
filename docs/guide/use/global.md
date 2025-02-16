---
title: 全局配置
icon: discover
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 全局配置
  - dynamictp
sticky: true
star: true

---

### 全局配置

新增全局配置功能，减少配置量，项目中可能会定义多个线程池，除了一些核心参数外，其他配置可能都是相同的，新增 globalExecutorProps 配置项，如果线程池某一配置项没配置，则从全局配置中取。

优先级：线程池配置 > 全局配置 > 字段默认值

```yml
dynamictp:
  globalExecutorProps:
    rejectedHandlerType: CallerRunsPolicy
    queueType: VariableLinkedBlockingQueue
    waitForTasksToCompleteOnShutdown: true        
    awaitTerminationSeconds: 3   
    queueTimeout: 100    
    taskWrapperNames: ["ttl", "mdc", "swTrace"]
    notifyItems:                   
      - type: capacity              
        threshold: 80             
        interval: 300         
      - type: liveness
        threshold: 80
        interval: 300
      - type: change
        interval: 2
        clusterLimit: 1 
      - type: reject
        threshold: 1
        interval: 300
      - type: run_timeout
        threshold: 300
        interval: 300
      - type: queue_timeout
        threshold: 10
        interval: 300  

  undertowTp:                               
    corePoolSize: 100
    maximumPoolSize: 200
    keepAliveTime: 60

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

    - threadPoolName: springTaskExecutor
      autoCreate: false
      corePoolSize: 20
      maximumPoolSize: 40
      queueCapacity: 1000
```
