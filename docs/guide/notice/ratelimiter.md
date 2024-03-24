---
title: 通知限流
icon: decorate
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 通知限流
  - dynamictp
sticky: true
star: true
---

### 推送限流

1. 默认通知告警是基于单机模式的，服务集群每个节点都会产生通知告警信息进行推送，在集群机器数量很多的情况下同时可能会产生大量的通知告警信息，影响使用体验。

2. 1.0.8 版本开始支持集群限流，基于 redis 实现的滑动窗口限流，会限制实际进行推送的节点个数，使用引入以下依赖

SpringBoot1x、2x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-extension-limiter-redis</artifactId>
     <version>1.1.6.1</version>
 </dependency>
 ```
SpringBoot3x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-extension-limiter-redis</artifactId>
     <version>1.1.6.1-3.x</version>
 </dependency>
 ```

3. 通知项配置 clusterLimit 字段

```yaml
spring:
  dynamic:
    tp:
      executors:                                         # 动态线程池配置，省略其他项，具体看上述配置文件
        - threadPoolName: dtpExecutor1
          taskWrapperNames: ["ttl", "mdc", "swTrace"]    # 任务包装器名称，继承TaskWrapper接口
          notifyItems:                                   # 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警）
            - type: capacity                             # 报警项类型，查看源码 NotifyTypeEnum枚举类
              enabled: true
              threshold: 80                              # 报警阈值
              interval: 120                              # 报警间隔（单位：s）
              clusterLimit: 1                            # 一个报警窗口内，只允许该配置数量的机器进行推送通知，默认为1
```

4. 此功能实现使用了责任链设计模式，如果项目中没有引入 redis，也可以自定义限流器，实现 NotifyFilter 接口即可，具体参考 NotifyRedisRateLimiterFilter 的实现