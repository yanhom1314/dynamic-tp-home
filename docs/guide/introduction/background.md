---
title: 项目背景
icon: ask
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 项目背景
  - dynamictp
sticky: false
star: true
---

### 使用痛点 

使用线程池 ThreadPoolExecutor 过程中你是否有以下痛点呢？

::: tip 痛点

1. 代码中创建了一个 ThreadPoolExecutor，但是不知道那几个核心参数设置多少比较合适

2. 凭经验设置参数值，上线后发现需要调整，改代码重新发布服务，非常麻烦

3. 线程池相对开发人员来说是个黑盒，运行情况不能及时感知到，直到出现问题

:::
如果有以上痛点，动态可监控线程池框架（**DynamicTp**）或许能帮助到你。

如果看过 ThreadPoolExecutor 的源码，大概可以知道它对核心参数基本都有提供 set / get 方法
以及一些扩展方法，可以在运行时动态修改、获取相应的值，这些方法有：

```java
public void setCorePoolSize(int corePoolSize);
public void setMaximumPoolSize(int maximumPoolSize);
public void setKeepAliveTime(long time, TimeUnit unit);
public void setThreadFactory(ThreadFactory threadFactory);
public void setRejectedExecutionHandler(RejectedExecutionHandler handler);
public void allowCoreThreadTimeOut(boolean value);

public int getCorePoolSize();
public int getMaximumPoolSize();
public long getKeepAliveTime(TimeUnit unit);
public BlockingQueue<Runnable> getQueue();
public RejectedExecutionHandler getRejectedExecutionHandler();
public boolean allowsCoreThreadTimeOut();

protected void beforeExecute(Thread t, Runnable r);
protected void afterExecute(Runnable r, Throwable t);
```

现在大多数的互联网项目都会采用微服务化部署，有一套自己的服务治理体系，微服务组件中的分布式配置中心
扮演的就是动态修改配置，实时生效的角色。

那么我们是否可以结合配置中心来做运行时线程池参数的动态调整呢？

答案是肯定的，而且配置中心相对都是高可用的，使用它也不用过于担心配置推送失败这类问题，而且也能减少研发动态线程池组件本身的难度和接入的工作量。

**综上，可以总结出以下的背景**

- **广泛性**：在 Java 开发中，想要提高系统性能，线程池已经是一个 90% 以上开发人员都会选择使用的基础工具

- **不确定性**：项目中可能存在很多线程池，既有 IO 密集型的，也有 CPU 密集型的，但线程池的核心参数并不好确定，需要有套机制在运行过程中动态去调整参数

- **无感知性**：线程池运行过程中的各项指标一般感知不到，需要有套监控报警机制在事前、事中就能让开发人员感知到线程池的运行状况，及时处理

- **高可用性**：配置变更需要及时推送到客户端，需要有高可用的配置管理推送服务，配置中心是现在大多数互联网系统都会使用的组件，与之结合可以极大提高系统可用性