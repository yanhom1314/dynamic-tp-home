<template><div><h3 id="推送限流" tabindex="-1"><a class="header-anchor" href="#推送限流" aria-hidden="true">#</a> 推送限流</h3>
<ol>
<li>
<p>默认通知告警是基于单机模式的，服务集群每个节点都会产生通知告警信息进行推送，在集群机器数量很多的情况下同时可能会产生大量的通知告警信息，影响使用体验。</p>
</li>
<li>
<p>1.0.8 版本开始支持集群限流，基于 redis 实现的滑动窗口限流，会限制实际进行推送的节点个数，使用引入以下依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-extension-limiter-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通知项配置 clusterLimit 字段</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">executors</span><span class="token punctuation">:</span>                                         <span class="token comment"># 动态线程池配置，省略其他项，具体看上述配置文件</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> dtpExecutor1
          <span class="token key atrule">taskWrapperNames</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"ttl"</span><span class="token punctuation">,</span> <span class="token string">"mdc"</span><span class="token punctuation">,</span> <span class="token string">"swTrace"</span><span class="token punctuation">]</span>    <span class="token comment"># 任务包装器名称，继承TaskWrapper接口</span>
          <span class="token key atrule">notifyItems</span><span class="token punctuation">:</span>                                   <span class="token comment"># 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警）</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> capacity                             <span class="token comment"># 报警项类型，查看源码 NotifyTypeEnum枚举类</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>                              <span class="token comment"># 报警阈值</span>
              <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">120</span>                              <span class="token comment"># 报警间隔（单位：s）</span>
              <span class="token key atrule">clusterLimit</span><span class="token punctuation">:</span> <span class="token number">1</span>                            <span class="token comment"># 一个报警窗口内，只允许该配置数量的机器进行推送通知，默认为1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


