---
title: 任务包装
icon: wrap
order: 1
author: yanhom
date: 2022-08-15
tag:
  - 任务包装
  - dynamictp
sticky: true
star: true
---

### 任务包装器

提供了一些任务包装器，可以实现特定的功能

> 1. MdcTaskWrapper 支持 MDC 上下文传递，名称：mdc
>
> 2. TtlTaskWrapper 支持 ThreadLocal 上下文传递，名称：ttl
>
> 3. SwTraceTaskWrapper 支持 Skywalking TID 传递，名称：swTrace
> 
> 4. OpenTelemetryWrapper，支持 OpenTelemetry 上下文传递，名称：OTel
>
> 5. NamedRunnable 支持给任务添加名称
>
> 6. 可以继承 TaskWrapper 接口自定义任务包装器


### 使用步骤

1. MdcTaskWrapper、TtlTaskWrapper、NamedRunnable 在 core 包中，不需要引入其他依赖

2. SwTraceTaskWrapper 是 extension 模块提供的扩展，需要引入依赖

   ```xml
        <dependency>
            <groupId>org.dromara.dynamictp</groupId>
            <artifactId>dynamic-tp-extension-skywalking</artifactId>
            <version>1.1.4</version>
        </dependency>
    ```
   
3. OpenTelemetryWrapper 是 extension 模块提供的扩展，需要引入依赖

   ```xml
        <dependency>
            <groupId>org.dromara.dynamictp</groupId>
            <artifactId>dynamic-tp-extension-opentelemetry</artifactId>
            <version>1.1.4</version>
        </dependency>
    ```
   
4. 线程池配置文件加如下配置项

   ```yaml
   spring:
     dynamic:
       tp:
         executors:                                         # 动态线程池配置，省略其他项，具体看上述配置文件
           - threadPoolName: dtpExecutor1
             taskWrapperNames: ["ttl", "mdc", "swTrace", "OTel"]    # 任务包装器名称，继承 TaskWrapper 接口
   ```