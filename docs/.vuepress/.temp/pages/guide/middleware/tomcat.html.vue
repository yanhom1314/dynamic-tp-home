<template><div><h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>
<ol>
<li>引入下述依赖</li>
</ol>
<p>SpringBoot1x、2x 用此依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-adapter-webserver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.6.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringBoot3x 用此依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-adapter-webserver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.6.1-3.x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置文件中配置 tomcat 线程池</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>          <span class="token comment"># 是否开启监控指标采集，默认false</span>
      <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer    <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer</span>
      <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>            <span class="token comment"># 监控时间间隔（报警判断、指标采集），默认5s</span>
      <span class="token key atrule">tomcatTp</span><span class="token punctuation">:</span>                                    <span class="token comment"># tomcat webserver 线程池配置</span>
        <span class="token key atrule">threadPoolAliasName</span><span class="token punctuation">:</span> tomcat 线程池          <span class="token comment"># 线程池别名，可选</span>
        <span class="token key atrule">corePoolSize</span><span class="token punctuation">:</span> <span class="token number">100</span>
        <span class="token key atrule">maximumPoolSize</span><span class="token punctuation">:</span> <span class="token number">200</span>
        <span class="token key atrule">keepAliveTime</span><span class="token punctuation">:</span> <span class="token number">60</span>
        <span class="token key atrule">runTimeout</span><span class="token punctuation">:</span> <span class="token number">200</span>
        <span class="token key atrule">queueTimeout</span><span class="token punctuation">:</span> <span class="token number">100</span>
        <span class="token key atrule">platformIds</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>               <span class="token comment"># 通知报警平台id，不配置默认拿上层platforms配置的所有平台</span>
        <span class="token key atrule">notifyItems</span><span class="token punctuation">:</span>                     <span class="token comment"># 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）</span>
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> change
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
         
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> capacity               <span class="token comment"># 队列容量使用率，报警项类型，查看源码 NotifyTypeEnum枚举类</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>                <span class="token comment"># 报警阈值，默认70，意思是队列使用率达到70%告警</span>
            <span class="token key atrule">platformIds</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>             <span class="token comment"># 可选配置，本配置优先级 > 所属线程池platformIds > 全局配置platforms</span>
            <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">120</span>                <span class="token comment"># 报警间隔（单位：s），默认120</span>
         
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> liveness               <span class="token comment"># 线程池活性</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>                <span class="token comment"># 报警阈值，默认 70，意思是活性达到70%告警</span>
        
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> reject                 <span class="token comment"># 触发任务拒绝告警</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">100</span>               <span class="token comment"># 默认阈值10</span>
        
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> run_timeout            <span class="token comment"># 任务执行超时告警</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">100</span>               <span class="token comment"># 默认阈值10</span>
       
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> queue_timeout          <span class="token comment"># 任务排队超时告警</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">100</span>               <span class="token comment"># 默认阈值10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>启动日志</li>
</ol>
<p>服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>DynamicTp adapter, web server executor init end, executor: org.apache.tomcat.util.threads.ThreadPoolExecutor@114579e<span class="token punctuation">[</span>Running, pool size <span class="token operator">=</span> <span class="token number">0</span>, active threads <span class="token operator">=</span> <span class="token number">0</span>, queued tasks <span class="token operator">=</span> <span class="token number">0</span>, completed tasks <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span>
DynamicTp adapter <span class="token punctuation">[</span>tomcatTp<span class="token punctuation">]</span> refreshed end, corePoolSize: <span class="token punctuation">[</span><span class="token number">10</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">]</span>, maxPoolSize: <span class="token punctuation">[</span><span class="token number">200</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">200</span><span class="token punctuation">]</span>, keepAliveTime: <span class="token punctuation">[</span><span class="token number">60</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">60</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>线程池名称：tomcatTp</li>
<li>tomcat 线程池享有动态调参、监控、通知告警完整的功能</li>
<li>tomcat 线程池并没用 juc 线程池，自己维护了一个 ThreadPoolExecutor</li>
</ol>
</div>
</div></template>


