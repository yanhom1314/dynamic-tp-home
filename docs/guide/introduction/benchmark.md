---
title: 性能测试
icon: benchmark
order: 1
author: yanhom
date: 2025-03-09
tag:
  - 性能测试
  - dynamictp
  - benchmark
sticky: false
star: true
---

### 测试环境配置

此次基准测试使用 JMH（Java 微基准测试工具）进行，配置如下：

::: tip
- **JDK 版本**：OpenJDK 1.8.0_212

- **虚拟机**：OpenJDK 64-Bit Server VM (25.212-b03)

- **JVM 参数**：-Xmn256m -Xmx1024m -XX:+UseConcMarkSweepGC
:::

### 性能对比

::: tip
- 测试单线程模式下使用 juc 标准线程池 与 dtp 线程池吞吐量的对比。

- 通过执行一些 CPU 密集型操作（如计算质数）来模拟不同 QPS 下的情况，测试逻辑见 [ExecutorBenchmark](https://github.com/dromara/dynamic-tp/blob/master/benchmark/src/main/java/org/dromara/dynamictp/benchmark/ExecutorBenchmark.java)。

- 可以看到在单机 QPS 非常大的时候（100W+），dtp 带来的性能损耗会比较大。这种情况业务逻辑本身的耗时非常小，而 dtp 一系列的增强、统计、检查等操作会消耗一定的时间。

- 而单机 QPS 在 10W 以下的时候，dtp 的性能损耗就比较小了，对大多数场景来说都适用。
:::

1. 吞吐量数据表（单位：ops/s）

| max  | dtp qps   | standard qps | 损失比 (%) |
|------|-----------|--------------|------------|
| 100  | 835879.48 | 2024530.59   | 58.71      |
| 2000 | 96505.46  | 102962.75    | 6.27       |
| 4000 | 40681.05  | 41844.19     | 2.78       |
| 6000 | 24098.04  | 24421.99     | 1.33       |
| 8000 | 16477.24  | 16521.77     | 0.27       |

2. 吞吐量柱状图

<img src="/images/dynamictp/benchmark.png">
