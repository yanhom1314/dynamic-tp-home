<template><div><div class="wwads-cn wwads-vertical wwads-sticky" data-id="212" style="max-width: 180px;"><a href="https://wwads.cn/click/bait" target="_blank" rel="sponsored noopener" referrerpolicy="no-referrer-when-downgrade" style="display:none !important;"></a><a href="https://wwads.cn/p/257?utm_source=property-257&amp;utm_medium=banner" onclick="_IsTrustedClick(event)" class="wwads-img" target="_blank" rel="sponsored noopener" referrerpolicy="no-referrer-when-downgrade"><img src="https://cdn.wwads.cn/images/placeholder/130x100.png" width="130" alt="万维广告联盟"></a><div class="wwads-content"><a href="https://wwads.cn/p/257?utm_source=property-257&amp;utm_medium=banner" onclick="_IsTrustedClick(event)" class="wwads-text" target="_blank" rel="sponsored noopener" referrerpolicy="no-referrer-when-downgrade">万维广告是一个高品质的垂直广告网络联盟，一键购买 dynamictp 等流量资源的广告位</a><a href="https://wwads.cn/?utm_source=property-257&amp;utm_medium=footer" class="wwads-poweredby" title="点击了解万维广告联盟" target="_blank"><img class="wwads-logo"><span class="wwads-logo-text">广告</span></a></div><a class="wwads-hide" onclick="parentNode.remove()" title="隐藏广告"><svg class="hide-svg"></svg></a></div>
<p><strong>使用线程池 ThreadPoolExecutor 过程中你是否有以下痛点呢？</strong></p>
<blockquote>
<p>1.代码中创建了一个 ThreadPoolExecutor，但是不知道那几个核心参数设置多少比较合适</p>
<p>2.凭经验设置参数值，上线后发现需要调整，改代码重新发布服务，非常麻烦</p>
<p>3.线程池相对开发人员来说是个黑盒，运行情况不能及时感知到，直到出现问题</p>
</blockquote>
<p>如果你有以上痛点，动态可监控线程池框架（<strong>DynamicTp</strong>）或许能帮助到你。</p>
<p>如果看过 ThreadPoolExecutor 的源码，大概可以知道它对核心参数基本都有提供 set / get 方法以及一些扩展方法，可以在运行时动态修改、获取相应的值，这些方法有：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCorePoolSize</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMaximumPoolSize</span><span class="token punctuation">(</span><span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setKeepAliveTime</span><span class="token punctuation">(</span><span class="token keyword">long</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setThreadFactory</span><span class="token punctuation">(</span><span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRejectedExecutionHandler</span><span class="token punctuation">(</span><span class="token class-name">RejectedExecutionHandler</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">allowCoreThreadTimeOut</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCorePoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMaximumPoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getKeepAliveTime</span><span class="token punctuation">(</span><span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span> <span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">RejectedExecutionHandler</span> <span class="token function">getRejectedExecutionHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">allowsCoreThreadTimeOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">beforeExecute</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Runnable</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterExecute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在大多数的互联网项目其实都会微服务化部署，有一套自己的服务治理体系，微服务组件中的分布式配置中心扮演的就是动态修改配置，
实时生效的角色。那么我们是否可以结合配置中心来做运行时线程池参数的动态调整呢？答案是肯定的，而且配置中心相对都是高可用的，
使用它也不用过于担心配置推送出现问题这类事儿，而且也能减少研发动态线程池组件本身的难度和工作量。</p>
<p><strong>综上，可以总结出以下的背景</strong></p>
<ul>
<li>
<p><strong>广泛性</strong>：在 Java 开发中，想要提高系统性能，线程池已经是一个 90%以上的人都会选择使用的基础工具</p>
</li>
<li>
<p><strong>不确定性</strong>：项目中可能会创建很多线程池，既有 IO 密集型的，也有 CPU 密集型的，但线程池的参数并不好确定；需要有套机制在运行过程中动态去调整参数</p>
</li>
<li>
<p><strong>无感知性</strong>：线程池运行过程中的各项指标一般感知不到；需要有套监控报警机制在事前、事中就能让开发人员感知到线程池的运行状况，及时处理</p>
</li>
<li>
<p><strong>高可用性</strong>：配置变更需要及时推送到客户端，需要有高可用的配置管理推送服务，配置中心是现在大多数互联网系统都会使用的组件，与之结合可以极大提高系统可用性</p>
</li>
</ul>
</div></template>
