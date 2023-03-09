<template><div><div class="wwads-cn wwads-vertical wwads-sticky" data-id="212" style="max-width:180px"></div>
<h3 id="模块划分" tabindex="-1"><a class="header-anchor" href="#模块划分" aria-hidden="true">#</a> 模块划分</h3>
<ul>
<li>配置变更监听模块</li>
</ul>
<blockquote>
<ol>
<li>
<p>监听特定配置中心的指定配置文件（已实现 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb），可通过内部提供的 SPI 接口扩展其他实现</p>
</li>
<li>
<p>解析配置文件内容，内置实现 yml、properties、json 配置文件的解析，可通过内部提供的 SPI 接口扩展其他实现</p>
</li>
<li>
<p>通知线程池管理模块实现参数的刷新</p>
</li>
</ol>
</blockquote>
<ul>
<li>线程池管理模块</li>
</ul>
<blockquote>
<ol>
<li>
<p>服务启动时从配置中心拉取配置，生成线程池实例注册到内部线程池注册中心以及 Spring 容器中</p>
</li>
<li>
<p>接受配置监听模块的刷新事件，实现线程池参数的刷新</p>
</li>
<li>
<p>代码中通过依赖注入（推荐）或者 DtpRegistry.getDtpExecutor() 方法根据线程池名称来获取线程池实例</p>
</li>
</ol>
</blockquote>
<ul>
<li>监控模块</li>
</ul>
<p>实现监控指标采集以及输出，已支持以下三种方式，也可通过内部提供的 SPI 接口扩展其他实现</p>
<blockquote>
<ol>
<li>
<p>以 JsonLog 输出到磁盘指定目录，可以自己采集解析日志，存储展示</p>
</li>
<li>
<p>MicroMeter 采集，引入 MicroMeter 相关依赖，暴露相关端点，采集指标数据，结合 Grafana 做监控大盘</p>
</li>
<li>
<p>暴雷自定义 Endpoint 端点（dynamic-tp），可通过 http 方式实时访问</p>
</li>
</ol>
</blockquote>
<ul>
<li>通知告警模块</li>
</ul>
<p>对接办公平台，实现通知告警功能，已支持钉钉、企微、飞书、邮件，可通过内部提供的 SPI 接口扩展其他实现，通知告警类型如下</p>
<blockquote>
<ol>
<li>
<p>线程池主要参数变更通知</p>
</li>
<li>
<p>阻塞队列容量达到设置的告警阈值</p>
</li>
<li>
<p>线程池活性达到设置的告警阈值</p>
</li>
<li>
<p>触发拒绝策略告警，格式：A/B，A：该报警项前后两次报警区间累加数量，B：该报警项累计总数</p>
</li>
<li>
<p>任务执行超时告警，格式：A/B，A：该报警项前后两次报警区间累加数量，B：该报警项累计总数</p>
</li>
<li>
<p>任务等待超时告警，格式：A/B，A：该报警项前后两次报警区间累加数量，B：该报警项累计总数</p>
</li>
</ol>
</blockquote>
<ul>
<li>三方组件线程池管理模块</li>
</ul>
<p>利用 Spring 的事件机制和核心逻辑解耦</p>
<blockquote>
<ol>
<li>
<p>服务启动获取第三方中间件的线程池，被框架管理起来，已集成 Tomcat、Jetty、Undertow、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 等组件线程池管理</p>
</li>
<li>
<p>接受参数刷新、指标收集、通知报警事件，进行相应的处理</p>
</li>
</ol>
</blockquote>
<h3 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构" aria-hidden="true">#</a> 代码结构</h3>
<p>以多 Module 的方式组织代码，提升代码的可维护性，方便扩展</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/059c87e5767a40ddbc52d74ef4bdbe6d~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<blockquote>
<ol>
<li>
<p>adapter 模块：主要是适配一些第三方组件的线程池管理，目前已经实现的有 SpringBoot 内置的三大 web 容器（Tomcat、Jetty、Undertow）、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 的线程池管理，
后续会接入其他常用组件的线程池管理</p>
</li>
<li>
<p>common 模块：主要是一些各个模板都会用到的类，解耦依赖，复用代码，大家日常开发中可能也经常会这样组织代码</p>
</li>
<li>
<p>core 模块：该框架的核心代码都在这个模块里，包括动态调整参数，监控报警，以及串联整个项目流程都在此处</p>
</li>
<li>
<p>example 模块：提供一个简单使用示例，方便使用者参照</p>
</li>
<li>
<p>extension 模块：放一些扩展功能实现，比如基于 redis 的流控扩展、邮件发送扩展、skywalking 上下文传递扩展等</p>
</li>
<li>
<p>logging 模块：用于配置框架内部日志的输出，目前主要用于输出线程池监控指标数据到指定文件</p>
</li>
<li>
<p>starter模块：提供独立功能模块的依赖封装、自动配置等相关</p>
</li>
<li>
<p>test 模块：主要是一些单元测试</p>
</li>
</ol>
</blockquote>
<h3 id="架构图" tabindex="-1"><a class="header-anchor" href="#架构图" aria-hidden="true">#</a> 架构图</h3>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38e4bf71d2c84b7ba67d7059b5432a7e~tplv-k3u1fbpfcp-zoom-1.image" alt="技术架构"></p>
</div></template>


