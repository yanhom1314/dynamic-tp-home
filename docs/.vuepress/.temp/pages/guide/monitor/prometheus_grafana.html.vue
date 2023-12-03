<template><div><h3 id="集成步骤" tabindex="-1"><a class="header-anchor" href="#集成步骤" aria-hidden="true">#</a> 集成步骤</h3>
<p>这块要讲的是集成 prometheus+grafana 做监控，事先你得安装好 prometheus+grafana，这个就不展开讲了，网上教程很多，测试使用可以直接用 docker 安装，非常简单，安装完之后接着往下看。</p>
<ol>
<li>首先线程池配置文件中开启 micrometer 数据采集</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>   <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
   <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>项目中引入 micrometer-prometheus 依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.micrometer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>micrometer-registry-prometheus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>开启 prometheus 指标采集端点</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
    <span class="token key atrule">export</span><span class="token punctuation">:</span>
      <span class="token key atrule">prometheus</span><span class="token punctuation">:</span> 
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">'*'</span>   <span class="token comment"># 测试使用，线上不要用*，按需开启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>配置 prometheus 数据采集 job，这块可以去了解下他的 SD 机制（Service Discovery），也就是自动到注册中心发现服务，看你所用的注册中心支不支持这种方式，<a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config" target="_blank" rel="noopener noreferrer">可以去官网查看<ExternalLinkIcon/></a>，k8s，ZK，Eureka、Consul 等都是支持的。这里使用 static_configs 方式，简单的指定地址的静态配置</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">'prometheus'</span>
    <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> <span class="token string">'/actuator/prometheus'</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'192.168.2.104:9098'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>job 配置后 prometheus 管理台看到如下图所示，说明已经开始正常采集指标配置</p>
<figure><img src="/images/dynamictp/prometheus.png" alt="采集指标" tabindex="0" loading="lazy"><figcaption>采集指标</figcaption></figure>
<ol start="5">
<li>然后就是配置 grafana 数据可视化，配置如下图，需要该 pannel 配置 Json 的可以加我发你，到这里监控就搭建起来了，其实也很简单，然后就可以实时监控线程池数据指标变动了</li>
</ol>
<p><img src="/images/dynamictp/monitor1.jpg" alt="监控数据1" loading="lazy">
<img src="/images/dynamictp/monitor2.jpg" alt="监控数据2" loading="lazy">
<img src="/images/dynamictp/monitor3.jpg" alt="监控数据3" loading="lazy"></p>
<ol start="6">
<li>重新修改下每个 pannel 的数据源，这样才会正确显示监控数据；或者替换 json 中的 uid 为你自己的数据源 id</li>
</ol>
<figure><img src="/images/dynamictp/grafana_datasource.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
</div></template>


