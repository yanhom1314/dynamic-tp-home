<template><div><p><strong>任务包装</strong></p>
<ol>
<li>
<p>MdcTaskWrapper 支持 MDC 上下文传递，名称：mdc</p>
</li>
<li>
<p>TtlTaskWrapper 支持 ThreadLocal 上下文传递，名称：ttl</p>
</li>
<li>
<p>SwTraceTaskWrapper 支持 skywalking TID 传递，名称：swTrace</p>
</li>
<li>
<p>NamedRunnable 支持给任务添加名称</p>
</li>
<li>
<p>可以继承 TaskWrapper 接口自定义任务包装器</p>
</li>
</ol>
<p><strong>使用方法</strong></p>
<ol>
<li>
<p>MdcTaskWrapper、TtlTaskWrapper、NamedRunnable 在 core 包中，不需要引入其他依赖</p>
</li>
<li>
<p>SwTraceTaskWrapper 是 extension 模块提供扩展，需要引入依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>cn.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-extension-skywalking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>线程池配置文件加如下配置项</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">executors</span><span class="token punctuation">:</span>                                         <span class="token comment"># 动态线程池配置，省略其他项，具体看上述配置文件</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> dtpExecutor1
          <span class="token key atrule">taskWrapperNames</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"ttl"</span><span class="token punctuation">,</span> <span class="token string">"mdc"</span><span class="token punctuation">,</span> <span class="token string">"swTrace"</span><span class="token punctuation">]</span>    <span class="token comment"># 任务包装器名称，继承TaskWrapper接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>
