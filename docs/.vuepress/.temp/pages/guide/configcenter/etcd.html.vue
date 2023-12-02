<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>
<p>动态线程池配置文件，建议单独开一个文件放到配置中心 etcd</p>
</li>
<li>
<p>如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好</p>
</li>
<li>
<p>给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量</p>
</li>
<li>
<p>集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈</p>
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
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-spring-boot-starter-etcd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池配置文件" tabindex="-1"><a class="header-anchor" href="#线程池配置文件" aria-hidden="true">#</a> 线程池配置文件</h3>
<h4 id="properties-格式" tabindex="-1"><a class="header-anchor" href="#properties-格式" aria-hidden="true">#</a> properties 格式</h4>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">config/user-center/spring.dynamic.tp.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.enabledCollect</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.collectorTypes</span><span class="token punctuation">=</span><span class="token value attr-value">micrometer,logging</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.logPath</span><span class="token punctuation">=</span><span class="token value attr-value">/home/logs</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.monitorInterval</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[0].platform</span><span class="token punctuation">=</span><span class="token value attr-value">wechat</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[0].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">3a700-127-4bd-a798-c53d8b69c</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[0].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">test1,test2</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[1].platform</span><span class="token punctuation">=</span><span class="token value attr-value">ding</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[1].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">f80dad441fcd655438f4a08dcd6a</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[1].secret</span><span class="token punctuation">=</span><span class="token value attr-value">SECb5441fa6f375d5b9d21</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[1].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">18888888888</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[2].platform</span><span class="token punctuation">=</span><span class="token value attr-value">lark</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[2].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">0d944ae7-b24a-40</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[2].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">test1,test2</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[3].platform</span><span class="token punctuation">=</span><span class="token value attr-value">email</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.platforms[3].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">123456@qq.com,789789@qq.com</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].threadPoolName</span><span class="token punctuation">=</span><span class="token value attr-value">dtpExecutor1</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].threadPoolAliasName</span><span class="token punctuation">=</span><span class="token value attr-value">测试线程池</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].executorType</span><span class="token punctuation">=</span><span class="token value attr-value">common</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].corePoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">6</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].maximumPoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].queueCapacity</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].queueType</span><span class="token punctuation">=</span><span class="token value attr-value">VariableLinkedBlockingQueue</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].rejectedHandlerType</span><span class="token punctuation">=</span><span class="token value attr-value">CallerRunsPolicy</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].keepAliveTime</span><span class="token punctuation">=</span><span class="token value attr-value">50</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].allowCoreThreadTimeOut</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].threadNamePrefix</span><span class="token punctuation">=</span><span class="token value attr-value">test</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].awaitTerminationSeconds</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].preStartAllCoreThreads</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].runTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].queueTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].taskWrapperNames[0]</span><span class="token punctuation">=</span><span class="token value attr-value">ttl</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].taskWrapperNames[1]</span><span class="token punctuation">=</span><span class="token value attr-value">mdc</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyEnabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].type</span><span class="token punctuation">=</span><span class="token value attr-value">capacity</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]</span><span class="token punctuation">=</span><span class="token value attr-value">ding</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]</span><span class="token punctuation">=</span><span class="token value attr-value">wechat</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[0].interval</span><span class="token punctuation">=</span><span class="token value attr-value">120</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[1].type</span><span class="token punctuation">=</span><span class="token value attr-value">liveness</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[1].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[1].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[2].type</span><span class="token punctuation">=</span><span class="token value attr-value">reject</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[2].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[2].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[3].type</span><span class="token punctuation">=</span><span class="token value attr-value">run_timeout</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[3].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[3].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[4].type</span><span class="token punctuation">=</span><span class="token value attr-value">queue_timeout</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[4].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">config/user-center/spring.dynamic.tp.executors[0].notifyItems[4].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/559df634c7c84aed99da4e345c8d3f45~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="json-格式" tabindex="-1"><a class="header-anchor" href="#json-格式" aria-hidden="true">#</a> json 格式</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"spring"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"dynamic"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"tp"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"enabledCollect"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"collectorTypes"</span><span class="token operator">:</span> <span class="token string">"micrometer,logging"</span><span class="token punctuation">,</span>
                <span class="token property">"logPath"</span><span class="token operator">:</span> <span class="token string">"/home/logs"</span><span class="token punctuation">,</span>
                <span class="token property">"monitorInterval"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"platform"</span><span class="token operator">:</span> <span class="token string">"wechat"</span><span class="token punctuation">,</span>
                        <span class="token property">"urlKey"</span><span class="token operator">:</span> <span class="token string">"3a700-127-4bd-a798-c53d8b69c"</span><span class="token punctuation">,</span>
                        <span class="token property">"receivers"</span><span class="token operator">:</span> <span class="token string">"test1,test2"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"platform"</span><span class="token operator">:</span> <span class="token string">"ding"</span><span class="token punctuation">,</span>
                        <span class="token property">"urlKey"</span><span class="token operator">:</span> <span class="token string">"f80dad441fcd655438f4a08dcd6a"</span><span class="token punctuation">,</span>
                        <span class="token property">"secret"</span><span class="token operator">:</span> <span class="token string">"SECb5441fa6f375d5b9d21"</span><span class="token punctuation">,</span>
                        <span class="token property">"receivers"</span><span class="token operator">:</span> <span class="token number">18888888888</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"platform"</span><span class="token operator">:</span> <span class="token string">"lark"</span><span class="token punctuation">,</span>
                        <span class="token property">"urlKey"</span><span class="token operator">:</span> <span class="token string">"0d944ae7-b24a-40"</span><span class="token punctuation">,</span>
                        <span class="token property">"receivers"</span><span class="token operator">:</span> <span class="token string">"test1,test2"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"platform"</span><span class="token operator">:</span> <span class="token string">"email"</span><span class="token punctuation">,</span>
                        <span class="token property">"receivers"</span><span class="token operator">:</span> <span class="token string">"123456@qq.com,789789@qq.com"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"executors"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"threadPoolName"</span><span class="token operator">:</span> <span class="token string">"dtpExecutor1"</span><span class="token punctuation">,</span>
                        <span class="token property">"threadPoolAliasName"</span><span class="token operator">:</span> <span class="token string">"测试线程池"</span><span class="token punctuation">,</span>
                        <span class="token property">"executorType"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                        <span class="token property">"corePoolSize"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                        <span class="token property">"maximumPoolSize"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                        <span class="token property">"queueCapacity"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                        <span class="token property">"queueType"</span><span class="token operator">:</span> <span class="token string">"VariableLinkedBlockingQueue"</span><span class="token punctuation">,</span>
                        <span class="token property">"rejectedHandlerType"</span><span class="token operator">:</span> <span class="token string">"CallerRunsPolicy"</span><span class="token punctuation">,</span>
                        <span class="token property">"keepAliveTime"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                        <span class="token property">"allowCoreThreadTimeOut"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">"threadNamePrefix"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span>
                        <span class="token property">"waitForTasksToCompleteOnShutdown"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">"awaitTerminationSeconds"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                        <span class="token property">"preStartAllCoreThreads"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">"runTimeout"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                        <span class="token property">"queueTimeout"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                        <span class="token property">"taskWrapperNames"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token string">"ttl"</span><span class="token punctuation">,</span>
                            <span class="token string">"mdc"</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">"notifyEnabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">"notifyItems"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"capacity"</span><span class="token punctuation">,</span>
                                <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">"threshold"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                                <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                    <span class="token string">"ding"</span><span class="token punctuation">,</span>
                                    <span class="token string">"wechat"</span>
                                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                                <span class="token property">"interval"</span><span class="token operator">:</span> <span class="token number">120</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"liveness"</span><span class="token punctuation">,</span>
                                <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">"threshold"</span><span class="token operator">:</span> <span class="token number">80</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"reject"</span><span class="token punctuation">,</span>
                                <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">"threshold"</span><span class="token operator">:</span> <span class="token number">1</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"run_timeout"</span><span class="token punctuation">,</span>
                                <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">"threshold"</span><span class="token operator">:</span> <span class="token number">1</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"queue_timeout"</span><span class="token punctuation">,</span>
                                <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">"threshold"</span><span class="token operator">:</span> <span class="token number">1</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-配置" tabindex="-1"><a class="header-anchor" href="#application-yml-配置" aria-hidden="true">#</a> application.yml 配置</h3>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">config-type</span><span class="token punctuation">:</span> properties
      <span class="token key atrule">etcd</span><span class="token punctuation">:</span>
        <span class="token key atrule">endpoints</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">2379</span>
        <span class="token key atrule">auth-enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">key</span><span class="token punctuation">:</span> /config/user<span class="token punctuation">-</span>center<span class="token punctuation">-</span>dtp
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>center
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


