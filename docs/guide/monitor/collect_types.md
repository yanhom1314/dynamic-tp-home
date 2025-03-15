---
title: 采集类型
icon: shujucaiji
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 采集类型
  - dynamictp
sticky: true
star: true
---

### 采集类型

目前框架提供了五种监控数据采集方式，通过 collectorTypes 属性配置监控指标采集类型，默认 Micrometer

::: tip 采集类型
- Logging：线程池指标数据会以 Json 格式输出到指定的日志文件里

- Internal_logging：线程池指标数据会以 Json 格式输出到项目日志文件里

- Micrometer：采用监控门面，通过引入相关 Micrometer 依赖采集到相应的存储平台里（如 Prometheus，InfluxDb...）

- Endpoint：暴露 Endpoint 端点，可以通过 http 方式实时获取指标数据

- JMX：通过 JMX 方式采集指标数据，来监视线程池的性能指标
:::

### micrometer

引入 prometheus（也可以用其他） 对应依赖，job 配置后 prometheus 管理台看到如下图所示，说明已经开始正常采集指标配置

![采集指标](/images/dynamictp/prometheus.png)

### logging

指标数据以 json 日志格式输出磁盘，地址 ${logPath}/dynamictp/${appName}.monitor.log

  ```bash
  {"datetime": "2022-04-17 11:35:15.208", "app_name": "dynamic-tp-nacos-cloud-demo", "thread_pool_metrics": {"activeCount":0,"queueSize":0,"largestPoolSize":0,"poolSize":0,"rejectHandlerName":"CallerRunsPolicy","queueCapacity":2000,"fair":false,"queueTimeoutCount":0,"rejectCount":0,"waitTaskCount":0,"taskCount":0,"runTimeoutCount":0,"queueRemainingCapacity":2000,"corePoolSize":4,"queueType":"VariableLinkedBlockingQueue","completedTaskCount":0,"dynamic":true,"maximumPoolSize":6,"poolName":"dtpExecutor1"}}
  {"datetime": "2022-04-17 11:35:15.209", "app_name": "dynamic-tp-nacos-cloud-demo", "thread_pool_metrics": {"activeCount":0,"queueSize":0,"largestPoolSize":0,"poolSize":0,"rejectHandlerName":"CallerRunsPolicy","queueCapacity":2000,"fair":false,"queueTimeoutCount":0,"rejectCount":0,"waitTaskCount":0,"taskCount":0,"runTimeoutCount":0,"queueRemainingCapacity":2000,"corePoolSize":2,"queueType":"TaskQueue","completedTaskCount":0,"dynamic":true,"maximumPoolSize":4,"poolName":"dtpExecutor2"}}
  {"datetime": "2022-04-17 11:35:15.209", "app_name": "dynamic-tp-nacos-cloud-demo", "thread_pool_metrics": {"activeCount":0,"queueSize":0,"largestPoolSize":0,"poolSize":0,"queueCapacity":2147483647,"fair":false,"queueTimeoutCount":0,"rejectCount":0,"waitTaskCount":0,"taskCount":0,"runTimeoutCount":0,"queueRemainingCapacity":2147483647,"corePoolSize":1,"queueType":"LinkedBlockingQueue","completedTaskCount":0,"dynamic":false,"maximumPoolSize":1,"poolName":"commonExecutor"}}
  {"datetime": "2022-04-17 11:35:15.209", "app_name": "dynamic-tp-nacos-cloud-demo", "thread_pool_metrics": {"activeCount":0,"queueSize":0,"largestPoolSize":100,"poolSize":100,"queueCapacity":2147483647,"fair":false,"queueTimeoutCount":0,"rejectCount":0,"waitTaskCount":0,"taskCount":177,"runTimeoutCount":0,"queueRemainingCapacity":2147483647,"corePoolSize":100,"queueType":"TaskQueue","completedTaskCount":177,"dynamic":false,"maximumPoolSize":400,"poolName":"tomcatWebServerTp"}}
  ```

### endpoint

暴露端点(dynamic-tp)，可以通过 http 方式实时请求

  ```json
  [
      {
          "pool_name": "remoting-call",
          "core_pool_size": 6,
          "maximum_pool_size": 12,
          "queue_type": "SynchronousQueue",
          "queue_capacity": 0,
          "queue_size": 0,
          "fair": false,
          "queue_remaining_capacity": 0,
          "active_count": 0,
          "task_count": 21760,
          "completed_task_count": 21760,
          "largest_pool_size": 12,
          "pool_size": 6,
          "wait_task_count": 0,
          "reject_count": 124662,
          "reject_handler_name": "CallerRunsPolicy"
      }
  ]
  ```

### JMX

通过 JMX 监控管理MXBean

![采集指标](/images/dynamictp/jmx.png)
