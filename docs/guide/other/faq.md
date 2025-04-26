---
title: 常见问题
icon: question
order: 1
author: yanhom
date: 2025-03-14
tag:
  - faq
  - dynamictp
  - 常见问题
sticky: false
star: true
---

[[toc]]

### Q：DynamicTp 支持那些版本 SpringBoot？

A：目前 SpringBoot 大版本有 sb1.x、sb2.x、sb3.x 三个版本，三大版本之间差别较大。DynamicTp 是基于 sb2.7 开发的，经过测试，sb2.3 及以上版本均能良好支持，sb1.x、sb2.1、sb2.2 可能会有部分不兼容的地方，需使用者自行测试，如果有不兼容地方，优先建议升级 sb 版本。

### Q：非 SpringBoot 项目能使用吗？

A：DynamicTp 从 1.2.0 版本开始，核心模块解耦了 Spring，Spring 相关特性支持在独立的 Spring Module 中，SpringBoot 相关特性支持在独立 Starter Module 中，所以如果使用传统 Spring 项目，可以引入下面依赖，然后通过 xml 或者 @Configuration 注解对 Starter 模块下自动装配的功能类进行声明，也能正常使用。

```xml
    <dependency>
        <groupId>org.dromara.dynamictp</groupId>
        <artifactId>dynamic-tp-spring</artifactId>
        <version>1.2.1</version>
    </dependency>
```

### Q：JUC 线程池和 Spring 线程池能被管理吗？

A：文档中已经说明了，最佳实践是将线程池配置在远程配置中心，服务启动时 DynamicTp 会从配置中心拉取到线程池配置，然后生成 DtpExecutor 实例注册到 Spring 容器以及内部注册器中，使用时直接获取就行。如果你执意要使用 JUC 原生线程池或者 Spring 线程池，
我们也是支持的，@Bean 定义线程池时加 @DynamicTp 注解，同时配置文件中添加配置项 autoCreate: false 即可，只是这样使用到的就不是满血 dtp。

### Q：增强 Undertow 线程池后，服务启动报错 cannot inherit from final class，怎么解决？

A：Undertow 内部用的线程池是自定义的 EnhancedQueueExecutor，原生的 EnhancedQueueExecutor 是被定义为 final 的，我们不能对此做增强。所以我们自己重写了 EnhancedQueueExecutor，需要在类加载的时候加载到我们自己重写的类才可以，报这个错误证明加载到了原生的 EnhancedQueueExecutor，你需要调整下依赖包的顺序，将 dynamic-tp-spring-boot-starter-adapter-webserver 依赖放在 spring-boot-starter-undertow 依赖之前就可以了。

### Q：为什么 DynamicTp 会有内存泄露问题？

A：当 DynamicTp 跟一些 javaagent 组件一起使用时，如果这些 agent 会对线程池做增强，就可能会导致内存泄露问题。比如 skywalking 9.0 线程池插件会对提交的任务做增强，导致 dynamictp 在任务执行的不同阶段，先后拿到的不是同一个对象，会导致一些功能 Map 清理不掉，可能会造成 OOM。[具体请查看](/guide/use/agent.html)

有以下几种解决方案：

- 移除这些线程池插件，线程池增强功能都由 DynamicTp 来做（建议）；
- 关闭 DynamicTp 对 execute() 方法的增强，环境变量中设置 dtp.execute.enhanced = false，这样会损失掉一些增强功能；
- 引入 dynamic-tp-extension-agent 依赖，会有一定的性能损失

### Q：接入后服务启动不能正常创建线程池，怎么回事？

A：首先确保按照接入指南正确的引入了依赖，比如 nacos 在 spring-cloud 模式下和普通 springboot 模式下引入的依赖不一样，然后确保项目能正常拉取到配置中心的配置。如果还有问题，可以提 Issue 反馈。

### Q：动态调整队列大小，队列里的任务怎么处理？

A：首先要了解阻塞队列的原理，入队、出队的阻塞效果是通过加锁、判断比较已有元素数和队列容量实现的，队列容量只是内部的一个变量 capacity，我们动态调整的只是这个变量的值，并不会影响到队列里已有任务的执行，后续入队、出队效果会受到新更新的值的影响，已有任务会正常执行。

### Q：DynamicTp 性能怎么样？

A：通过 JMH 测试，在单机 QPS 非常大的时候（100W+），DynamicTp 带来的性能损耗会比较大。这种情况业务逻辑本身的耗时非常小，而 DynamicTp 一系列的增强、统计、检查等操作会消耗一定的时间。而单机 QPS 在 10W 以下的时候，DynamicTp 的性能损耗就比较小了，对大多数场景来说都适用。[查看压测详情](/guide/introduction/benchmark.html)

### Q：三方中间件线程池增强失败，怎么回事？

A：三方中间件线程池增强实现时，我们是依赖特定的版本做的，如果用的版本跟我们用的基准版本差异较大，可能会有版本兼容性问题。可以先自己调试排查，如果确实是版本兼容问题，欢迎提 Pr 来修复，我们接入的三方包很多，很难覆盖到所有的版本，这个希望大家能理解，做开源项目最难的就是做版本兼容了。