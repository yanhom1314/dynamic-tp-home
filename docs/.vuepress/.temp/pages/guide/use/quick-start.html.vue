<template><div><h3 id="接入步骤" tabindex="-1"><a class="header-anchor" href="#接入步骤" aria-hidden="true">#</a> 接入步骤</h3>
<blockquote>
<ol>
<li>
<p>引入相应配置中心的依赖 <RouterLink to="/guide/configcenter/apollo/#maven%E4%BE%9D%E8%B5%96">maven 依赖</RouterLink></p>
</li>
<li>
<p>配置中心配置线程池实例 <RouterLink to="/guide/configcenter/apollo/#%E7%BA%BF%E7%A8%8B%E6%B1%A0%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">配置文件</RouterLink></p>
</li>
<li>
<p>启动类加 @EnableDynamicTp 注解</p>
</li>
<li>
<p>使用 @Resource 或 @Autowired 进行依赖注入，或通过 DtpRegistry.getExecutor(&quot;name&quot;) 获取</p>
</li>
<li>
<p>通过以上 4 步就可以接入使用了，是不是感觉超级简单呀</p>
</li>
</ol>
</blockquote>
<h3 id="日志输出" tabindex="-1"><a class="header-anchor" href="#日志输出" aria-hidden="true">#</a> 日志输出</h3>
<div class="hint-container tip">
<p class="hint-container-title">启动日志输出</p>
<p>服务启动看到有如下日志输出说明接入成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token operator">|</span>  __ <span class="token punctuation">\</span>                            <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">|</span>__   __<span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span>_   _ _ __   __ _ _ __ ___  _  ___<span class="token operator">|</span> <span class="token operator">|</span>_ __
<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token string">'_ \ / _` | '</span>_ ` _ <span class="token operator">|</span> <span class="token operator">|</span>/ __<span class="token operator">|</span> <span class="token operator">|</span> '_ <span class="token punctuation">\</span>
<span class="token operator">|</span> <span class="token operator">|</span>__<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>__<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">|</span>_____/ __, <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>__,_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span>___<span class="token operator">|</span>_<span class="token operator">|</span> .__/
         __/ <span class="token operator">|</span>                              <span class="token operator">|</span> <span class="token operator">|</span>
        <span class="token operator">|</span>___/                               <span class="token operator">|</span>_<span class="token operator">|</span>
 :: Dynamic Thread Pool ::

DynamicTp register executor: TpMainFields<span class="token punctuation">(</span>threadPoolName<span class="token operator">=</span>dtpExecutor1, <span class="token assign-left variable">corePoolSize</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">maxPoolSize</span><span class="token operator">=</span><span class="token number">10</span>, <span class="token assign-left variable">keepAliveTime</span><span class="token operator">=</span><span class="token number">50</span>, <span class="token assign-left variable">queueType</span><span class="token operator">=</span>TaskQueue, <span class="token assign-left variable">queueCapacity</span><span class="token operator">=</span><span class="token number">200</span>, <span class="token assign-left variable">rejectType</span><span class="token operator">=</span>CallerRunsPolicy, <span class="token assign-left variable">allowCoreThreadTimeOut</span><span class="token operator">=</span>false<span class="token punctuation">)</span>, source: beanPostProcessor

DtpRegistry has been initialized, remote executors: <span class="token punctuation">[</span>dtpExecutor1<span class="token punctuation">]</span>, <span class="token builtin class-name">local</span> executors: <span class="token punctuation">[</span>ioIntensiveExecutor, commonExecutor, dtpExecutor2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ol>
<li>
<p>普通 JUC 线程池或者 Spring 线程池想要被框架管理，可以 @Bean 定义时加 @DynamicTp 注解</p>
</li>
<li>
<p>动态线程池实例服务启动时会根据配置中心的配置动态注册到 Spring 容器中，建议不要用 @Bean 编程式重复声明同一线程池实例，直接配置在配置中心就行</p>
</li>
<li>
<p>阻塞队列只有 VariableLinkedBlockingQueue 及其子类可以修改 capacity，该类型功能和 LinkedBlockingQueue 相似， 只是 capacity 不是
final 类型，可以修改，VariableLinkedBlockingQueue 参考 RabbitMq 的实现</p>
</li>
</ol>
</div>
</div></template>


