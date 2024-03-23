---
title: 自研配置中心接入
icon: customize
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 自研配置中心接入
  - dynamictp
sticky: true
star: true
---

如果你没使用上述任何一种配置中心，有内部自研的配置中心，接入也很简单，只需要自定义一个 Refresher 即可，

创建继承自 AbstractRefresher 的 GalaxyRefresher 类，实现监听特定的配置刷新事件，下面是一个简单的示例：

```java
public class GalaxyRefresher extends AbstractRefresher implements SmartApplicationListener {

    public GalaxyRefresher(DtpProperties dtpProperties) {
        super(dtpProperties);
    }

    @Override
    public boolean supportsEventType(Class<? extends ApplicationEvent> eventType) {
        return GalaxyConfigEvent.class.isAssignableFrom(eventType);
    }

    @Override
    public void onApplicationEvent(ApplicationEvent event) {
        if (event instanceof GalaxyConfigEvent) {
            refresh(environment);
        }
    }
}
```

AbstractRefresher 提供了三种 refresh 方法，自选用任意一种调用即可实现动态刷新功能：

```java
public void refresh(String content, ConfigFileTypeEnum fileType);

public void refresh(Map<Object, Object> properties);

public void refresh(Environment environment);
```

线程池配置文件格式和上述其他配置中心一致，直接参考就行。