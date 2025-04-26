---
title: 发版记录
icon: banbenzi
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 发版记录
  - dynamictp
sticky: false
star: true
---

::: tip
## v1.2.1 发版记录

### v1.2.1 升级注意事项

#### DtpEndpoint 端点名称修改

实时指标监控端点名称从 `dynamic-tp` 修改为 `dynamictp`，消除 springboot 的非法字符 warn 警告。

#### 告警规则重构

v1.2.1 之前版本里告警规则比较简单，通过 `threshold` 和 `interval` 字段来控制。

```yml
dynamictp:
  # 全局配置
  globalExecutorProps:                        # 线程池配置 > 全局配置 > 字段默认值
    rejectedHandlerType: CallerRunsPolicy
    queueType: VariableLinkedBlockingQueue
    waitForTasksToCompleteOnShutdown: true
    awaitTerminationSeconds: 3
    taskWrapperNames: ["swTrace", "ttl", "mdc"]
    queueTimeout: 300
    runTimeout: 300
    notifyItems:                     # 报警项，不配置自动会按默认值（查看源码NotifyItem类）配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）
      - type: change
        interval: 10

      - type: capacity               # 队列容量使用率，报警项类型，查看源码 NotifyTypeEnum枚举类
        threshold: 80                # 报警阈值，默认70，意思是队列使用率达到70%告警
        interval: 120                # 报警间隔（单位：s），默认120

      - type: liveness               # 线程池活性
        threshold: 80                # 报警阈值，默认 70，意思是活性达到70%告警
        interval: 120

      - type: reject                 # 触发任务拒绝告警
        threshold: 1               # 默认阈值10
        interval: 120

      - type: run_timeout            # 任务执行超时告警
        threshold: 100               # 默认阈值10
        interval: 120

      - type: queue_timeout          # 任务排队超时告警
        threshold: 100               # 默认阈值10
        interval: 120
```

比如对于 capacity 项：**语义为当线程池队列容量达到 80%时触发一次告警，告警后 120s 内再产生的报警保持静默。**

设计的比较草率，有几个问题：

- 数据统计需要限定在一定的时间窗口内，过期需重新计数，此处 interval 只用在了静默处理上，没统计窗口的概念

- 只要阈值达到了就会产生一次报警，更好的做法应该是达到阈值的次数达到某个值才算一个异常，触发一次报警

- 无效告警多，静默不能关闭

在 v1.2.1 版本里，我们重构了告警规则，引入 `threshold`、`count`、`period`、`silencePeriod` 四个配置字段。

目前的告警语义：**对于某一个告警项，在一定的统计窗口（period）内，达到阈值（threshold）的次数达到某个值（count）时才算为一个有效的异常，触发一次报警。告警后（silencePeriod）内再产生的报警保持静默，且静默可以关闭。**

```yml
dynamictp:
  globalExecutorProps:
    rejectedHandlerType: CallerRunsPolicy
    queueType: VariableLinkedBlockingQueue
    waitForTasksToCompleteOnShutdown: true
    awaitTerminationSeconds: 3
    taskWrapperNames: ["swTrace", "ttl", "mdc"]
    queueTimeout: 300
    runTimeout: 300
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
```

#### Feature

- 新增 jmh benchmark 基准测试模块。

```xml
https://github.com/dromara/dynamic-tp/pull/545
```

#### Refactor

- 移除 cglib，动态代理采用 bytebuddy 重构。

```xml
https://github.com/dromara/dynamic-tp/pull/538
```

- 重构告警规则，减少无用告警，告警更可控。

```xml
https://github.com/dromara/dynamic-tp/pull/553
```

- 实时监控指标暴露的端点名称从 dynamic-tp 修改为 dynamictp，消除 springboot 的 warn 警告

```xml
https://github.com/dromara/dynamic-tp/pull/542
```

#### Bugfix

- 修复 springboot devtool restart 后 DtpMonitor 中线程池被关闭报错拒绝任务问题。

```xml
https://github.com/dromara/dynamic-tp/pull/529
```

- 修复如果未引入 jackson-datatype-jsr310 会导致 jackson 异常并且无提示问题。

```xml
https://github.com/dromara/dynamic-tp/pull/534
```

- 优化潜在的 NPE 异常。

```xml
https://github.com/dromara/dynamic-tp/pull/537
```

#### Dependency

- sofa-rpc 升级，5.9.1 -> 5.12.0
- apache-dubbo 升级，3.0.7 -> 3.0.14
- apollo 升级，1.5.0 -> 2.0.0
- skywalking 升级，8.11.0 -> 9.1.0
- tars 升级，1.7.2 -> 1.7.3
:::

::: tip
## v1.2.0 发版记录

v1.1.9 及之前版本核心模块强依赖 Spring，代码中用到了不少 Spring 的特性，这样不利于其他非 Spring 项目的接入集成。

v1.2.0 是一个大版本，主要功能是对 Spring 做了解耦，Spring 相关特性以独立 Module 的形式提供，其他非 Spring 框架集成 DynamicTp 时通过引入核心模块即可。

### v1.2.0 升级注意事项

- Spring 启动类注解移动到 Spring 模块中，包路径有调整，需重新导入

```java
org.dromara.dynamictp.spring.annotation.EnableDynamicTp
```

- 配置文件前缀有调整，从 spring.dynamic.tp 调整为 dynamictp

```yml
dynamictp:
  enabled: true
  enabledBanner: true
  enabledCollect: true
```

#### Feature

- 核心模块中移除对 Spring 的依赖，方便在其他非 Spring 项目中使用。

```xml
https://github.com/dromara/dynamic-tp/issues/527
```

#### Bugfix

- 兼容当 Dubbo 版本在 3.0.9 到 3.1.8 之间时，需要替换的执行器命名为 INTERNAL_SERVICE_EXECUTOR，而不是 ExecutorService.class.getName()。

```xml
https://github.com/dromara/dynamic-tp/pull/495
```

- 修复 Redis 限流器在 Redis Cluster 模式下报错问题。

```xml
https://github.com/dromara/dynamic-tp/pull/502
```

- 修复执行 scheduledFuture cancel 报错问题。

```xml
https://github.com/dromara/dynamic-tp/pull/516
```

- 修复 adapter-grpc 模块，grpc client channel executor 被关闭，调用报线程池关闭的错误。

```xml
https://github.com/dromara/dynamic-tp/pull/520
```

- 兼容高版本 okhttp3 Dispatcher 中线程池字段为 executorServiceOrNull 的情况。

```xml
https://github.com/dromara/dynamic-tp/pull/525
```

#### Optimize

- 优化线程池配置文件提示功能。

```xml
https://github.com/dromara/dynamic-tp/pull/498
```

- etcd kvClient get 添加超时时间控制。

```xml
https://github.com/dromara/dynamic-tp/pull/518
```

- zookeeper-starter 客户端初始化支持 zk 认证。

```xml
https://gitee.com/dromara/dynamic-tp/pulls/61
```

- 部分代码设计优化重构
:::

::: tip
## v1.1.9.1 发版记录

#### Bugfix

- 修复定时任务只能运行 corePoolSize 次数的问题 #485

- 修复 ScheduledDtpExecutor 增强 execute方法，导致功能 map 清理不掉，有内存溢出风险 #493

- 修复 AgentAware 在处理有内部属性引用自身这类任务时的栈溢出问题。

```xml
https://gitee.com/dromara/dynamic-tp/issues/IAX904
```

#### Optimize

- 告警 SPI、监控 SPI 内部使用时忽略大小写
:::

::: tip
## v1.1.9 发版记录

这里要问了，上个版本是 1.1.7，怎么跳过 1.1.8 直接到 1.1.9 了？

原因是 1.1.8 引入了一个低级的 npe bug，在没有配置 executors 时会导致服务启动失败，测试过程中没发现，所以 1.1.8 这个版本就废掉了。

后续也将会完善提高 DynamicTp 单测覆盖率。

**以下是具体发版详情：**

#### Feature

- 新增 AgentAware，解决在有其他 agent 增强 Runnable 情况下尝试去拿 DtpRunnable，进行 tps、tpxx、运行超时等统计功能，1.1.7 及之前版本为了防止内存泄露会关闭这些功能。

```xml
https://gitee.com/dromara/dynamic-tp/issues/IAPNE8
```

```xml
<dependency>
    <groupId>org.dromara.dynamictp</groupId>
    <artifactId>dynamic-tp-extension-agent</artifactId>
    <version>1.2.1</version>
</dependency>
```

- 新增全局配置功能，减少配置量，项目中可能会定义多个线程池，除了一些核心参数外，其他配置可能都是相同的，新增 globalExecutorProps 配置项，如果线程池某一配置项没配置，则从全局配置中取。

```xml
https://github.com/dromara/dynamic-tp/issues/443
```

```yml
dynamictp:
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

- 线程池配置新增 autoCreate 字段，标识是否自动生成 DtpExecutor 实例，默认为 true；若想使用 juc 原生线程池或 spring 线程池可置为 false，需在代码中手动创建线程池。1.1.9 之前版本中，配置在 executors 下的所有线程池在服务启动时会自动生成 DtpExecutor 注册到 spring 容器中，如果项目中大量使用了 Spring ThreadPoolTaskExecutor 接线程池对象，若配置的线程池名称相同，此时会报类型转换异常。

```xml
https://github.com/dromara/dynamic-tp/issues/472
```

```yml
dynamictp:
      globalExecutorProps:
        taskWrapperNames: ["ttl", "mdc"]
      executors:
        - threadPoolName: springTaskExecutor
          autoCreate: false
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

- 新增规则引擎框架 Liteflow 线程池适配模块

```
https://github.com/dromara/dynamic-tp/issues/474
```

引入以下依赖即可

```xml
<dependency>
    <groupId>org.dromara.dynamictp</groupId>
    <artifactId>dynamic-tp-spring-boot-starter-adapter-liteflow</artifactId>
    <version>1.2.1</version>
</dependency>
```

```yml
dynamictp:
      liteflowTp:
        - threadPoolName: liteflowTp#LiteFlowDefaultWhenExecutorBuilder
          corePoolSize: 10
          maximumPoolSize: 20
          keepAliveTime: 60
```

- ScheduledDtpExecutor 支持 TaskWrapper 任务包装。

```xml
https://github.com/dromara/dynamic-tp/issues/431
```

```yml
dynamictp:
      executors:
        - threadPoolName: dtpExecutor1
          executorType: scheduled
          corePoolSize: 10
          threadNamePrefix: test
          taskWrapperNames: ["ttl", "mdc"]
```

#### Bugfix

- 修复 Spring ThreadPoolTaskExecutor 被框架管理后，ThreadPoolTaskExecutor 中定义的线程池装饰器失效问题。

```xml
https://gitee.com/dromara/dynamic-tp/issues/I9D31H
```

- 修复 RocketMQ 线程池适配模块，在低版本时 getAsyncSenderExecutor 报 NoSuchMethodError 错误问题。

```xml
https://github.com/dromara/dynamic-tp/issues/417
```

- 修复 TaskEnhanceAware 在多 Wrapper 包装后 taskName 丢失问题。

```xml
https://github.com/dromara/dynamic-tp/issues/420
```

- 修复 JMX 报错 InstanceAlreadyExistsException 问题。

```xml
https://github.com/dromara/dynamic-tp/issues/437
```

- 修复飞书报警填写了 username(非 openid 的情况), 发出的消息接受人为空问题。

```xml
https://github.com/dromara/dynamic-tp/issues/428
```

- 修复钉钉告警 @所有人 不生效问题。

```xml
https://github.com/dromara/dynamic-tp/issues/439
```

- 修复动态更新 taskWrappers 后导致 spring 线程池任务装饰器丢失问题。

```shell
https://github.com/dromara/dynamic-tp/issues/481
```

- 修复 dubbo adapter missing afterInitialize step。

#### Optimize

- 三方中间件线程池支持运行过程异常打印

- Undertow 线程池支持任务包装器

- juc 线程池、spring 线程池支持更多参数动态调整

- 部分代码设计优化重构
:::

::: tip
## v1.1.7 发版记录

#### Feature

- 线程池配置增加 tryInterrupt 字段，控制任务执行超时后是否需要中断当前线程，@yanhom

- 新增 PriorityDtpExecutor，适用于可以指定任务的处理优先级场景，@KamToHung

- 指标数据采集器新增 jmx 方式，@KamToHung

- 线程池配置新增 env 字段，控制告警信息里的环境取值，@少鹏

- 告警平台配置增加 webhook 字段，降低配置复杂度，@kyao，@KamToHung

#### Bugfix

- 修复上下文刷新后，DtpMonitor 重复创建调度任务的问题，@trevzhang

- 修复 OpenTelemetryWrapper 没有将 traceId 传入 DynamicTp 框架的问题，@少鹏

- 修复告警时，tid 错乱问题，@yanhom

- 修复 dubbo 2.7.5 以下版本动态线程池不生效的问题，@piemon-nyah

- 修复异常拒绝任务时跳过 afterReject 执行的问题，@SimpleIto

- 修复飞书告警，机器人签名不为空时报错的问题，@guozi

#### Optimize

- 优化 spring-configuration-metadata，配置提示完整化，@KamToHung

- 支持 apache dubbo 最新版本，@KamToHung

- 完善 example

- 部分代码优化重构

#### Refactor

- 将通知告警基础包从 core 模块移动到 common 模块

- 将 plugin 插件包从 core 模块移动到 common 模块
:::

::: tip
## v1.1.6.1 发版记录

#### Feature

- 支持 springboot3、jdk17、spring6，@KamToHung，@dragon-zhang，@yanhom

- 支持 springboot 1.x、springboot 2.0.x、spring 5.0.x 等低版本，@yanhom

- 新增初始化器 DtpInitizlizer SPI 接口，可以在框架启动前做一些自定义初始化操作，@yanhom

- 支持兼容 skywalking 9.0 引入的线程池插件，1.1.5 版本在跟 skywalking 线程池插件一起使用有内存泄露问题，@yanhom

- 告警信息里新增堆内存占比相关信息，@yanhom

- 配置文件配置 dynamictp 时，新增 DtpProperties 相关属性字段自动提示功能，@yanhom


#### Bugfix

- 修复 allowCoreThreadTimeOut 参数为 true 时，ScheduledDtpExecutor 初始化失败的问题，@kyao

- 修复 ExecutorWrapper#threadPoolStatProvider 成员属性初始化失败问题，@KamToHung

- 修复 ALARM_EXECUTOR 没有移除 traceId，导致告警信息里的 traceId 错乱问题，@yanhom

- 修复线程池别名不一致导致 Prometheus 指标上报失败问题，@androidcj

- 修复使用注解注入 ScheduledThreadPoolExecutor 线程池报错的问题，@kyao

- 修复 ScheduledDtpExecutor 不支持超时告警的问题，@kyao

- 修复 alibaba dubbo 初始化失败问题，@yanhom

#### Optimize

- ThreadPoolBuilder、ThreadPoolCreator 方法完善丰富，@yanhom

- 优化 tps、tp99 等指标监控相关代码，@yanhom

- DtpProperties 配置类中一些字段默认值调整，enabledCollect=true，waitForTasksToCompleteOnShutdown=true，awaitTerminationSeconds=3，@yanhom

- 优化 JVMTI 相关模块，@dragon-zhang，@yanhom

- 完善 example，@yanhom

- 部分代码优化重构，@yanhom

- hutool、sc、sca、sb 等依赖版本升级，@yanhom

#### Refactor

- 重构 NacosRefresher，去掉在配置中手动指定线程池配置文件 data-id，降低接入成本，@wuhui

- 重构 ApolloRefresher，去掉在配置中手动指定线程池配置文件 namespace，降低接入成本，@BanTanger

- 重构所有 cloud 模块的 refresher，通过监听 EnvironmentChangeEvent 事件，更精准的判断是否线程池配置变动进行刷新，@yanhom
:::

::: tip
## v1.1.5 发版记录

#### Feature

- 监控模块新增 TPS、TP99、TP95、TP50 等监控指标，@kyao，@yanhom

- Grafana 监控面板升级，支持更丰富指标查看，@yanhom

- 告警信息里添加系统负载，cpu 使用率，cpu 核数等指标，@yanhom

#### Bugfix

- 修复 jetty 线程池代理后一直触发任务超时告警的问题，@kyao

- 修复 DtpPostProcessor 增强普通线程池后没返回代理，shutdown 原线程池的问题，@yanhom

- 修复代理三方线程池时直接继承 juc 线程池，没兼容框架内自定义线程池的场景，如 dubbo、motan 的 eager 模式，@yanhom

#### Optimize

- 各三方中间件线程池被代理后，原线程池优雅关闭，@yanhom

- 设置 hutool http 工具包的超时时间，@chenkangning

- 调整告警项的默认阈值，@yanhom

- 部分代码优化重构，@yanhom
:::

::: tip
## v1.1.4 发布记录

#### Feature

- 支持 Spring 项目，SpringBoot 相关特性只在 starter 模块引入，@dragon-zhang

- 添加 jvmti 黑科技模块，方便集成管理各种三方包线程池，@dragon-zhang

- 升级 VariableLinkedBlockingQueue 到 jdk1.8 的 LinkedBlockingQueue 的实现，@yanhom

- 添加插件机制，基于此可以对框架做自定义开发扩展，@WindSearcher

- 细化告警配置，支持不同告警项配置不同接受人，@kyao

- 通知告警平台支持云之家，@chunhui_lu

- 支持 SpringBoot 1.x，@yanhom

- 第三方线程池（tomcat、undertow、dubbo、rocketmq、okhttp3 等等）支持 run_timeout、queue_timeout、reject 告警，@kyao，@yanhom

- 提供 Aware 扩展，可以扩展自定义线程池执行过程，@kyao

- 监控数据新增线程池别名，@zhifei

#### Bugfix

- 修复 Tomcat 高低版本兼容性报错问题，@yanhom

- 修复其他 agent 增强线程池后，强转 DtpRunnable 失败的问题，@yanhom

- 修复企微告警无@提醒的问题，@yanhom

- 修复企微告警配置多个接受人不能正确@的问题，@KamToHung

- 修复钉钉告警不能@所有人问题，@chenan

- 修复因 Bean 初始化顺序不确定导致的 ApplicationContextHolder npe 问题，@yanhom

- 修复修复拒绝策略为 CallerRunsPolicy 时，MdcRunnable 会删除主线程 mdc 信息的问题，@kyao

#### Optimize

- 优化 dtp 内部 spi 的使用，统一封装管理，@peachyy

- 部分代码优化重构，@yanhom，@KamToHung，@dragon-zhang，@kyao

- 告警信息优化，trace 信息可以自己扩展，集成内部 ELK 等平台，@yanhom
:::

::: tip
## v1.1.3 发布记录

groupId 及包名改为 org.dromara.dynamictp

#### Feature

- 引入时间轮重构任务超时（排队超时、执行超时）功能，@KamToHung

- 增加 ExecutorAdapter，做各种框架线程池的适配器，@dragon-zhang

- WebServer（Tomcat、Undertow、Jetty）支持通知告警，@dragon-zhang

- 阿里云商业版 RocketMQ 线程池管理支持，@Redick01

- 引入 JsonUtil，根据依赖选择 Jackson/Gson/FastJson 做框架 json 序列化工具，减少外部依赖，@topsuder

- 重构 OrderedDtpExecutor 有序线程池实现，@yanhom, @KamToHung

- 实现优雅关闭线程池功能，@yanhom

- 增加 dependencies 模块，统一管理依赖，@KamToHung

- TaskWrapper 支持 OpenTelemetry，@brendanv

#### Bugfix

- 修复飞书告警失败问题，@KamToHung

- 修复配置变更后不通知的问题，@yanhom

- 修复 dtp-alarm 线程 StackOverflowError 异常，@yanhom

- 修复 DtpPostProcessor 初始化晚于线程池实例初始化问题，@KamToHung

#### Optimize

- 丰富 Undertow 线程池监控指标，@yanhom

- 优化当引入 Dtp 包，不启用时可以通过手动配置关闭，@ruoan777

- 优化告警功能，解决实际推送的告警信息看着不准的问题，@ruoan777

- 线程池内部注册器模块优化，@KamToHung

- Hutool 依赖优化，只引入用到的包，@KamToHung

- 部分代码优化重构，@yanhom，@KamToHung，@dragon-zhang
:::

::: tip
## v1.1.2 发布记录

#### Features

+ 增加对 juc 线程池的动态调参能力，感谢@wenpan的贡献

+ 增加 ScheduledDtpExecutor，感谢@WindSearcher的贡献

+ 增加spring-cloud-tencent配置中心polaris的支持，感谢@fabian4的贡献

+ 增加对rocketmq producer线程池的管理，感谢@fabian4的贡献

+ 增加对rabbitmq消费线程池的管理，感谢@fabian4的贡献

+ 任务执行超时、拒绝等场景下日志输出 & 告警信息里添加打印tid，感谢@kyao的贡献

+ 增加spring-cloud-huawei配置中心servicecomb的支持，感谢@WindSearcher的贡献

+ platfrom 新增id字段，可以配置多个通知平台，根据配置推送相应报警群，感谢@KamToHung的贡献

+ StreamRocketMqDtpAdapter 增加对producer线程池的管理，感谢@hailang的贡献

#### Bugfix

+ 修复 alibaba dubbo 初始化错误赋值的bug，感谢@WindSearcher的贡献

+ 修复webserver undertow 高低版本不兼容问题，感谢@WindSearcher的贡献

+ 修复DtpPostProcessor类中AnnotatedBeanDefinition强制转换失败问题，感谢@文攀锋的贡献

#### Optimize

+ jackson-databind版本升级

+ hutool 版本升级5.8.12

+ 优化在JDK8下, corePoolSize为0时, ScheduledThreadPoolExecutor会导致死循环问题，感谢@WindSearcher的贡献

+ 优化获取本机ip地址的方式，感谢@yaokai的贡献

+ 优化submit提交的任务执行异常时，无法被UncaughtExceptionHandler处理，感谢@dailingx的贡献

+ 优化只有打开dynamicTP开关才加载第三方adapter类，感谢@hkhuang的贡献

+ 启动优化，启动时只通过@EnableDynamicTp决定是否使用dtp，感谢@KamToHung的贡献

+ 日志输出优化

+ 部分代码优化重构
:::

::: tip

## v1.1.0 发布记录

#### Features

- adapter 模块新增 motan rpc 框架线程池管理

- adapter 模块新增 okhttp3 线程池管理

- 新增 OrderedDtpExecutor，感谢 @hailang 提供实现

- adapter 模块新增 brpc（starlight） 线程池管理

- adapter 模块新增 tars rpc 线程池管理

- 线程池配置添加 notifyEnabled 字段，可以全局控制通知功能开启与否

- 新增 StreamRocketMqDtpAdapter，Rocketmq 线程池管理支持 Stream 场景下使用，感谢 @MIEAPP 提供实现

- adapter 模块新增 sofa-rpc 框架线程池管理

- 通过 SpringExecutor 支持 Spring 线程池

- 支持飞书验签，感谢@ZhaoGZ 提供实现

#### BugFix

- ApacheDubbo 线程池初始化失败问题修复，感谢 @hdgaadd 提供实现

- SimpleTpProperties keepAliveTime 字段数据类型错误问题修复

#### Optimize

- 要修改的核心线程数大于当前最大线程数不能修改问题优化

- 引入 commons-collections，优化 hutool 高低版本不兼容问题

- notify 模块相关代码重构

- 采用 checkstyle 调整代码风格
- 
:::

::: tip

## v1.0.9 发布记录

#### Features

+ 告警类型新增邮件告警渠道，感谢 @林林林 提供实现

+ adapter 模块新增 grpc 服务端线程池管理


#### BugFix

+ AbstractDtpNotifier 添加无参构造函数，修复 SPI 自定义无法接入问题

+ ApolloRefresher 调整为实现 ConfigFileChangeListener 接口，解决配置类型为 properties 类型时，多次修改参数间隔生效的问题，感谢 @NY 提供实现

+ 调整线程池告警配置初始化时机，修复提前使用因告警项没初始化导致的 NPE 问题，感谢 @林林林 提供实现


#### Refactor

+ 将 core 模块中 adapter 包迁移到 adapter-common 模块中，彻底解耦

+ 重构 notify 模块

+ 重构抽象 adapter 模块代码

+ 责任链模式重构 notify 模块


#### Optimize

+ 兼容低版本 dubbo（2.7.3） 线程池监控，感谢 @songxiaohua 提供实现

+ 兼容 Spring 5.2 以下 applicationContext.findAnnotationOnBean 获取不到注解的情况，感谢 @Redick01 提供实现

+ MemorySafeLinkedBlockingQueue 阻塞队列添加拒绝策略

+ 优化项目日志输出

:::


::: tip

## v1.0.8 发布记录

距离 v1.0.7 发布已经有差不多 2 个月时间，这个版本新增了好些功能，同时优化重构了一些代码设计，欢迎大家升级体验哦！


#### Features

+ 新增内存安全队列 MemorySafeLinkedBlockingQueue，感谢 @dragon-zhang 提供实现

+ WebServer 线程池管理支持 Reactive 环境下使用，感谢 @abbottliu.liu 提供实现

+ 支持 Dubbox 线程池管理，感谢 @Redick01 提供实现

+ 支持 Spring 中的 ThreadPoolTaskExecutor 线程池管理，感谢 @Redick01 提供实现

+ 支持 Etcd 配置中心接入，感谢 @Redick01 提供实现

+ 三方中间件线程池通知告警支持别名配置，感谢 @renbiao002 提供实现

+ 三方中间件线程池管理支持通知告警功能

+ 新增 MdcTaskWrapper 任务包装器，支持 MDC 上下文传递

+ 新增 SwTraceTaskWrapper 任务包装器，支持 Skywalking TID 传递

+ 监控数据输出新增输出到应用日志中的 collector

+ 指标数据采集支持配置多个采集方式

+ 新增通知告警集群限流插件，见 starter-extension-limiter-redis 模块

+ ThreadPoolCreator 类新增一些内存安全快捷创建线程池方法


#### BugFix

+ 兼容 JDK11 当前要设置核心线程数不能大于上次设置的最大线程数限制

+ 修复核心线程预热设置 preStartAllCoreThreads 不生效问题

+ 修复 Hystrix 线程池获取失败 & 调参被覆盖问题


#### Refactor

+ 重构 logging 模块，去掉事件监听依赖

+ 重构抽象 adapter 模块代码

+ 责任链模式重构 notify 模块


#### Optimize

+ example 添加 Hystrix 线程池的测试例子

+ 低版本 Apollo 配置文件格式兼容

+ Undertow 容器开启活跃线程池数获取功能

+ Endpoint 端点接口支持三方中间件线程池状态获取

+ 优化三方中间件参数刷新逻辑，增加校验判断逻辑

:::


::: tip

## v1.0.7 发布记录

明细：https://juejin.cn/post/7108551236609114149

距离v1.0.5发布已经有差不多2个月时间，这个版本框架源码调整还是比较大的，重构了好一些功能， 主要是围绕第三方中间件线程池集成来改动的，是向前兼容的，同时修复了三个小bug。

如果你有下述痛点，快快升级体验吧。

1）如果你在使用 Dubbo，那么你大概率遇到过 Dubbo 线程池耗尽的情况，是不是很烦恼呢？尝试使用下 DynamicTp 的 Dubbo 线程池管理功能，结合告警、实时监控、动态调参等功能尽可能降低 Dubbo 线程池耗尽，请求拒绝的风险。

2）mq 应该是很多互联网系统都会使用到的中间件，使用 mq 经常会遇到的其中一个问题就是消息积压问题，具体啥原因导致积压需要具体问题具体分析，就RocketMq来说，消费端是使用线程池进行处理消息的，所以说线程池的设置也会直接或者间接影响到消费速度，需要对此进行监控、告警、以及动态调参，尽可能降低因线程池设置而导致的积压风险。

注意：三方组件的包需要自己引入，具体查看官网


#### Features

+ 报警渠道接入飞书

+ 支持 Apache Dubbo & Alibab Dubbo 服务端提供端线程池管理

+ 支持 RocketMq 消费端线程池管理

+ 支持 Hystrix 线程池管理

+ 支持 SpringBoot 内置三大WebServer（Tomcat、Jetty、Undertow）线程池管理

+ 增加线程池别名配置，提升告警信息可读易懂性

+ 提供任务包装类NamedRunable，提交任务时设置标识名称，方便问题追踪

+ 告警项自定义配置，不配置的项用默认值


#### BugFix

+ 修复并发导致通知报警信息发送多条的问题

+ 修复通知渠道配置修改不能动态更新问题

+ 修复钉钉手机端报警信息高亮失效问题


#### Refactor

+ 重构部分通知告警模块实现，支持三方中间件通知告警

+ 重构调整 adapter、starter 模块代码组织结构

:::

::: tip

## v1.0.5

#### Features

+ logging模块添加log4j2支持

+ 配置文件支持json格式，zk已支持json、properties格式配置


#### BugFix

+ [#I54B4R](https://gitee.com/dromara/dynamic-tp/issues/I54B4R)  


#### Refactor

+ 部分代码优化

#### Dependency

+ transmittable-thread-local升级到2.12.6

+ micrometer升级到1.8.5

:::

::: tip

## v1.0.4

#### Features

+ 配置中心支持Consul

+ 监控告警模块增加任务排队等候超时、任务执行超时监控告警

+ 线程池完全配置在配置中心，无需代码编程式配置，服务启动会自动创建线程池实例，交给Spring容器管理

+ 拒绝策略告警优化，支持前后告警间隔计数

+ 相关代码优化

:::

::: tip

## v1.0.3

#### Features

+ 配置中心支持Zookeeper

+ 线程池交由Spring管理其生命周期，可以通过依赖注入方式使用

+ 创建时添加@DynamicTp注解支持监控JUC原生线程池

+ 仿照Tomcat线程池设计，提供IO密集型线程池（EagerDtpExecutor）

+ 相关代码优化，增加必要校验

:::

::: tip

## v1.0.2

#### Features

+ 配置中心支持Nacos、Apollo、Zookeeper

+ 告警平台支持企微、钉钉

+ 监控指标数据采集支持json日志输出、MicorMeter以及Endpoint三种方式

+ 第三方组件线程池管理已集成SpringBoot内置三大WebServer（Tomcat、Jetty、Undertow）

+ 核心模块都提供SPI接口可供自定义扩展（配置中心、配置文件解析、告警平台、监控指标数据采集）

+ 提供完整使用示例（包含Grafana配置面板Json文件，直接import即可使用）

:::