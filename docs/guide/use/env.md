---
title: 运行环境
icon: enviroment-copy
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 运行环境
  - dynamictp
sticky: true
star: true

---

### 环境说明

DynamicTp 从 1.2.0 版本开始，核心模块解耦了 Spring，其他非 Spring 项目使用可以引入 core 自行二开。

### jdk 版本

支持 jdk8 到 jdk21 版本

使用 jdk9 及以上的版本，若遇反射相关异常，请先确保 jvm 启动参数加上以下参数

```bash
--add-opens java.base/java.lang=ALL-UNNAMED
```

### Spring 版本

支持 Spring 4.x、5.x、6.x 版本

5.x 及以下版本用此依赖

```xml
<dependency>
    <groupId>org.dromara.dynamictp</groupId>
    <artifactId>dynamic-tp-spring</artifactId>
    <version>1.2.2</version>
</dependency>
```
6.x 及以上版本用此依赖

```xml
<dependency>
    <groupId>org.dromara.dynamictp</groupId>
    <artifactId>dynamic-tp-spring</artifactId>
    <version>1.2.1-x</version>
</dependency>
```

### SpringBoot 版本

良好支持 SpringBoot 2.x、3.x 版本，建议使用这两版本。

SpringBoot 1.x 支持的不是很好，可能有不兼容的地方，如有问题需自行排查。

