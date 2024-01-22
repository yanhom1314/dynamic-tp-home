<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>
<p>动态线程池配置文件，建议单独开一个文件放在 nacos 中，如：user-center-dtp-dev.yml</p>
</li>
<li>
<p>如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好</p>
</li>
<li>
<p>给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量</p>
</li>
<li>
<p>注意非 spring-cloud-alibaba 场景下使用 nacos 用此依赖，cloud 场景下使用 nacos 用下一个依赖</p>
</li>
<li>
<p>集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈</p>
</li>
<li>
<p>nacos-config-spring-boot-starter 0.2.10 及以下版本对应 springboot 2.3.12.RELEASE 及以下版本</p>
</li>
<li>
<p>0.2.11-beta 及以上版本对应 springboot 版本 2.4.0 及以上版本，具体看官方说明</p>
</li>
</ol>
</div>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<ol>
<li>下述配置项的值都是随便填写的，请不要直接使用该值，根据自己项目做调整</li>
</ol>
</div>
<h3 id="maven-依赖" tabindex="-1"><a class="header-anchor" href="#maven-依赖" aria-hidden="true">#</a> maven 依赖</h3>
<p>SpringBoot1x、2x 用此依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-nacos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.6.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringBoot3x 用此依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-nacos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.6.1-3.x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池配置文件" tabindex="-1"><a class="header-anchor" href="#线程池配置文件" aria-hidden="true">#</a> 线程池配置文件</h3>
<h4 id="yml-格式" tabindex="-1"><a class="header-anchor" href="#yml-格式" aria-hidden="true">#</a> yml 格式</h4>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                               <span class="token comment"># 是否启用 dynamictp，默认true</span>
      <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                        <span class="token comment"># 是否开启监控指标采集，默认true</span>
      <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer<span class="token punctuation">,</span>logging          <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging | JMX），默认micrometer</span>
      <span class="token key atrule">logPath</span><span class="token punctuation">:</span> /home/logs/dynamictp/user<span class="token punctuation">-</span>center/  <span class="token comment"># 监控日志数据路径，默认 ${user.home}/logs，采集类型非logging不用配置</span>
      <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>                          <span class="token comment"># 监控时间间隔（报警检测、指标采集），默认5s</span>
      <span class="token key atrule">platforms</span><span class="token punctuation">:</span>                                  <span class="token comment"># 通知报警平台配置</span>
        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> wechat
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">1</span>                            <span class="token comment"># 平台id，自定义</span>
          <span class="token key atrule">urlKey</span><span class="token punctuation">:</span> 3a700<span class="token punctuation">-</span>127<span class="token punctuation">-</span>4bd<span class="token punctuation">-</span>a798<span class="token punctuation">-</span>c53d8b69c     <span class="token comment"># webhook 中的 key</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> test1<span class="token punctuation">,</span>test2                   <span class="token comment"># 接受人企微账号</span>

        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> ding
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">2</span>                            <span class="token comment"># 平台id，自定义</span>
          <span class="token key atrule">urlKey</span><span class="token punctuation">:</span> f80dad441fcd655438f4a08dcd6a     <span class="token comment"># webhook 中的 access_token</span>
          <span class="token key atrule">secret</span><span class="token punctuation">:</span> SECb5441fa6f375d5b9d21           <span class="token comment"># 安全设置在验签模式下才的秘钥，非验签模式没有此值</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> <span class="token number">18888888888</span>                   <span class="token comment"># 钉钉账号手机号</span>

        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> lark
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">3</span>
          <span class="token key atrule">urlKey</span><span class="token punctuation">:</span> 0d944ae7<span class="token punctuation">-</span>b24a<span class="token punctuation">-</span><span class="token number">40</span>                 <span class="token comment"># webhook 中的 token</span>
          <span class="token key atrule">secret</span><span class="token punctuation">:</span> 3a750012874bdac5c3d8b69c         <span class="token comment"># 安全设置在签名校验模式下才的秘钥，非验签模式没有此值</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> test1<span class="token punctuation">,</span>test2                   <span class="token comment"># 接受人username / openid</span>

        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> email
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">4</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> 123456@qq.com<span class="token punctuation">,</span>789789@qq.com   <span class="token comment"># 收件人邮箱，多个用逗号隔开</span>
          
      <span class="token key atrule">executors</span><span class="token punctuation">:</span>                                   <span class="token comment"># 动态线程池配置，都有默认值，采用默认值的可以不配置该项，减少配置量</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> dtpExecutor1
          <span class="token key atrule">threadPoolAliasName</span><span class="token punctuation">:</span> 测试线程池        <span class="token comment"># 线程池别名</span>
          <span class="token key atrule">executorType</span><span class="token punctuation">:</span> common                 <span class="token comment"># 线程池类型 common、eager、ordered、scheduled、priority，默认 common</span>
          <span class="token key atrule">corePoolSize</span><span class="token punctuation">:</span> <span class="token number">6</span>                      <span class="token comment"># 核心线程数，默认1</span>
          <span class="token key atrule">maximumPoolSize</span><span class="token punctuation">:</span> <span class="token number">8</span>                   <span class="token comment"># 最大线程数，默认cpu核数</span>
          <span class="token key atrule">queueCapacity</span><span class="token punctuation">:</span> <span class="token number">2000</span>                  <span class="token comment"># 队列容量，默认1024</span>
          <span class="token key atrule">queueType</span><span class="token punctuation">:</span> VariableLinkedBlockingQueue         <span class="token comment"># 任务队列，查看源码QueueTypeEnum枚举类，默认VariableLinkedBlockingQueue</span>
          <span class="token key atrule">rejectedHandlerType</span><span class="token punctuation">:</span> CallerRunsPolicy          <span class="token comment"># 拒绝策略，查看RejectedTypeEnum枚举类，默认AbortPolicy</span>
          <span class="token key atrule">keepAliveTime</span><span class="token punctuation">:</span> <span class="token number">60</span>                              <span class="token comment"># 空闲线程等待超时时间，默认60</span>
          <span class="token key atrule">threadNamePrefix</span><span class="token punctuation">:</span> test                         <span class="token comment"># 线程名前缀，默认dtp</span>
          <span class="token key atrule">allowCoreThreadTimeOut</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>                  <span class="token comment"># 是否允许核心线程池超时，默认false</span>
          <span class="token key atrule">waitForTasksToCompleteOnShutdown</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>         <span class="token comment"># 参考spring线程池设计，优雅关闭线程池，默认false</span>
          <span class="token key atrule">awaitTerminationSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>                     <span class="token comment"># 优雅关闭线程池时，阻塞等待线程池中任务执行时间，默认0，单位（s）</span>
          <span class="token key atrule">preStartAllCoreThreads</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>                  <span class="token comment"># 是否预热所有核心线程，默认false</span>
          <span class="token key atrule">runTimeout</span><span class="token punctuation">:</span> <span class="token number">200</span>                                <span class="token comment"># 任务执行超时阈值，目前只做告警用，单位（ms），默认0</span>
          <span class="token key atrule">queueTimeout</span><span class="token punctuation">:</span> <span class="token number">100</span>                              <span class="token comment"># 任务在队列等待超时阈值，目前只做告警用，单位（ms），默认0</span>
          <span class="token key atrule">taskWrapperNames</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"ttl"</span><span class="token punctuation">,</span> <span class="token string">"mdc"</span><span class="token punctuation">]</span>               <span class="token comment"># 任务包装器名称，继承TaskWrapper接口</span>
          <span class="token key atrule">notifyEnabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                            <span class="token comment"># 是否开启报警，默认true</span>
          <span class="token key atrule">notifyItems</span><span class="token punctuation">:</span>                     <span class="token comment"># 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> change
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> capacity               <span class="token comment"># 队列容量使用率，报警项类型，查看源码 NotifyTypeEnum枚举类</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>                <span class="token comment"># 报警阈值，默认70，意思是队列使用率达到70%告警</span>
              <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">120</span>                <span class="token comment"># 报警间隔（单位：s），默认120</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> liveness               <span class="token comment"># 线程池活性</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>                <span class="token comment"># 报警阈值，默认 70，意思是活性达到70%告警</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> reject                 <span class="token comment"># 触发任务拒绝告警</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">100</span>               <span class="token comment"># 默认阈值10</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> run_timeout            <span class="token comment"># 任务执行超时告警</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">100</span>               <span class="token comment"># 默认阈值10</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> queue_timeout          <span class="token comment"># 任务排队超时告警</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">100</span>               <span class="token comment"># 默认阈值10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="properties-格式" tabindex="-1"><a class="header-anchor" href="#properties-格式" aria-hidden="true">#</a> properties 格式</h4>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.dynamic.tp.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.enabledCollect</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.collectorTypes</span><span class="token punctuation">=</span><span class="token value attr-value">micrometer,logging</span>
<span class="token key attr-name">spring.dynamic.tp.logPath</span><span class="token punctuation">=</span><span class="token value attr-value">/home/logs</span>
<span class="token key attr-name">spring.dynamic.tp.monitorInterval</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.dynamic.tp.nacos.dataId</span><span class="token punctuation">=</span><span class="token value attr-value">dynamic-tp-demo-dev.properties</span>
<span class="token key attr-name">spring.dynamic.tp.nacos.group</span><span class="token punctuation">=</span><span class="token value attr-value">DEFAULT_GROUP</span>
<span class="token key attr-name">spring.dynamic.tp.configType</span><span class="token punctuation">=</span><span class="token value attr-value">properties</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[0].platform</span><span class="token punctuation">=</span><span class="token value attr-value">wechat</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[0].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">3a700-127-4bd-a798-c53d8b69c</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[0].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">test1,test2</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].platform</span><span class="token punctuation">=</span><span class="token value attr-value">ding</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">f80dad441fcd655438f4a08dcd6a</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].secret</span><span class="token punctuation">=</span><span class="token value attr-value">SECb5441fa6f375d5b9d21</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">18888888888</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[2].platform</span><span class="token punctuation">=</span><span class="token value attr-value">lark</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[2].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">0d944ae7-b24a-40</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[2].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">test1,test2</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[3].platform</span><span class="token punctuation">=</span><span class="token value attr-value">email</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[3].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">123456@qq.com,789789@qq.com</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].threadPoolName</span><span class="token punctuation">=</span><span class="token value attr-value">dtpExecutor1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].threadPoolAliasName</span><span class="token punctuation">=</span><span class="token value attr-value">测试线程池</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].executorType</span><span class="token punctuation">=</span><span class="token value attr-value">common</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].corePoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">6</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].maximumPoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].queueCapacity</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].queueType</span><span class="token punctuation">=</span><span class="token value attr-value">VariableLinkedBlockingQueue</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].rejectedHandlerType</span><span class="token punctuation">=</span><span class="token value attr-value">CallerRunsPolicy</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].keepAliveTime</span><span class="token punctuation">=</span><span class="token value attr-value">50</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].allowCoreThreadTimeOut</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].threadNamePrefix</span><span class="token punctuation">=</span><span class="token value attr-value">test</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].awaitTerminationSeconds</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].preStartAllCoreThreads</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].runTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].queueTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].taskWrapperNames[0]</span><span class="token punctuation">=</span><span class="token value attr-value">ttl</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].taskWrapperNames[1]</span><span class="token punctuation">=</span><span class="token value attr-value">mdc</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyEnabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].type</span><span class="token punctuation">=</span><span class="token value attr-value">capacity</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]</span><span class="token punctuation">=</span><span class="token value attr-value">ding</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]</span><span class="token punctuation">=</span><span class="token value attr-value">wechat</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].interval</span><span class="token punctuation">=</span><span class="token value attr-value">120</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[1].type</span><span class="token punctuation">=</span><span class="token value attr-value">change</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[1].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].type</span><span class="token punctuation">=</span><span class="token value attr-value">liveness</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].type</span><span class="token punctuation">=</span><span class="token value attr-value">reject</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].type</span><span class="token punctuation">=</span><span class="token value attr-value">run_timeout</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[5].type</span><span class="token punctuation">=</span><span class="token value attr-value">queue_timeout</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[5].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[5].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-配置" tabindex="-1"><a class="header-anchor" href="#application-yml-配置" aria-hidden="true">#</a> application.yml 配置</h3>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">nacos</span><span class="token punctuation">:</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> yaml
    <span class="token key atrule">data-ids</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>center<span class="token punctuation">-</span>dev.yml<span class="token punctuation">,</span>user<span class="token punctuation">-</span>center<span class="token punctuation">-</span>dtp<span class="token punctuation">-</span>dev.yml  <span class="token comment"># 逗号分隔，第一个是项目主配置，第二个是动态线程池配置</span>
    <span class="token key atrule">auto-refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
    <span class="token key atrule">bootstrap</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">log-enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


