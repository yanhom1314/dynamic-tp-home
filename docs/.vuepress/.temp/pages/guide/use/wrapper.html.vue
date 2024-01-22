<template><div><h3 id="任务包装器" tabindex="-1"><a class="header-anchor" href="#任务包装器" aria-hidden="true">#</a> 任务包装器</h3>
<p>框架默认提供了一些任务包装器，可以实现特定的功能</p>
<blockquote>
<ol>
<li>
<p>MdcTaskWrapper 支持 MDC 上下文传递，名称：mdc</p>
</li>
<li>
<p>TtlTaskWrapper 支持 ThreadLocal 上下文传递，名称：ttl</p>
</li>
<li>
<p>SwTraceTaskWrapper 支持 Skywalking TID 传递，名称：swTrace</p>
</li>
<li>
<p>OpenTelemetryWrapper，支持 OpenTelemetry 上下文传递，名称：OTel</p>
</li>
<li>
<p>NamedRunnable 支持给任务添加名称</p>
</li>
<li>
<p>可以继承 TaskWrapper SPI 接口自定义任务包装器</p>
</li>
</ol>
</blockquote>
<h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h3>
<ol>
<li>
<p>MdcTaskWrapper、TtlTaskWrapper、NamedRunnable 在 core 包中，不需要引入其他依赖</p>
</li>
<li>
<p>SwTraceTaskWrapper 是 extension 模块提供的扩展，需要引入依赖</p>
</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-extension-skywalking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.6.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>OpenTelemetryWrapper 是 extension 模块提供的扩展，需要引入依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-extension-opentelemetry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.6.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>自定义 TaskWrapper 示例</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>example<span class="token punctuation">.</span>wrapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>core<span class="token punctuation">.</span>support<span class="token punctuation">.</span>task<span class="token punctuation">.</span>wrapper<span class="token punctuation">.</span></span><span class="token class-name">TaskWrapper</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * CustomTaskWrapper related
 *
 * <span class="token keyword">@author</span> yanhom
 * <span class="token keyword">@since</span> 1.1.0
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomTaskWrapper</span> <span class="token keyword">implements</span> <span class="token class-name">TaskWrapper</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">"custom"</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Runnable</span> <span class="token function">wrap</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> runnable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span>runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

      <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Runnable</span> runnable<span class="token punctuation">;</span>

      <span class="token keyword">public</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> runnable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>runnable <span class="token operator">=</span> runnable<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"before run"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         runnable<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"after run"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resources/META-INF/services 下配置 java spi 实现</p>
<p>文件名：org.dromara.dynamictp.core.support.task.wrapper.TaskWrapper</p>
<p>文件值：org.dromara.dynamictp.example.wrapper.CustomTaskWrapper</p>
<figure><img src="/images/dynamictp/spi-wrapper.png" alt="图片.png" tabindex="0" loading="lazy"><figcaption>图片.png</figcaption></figure>
<ol start="5">
<li>线程池配置文件加如下配置项</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">executors</span><span class="token punctuation">:</span>                                         <span class="token comment"># 动态线程池配置，省略其他项，具体看上述配置文件</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> dtpExecutor1
          <span class="token key atrule">taskWrapperNames</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"ttl"</span><span class="token punctuation">,</span> <span class="token string">"mdc"</span><span class="token punctuation">,</span> <span class="token string">"swTrace"</span><span class="token punctuation">,</span> <span class="token string">"custom"</span><span class="token punctuation">]</span>    <span class="token comment"># 任务包装器名称，继承 TaskWrapper 接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


