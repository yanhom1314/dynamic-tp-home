import{_ as n,o as s,c as a,e as t}from"./app-B7pAOsnx.js";const e="/images/dynamictp/spi-notifier.png",p={},o=t(`<h3 id="自定义通知渠道" tabindex="-1"><a class="header-anchor" href="#自定义通知渠道"><span>自定义通知渠道</span></a></h3><p>如下示例定义了一个短信通知渠道</p><ol><li>定义 SmsNotifier 继承 AbstractNotifier 抽象类，实现 platform() 和 send0() 方法</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsNotifier</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractNotifier</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">SmsClient</span> smsClient<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SmsNotifier</span><span class="token punctuation">(</span><span class="token class-name">SmsClient</span> smsClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>smsClient <span class="token operator">=</span> smsClient<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">platform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;sms&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">send0</span><span class="token punctuation">(</span><span class="token class-name">NotifyPlatform</span> platform<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> receivers <span class="token operator">=</span> platform<span class="token punctuation">.</span><span class="token function">getReceivers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        smsClient<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>platform<span class="token punctuation">.</span><span class="token function">getSecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> receivers<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>定义 SmsDtpNotifier 继承 AbstractDtpNotifier 抽象类，实现 platform()、getNoticeTemplate()、getAlarmTemplate() 和 getColors() 方法</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>example<span class="token punctuation">.</span>notifier</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang3<span class="token punctuation">.</span>tuple<span class="token punctuation">.</span></span><span class="token class-name">Pair</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>core<span class="token punctuation">.</span>notifier<span class="token punctuation">.</span></span><span class="token class-name">AbstractDtpNotifier</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * SmsDtpNotifier related
 *
 * <span class="token keyword">@author</span> yanhom
 * <span class="token keyword">@since</span> 1.1.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsDtpNotifier</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDtpNotifier</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">SmsDtpNotifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SmsNotifier</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SmsClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">platform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;sms&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> <span class="token function">getNoticeTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SmsNotifyConst</span><span class="token punctuation">.</span><span class="token constant">SMS_NOTICE_TEMPLATE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> <span class="token function">getAlarmTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SmsNotifyConst</span><span class="token punctuation">.</span><span class="token constant">SMS_ALARM_TEMPLATE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getColors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>dromara<span class="token punctuation">.</span>dynamictp<span class="token punctuation">.</span>example<span class="token punctuation">.</span>notifier</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * SmsNotifyConst related
 *
 * <span class="token keyword">@author</span> yanhom
 * <span class="token keyword">@since</span> 1.1.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsNotifyConst</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">SmsNotifyConst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SMS_ALARM_TEMPLATE</span> <span class="token operator">=</span>
            <span class="token string">&quot;服务名称：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;实例信息：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;环境：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;线程池名称：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;报警项：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;报警阈值 / 当前值：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;核心线程数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;最大线程数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;当前线程数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;活跃线程数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;历史最大线程数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;任务总数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;执行完成任务数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;等待执行任务数：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;队列类型：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;队列容量：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;队列任务数量：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;队列剩余容量：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;拒绝策略：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;总拒绝任务数量：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;总执行超时任务数量：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;总等待超时任务数量：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;上次报警时间：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;报警时间：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;接收人：@%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;trace 信息：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;报警间隔：%ss \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;扩展信息：%s \\n&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SMS_NOTICE_TEMPLATE</span> <span class="token operator">=</span>
            <span class="token string">&quot;服务名称：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;实例信息：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;环境：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;线程池名称：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;核心线程数：%s =&gt; %s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;最大线程数：%s =&gt; %s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;允许核心线程超时：%s =&gt; %s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;线程存活时间：%ss =&gt; %ss \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;队列类型：%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;队列容量：%s =&gt; %s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;拒绝策略：%s =&gt; %s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;接收人：@%s \\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;通知时间：%s \\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>SPI 配置</li></ol><p>resources/META-INF/services 下配置 java spi 实现</p><p>文件名：org.dromara.dynamictp.core.notifier.DtpNotifier</p><p>文件值：org.dromara.dynamictp.example.notifier.SmsDtpNotifier</p><figure><img src="`+e+`" alt="图片.png" tabindex="0" loading="lazy"><figcaption>图片.png</figcaption></figure><ol start="4"><li>配置文件</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">platforms</span><span class="token punctuation">:</span>                                    <span class="token comment"># 通知报警平台配置</span>
        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> sms                             <span class="token comment"># 平台名称</span>
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> sms1
          <span class="token key atrule">secret</span><span class="token punctuation">:</span> 3a7500<span class="token punctuation">-</span>1287<span class="token punctuation">-</span>4bd<span class="token punctuation">-</span>a798<span class="token punctuation">-</span>c5c3d8b69c   <span class="token comment"># 短信平台密钥</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> <span class="token number">188888888</span><span class="token punctuation">,</span><span class="token number">1666666666</span>           <span class="token comment"># 短信接收人       </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","custom.html.vue"]]),d=JSON.parse('{"path":"/guide/notice/custom.html","title":"自定义通知渠道","lang":"zh-CN","frontmatter":{"title":"自定义通知渠道","icon":"variable","order":1,"author":"yanhom","date":"2022-06-11T00:00:00.000Z","tag":["自定义通知渠道","dynamictp"],"sticky":true,"star":true,"description":"自定义通知渠道 如下示例定义了一个短信通知渠道 定义 SmsNotifier 继承 AbstractNotifier 抽象类，实现 platform() 和 send0() 方法 定义 SmsDtpNotifier 继承 AbstractDtpNotifier 抽象类，实现 platform()、getNoticeTemplate()、getAlarm...","head":[["meta",{"property":"og:url","content":"https://gitee.com/dromara/dynamic-tp/guide/notice/custom.html"}],["meta",{"property":"og:site_name","content":"dynamictp"}],["meta",{"property":"og:title","content":"自定义通知渠道"}],["meta",{"property":"og:description","content":"自定义通知渠道 如下示例定义了一个短信通知渠道 定义 SmsNotifier 继承 AbstractNotifier 抽象类，实现 platform() 和 send0() 方法 定义 SmsDtpNotifier 继承 AbstractDtpNotifier 抽象类，实现 platform()、getNoticeTemplate()、getAlarm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://gitee.com/dromara/dynamic-tp/images/dynamictp/spi-notifier.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-20T16:00:59.000Z"}],["meta",{"property":"article:author","content":"yanhom"}],["meta",{"property":"article:tag","content":"自定义通知渠道"}],["meta",{"property":"article:tag","content":"dynamictp"}],["meta",{"property":"article:published_time","content":"2022-06-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-20T16:00:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义通知渠道\\",\\"image\\":[\\"https://gitee.com/dromara/dynamic-tp/images/dynamictp/spi-notifier.png\\"],\\"datePublished\\":\\"2022-06-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-20T16:00:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yanhom\\"}]}"]]},"headers":[{"level":3,"title":"自定义通知渠道","slug":"自定义通知渠道","link":"#自定义通知渠道","children":[]}],"git":{"createdTime":1701608641000,"updatedTime":1703088059000,"contributors":[{"name":"yanhom","email":"yanhom1314@foxmail.com","commits":3}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"guide/notice/custom.md","localizedDate":"2022年6月11日","autoDesc":true,"excerpt":"<h3>自定义通知渠道</h3>\\n<p>如下示例定义了一个短信通知渠道</p>\\n<ol>\\n<li>定义 SmsNotifier 继承 AbstractNotifier 抽象类，实现 platform() 和 send0() 方法</li>\\n</ol>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">SmsNotifier</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">AbstractNotifier</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">SmsClient</span> smsClient<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">SmsNotifier</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">SmsClient</span> smsClient<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>smsClient <span class=\\"token operator\\">=</span> smsClient<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">platform</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"sms\\"</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">send0</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">NotifyPlatform</span> platform<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">String</span> content<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> receivers <span class=\\"token operator\\">=</span> platform<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getReceivers</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">split</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\",\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        smsClient<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span>platform<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getSecret</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> receivers<span class=\\"token punctuation\\">,</span> content<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{k as comp,d as data};