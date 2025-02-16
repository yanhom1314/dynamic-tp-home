---
title: 自定义采集
icon: customize
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 自定义采集
  - dynamictp
sticky: true
star: true
---

### 自定义采集类型

如下示例定义了一个 Es 采集器

1. 定义 EsCollector 继承 AbstractCollector 抽象类，实现 type() 和 collect() 方法

```java
package org.dromara.dynamictp.example.collector;

import org.dromara.dynamictp.common.entity.ThreadPoolStats;
import org.dromara.dynamictp.common.util.JsonUtil;
import org.dromara.dynamictp.core.monitor.collector.AbstractCollector;

/**
 * EsCollector related
 *
 * @author yanhom
 * @since 1.1.0
 */
public class EsCollector extends AbstractCollector {

    private final EsClient esClient;

    public EsCollector(EsClient esClient) {
        this.esClient = esClient;
    }

    @Override
    public void collect(ThreadPoolStats poolStats) {
        esClient.save(JsonUtil.toJson(poolStats));
    }

    @Override
    public String type() {
        return "es";
    }
}
```

2. SPI 配置

resources/META-INF/services 下配置 java spi 实现

文件名：org.dromara.dynamictp.core.monitor.collector.MetricsCollector

文件值：org.dromara.dynamictp.example.collector.EsCollector

![图片.png](/images/dynamictp/spi-collector.png)

3. 配置文件

```yaml
dynamictp:
      enabledCollect: true              # 是否开启监控指标采集，默认false
      collectorTypes: micrometer,es     # 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer
      monitorInterval: 5                # 监控时间间隔（报警判断、指标采集），默认5s     
```