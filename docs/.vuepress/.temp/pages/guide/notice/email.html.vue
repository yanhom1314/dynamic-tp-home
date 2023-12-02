<template><div><h3 id="邮件通知" tabindex="-1"><a class="header-anchor" href="#邮件通知" aria-hidden="true">#</a> 邮件通知</h3>
<ol>
<li>
<p>框架 core 模块默认集成企微、钉钉、飞书通知渠道，可直接使用，邮件通知需要单独引入下面依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-extension-notify-email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>加入邮件相关配置</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token comment"># email notify configuration</span>
  <span class="token key atrule">mail</span><span class="token punctuation">:</span>
    <span class="token comment"># (optional) email subject, default:ThreadPool Notify</span>
    <span class="token key atrule">title</span><span class="token punctuation">:</span> ThreadPool Notify
    <span class="token comment"># mail service address</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> smtp.qq.com
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">465</span>
    <span class="token comment"># send from</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> 123456@qq.com
    <span class="token comment"># authorization code eg: rlpadadtcugh4152e</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> xxxxxxxxxxxxxxxx
    <span class="token key atrule">default-encoding</span><span class="token punctuation">:</span> UTF<span class="token punctuation">-</span><span class="token number">8</span>
    <span class="token key atrule">properties</span><span class="token punctuation">:</span>
      <span class="token key atrule">mail</span><span class="token punctuation">:</span>
        <span class="token key atrule">smtp</span><span class="token punctuation">:</span>
          <span class="token key atrule">socketFactoryClass</span><span class="token punctuation">:</span> javax.net.ssl.SSLSocketFactory
          <span class="token key atrule">ssl</span><span class="token punctuation">:</span>
            <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>效果图</p>
</li>
</ol>
<figure><img src="/images/dynamictp/email.png" alt="email" tabindex="0" loading="lazy"><figcaption>email</figcaption></figure>
</div></template>


