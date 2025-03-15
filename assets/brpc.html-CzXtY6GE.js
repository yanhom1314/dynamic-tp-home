import{_ as n,o as a,c as s,e as t}from"./app-B8gNu4K5.js";const e={},p=t(`<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h3><ol><li>引入下述依赖</li></ol><p>SpringBoot1x、2x 用此依赖</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dynamic-tp-spring-boot-starter-adapter-brpc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringBoot3x 用此依赖</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dynamic-tp-spring-boot-starter-adapter-brpc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.0-x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置文件中配置 brpc 线程池</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">dynamictp</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>          <span class="token comment"># 是否开启监控指标采集，默认false</span>
  <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer    <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer</span>
  <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>            <span class="token comment"># 监控时间间隔（报警判断、指标采集），默认5s</span>
  <span class="token key atrule">brpcTp</span><span class="token punctuation">:</span>                                       <span class="token comment"># brpc 线程池配置</span>
    <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> biz1<span class="token comment">#server               # 名称规则：biz_thread_pool_name + &quot;#&quot; + client/server</span>
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
          <span class="token key atrule">platformIds</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>             <span class="token comment"># 可选配置，本配置优先级 &gt; 所属线程池platformIds &gt; 全局配置platforms</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动日志</li></ol><p>服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>DynamicTp adapter, brpc server executors init end, executors: <span class="token punctuation">{</span>rpc<span class="token comment">#server=ExecutorWrapper(threadPoolName=rpc#server, executor=java.util.concurrent.ThreadPoolExecutor@162475a[Running, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], threadPoolAliasName=null, notifyItems=[NotifyItem(platforms=null, enabled=true, type=liveness, threshold=70, interval=120, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=change, threshold=0, interval=1, clusterLimit=1), NotifyItem(platforms=null, enabled=true, type=capacity, threshold=70, interval=120, clusterLimit=1)], notifyEnabled=true)}</span>
DynamicTp brpcServerTp adapter, <span class="token punctuation">[</span>rpc<span class="token comment">#server] refreshed end, changed keys: [corePoolSize, maxPoolSize], corePoolSize: [17 =&gt; 100], maxPoolSize: [500 =&gt; 200], keepAliveTime: [60 =&gt; 60]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>线程池名称规则：biz_thread_pool_name + &quot;#&quot; + client / server（可以在启动日志找输出的线程池名称）</p></li><li><p>brpc 线程池享有动态调参、监控、通知告警完整的功能</p></li><li><p>支持 client / server 端线程池管理</p></li><li><p>队列大小不能调整</p></li></ul></div>`,12),l=[p];function o(c,i){return a(),s("div",null,l)}const r=n(e,[["render",o],["__file","brpc.html.vue"]]),d=JSON.parse('{"path":"/guide/middleware/brpc.html","title":"brpc 线程池管理","lang":"zh-CN","frontmatter":{"title":"brpc 线程池管理","icon":"brpc","order":1,"author":"yanhom","date":"2023-02-11T00:00:00.000Z","tag":["brpc","rpc","dynamictp"],"sticky":true,"star":true,"description":"使用步骤 引入下述依赖 SpringBoot1x、2x 用此依赖 SpringBoot3x 用此依赖 配置文件中配置 brpc 线程池 启动日志 服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知 提示 线程池名称规则：biz_thread_pool_name + \\"#\\" + client / server（可以在启动日志找...","head":[["meta",{"property":"og:url","content":"https://gitee.com/dromara/dynamic-tp/guide/middleware/brpc.html"}],["meta",{"property":"og:site_name","content":"dynamictp"}],["meta",{"property":"og:title","content":"brpc 线程池管理"}],["meta",{"property":"og:description","content":"使用步骤 引入下述依赖 SpringBoot1x、2x 用此依赖 SpringBoot3x 用此依赖 配置文件中配置 brpc 线程池 启动日志 服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知 提示 线程池名称规则：biz_thread_pool_name + \\"#\\" + client / server（可以在启动日志找..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-15T15:33:45.000Z"}],["meta",{"property":"article:author","content":"yanhom"}],["meta",{"property":"article:tag","content":"brpc"}],["meta",{"property":"article:tag","content":"rpc"}],["meta",{"property":"article:tag","content":"dynamictp"}],["meta",{"property":"article:published_time","content":"2023-02-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-15T15:33:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"brpc 线程池管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-11T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-15T15:33:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yanhom\\"}]}"]]},"headers":[{"level":3,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]}],"git":{"createdTime":1677489312000,"updatedTime":1742052825000,"contributors":[{"name":"yanhom","email":"yanhom1314@foxmail.com","commits":18},{"name":"kamtohung","email":"kamtohung@gmail.com","commits":1}]},"readingTime":{"minutes":2.05,"words":614},"filePathRelative":"guide/middleware/brpc.md","localizedDate":"2023年2月11日","autoDesc":true,"excerpt":"<h3>使用步骤</h3>\\n<ol>\\n<li>引入下述依赖</li>\\n</ol>\\n<p>SpringBoot1x、2x 用此依赖</p>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.dromara.dynamictp<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>dynamic-tp-spring-boot-starter-adapter-brpc<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.2.0<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');export{r as comp,d as data};
