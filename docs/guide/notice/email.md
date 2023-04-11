---
title: 邮件通知
icon: at
order: 1
author: yanhom
date: 2022-06-11
category:
  - 邮件通知
  - dynamictp
tag:
  - 邮件通知
  - dynamictp
sticky: true
star: true
---

<div class="wwads-cn wwads-vertical wwads-sticky" data-id="212" style="max-width:180px"></div>

### 邮件通知

1. 框架 core 模块默认集成企微、钉钉、飞书通知渠道，可直接使用，邮件通知需要单独引入下面依赖。

   ```xml
        <dependency>
            <groupId>cn.dynamictp</groupId>
            <artifactId>dynamic-tp-spring-boot-starter-extension-notify-email</artifactId>
            <version>1.1.2</version>
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

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5af0016c5fe4e998507c92cc46ffae4~tplv-k3u1fbpfcp-zoom-1.image)

