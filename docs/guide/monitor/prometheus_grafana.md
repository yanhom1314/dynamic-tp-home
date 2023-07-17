---
title: prometheus+grafana 接入流程
icon: config
order: 1
author: yanhom
date: 2022-06-11
tag:
  - micrometer接入流程
  - prometheus+grafana 接入流程
  - dynamictp
sticky: true
star: true
---

### 集成步骤

这块要讲的是集成 prometheus+grafana 做监控，事先你得安装好 prometheus+grafana，这个就不展开讲了，网上教程很多，测试使用可以直接用 docker 安装，非常简单，安装完之后接着往下看。

1. 首先配置文件中开启 micrometer 数据采集

```yaml
   enabledCollect: true
   collectorTypes: micrometer
```

2. 项目中引入 micrometer-prometheus 依赖

```xml
  <dependency>
      <groupId>io.micrometer</groupId>
      <artifactId>micrometer-registry-prometheus</artifactId>
  </dependency>
```

3. 开启 prometheus 指标采集端点

```yaml
management:
  metrics:
    export:
      prometheus: 
        enabled: true
  endpoints:
    web:
      exposure:
        include: '*'   # 测试使用，线上不要用*，按需开启
```

4. 配置 prometheus 数据采集 job，这块可以去了解下他的 SD 机制（Service Discovery），也就是自动到注册中心发现服务，看你所用的注册中心支不支持这种方式，[可以去官网查看](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config)，k8s，ZK，Eureka、Consul 等都是支持的。这里使用 static_configs 方式，简单的指定地址的静态配置

```yaml
- job_name: 'prometheus'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['192.168.2.104:9098']
```

job 配置后 prometheus 管理台看到如下图所示，说明已经开始正常采集指标配置

![采集指标](/images/dynamictp/prometheus.png)

5. 然后就是配置 grafana 数据可视化，配置如下图，需要该 pannel 配置 Json 的可以加我发你，到这里监控就搭建起来了，其实也很简单，然后就可以实时监控线程池数据指标变动了

![监控数据](/images/dynamictp/grafana.png)


6. 重新修改下每个 pannel 的数据源，这样才会正确显示监控数据

![image.png](/images/dynamictp/grafana_datasource.png)
