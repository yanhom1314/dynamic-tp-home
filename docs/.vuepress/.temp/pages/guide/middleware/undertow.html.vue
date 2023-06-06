<template><div><h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>
<ol>
<li>引入下述依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-adapter-webserver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置文件中配置 undertow 线程池</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>          <span class="token comment"># 是否开启监控指标采集，默认false</span>
      <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer    <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging），默认micrometer</span>
      <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>            <span class="token comment"># 监控时间间隔（报警判断、指标采集），默认5s</span>
      <span class="token key atrule">undertowTp</span><span class="token punctuation">:</span>                                  <span class="token comment"># undertow webserver线程池配置</span>
        <span class="token key atrule">corePoolSize</span><span class="token punctuation">:</span> <span class="token number">100</span>
        <span class="token key atrule">maximumPoolSize</span><span class="token punctuation">:</span> <span class="token number">200</span>
        <span class="token key atrule">keepAliveTime</span><span class="token punctuation">:</span> <span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>启动日志</li>
</ol>
<p>服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>DynamicTp adapter, web server executor init end, executor: org.xnio.nio.NioXnioWorker@17ce31c   
DynamicTp adapter <span class="token punctuation">[</span>undertowTp<span class="token punctuation">]</span> refreshed end, corePoolSize: <span class="token punctuation">[</span><span class="token number">10</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">]</span>, maxPoolSize: <span class="token punctuation">[</span><span class="token number">200</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">200</span><span class="token punctuation">]</span>, keepAliveTime: <span class="token punctuation">[</span><span class="token number">60</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">60</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>线程池名称：undertowTp</li>
<li>undertow 线程池享有动态调参、监控、通知告警完整的功能</li>
<li>undertow 内部使用 xnio 网络框架，类似 netty</li>
</ol>
</div>
</div></template>


