import{_ as o,r as p,o as r,c as l,b as a,d as n,a as e,w as t,e as c}from"./app-B7pAOsnx.js";const i={},u=a("h3",{id:"接入步骤",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#接入步骤"},[a("span",null,"接入步骤")])],-1),k=a("li",null,[a("p",null,"启动类加 @EnableDynamicTp 注解")],-1),d=a("li",null,[a("p",null,'使用 @Resource or @Autowired or 构造函数进行依赖注入，或通过 DtpRegistry.getExecutor("name") 获取')],-1),m=a("li",null,[a("p",null,"通过以上 4 步就可以接入使用了，是不是感觉超级简单呀")],-1),_=c(`<h3 id="日志输出" tabindex="-1"><a class="header-anchor" href="#日志输出"><span>日志输出</span></a></h3><div class="hint-container tip"><p class="hint-container-title">启动日志输出</p><p>服务启动看到有如下日志输出说明接入成功</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">|</span>  __ <span class="token punctuation">\\</span>                            <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">|</span>__   __<span class="token operator">|</span>   
<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span>_   _ _ __   __ _ _ __ ___  _  ___<span class="token operator">|</span> <span class="token operator">|</span>_ __  
<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token string">&#39;_ \\ / _\` | &#39;</span>_ \` _ <span class="token punctuation">\\</span><span class="token operator">|</span> <span class="token operator">|</span>/ __<span class="token operator">|</span> <span class="token operator">|</span> &#39;_ <span class="token punctuation">\\</span> 
<span class="token operator">|</span> <span class="token operator">|</span>__<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>__<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">|</span>_____/ <span class="token punctuation">\\</span>__, <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>__,_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>___<span class="token operator">|</span>_<span class="token operator">|</span> .__/ 
       __/ <span class="token operator">|</span>                              <span class="token operator">|</span> <span class="token operator">|</span>    
      <span class="token operator">|</span>___/                               <span class="token operator">|</span>_<span class="token operator">|</span>   
:: Dynamic Thread Pool :: 
:: <span class="token number">1.1</span>.7 :: 
:: https://dynamictp.cn ::

DynamicTp register executor: TpMainFields<span class="token punctuation">(</span>threadPoolName<span class="token operator">=</span>dtpExecutor1, <span class="token assign-left variable">corePoolSize</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">maxPoolSize</span><span class="token operator">=</span><span class="token number">10</span>, <span class="token assign-left variable">keepAliveTime</span><span class="token operator">=</span><span class="token number">50</span>, <span class="token assign-left variable">queueType</span><span class="token operator">=</span>TaskQueue, <span class="token assign-left variable">queueCapacity</span><span class="token operator">=</span><span class="token number">200</span>, <span class="token assign-left variable">rejectType</span><span class="token operator">=</span>CallerRunsPolicy, <span class="token assign-left variable">allowCoreThreadTimeOut</span><span class="token operator">=</span>false<span class="token punctuation">)</span>, source: beanPostProcessor

DtpRegistry has been initialized, remote executors: <span class="token punctuation">[</span>dtpExecutor1<span class="token punctuation">]</span>, <span class="token builtin class-name">local</span> executors: <span class="token punctuation">[</span>ioIntensiveExecutor, commonExecutor, dtpExecutor2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><div class="hint-container warning"><p class="hint-container-title">注意</p><ol><li><p>普通 JUC 线程池或者 Spring 线程池想要被框架管理，可以 @Bean 定义时加 @DynamicTp 注解</p></li><li><p>动态线程池实例服务启动时会根据配置中心的配置动态注册到 Spring 容器中，建议不要用 @Bean 编程式重复声明同一线程池实例，直接配置在配置中心就行</p></li><li><p>阻塞队列只有 VariableLinkedBlockingQueue 及其子类可以修改 capacity，该类型功能和 LinkedBlockingQueue 相似， 只是 capacity 不是 final 类型，可以修改，VariableLinkedBlockingQueue 参考 RabbitMq 的实现</p></li></ol></div>`,4);function h(g,v){const s=p("RouteLink");return r(),l("div",null,[u,a("blockquote",null,[a("ol",null,[a("li",null,[a("p",null,[n("引入相应配置中心的依赖 "),e(s,{to:"/guide/configcenter/apollo.html#maven%E4%BE%9D%E8%B5%96"},{default:t(()=>[n("maven 依赖")]),_:1})])]),a("li",null,[a("p",null,[n("配置中心配置线程池实例 "),e(s,{to:"/guide/configcenter/apollo.html#%E7%BA%BF%E7%A8%8B%E6%B1%A0%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:t(()=>[n("配置文件")]),_:1})])]),k,d,m])]),_])}const y=o(i,[["render",h],["__file","quick-start.html.vue"]]),E=JSON.parse('{"path":"/guide/use/quick-start.html","title":"接入步骤","lang":"zh-CN","frontmatter":{"title":"接入步骤","icon":"launch","order":1,"author":"yanhom","date":"2022-06-11T00:00:00.000Z","tag":["接入步骤","dynamictp"],"sticky":true,"star":true,"description":"接入步骤 引入相应配置中心的依赖 配置中心配置线程池实例 启动类加 @EnableDynamicTp 注解 使用 @Resource or @Autowired or 构造函数进行依赖注入，或通过 DtpRegistry.getExecutor(\\"name\\") 获取 通过以上 4 步就可以接入使用了，是不是感觉超级简单呀 日志输出 启动日志输出 服务启...","head":[["meta",{"property":"og:url","content":"https://gitee.com/dromara/dynamic-tp/guide/use/quick-start.html"}],["meta",{"property":"og:site_name","content":"dynamictp"}],["meta",{"property":"og:title","content":"接入步骤"}],["meta",{"property":"og:description","content":"接入步骤 引入相应配置中心的依赖 配置中心配置线程池实例 启动类加 @EnableDynamicTp 注解 使用 @Resource or @Autowired or 构造函数进行依赖注入，或通过 DtpRegistry.getExecutor(\\"name\\") 获取 通过以上 4 步就可以接入使用了，是不是感觉超级简单呀 日志输出 启动日志输出 服务启..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-31T12:46:20.000Z"}],["meta",{"property":"article:author","content":"yanhom"}],["meta",{"property":"article:tag","content":"接入步骤"}],["meta",{"property":"article:tag","content":"dynamictp"}],["meta",{"property":"article:published_time","content":"2022-06-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-31T12:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接入步骤\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-31T12:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yanhom\\"}]}"]]},"headers":[{"level":3,"title":"接入步骤","slug":"接入步骤","link":"#接入步骤","children":[]},{"level":3,"title":"日志输出","slug":"日志输出","link":"#日志输出","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"createdTime":1677489312000,"updatedTime":1711889180000,"contributors":[{"name":"yanhom","email":"yanhom1314@foxmail.com","commits":10}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"guide/use/quick-start.md","localizedDate":"2022年6月11日","autoDesc":true,"excerpt":"<h3>接入步骤</h3>\\n<blockquote>\\n<ol>\\n<li>\\n<p>引入相应配置中心的依赖 <a href=\\"/guide/configcenter/apollo.html#maven%E4%BE%9D%E8%B5%96\\" target=\\"_blank\\">maven 依赖</a></p>\\n</li>\\n<li>\\n<p>配置中心配置线程池实例 <a href=\\"/guide/configcenter/apollo.html#%E7%BA%BF%E7%A8%8B%E6%B1%A0%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6\\" target=\\"_blank\\">配置文件</a></p>\\n</li>\\n<li>\\n<p>启动类加 @EnableDynamicTp 注解</p>\\n</li>\\n<li>\\n<p>使用 @Resource or @Autowired or 构造函数进行依赖注入，或通过 DtpRegistry.getExecutor(\\"name\\") 获取</p>\\n</li>\\n<li>\\n<p>通过以上 4 步就可以接入使用了，是不是感觉超级简单呀</p>\\n</li>\\n</ol>\\n</blockquote>"}');export{y as comp,E as data};