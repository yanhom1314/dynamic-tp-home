---
title: 云之家渠道
icon: yunzhijia
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 云之家渠道
  - dynamictp
sticky: true
star: true
---

### 云之家通知

1. 引入依赖

SpringBoot1x、2x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-extension-notify-yunzhijia</artifactId>
     <version>1.2.2</version>
 </dependency>   
 ```
SpringBoot3x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-extension-notify-yunzhijia</artifactId>
     <version>1.2.1-x</version>
 </dependency>
 ```

2. 配置文件

```yaml
dynamictp:
  platforms:                                   # 通知报警平台配置
    - platform: yunzhijia                      # 云之家通知
      urlKey: 3a7500-1287-4bd-a798-c5c3d8b69c  # webhook 地址中的 key
      receivers: test1,test2                   # 接受人
```

