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

框架默认提供了一些任务包装器，可以实现特定的功能

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
> 6. 可以继承 TaskWrapper SPI 接口自定义任务包装器


### 使用方式

1. MdcTaskWrapper、TtlTaskWrapper、NamedRunnable 在 core 包中，不需要引入其他依赖

2. SwTraceTaskWrapper 是 extension 模块提供的扩展，需要引入依赖

SpringBoot1x、2x 用此依赖

```xml
  <dependency>
      <groupId>org.dromara.dynamictp</groupId>
      <artifactId>dynamic-tp-extension-skywalking</artifactId>
      <version>1.1.6.1</version>
  </dependency>
 ```

SpringBoot3x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-extension-skywalking</artifactId>
     <version>1.1.6.1-3.x</version>
 </dependency>
 ```

3. OpenTelemetryWrapper 是 extension 模块提供的扩展，需要引入依赖

SpringBoot1x、2x 用此依赖

```xml
  <dependency>
      <groupId>org.dromara.dynamictp</groupId>
      <artifactId>dynamic-tp-extension-opentelemetry</artifactId>
      <version>1.1.6.1</version>
  </dependency>
 ```
SpringBoot3x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-extension-opentelemetry</artifactId>
     <version>1.1.6.1-3.x</version>
 </dependency>
 ```

4. 自定义 TaskWrapper 示例

```java
package org.dromara.dynamictp.example.wrapper;

import lombok.extern.slf4j.Slf4j;
import org.dromara.dynamictp.core.support.task.wrapper.TaskWrapper;

/**
 * CustomTaskWrapper related
 *
 * @author yanhom
 * @since 1.1.0
 */
@Slf4j
public class CustomTaskWrapper implements TaskWrapper {

   @Override
   public String name() {
      return "custom";
   }

   @Override
   public Runnable wrap(Runnable runnable) {
      return new MyRunnable(runnable);
   }

   public static class MyRunnable implements Runnable {

      private final Runnable runnable;

      public MyRunnable(Runnable runnable) {
         this.runnable = runnable;
      }

      @Override
      public void run() {
         log.info("before run");
         runnable.run();
         log.info("after run");
      }
   }
}

```

resources/META-INF/services 下配置 java spi 实现

文件名：org.dromara.dynamictp.core.support.task.wrapper.TaskWrapper

文件值：org.dromara.dynamictp.example.wrapper.CustomTaskWrapper

![图片.png](/images/dynamictp/spi-wrapper.png)

5. 线程池配置文件加如下配置项

```yaml
spring:
  dynamic:
    tp:
      executors:                                         # 动态线程池配置，省略其他项，具体看上述配置文件
        - threadPoolName: dtpExecutor1
          taskWrapperNames: ["ttl", "mdc", "swTrace", "custom"]    # 任务包装器名称，继承 TaskWrapper 接口
```