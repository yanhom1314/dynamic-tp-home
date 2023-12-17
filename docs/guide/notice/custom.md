---
title: 自定义通知渠道
icon: variable
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 自定义通知渠道
  - dynamictp
sticky: true
star: true
---

### 自定义通知渠道

如下示例定义了一个短信通知渠道

1. 定义 SmsNotifier 继承 AbstractNotifier 抽象类，实现 platform() 和 send0() 方法

```java
public class SmsNotifier extends AbstractNotifier {

    private final SmsClient smsClient;

    public SmsNotifier(SmsClient smsClient) {
        this.smsClient = smsClient;
    }

    @Override
    public String platform() {
        return "sms";
    }

    @Override
    protected void send0(NotifyPlatform platform, String content) {
        String[] receivers = getReceivers(platform);
        smsClient.send(platform.getSecret(), receivers, content);
    }
}
```

2. 定义 SmsDtpNotifier 继承 AbstractDtpNotifier 抽象类，实现 platform()、getNoticeTemplate()、getAlarmTemplate() 和 getColors() 方法

```java
package org.dromara.dynamictp.example.notifier;

import org.apache.commons.lang3.tuple.Pair;
import org.dromara.dynamictp.core.notifier.AbstractDtpNotifier;

/**
 * SmsDtpNotifier related
 *
 * @author yanhom
 * @since 1.1.0
 */
public class SmsDtpNotifier extends AbstractDtpNotifier {

    public SmsDtpNotifier() {
        super(new SmsNotifier(new SmsClient()));
    }

    @Override
    public String platform() {
        return "sms";
    }

    @Override
    protected String getNoticeTemplate() {
        return SmsNotifyConst.SMS_NOTICE_TEMPLATE;
    }

    @Override
    protected String getAlarmTemplate() {
        return SmsNotifyConst.SMS_ALARM_TEMPLATE;
    }

    @Override
    protected Pair<String, String> getColors() {
        return null;
    }
}
```

```java
package org.dromara.dynamictp.example.notifier;

/**
 * SmsNotifyConst related
 *
 * @author yanhom
 * @since 1.1.0
 */
public class SmsNotifyConst {

    private SmsNotifyConst() { }

    public static final String SMS_ALARM_TEMPLATE =
            "服务名称：%s \n" +
                    "实例信息：%s \n" +
                    "环境：%s \n" +
                    "线程池名称：%s \n" +
                    "报警项：%s \n" +
                    "报警阈值 / 当前值：%s \n" +
                    "核心线程数：%s \n" +
                    "最大线程数：%s \n" +
                    "当前线程数：%s \n" +
                    "活跃线程数：%s \n" +
                    "历史最大线程数：%s \n" +
                    "任务总数：%s \n" +
                    "执行完成任务数：%s \n" +
                    "等待执行任务数：%s \n" +
                    "队列类型：%s \n" +
                    "队列容量：%s \n" +
                    "队列任务数量：%s \n" +
                    "队列剩余容量：%s \n" +
                    "拒绝策略：%s \n" +
                    "总拒绝任务数量：%s \n" +
                    "总执行超时任务数量：%s \n" +
                    "总等待超时任务数量：%s \n" +
                    "上次报警时间：%s \n" +
                    "报警时间：%s \n" +
                    "接收人：@%s \n" +
                    "trace 信息：%s \n" +
                    "报警间隔：%ss \n" +
                    "扩展信息：%s \n";

    public static final String SMS_NOTICE_TEMPLATE =
            "服务名称：%s \n" +
                    "实例信息：%s \n" +
                    "环境：%s \n" +
                    "线程池名称：%s \n" +
                    "核心线程数：%s => %s \n" +
                    "最大线程数：%s => %s \n" +
                    "允许核心线程超时：%s => %s \n" +
                    "线程存活时间：%ss => %ss \n" +
                    "队列类型：%s \n" +
                    "队列容量：%s => %s \n" +
                    "拒绝策略：%s => %s \n" +
                    "接收人：@%s \n" +
                    "通知时间：%s \n";
}
```

3. SPI 配置

resources/META-INF/services 下配置 java spi 实现

文件名：org.dromara.dynamictp.core.notifier.DtpNotifier

文件值：org.dromara.dynamictp.example.notifier.SmsDtpNotifier

![图片.png](/images/dynamictp/spi-notifier.png)

4. 配置文件

```yaml
spring:
  dynamic:
    tp:
      platforms:                                    # 通知报警平台配置
        - platform: sms                             # 平台名称
          platformId: sms1
          secret: 3a7500-1287-4bd-a798-c5c3d8b69c   # 短信平台密钥
          receivers: 188888888,1666666666           # 短信接收人       
```


