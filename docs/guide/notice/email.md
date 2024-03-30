---
title: 邮件通知
icon: at
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 邮件通知
  - dynamictp
sticky: true
star: true
---

### 邮件通知

1. 框架 core 模块默认集成企微、钉钉、飞书通知渠道，可直接使用，邮件通知需要单独引入下面依赖。

SpringBoot1x、2x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-extension-notify-email</artifactId>
     <version>1.1.7</version>
 </dependency>   
 ```
SpringBoot3x 用此依赖

```xml
 <dependency>
     <groupId>org.dromara.dynamictp</groupId>
     <artifactId>dynamic-tp-spring-boot-starter-extension-notify-email</artifactId>
     <version>1.1.7-3.x</version>
 </dependency>
 ```

2. 加入邮件相关配置

```yaml
spring:
  # email notify configuration
  mail:
    # (optional) email subject, default:ThreadPool Notify
    title: ThreadPool Notify
    # mail service address
    host: smtp.qq.com
    port: 465
    # send from
    username: 123456@qq.com
    # authorization code eg: rlpadadtcugh4152e
    password: xxxxxxxxxxxxxxxx
    default-encoding: UTF-8
    properties:
      mail:
        smtp:
          socketFactoryClass: javax.net.ssl.SSLSocketFactory
          ssl:
            enable: true
        debug: false
```
   
3. 效果图

![email](/images/dynamictp/email.png)

