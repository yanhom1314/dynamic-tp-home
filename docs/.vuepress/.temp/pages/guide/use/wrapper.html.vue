<template><div><h3 id="任务包装器" tabindex="-1"><a class="header-anchor" href="#任务包装器" aria-hidden="true">#</a> 任务包装器</h3>
<p>提供了一些任务包装器，可以实现特定的功能</p>
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
<p>可以继承 TaskWrapper 接口自定义任务包装器</p>
</li>
</ol>
</blockquote>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>
<ol>
<li>
<p>MdcTaskWrapper、TtlTaskWrapper、NamedRunnable 在 core 包中，不需要引入其他依赖</p>
</li>
<li>
<p>SwTraceTaskWrapper 是 extension 模块提供的扩展，需要引入依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-extension-skywalking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>OpenTelemetryWrapper 是 extension 模块提供的扩展，需要引入依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-extension-opentelemetry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>线程池配置文件加如下配置项</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">executors</span><span class="token punctuation">:</span>                                         <span class="token comment"># 动态线程池配置，省略其他项，具体看上述配置文件</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> dtpExecutor1
          <span class="token key atrule">taskWrapperNames</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"ttl"</span><span class="token punctuation">,</span> <span class="token string">"mdc"</span><span class="token punctuation">,</span> <span class="token string">"swTrace"</span><span class="token punctuation">,</span> <span class="token string">"OTel"</span><span class="token punctuation">]</span>    <span class="token comment"># 任务包装器名称，继承 TaskWrapper 接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


