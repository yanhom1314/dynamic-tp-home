---
title: 全局配置
icon: global
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

为了减少配置量，我们引入了全局配置功能，项目中可能会定义多个线程池，除了一些核心参数外，其他配置可能都是相同的，新增 globalExecutorProps 配置项，如果线程池某一配置项没配置，则从全局配置中取。

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
    notifyItems:                     # 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）
      - type: change                 # 线程池核心参数变更通知
        silencePeriod: 120           # 通知静默时间（单位：s），默认值1，0表示不静默
        
      - type: capacity               # 队列容量使用率，报警项类型，查看源码 NotifyTypeEnum枚举类
        threshold: 80                # 报警阈值，意思是队列使用率达到70%告警；默认值=70
        count: 2                     # 在一个统计周期内，如果触发阈值的数量达到 count，则触发报警；默认值=1
        period: 30                   # 报警统计周期（单位：s），默认值=120
        silencePeriod: 0             # 报警静默时间（单位：s），0表示不静默，默认值=120

      - type: liveness               # 线程池活性
        threshold: 80                # 报警阈值，意思是活性达到70%告警；默认值=70
        count: 3                     # 在一个统计周期内，如果触发阈值的数量达到 count，则触发报警；默认值=1
        period: 30                   # 报警统计周期（单位：s），默认值=120
        silencePeriod: 0             # 报警静默时间（单位：s），0表示不静默；默认值=120

      - type: reject                 # 触发任务拒绝告警
        count: 1                     # 在一个统计周期内，如果触发拒绝策略次数达到 count，则触发报警；默认值=1
        period: 30                   # 报警统计周期（单位：s），默认值=120
        silencePeriod: 0             # 报警静默时间（单位：s），0表示不静默；默认值=120

      - type: run_timeout            # 任务执行超时告警
        count: 20                    # 在一个统计周期内，如果执行超时次数达到 count，则触发报警；默认值=10
        period: 30                   # 报警统计周期（单位：s），默认值=120
        silencePeriod: 30            # 报警静默时间（单位：s），0表示不静默；默认值=120

      - type: queue_timeout          # 任务排队超时告警
        count: 5                     # 在一个统计周期内，如果排队超时次数达到 count，则触发报警；默认值=10
        period: 30                   # 报警统计周期（单位：s），默认值=120
        silencePeriod: 0             # 报警静默时间（单位：s），0表示不静默；默认值=120

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
      
    - threadPoolName: jucExecutor
      autoCreate: false
      corePoolSize: 20
      maximumPoolSize: 40
      queueCapacity: 1000
      threadNamePrefix: juc

    - threadPoolName: springTaskExecutor
      autoCreate: false
      corePoolSize: 20
      maximumPoolSize: 40
      queueCapacity: 1000
```
