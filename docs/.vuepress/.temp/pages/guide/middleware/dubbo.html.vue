<template><div><p>你还在为 Dubbo 线程池耗尽而烦恼吗？😭😭😭</p>
<p>快快使用 DynamicTp 的三方中间件线程池管理功能吧，一定程度上能减少你的烦恼。😅😅😅</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>同时支持以下三种 dubbo 版本</p>
<ol>
<li>apache dubbo</li>
<li>alibaba dubbo</li>
<li>dubbox</li>
</ol>
</div>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>
<ol>
<li>引入下述依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-adapter-dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置文件中配置 dubbo 线程池</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>          <span class="token comment"># 是否开启监控指标采集，默认false</span>
      <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer    <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging），默认micrometer</span>
      <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>            <span class="token comment"># 监控时间间隔（报警判断、指标采集），默认5s</span>
      <span class="token key atrule">dubboTp</span><span class="token punctuation">:</span>                                     <span class="token comment"># dubbo 线程池配置</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> dubboTp<span class="token comment">#20880            # 名称规则：dubboTp + "#" + 协议端口</span>
          <span class="token key atrule">threadPoolAliasName</span><span class="token punctuation">:</span> 测试线程池
          <span class="token key atrule">corePoolSize</span><span class="token punctuation">:</span> <span class="token number">100</span>
          <span class="token key atrule">maximumPoolSize</span><span class="token punctuation">:</span> <span class="token number">200</span>
          <span class="token key atrule">keepAliveTime</span><span class="token punctuation">:</span> <span class="token number">60</span>
          <span class="token key atrule">notifyItems</span><span class="token punctuation">:</span>                             <span class="token comment"># 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警）</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> capacity                       <span class="token comment"># 报警项类型，查看源码 NotifyTypeEnum枚举类</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>                        <span class="token comment"># 报警阈值</span>
              <span class="token key atrule">platforms</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ding<span class="token punctuation">,</span>wechat<span class="token punctuation">]</span>             <span class="token comment"># 可选配置，不配置默认拿上层platforms配置的所以平台</span>
              <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">120</span>                        <span class="token comment"># 报警间隔（单位：s）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>启动日志</li>
</ol>
<p>服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>DynamicTp adapter, apache dubbo provider executors init end, executors: <span class="token punctuation">{</span>dubboTp<span class="token comment">#20880=ExecutorWrapper(threadPoolName=dubboTp#20880, executor=java.util.concurrent.ThreadPoolExecutor@1b3960b[Running, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], threadPoolAliasName=null, notifyItems=[NotifyItem(platforms=null, enabled=true, type=liveness, threshold=70, interval=120, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=change, threshold=0, interval=1, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=capacity, threshold=70, interval=120, clusterLimit=1)], notifyEnabled=true)}</span>
DynamicTp dubboTp adapter, <span class="token punctuation">[</span>dubboTp<span class="token comment">#20880] refreshed end, changed keys: [keepAliveTime, corePoolSize], corePoolSize: [200 => 100], maxPoolSize: [200 => 200], keepAliveTime: [0 => 60]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>线程池名称规则：dubboTp + &quot;#&quot; + 协议端口（可以在启动日志找输出的线程池名称）</li>
<li>dubbo 线程池享有动态调参、监控、通知告警完整的功能</li>
<li>dubbo 线程池通知告警项有（调参通知、活性告警、队列容量告警），可通过 notifyItems 自定义配置项值，默认全部开启</li>
</ol>
</div>
</div></template>


