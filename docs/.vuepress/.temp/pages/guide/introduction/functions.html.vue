<template><div><h3 id="功能特性" tabindex="-1"><a class="header-anchor" href="#功能特性" aria-hidden="true">#</a> 功能特性</h3>
<p>基于以上背景分析，我们对线程池 ThreadPoolExecutor 做一些扩展增强，主要实现以下目标</p>
<blockquote>
<ol>
<li>
<p>实现对运行中线程池参数的动态修改，实时生效</p>
</li>
<li>
<p>实时监控线程池的运行状态，触发设置的报警策略时报警，报警信息推送办公平台</p>
</li>
<li>
<p>定时采集线程池指标数据，配合像 Grafana 这种可视化监控平台做大盘监控</p>
</li>
</ol>
</blockquote>
<p><strong>经过多个版本的迭代，目前最新版本 v1.1.3 具有以下特性</strong> ✅</p>
<ul>
<li>
<p><strong>代码零侵入</strong>：我们改变了线程池以往的使用姿势，所有配置均放在配置中心，服务启动时会从配置中心拉取配置生成线程池对象放到 Spring 容器中，使用时直接从 Spring 容器中获取，对业务代码零侵入</p>
</li>
<li>
<p><strong>通知告警</strong>：提供多种报警维度（配置变更通知、活性报警、容量阈值报警、拒绝触发报警、任务执行或等待超时报警），已支持企业微信、钉钉、飞书、邮件报警，同时提供 SPI 接口可自定义扩展实现</p>
</li>
<li>
<p><strong>运行监控</strong>：定时采集线程池指标数据，支持通过 MicroMeter、JsonLog 日志输出、Endpoint 三种方式，可通过 SPI 接口自定义扩展实现</p>
</li>
<li>
<p><strong>任务增强</strong>：提供任务包装功能，实现 TaskWrapper 接口即可，如 MdcTaskWrapper、TtlTaskWrapper、SwTraceTaskWrapper，可以支持线程池上下文信息传递</p>
</li>
<li>
<p><strong>多配置中心支持</strong>：基于主流配置中心实现线程池参数动态调整，实时生效，已支持 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb，同时也提供 SPI 接口可自定义扩展实现</p>
</li>
<li>
<p><strong>中间件线程池管理</strong>：集成管理常用第三方组件的线程池，已集成 Tomcat、Jetty、Undertow、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 等组件的线程池管理（调参、监控报警）</p>
</li>
<li>
<p><strong>轻量简单</strong>：基于 SpringBoot 实现，引入 starter，接入只需简单 4 步就可完成，顺利 3 分钟搞定</p>
</li>
<li>
<p><strong>多模式</strong>：提供了增强线程池 DtpExecutor，IO 密集型场景使用的线程池 EagerDtpExecutor，调度线程池 ScheduledDtpExecutor，有序线程池 OrderedDtpExecutor，可以根据业务场景选择合适的线程池</p>
</li>
<li>
<p><strong>兼容性</strong>：JUC 普通线程池和 Spring 中的 ThreadPoolTaskExecutor 也可以被框架管理，@Bean 定义时加 @DynamicTp 注解即可</p>
</li>
<li>
<p><strong>可靠性</strong>：框架提供的线程池实现 Spring 生命周期方法，可以在 Spring 容器关闭前尽可能多的处理队列中的任务</p>
</li>
<li>
<p><strong>高可扩展</strong>：框架核心功能都提供 SPI 接口供用户自定义个性化实现（配置中心、配置文件解析、通知告警、监控数据采集、任务包装等等）</p>
</li>
<li>
<p><strong>线上大规模应用</strong>：参考<a href="https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html" target="_blank" rel="noopener noreferrer">美团线程池实践<ExternalLinkIcon/></a>，美团内部已经有该理论成熟的应用经验</p>
</li>
</ul>
</div></template>


