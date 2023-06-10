<template><div><h3 id="hertzbeat-介绍" tabindex="-1"><a class="header-anchor" href="#hertzbeat-介绍" aria-hidden="true">#</a> HertzBeat 介绍</h3>
<blockquote>
<p>HertzBeat 是一款开源，易用友好的实时监控系统，无需Agent，拥有强大自定义监控能力。</p>
</blockquote>
<ul>
<li>支持对应用服务，数据库，操作系统，中间件，云原生等监控，阈值告警，告警通知(邮件微信钉钉飞书短信 Slack Discord Telegram)。</li>
<li>其将Http,Jmx,Ssh,Snmp,Jdbc等协议规范可配置化，只需配置YML就能使用这些协议去自定义采集任何您想要采集的指标。您相信只需配置YML就能立刻适配一个K8s或Docker等新的监控类型吗？</li>
<li>HertzBeat 的强大自定义，多类型支持，易扩展，低耦合，希望能帮助开发者和中小团队快速搭建自有监控系统。</li>
</ul>
<h3 id="在-hertzbeat-5分钟搞定监控-dynamictp" tabindex="-1"><a class="header-anchor" href="#在-hertzbeat-5分钟搞定监控-dynamictp" aria-hidden="true">#</a> 在 HertzBeat 5分钟搞定监控 DynamicTp</h3>
<h4 id="操作前提-您已拥有-dynamictp-环境和-hertzbeat-环境。" tabindex="-1"><a class="header-anchor" href="#操作前提-您已拥有-dynamictp-环境和-hertzbeat-环境。" aria-hidden="true">#</a> 操作前提，您已拥有 DynamicTp 环境和 HertzBeat 环境。</h4>
<ul>
<li>DynamicTp <a href="https://dynamictp.cn/guide/use/quick-start.html" target="_blank" rel="noopener noreferrer">集成接入文档<ExternalLinkIcon/></a></li>
<li>HertzBeat <a href="https://hertzbeat.com/docs/start/docker-deploy" target="_blank" rel="noopener noreferrer">部署安装文档<ExternalLinkIcon/></a></li>
</ul>
<h4 id="一-在-dynamictp-端暴露出dynamictp指标接口-actuator-dynamic-tp-它将提供-metrics-接口数据。" tabindex="-1"><a class="header-anchor" href="#一-在-dynamictp-端暴露出dynamictp指标接口-actuator-dynamic-tp-它将提供-metrics-接口数据。" aria-hidden="true">#</a> 一. 在 DynamicTp 端暴露出<code v-pre>DynamicTp</code>指标接口 <code v-pre>/actuator/dynamic-tp</code>，它将提供 metrics 接口数据。</h4>
<ol>
<li>开启 SpringBoot Actuator Endpoint 暴露出<code v-pre>DynamicTp</code>指标接口</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">'*'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>重启后测试访问指标接口 <code v-pre>ip:port/actuator/dynamic-tp</code> 是否有响应json数据如下:</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"poolName"</span><span class="token operator">:</span> <span class="token string">"commonExecutor"</span><span class="token punctuation">,</span>
    <span class="token property">"corePoolSize"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"maximumPoolSize"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"queueType"</span><span class="token operator">:</span> <span class="token string">"LinkedBlockingQueue"</span><span class="token punctuation">,</span>
    <span class="token property">"queueCapacity"</span><span class="token operator">:</span> <span class="token number">2147483647</span><span class="token punctuation">,</span>
    <span class="token property">"queueSize"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"fair"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"queueRemainingCapacity"</span><span class="token operator">:</span> <span class="token number">2147483647</span><span class="token punctuation">,</span>
    <span class="token property">"activeCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"taskCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"completedTaskCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"largestPoolSize"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"poolSize"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"waitTaskCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"rejectCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"rejectHandlerName"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"dynamic"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"runTimeoutCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"queueTimeoutCount"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"maxMemory"</span><span class="token operator">:</span> <span class="token string">"4 GB"</span><span class="token punctuation">,</span>
    <span class="token property">"totalMemory"</span><span class="token operator">:</span> <span class="token string">"444 MB"</span><span class="token punctuation">,</span>
    <span class="token property">"freeMemory"</span><span class="token operator">:</span> <span class="token string">"250.34 MB"</span><span class="token punctuation">,</span>
    <span class="token property">"usableMemory"</span><span class="token operator">:</span> <span class="token string">"3.81 GB"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二-在-hertzbeat-监控页面添加-dynamictp-线程池监控" tabindex="-1"><a class="header-anchor" href="#二-在-hertzbeat-监控页面添加-dynamictp-线程池监控" aria-hidden="true">#</a> 二. 在 HertzBeat 监控页面添加 DynamicTp 线程池监控</h4>
<ol>
<li>点击新增 DynamicTp 监控</li>
</ol>
<p>路径：菜单 -&gt; 中间件监控 -&gt; DynamicTp监控 -&gt; 新增DynamicTp监控</p>
<figure><img src="/images/hertzbeat/monitor-dynamic-tp-1.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<ol start="2">
<li>配置监控 DynamicTp 所需参数</li>
</ol>
<p>在监控页面填写 DynamicTp <strong>服务IP</strong>，<strong>监控端口</strong>(默认8080)，最后点击确定添加即可。<br>
其他参数如<strong>采集间隔</strong>，<strong>超时时间</strong>等可以参考<a href="https://hertzbeat.com/docs/help/dynamic_tp/" target="_blank" rel="noopener noreferrer">帮助文档<ExternalLinkIcon/></a> https://hertzbeat.com/docs/help/dynamic_tp/</p>
<figure><img src="/images/hertzbeat/monitor-dynamic-tp-2.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<ol start="3">
<li>完成✅,现在我们已经添加好对 DynamicTp 的监控了，查看监控列表即可看到我们的添加项。</li>
</ol>
<figure><img src="/images/hertzbeat/monitor-dynamic-tp-1.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<ol start="4">
<li>点击监控列表项的<strong>操作</strong>-&gt;<strong>监控详情图标</strong> 即可浏览 DynamicTp线程池 的实时监控指标数据。</li>
</ol>
<figure><img src="/images/hertzbeat/monitor-dynamic-tp-3.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<ol start="5">
<li>点击<strong>监控历史详情TAB</strong> 即可浏览 DynamicTp线程池 的历史监控指标数据图表📈。</li>
</ol>
<figure><img src="/images/hertzbeat/monitor-dynamic-tp-4.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<figure><img src="/images/hertzbeat/monitor-dynamic-tp-5.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<p><strong>DONE！完成啦！通过上面几步，总结起来其实也就只用两步</strong></p>
<ul>
<li><strong>第一步暴露 DynamicTp 端<code v-pre>metrics</code>端点<code v-pre>/actuator/dynamic-tp</code></strong></li>
<li><strong>第二步在 HertzBeat 监控页面配置IP端口添加监控即可</strong></li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>通过上面的两步我们就完成了对 DynamicTp 的监控，我们可以在 HertzBeat 随时查看监控详情指标信息来观测其服务状态。
当然只是看肯定是不完美的，监控往往伴随着告警阈值，当 DynamicTp 的线程池指标超出我们的期望值或异常时，能及时的通知到我们对应的负责人，负责人收到通知处理问题，这样才是一个完整的监控告警流程。</p>
</div>
<p><strong>接下来我们就来一步一步演示如何配置 HertzBeat 系统里的阈值告警通知，让 DynamicTp线程池 的指标异常时，及时通知给我们</strong></p>
<h4 id="三-在-hertzbeat-系统添加-dynamictp线程池-指标阈值告警" tabindex="-1"><a class="header-anchor" href="#三-在-hertzbeat-系统添加-dynamictp线程池-指标阈值告警" aria-hidden="true">#</a> 三. 在 HertzBeat 系统添加 DynamicTp线程池 指标阈值告警</h4>
<ol>
<li>对某个重要指标配置告警阈值</li>
</ol>
<p>路径：菜单 -&gt; 告警阈值 -&gt; 新增阈值</p>
<ul>
<li>选择配置的指标对象，DynamicTp监控主要是一些线程池相关指标，我们举例对 <code v-pre>运行超时线程数量</code> <code v-pre>thread_pool_running</code> -&gt; <code v-pre>run_timeout_count</code> 这个指标进行阈值设置， 当线程运行超时数量大于1时发出告警。</li>
<li>这里我们就配置当此指标<code v-pre>thread_pool_running</code> 的 <code v-pre>run_timeout_count&gt;1</code> 时发出告警，告警级别为<strong>严重告警</strong>，三次即触发，具体如下图。</li>
</ul>
<figure><img src="/images/hertzbeat/monitor-dynamic-tp-6.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<ol start="2">
<li>新增消息通知接收人</li>
</ol>
<blockquote>
<p>配置接收人，让告警消息知道要发给谁，用什么方式发。</p>
</blockquote>
<p>路径：菜单 -&gt; 告警通知 -&gt; 告警接收人 -&gt; 新增接收人</p>
<p>消息通知方式支持 <strong>邮件，钉钉，企业微信，飞书，WebHook，短信</strong>等，我们这里以常用的钉钉为例。</p>
<ul>
<li>参照此<a href="https://hertzbeat.com/docs/help/alert_dingtalk" target="_blank" rel="noopener noreferrer">帮助文档<ExternalLinkIcon/></a> https://hertzbeat.com/docs/help/alert_dingtalk 在钉钉端配置机器人，设置安全自定义关键词<code v-pre>HertzBeat</code>，获取对应<code v-pre>access_token</code>值。</li>
<li>在 HertzBeat 配置接收人参数如下。</li>
</ul>
<p>【告警通知】-&gt;【新增接收人】 -&gt;【选择钉钉机器人通知方式】-&gt;【设置钉钉机器人ACCESS_TOKEN】-&gt; 【确定】</p>
<figure><img src="/images/hertzbeat/alert-notice-1.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<ol start="3">
<li>配置关联的告警通知策略⚠️ 【新增通知策略】-&gt; 【将刚设置的接收人关联】-&gt; 【确定】</li>
</ol>
<blockquote>
<p>配置告警通知策略，让告警消息与接收人绑定，这样就能决定哪些告警发给哪个人。</p>
</blockquote>
<figure><img src="/images/hertzbeat/alert-notice-2.png" alt="hertzbeat" tabindex="0" loading="lazy"><figcaption>hertzbeat</figcaption></figure>
<h3 id="完毕-现在坐等告警消息过来啦。叮叮叮叮" tabindex="-1"><a class="header-anchor" href="#完毕-现在坐等告警消息过来啦。叮叮叮叮" aria-hidden="true">#</a> 完毕，现在坐等告警消息过来啦。叮叮叮叮</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[HertzBeat告警通知]
告警目标对象 : dynamic_tp.thread_pool_running.run_timeout_count
所属监控ID : 205540620349493
所属监控名称 : DynamicTp_localhost
告警级别 : 严重告警
告警触发时间 : 2023-02-02 22:17:06
内容详情 : DynamicTp has run timeout thread, count is 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这篇实践文章带我们体验了如何使用 HertzBeat 监控 DynamicTp线程池 指标数据，可以发现集 <code v-pre>监控-告警-通知</code> 的 HertzBeat 在操作与使用方面更加的便捷，只需页面上简单点一点就能把 DynamicTp线程池 纳入监控并告警通知，再也不需要部署多个组件写YML配置文件那些繁琐操作了。</p>
</div>
<p>DynamicTp Github: https://github.com/dromara/dynamic-tp<br>
HertzBeat Github: https://github.com/dromara/hertzbeat</p>
<p><strong>欢迎了解使用Star支持哦！</strong></p>
<p>只需要一条docker命令即可安装体验heartbeat ：<br>
<code v-pre>docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat</code></p>
</div></template>


