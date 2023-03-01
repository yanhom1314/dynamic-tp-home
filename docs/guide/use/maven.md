---
title: maven依赖
icon: install
order: 1
author: yanhom
date: 2022-06-11
category:
  - maven依赖
  - dynamictp
tag:
  - maven依赖
  - dynamictp
sticky: true
star: true
---

<div class="wwads-cn wwads-vertical wwads-sticky" data-id="212" style="max-width:180px"></div>

### maven 依赖

+ apollo 应用接入用此依赖

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-boot-starter-apollo</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```

+ spring-cloud 场景下的 nacos 应用接入用此依赖

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-cloud-starter-nacos</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```

+ 非 spring-cloud 场景下的 nacos 应用接入用此依赖

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-boot-starter-nacos</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```
   注意版本：nacos-config-spring-boot-starter 0.2.10 及以下版本对应 springboot 2.3.12.RELEASE及以下版本，
   0.2.11-beta及以上版本对应springboot 版本2.4.0及以上版本，具体看官方说明

+ zookeeper 应用接入用此依赖

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-boot-starter-zookeeper</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```
   application.yml 需配置 zk 地址节点信息

    ```yaml
        spring:
          application:
            name: dynamic-tp-zookeeper-demo
          dynamic:
            tp:
              config-type: properties         # zookeeper支持 properties & json 配置
              zookeeper:
                config-version: 1.0.0
                zk-connect-str: 127.0.0.1:2181
                root-node: /configserver/dev
                node: dynamic-tp-zookeeper-demo
    ```
    注：配置中心配置文件参考example-zookeeper/resource下的config.txt / config.json，该文件可以通过`ZKUI`工具导入到`Zookeeper`
   
+ spring-cloud 场景下 zookeeper 应用接入用此依赖

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-cloud-starter-zookeeper</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```
   
   注：配置中心配置文件参考example-zookeeper-cloud/resource下的config.txt，该文件可以通过`ZKUI`工具导入到`Zookeeper`

+ spring-cloud 场景 consul 应用接入用此依赖

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-cloud-starter-consul</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```

+ etcd 应用接入用此依赖

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-boot-starter-etcd</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```

+ polaris 应用接入用此依赖（未发布）

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-cloud-starter-polaris</artifactId>
           <version>1.1.1</version>
       </dependency>
   ```

+ huaweicloud 应用接入用此依赖（未发布）

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-cloud-starter-huawei</artifactId>
           <version>1.1.1</version>
       </dependency>
   ```
   
+ 无配置中心应用接入用此依赖，无动态调整能力，有监控告警能力

   ```xml
       <dependency>
           <groupId>cn.dynamictp</groupId>
           <artifactId>dynamic-tp-spring-boot-starter-common</artifactId>
           <version>1.1.0</version>
       </dependency>
   ```

### 注意事项

::: warning

1. 一定要根据应用类型引入正确的依赖，不然会集成失败

2. 集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈。

:::