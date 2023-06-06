import{_ as n,X as s,Y as a,a1 as e}from"./framework-a915a7eb.js";const t={},p=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><ol><li><p>动态线程池配置文件，建议单独开一个文件放到 zookeeper 中，方便管理</p></li><li><p>如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好</p></li><li><p>给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量</p></li><li><p>集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈。</p></li><li><p>zookpeer 支持 properties / json 两种配置</p></li><li><p>可以通过 <code>ZKUI</code> 工具快速导入下述格式的配置</p></li></ol></div><div class="hint-container danger"><p class="hint-container-title">警告</p><ol><li>下述配置项的值都是随便填写的，请不要直接使用该值，根据自己项目做调整</li></ol></div><h3 id="maven-依赖" tabindex="-1"><a class="header-anchor" href="#maven-依赖" aria-hidden="true">#</a> maven 依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dynamic-tp-spring-boot-starter-zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池配置文件" tabindex="-1"><a class="header-anchor" href="#线程池配置文件" aria-hidden="true">#</a> 线程池配置文件</h3><h4 id="properties-格式" tabindex="-1"><a class="header-anchor" href="#properties-格式" aria-hidden="true">#</a> properties 格式</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.dynamic.tp.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.enabledCollect</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.collectorTypes</span><span class="token punctuation">=</span><span class="token value attr-value">micrometer,logging</span>
<span class="token key attr-name">spring.dynamic.tp.logPath</span><span class="token punctuation">=</span><span class="token value attr-value">/home/logs</span>
<span class="token key attr-name">spring.dynamic.tp.monitorInterval</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
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
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[1].type</span><span class="token punctuation">=</span><span class="token value attr-value">liveness</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[1].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[1].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].type</span><span class="token punctuation">=</span><span class="token value attr-value">reject</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].type</span><span class="token punctuation">=</span><span class="token value attr-value">run_timeout</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].type</span><span class="token punctuation">=</span><span class="token value attr-value">queue_timeout</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="json-格式" tabindex="-1"><a class="header-anchor" href="#json-格式" aria-hidden="true">#</a> json 格式</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;spring&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;tp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;enabledCollect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;collectorTypes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;micrometer,logging&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;logPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/home/logs&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;monitorInterval&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wechat&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;urlKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3a700-127-4bd-a798-c53d8b69c&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;receivers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test1,test2&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ding&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;urlKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f80dad441fcd655438f4a08dcd6a&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SECb5441fa6f375d5b9d21&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;receivers&quot;</span><span class="token operator">:</span> <span class="token number">18888888888</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lark&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;urlKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0d944ae7-b24a-40&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;receivers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test1,test2&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;receivers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456@qq.com,789789@qq.com&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;executors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;threadPoolName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dtpExecutor1&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;threadPoolAliasName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试线程池&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;executorType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;common&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;corePoolSize&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;maximumPoolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;queueCapacity&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;queueType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VariableLinkedBlockingQueue&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;rejectedHandlerType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CallerRunsPolicy&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;keepAliveTime&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;allowCoreThreadTimeOut&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;threadNamePrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;waitForTasksToCompleteOnShutdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;awaitTerminationSeconds&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;preStartAllCoreThreads&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;runTimeout&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;queueTimeout&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;taskWrapperNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token string">&quot;ttl&quot;</span><span class="token punctuation">,</span>
                            <span class="token string">&quot;mdc&quot;</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;notifyEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;notifyItems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;capacity&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                    <span class="token string">&quot;ding&quot;</span><span class="token punctuation">,</span>
                                    <span class="token string">&quot;wechat&quot;</span>
                                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token number">120</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;liveness&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reject&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run_timeout&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;queue_timeout&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过-zkui-工具导入-properties-格式" tabindex="-1"><a class="header-anchor" href="#通过-zkui-工具导入-properties-格式" aria-hidden="true">#</a> 通过 <code>ZKUI</code> 工具导入 properties 格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/configserver/dev/user-center=spring.dynamic.tp.enabled=true
/configserver/dev/user-center=spring.dynamic.tp.enabledCollect=true
/configserver/dev/user-center=spring.dynamic.tp.collectorTypes=micrometer,logging
/configserver/dev/user-center=spring.dynamic.tp.logPath=/home/logs
/configserver/dev/user-center=spring.dynamic.tp.monitorInterval=5
/configserver/dev/user-center=spring.dynamic.tp.platforms[0].platform=wechat
/configserver/dev/user-center=spring.dynamic.tp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
/configserver/dev/user-center=spring.dynamic.tp.platforms[0].receivers=test1,test2
/configserver/dev/user-center=spring.dynamic.tp.platforms[1].platform=ding
/configserver/dev/user-center=spring.dynamic.tp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
/configserver/dev/user-center=spring.dynamic.tp.platforms[1].secret=SECb5441fa6f375d5b9d21
/configserver/dev/user-center=spring.dynamic.tp.platforms[1].receivers=18888888888
/configserver/dev/user-center=spring.dynamic.tp.platforms[2].platform=lark
/configserver/dev/user-center=spring.dynamic.tp.platforms[2].urlKey=0d944ae7-b24a-40
/configserver/dev/user-center=spring.dynamic.tp.platforms[2].receivers=test1,test2
/configserver/dev/user-center=spring.dynamic.tp.platforms[3].platform=email
/configserver/dev/user-center=spring.dynamic.tp.platforms[3].receivers=123456@qq.com,789789@qq.com
/configserver/dev/user-center=spring.dynamic.tp.executors[0].threadPoolName=dtpExecutor1
/configserver/dev/user-center=spring.dynamic.tp.executors[0].threadPoolAliasName=测试线程池
/configserver/dev/user-center=spring.dynamic.tp.executors[0].executorType=common
/configserver/dev/user-center=spring.dynamic.tp.executors[0].corePoolSize=6
/configserver/dev/user-center=spring.dynamic.tp.executors[0].maximumPoolSize=8
/configserver/dev/user-center=spring.dynamic.tp.executors[0].queueCapacity=200
/configserver/dev/user-center=spring.dynamic.tp.executors[0].queueType=VariableLinkedBlockingQueue
/configserver/dev/user-center=spring.dynamic.tp.executors[0].rejectedHandlerType=CallerRunsPolicy
/configserver/dev/user-center=spring.dynamic.tp.executors[0].keepAliveTime=50
/configserver/dev/user-center=spring.dynamic.tp.executors[0].allowCoreThreadTimeOut=false
/configserver/dev/user-center=spring.dynamic.tp.executors[0].threadNamePrefix=test
/configserver/dev/user-center=spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown=false
/configserver/dev/user-center=spring.dynamic.tp.executors[0].awaitTerminationSeconds=5
/configserver/dev/user-center=spring.dynamic.tp.executors[0].preStartAllCoreThreads=false
/configserver/dev/user-center=spring.dynamic.tp.executors[0].runTimeout=200
/configserver/dev/user-center=spring.dynamic.tp.executors[0].queueTimeout=100
/configserver/dev/user-center=spring.dynamic.tp.executors[0].taskWrapperNames[0]=ttl
/configserver/dev/user-center=spring.dynamic.tp.executors[0].taskWrapperNames[1]=mdc
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyEnabled=true
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[0].type=capacity
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[0].enabled=true
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[0].threshold=80
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]=ding
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]=wechat
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[0].interval=120
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[1].type=liveness
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[1].threshold=80
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[2].type=reject
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[2].threshold=1
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[3].type=run_timeout
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[3].threshold=1
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[4].type=queue_timeout
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
/configserver/dev/user-center=spring.dynamic.tp.executors[0].notifyItems[4].threshold=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-配置" tabindex="-1"><a class="header-anchor" href="#application-yml-配置" aria-hidden="true">#</a> application.yml 配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>center
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">config-type</span><span class="token punctuation">:</span> json               <span class="token comment"># zookeeper 支持 properties / json 配置</span>
      <span class="token key atrule">zookeeper</span><span class="token punctuation">:</span>
        <span class="token key atrule">zk-connect-str</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">2181</span>
        <span class="token key atrule">root-node</span><span class="token punctuation">:</span> /configserver/dev
        <span class="token key atrule">node</span><span class="token punctuation">:</span> dtp<span class="token punctuation">-</span>group
        <span class="token key atrule">config-key</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>center<span class="token punctuation">-</span>dtp<span class="token punctuation">-</span>json   <span class="token comment"># json 格式会用到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[p];function i(r,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","zookeeper.html.vue"]]);export{u as default};
