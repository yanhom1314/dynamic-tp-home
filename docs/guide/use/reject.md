---
title: 拒绝策略
icon: linter
order: 1
author: yanhom
date: 2025-03-02
tag:
  - 拒绝策略
  - dynamictp
sticky: true
star: true

---

### 自定义拒绝策略

1. 实现 RejectedExecutionHandler 接口，或继承相关子类

```java
@Slf4j
public class AbortPolicyWithReport extends ThreadPoolExecutor.AbortPolicy {

    private final String threadName;

    public AbortPolicyWithReport(String threadName) {
        this.threadName = threadName;
    }

    @Override
    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
        String msg = String.format(
                "Thread pool is EXHAUSTED!"
                        + " Thread Name: %s, Pool Size: %d (active: %d, core: %d, max: %d, largest: %d), Task: %d (completed: %d),"
                        + " Executor status:(isShutdown:%s, isTerminated:%s, isTerminating:%s)!",
                threadName, e.getPoolSize(), e.getActiveCount(), e.getCorePoolSize(), e.getMaximumPoolSize(),
                e.getLargestPoolSize(), e.getTaskCount(), e.getCompletedTaskCount(), e.isShutdown(), e.isTerminated(),
                e.isTerminating());
        log.warn(msg);
        throw new RejectedExecutionException(msg);
    }
}
```

2. SPI 配置

resources/META-INF/services 下配置 java spi 实现

文件名：java.util.concurrent.RejectedExecutionHandler

文件值：org.dromara.dynamictp.core.reject.AbortPolicyWithReport
