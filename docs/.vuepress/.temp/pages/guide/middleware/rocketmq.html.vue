<template><div><p>你还在为 RocketMq 消费积压而烦恼吗？😭😭😭</p>
<p>快快使用 DynamicTp 的三方中间件线程池管理功能吧，一定程度上能减少你的烦恼。😅😅😅</p>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>
<ol>
<li>引入下述依赖</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>cn.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-adapter-rocketmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置文件中配置 rocketmq 线程池</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>          <span class="token comment"># 是否开启监控指标采集，默认false</span>
      <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer    <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging），默认micrometer</span>
      <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>            <span class="token comment"># 监控时间间隔（报警判断、指标采集），默认5s</span>
      <span class="token key atrule">rocketMqTp</span><span class="token punctuation">:</span>                                  <span class="token comment"># rocketmq 线程池配置</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> group1<span class="token comment">#topic1            # 名称规则：group + "#" + topic</span>
          <span class="token key atrule">corePoolSize</span><span class="token punctuation">:</span> <span class="token number">200</span>
          <span class="token key atrule">maximumPoolSize</span><span class="token punctuation">:</span> <span class="token number">200</span>
          <span class="token key atrule">keepAliveTime</span><span class="token punctuation">:</span> <span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>启动日志</li>
</ol>
<p>服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>DynamicTp adapter, rocketMq consumer executors init end, executors: <span class="token punctuation">{</span>group<span class="token comment">#topic=ExecutorWrapper(threadPoolName=group#topic, executor=java.util.concurrent.ThreadPoolExecutor@1acd1f1[Running, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], threadPoolAliasName=null, notifyItems=[NotifyItem(platforms=null, enabled=true, type=liveness, threshold=70, interval=120, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=change, threshold=0, interval=1, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=capacity, threshold=70, interval=120, clusterLimit=1)], notifyEnabled=true)}</span>
DynamicTp rocketMqTp adapter, <span class="token punctuation">[</span>group<span class="token comment">#topic] refreshed end, changed keys: [corePoolSize, maxPoolSize], corePoolSize: [20 => 200], maxPoolSize: [20 => 200], keepAliveTime: [60 => 60]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<ol>
<li>线程池名称规则：group + &quot;#&quot; + topic（可以在启动日志找输出的线程池名称）</li>
<li>rocketmq 线程池享有动态调参、监控、通知告警完整的功能</li>
<li>rocketmq 线程池通知告警项有（调参通知、活性告警、队列容量告警），可通过 notifyItems 自定义配置项值，默认全部开启</li>
<li>只支持消费端线程池管理</li>
</ol>
</div>
</div></template>
