<template><div><h3 id="线程池定义" tabindex="-1"><a class="header-anchor" href="#线程池定义" aria-hidden="true">#</a> 线程池定义</h3>
<p>建议直接配置在配置中心，但是如果想后期再添加到配置中心，可以先用 @Bean 编码式声明（方便 Spring 依赖注入）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolConfiguration</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">DynamicTp</span></span><span class="token punctuation">}</span> 注解定义普通juc线程池，会享受到该框架增强能力，注解名称优先级高于方法名
   *
   * <span class="token keyword">@return</span> 线程池实例
   */</span>
  <span class="token annotation punctuation">@DynamicTp</span><span class="token punctuation">(</span><span class="token string">"jucThreadPoolExecutor"</span><span class="token punctuation">)</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span> <span class="token function">jucThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">)</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">DynamicTp</span></span><span class="token punctuation">}</span> 注解定义spring线程池，会享受到该框架增强能力，注解名称优先级高于方法名
   *
   * <span class="token keyword">@return</span> 线程池实例
   */</span>
  <span class="token annotation punctuation">@DynamicTp</span><span class="token punctuation">(</span><span class="token string">"threadPoolTaskExecutor"</span><span class="token punctuation">)</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ThreadPoolTaskExecutor</span> <span class="token function">threadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">ThreadPoolCreator</span></span><span class="token punctuation">}</span> 快速创建一些简单配置的线程池，使用默认参数
   * tips: 建议直接在配置中心配置就行，不用@Bean声明
   *
   * <span class="token keyword">@return</span> 线程池实例
   */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">DtpExecutor</span> <span class="token function">dtpExecutor0</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ThreadPoolCreator</span><span class="token punctuation">.</span><span class="token function">createDynamicFast</span><span class="token punctuation">(</span><span class="token string">"dtpExecutor0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">ThreadPoolBuilder</span></span><span class="token punctuation">}</span> 设置详细参数创建动态线程池
   * tips: 建议直接在配置中心配置就行，不用@Bean声明
   * <span class="token keyword">@return</span> 线程池实例
   */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span> <span class="token function">dtpExecutor1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ThreadPoolBuilder</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadPoolName</span><span class="token punctuation">(</span><span class="token string">"dtpExecutor1"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadFactory</span><span class="token punctuation">(</span><span class="token string">"test-dtp-common"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">corePoolSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">maximumPoolSize</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">keepAliveTime</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">timeUnit</span><span class="token punctuation">(</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">workQueue</span><span class="token punctuation">(</span><span class="token constant">MEMORY_SAFE_LINKED_BLOCKING_QUEUE</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">buildDynamic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">ThreadPoolBuilder</span></span><span class="token punctuation">}</span> 设置详细参数创建动态线程池
   * eager，参考tomcat线程池设计，适用于处理io密集型任务场景，具体参数可以看代码注释
   * tips: 建议直接在配置中心配置就行，不用@Bean声明
   * <span class="token keyword">@return</span> 线程池实例
   */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">DtpExecutor</span> <span class="token function">eagerDtpExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ThreadPoolBuilder</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadPoolName</span><span class="token punctuation">(</span><span class="token string">"eagerDtpExecutor"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadFactory</span><span class="token punctuation">(</span><span class="token string">"test-eager"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">corePoolSize</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">maximumPoolSize</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">queueCapacity</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">eager</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">buildDynamic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">ThreadPoolBuilder</span></span><span class="token punctuation">}</span> 设置详细参数创建动态线程池
   * ordered，适用于处理有序任务场景，任务要实现Ordered接口，具体参数可以看代码注释
   * tips: 建议直接在配置中心配置就行，不用@Bean声明
   * <span class="token keyword">@return</span> 线程池实例
   */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">OrderedDtpExecutor</span> <span class="token function">orderedDtpExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ThreadPoolBuilder</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadPoolName</span><span class="token punctuation">(</span><span class="token string">"orderedDtpExecutor"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadFactory</span><span class="token punctuation">(</span><span class="token string">"test-ordered"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">corePoolSize</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">maximumPoolSize</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">queueCapacity</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">buildOrdered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">ThreadPoolBuilder</span></span><span class="token punctuation">}</span> 设置详细参数创建线程池
   * scheduled，适用于处理定时任务场景，具体参数可以看代码注释
   * tips: 建议直接在配置中心配置就行，不用@Bean声明
   * <span class="token keyword">@return</span> 线程池实例
   */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ScheduledExecutorService</span> <span class="token function">scheduledDtpExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ThreadPoolBuilder</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadPoolName</span><span class="token punctuation">(</span><span class="token string">"scheduledDtpExecutor"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">corePoolSize</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">threadFactory</span><span class="token punctuation">(</span><span class="token string">"test-scheduled"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">rejectedExecutionHandler</span><span class="token punctuation">(</span><span class="token constant">CALLER_RUNS_POLICY</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">buildScheduled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码引用" tabindex="-1"><a class="header-anchor" href="#代码引用" aria-hidden="true">#</a> 代码引用</h3>
<p>从 DtpRegistry 中根据线程池名称获取，或者通过依赖注入方式（推荐，更优雅）</p>
<ul>
<li>
<p>依赖注入方式使用，优先推荐依赖注入方式，不能使用依赖注入的场景可以使用方式2</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Resource</span>
<span class="token keyword">private</span> <span class="token class-name">ThreadPoolExecutor</span> dtpExecutor1<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   dtpExecutor1<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>从 DtpRegistry 注册器获取（接口场景可用）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">DtpExecutor</span> dtpExecutor <span class="token operator">=</span> <span class="token class-name">DtpRegistry</span><span class="token punctuation">.</span><span class="token function">getDtpExecutor</span><span class="token punctuation">(</span><span class="token string">"dtpExecutor1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   dtpExecutor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>更详细使用实例请参考 <code v-pre>example</code> 工程</p>
</li>
</ul>
</div></template>


