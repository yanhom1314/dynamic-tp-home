import{_ as n,o as s,c as a,e as t}from"./app-B7pAOsnx.js";const e="/images/dynamictp/spi-collector.png",p={},o=t(`<h3 id="自定义采集类型" tabindex="-1"><a class="header-anchor" href="#自定义采集类型"><span>自定义采集类型</span></a></h3><p>如下示例定义了一个 Es 采集器</p><ol><li>定义 EsCollector 继承 AbstractCollector 抽象类，实现 type() 和 collect() 方法</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>example<span class="token punctuation">.</span>collector</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>common<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">ThreadPoolStats</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">JsonUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>core<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>collector<span class="token punctuation">.</span></span><span class="token class-name">AbstractCollector</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * EsCollector related
 *
 * <span class="token keyword">@author</span> yanhom
 * <span class="token keyword">@since</span> 1.1.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EsCollector</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCollector</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">EsClient</span> esClient<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">EsCollector</span><span class="token punctuation">(</span><span class="token class-name">EsClient</span> esClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>esClient <span class="token operator">=</span> esClient<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">ThreadPoolStats</span> poolStats<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        esClient<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">JsonUtil</span><span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span>poolStats<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>SPI 配置</li></ol><p>resources/META-INF/services 下配置 java spi 实现</p><p>文件名：org.dromara.dynamictp.core.monitor.collector.MetricsCollector</p><p>文件值：org.dromara.dynamictp.example.collector.EsCollector</p><figure><img src="`+e+`" alt="图片.png" tabindex="0" loading="lazy"><figcaption>图片.png</figcaption></figure><ol start="3"><li>配置文件</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>              <span class="token comment"># 是否开启监控指标采集，默认false</span>
      <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer<span class="token punctuation">,</span>es     <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer</span>
      <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>                <span class="token comment"># 监控时间间隔（报警判断、指标采集），默认5s     </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","custom.html.vue"]]),m=JSON.parse('{"path":"/guide/monitor/custom.html","title":"自定义采集","lang":"zh-CN","frontmatter":{"title":"自定义采集","icon":"customize","order":1,"author":"yanhom","date":"2022-06-11T00:00:00.000Z","tag":["自定义采集","dynamictp"],"sticky":true,"star":true,"description":"自定义采集类型 如下示例定义了一个 Es 采集器 定义 EsCollector 继承 AbstractCollector 抽象类，实现 type() 和 collect() 方法 SPI 配置 resources/META-INF/services 下配置 java spi 实现 文件名：org.dromara.dynamictp.core.monit...","head":[["meta",{"property":"og:url","content":"https://gitee.com/dromara/dynamic-tp/guide/monitor/custom.html"}],["meta",{"property":"og:site_name","content":"dynamictp"}],["meta",{"property":"og:title","content":"自定义采集"}],["meta",{"property":"og:description","content":"自定义采集类型 如下示例定义了一个 Es 采集器 定义 EsCollector 继承 AbstractCollector 抽象类，实现 type() 和 collect() 方法 SPI 配置 resources/META-INF/services 下配置 java spi 实现 文件名：org.dromara.dynamictp.core.monit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://gitee.com/dromara/dynamic-tp/images/dynamictp/spi-collector.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-14T16:34:09.000Z"}],["meta",{"property":"article:author","content":"yanhom"}],["meta",{"property":"article:tag","content":"自定义采集"}],["meta",{"property":"article:tag","content":"dynamictp"}],["meta",{"property":"article:published_time","content":"2022-06-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-14T16:34:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义采集\\",\\"image\\":[\\"https://gitee.com/dromara/dynamic-tp/images/dynamictp/spi-collector.png\\"],\\"datePublished\\":\\"2022-06-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-14T16:34:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yanhom\\"}]}"]]},"headers":[{"level":3,"title":"自定义采集类型","slug":"自定义采集类型","link":"#自定义采集类型","children":[]}],"git":{"createdTime":1701608641000,"updatedTime":1705250049000,"contributors":[{"name":"yanhom","email":"yanhom1314@foxmail.com","commits":2},{"name":"kamtohung","email":"kamtohung@gmail.com","commits":1}]},"readingTime":{"minutes":0.66,"words":199},"filePathRelative":"guide/monitor/custom.md","localizedDate":"2022年6月11日","autoDesc":true,"excerpt":"<h3>自定义采集类型</h3>\\n<p>如下示例定义了一个 Es 采集器</p>\\n<ol>\\n<li>定义 EsCollector 继承 AbstractCollector 抽象类，实现 type() 和 collect() 方法</li>\\n</ol>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>dromara<span class=\\"token punctuation\\">.</span>dynamictp<span class=\\"token punctuation\\">.</span>example<span class=\\"token punctuation\\">.</span>collector</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>dromara<span class=\\"token punctuation\\">.</span>dynamictp<span class=\\"token punctuation\\">.</span>common<span class=\\"token punctuation\\">.</span>entity<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">ThreadPoolStats</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>dromara<span class=\\"token punctuation\\">.</span>dynamictp<span class=\\"token punctuation\\">.</span>common<span class=\\"token punctuation\\">.</span>util<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">JsonUtil</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>dromara<span class=\\"token punctuation\\">.</span>dynamictp<span class=\\"token punctuation\\">.</span>core<span class=\\"token punctuation\\">.</span>monitor<span class=\\"token punctuation\\">.</span>collector<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">AbstractCollector</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * EsCollector related\\n *\\n * <span class=\\"token keyword\\">@author</span> yanhom\\n * <span class=\\"token keyword\\">@since</span> 1.1.0\\n */</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">EsCollector</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">AbstractCollector</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">EsClient</span> esClient<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">EsCollector</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">EsClient</span> esClient<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>esClient <span class=\\"token operator\\">=</span> esClient<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">collect</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ThreadPoolStats</span> poolStats<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        esClient<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">save</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">JsonUtil</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toJson</span><span class=\\"token punctuation\\">(</span>poolStats<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"es\\"</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{k as comp,m as data};