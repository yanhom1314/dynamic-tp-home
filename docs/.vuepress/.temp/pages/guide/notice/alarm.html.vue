<template><div><div class="wwads-cn wwads-vertical wwads-sticky" data-id="212" style="max-width:180px"></div>
<h3 id="告警类型" tabindex="-1"><a class="header-anchor" href="#告警类型" aria-hidden="true">#</a> 告警类型</h3>
<p>框架目前提供以下告警功能，每一个告警项都可以独立配置是否开启、告警阈值、告警间隔时间、平台等，具体代码请看 core 模块 notify 包，
告警信息同时会高亮与该项相关的字段。</p>
<ul>
<li>线程池活跃度告警</li>
</ul>
<blockquote>
<ol>
<li>
<p>活跃度 = activeCount / maximumPoolSize</p>
</li>
<li>
<p>服务启动后会开启一个定时监控任务，每隔一定时间（可配置）去计算线程池的活跃度，达到配置的 threshold 阈值后会触发一次告警，告警间隔内多次触发不会发送告警通知</p>
</li>
</ol>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/675f7b2732ba46ae9a0539ec69698c6b~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
<ul>
<li>队列容量告警</li>
</ul>
<blockquote>
<ol>
<li>
<p>容量使用率 = queueSize / queueCapacity</p>
</li>
<li>
<p>服务启动后会开启一个定时监控任务，每隔一定时间去计算任务队列的使用率，达到配置的 threshold 阈值后会触发一次告警，告警间隔内多次触发不会发送告警通知</p>
</li>
</ol>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d65151e3e9ca460eac18f30ea6be05d3~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
<ul>
<li>
<p>拒绝策略告警</p>
<p>线程池线程数达到配置的最大线程数，且任务队列已满，再提交任务会触发拒绝策略。DtpExecutor 线程池用到的 RejectedExecutionHandler 是经过动态代理包装过的，在执行具体的拒绝策略之前会执行 RejectedAware 类 beforeReject() 方法，此方法会去做拒绝数量累加（总数值累加、周期值累加）。且判断如果周期累计值达到配置的阈值，则会触发一次告警通知（同时重置周期累加值为0及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Do sth before reject.
 * <span class="token keyword">@param</span> <span class="token parameter">executor</span> ThreadPoolExecutor instance
 */</span>
<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">beforeReject</span><span class="token punctuation">(</span><span class="token class-name">ThreadPoolExecutor</span> executor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>executor <span class="token keyword">instanceof</span> <span class="token class-name">DtpExecutor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DtpExecutor</span> dtpExecutor <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpExecutor</span><span class="token punctuation">)</span> executor<span class="token punctuation">;</span>
        dtpExecutor<span class="token punctuation">.</span><span class="token function">incRejectCount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Runnable</span> runnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">doAlarm</span><span class="token punctuation">(</span>dtpExecutor<span class="token punctuation">,</span> <span class="token constant">REJECT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">triggerAlarm</span><span class="token punctuation">(</span>dtpExecutor<span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">REJECT</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/651049fe286f4cb099ab8936bfc4b425~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
<ul>
<li>
<p>任务排队超时告警</p>
<p>重写 ThreadPoolExecutor 的 execute() 方法和 beforeExecute() 方法，如果配置了执行超时或排队超时值，则会用DtpRunnable包装任务，同时记录任务的提交时间submitTime，beforeExecute根据当前时间和submitTime的差值就可以计算到该任务在队列中的等待时间，然后判断如果差值大于配置的queueTimeout则累加排队超时任务数量（总数值累加、周期值累加）。且判断如果周期累计值达到配置的阈值，则会触发一次告警通知（同时重置周期累加值为0及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> taskName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token keyword">instanceof</span> <span class="token class-name">NamedRunnable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        taskName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">NamedRunnable</span><span class="token punctuation">)</span> command<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>taskWrappers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TaskWrapper</span> t <span class="token operator">:</span> taskWrappers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            command <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>runTimeout <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">||</span> queueTimeout <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DtpRunnable</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> taskName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">beforeExecute</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Runnable</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>r <span class="token keyword">instanceof</span> <span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">beforeExecute</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">DtpRunnable</span> runnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> r<span class="token punctuation">;</span>
    <span class="token keyword">long</span> currTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>runTimeout <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        runnable<span class="token punctuation">.</span><span class="token function">setStartTime</span><span class="token punctuation">(</span>currTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queueTimeout <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> waitTime <span class="token operator">=</span> currTime <span class="token operator">-</span> runnable<span class="token punctuation">.</span><span class="token function">getSubmitTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>waitTime <span class="token operator">></span> queueTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queueTimeoutCount<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Runnable</span> alarmTask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">doAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token constant">QUEUE_TIMEOUT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">triggerAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">QUEUE_TIMEOUT</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> alarmTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"DynamicTp execute, queue timeout, poolName: {}, taskName: {}, waitTime: {}ms"</span><span class="token punctuation">,</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> waitTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">beforeExecute</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8f34edbedee4683a9525a6e9423a1be~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
<ul>
<li>
<p>任务执行超时告警</p>
<p>重写ThreadPoolExecutor的afterExecute()方法，根据当前时间和beforeExecute()中设置的startTime的差值即可算出任务的实际执行时间，然后判断如果差值大于配置的runTimeout则累加排队超时任务数量（总数值累加、周期值累加）。且判断如果周期累计值达到配置的阈值，则会触发一次告警通知（同时重置周期累加值为0及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterExecute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>runTimeout <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DtpRunnable</span> runnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> r<span class="token punctuation">;</span>
        <span class="token keyword">long</span> runTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> runnable<span class="token punctuation">.</span><span class="token function">getStartTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>runTime <span class="token operator">></span> runTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            runTimeoutCount<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Runnable</span> alarmTask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">doAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token constant">RUN_TIMEOUT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">triggerAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">RUN_TIMEOUT</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> alarmTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"DynamicTp execute, run timeout, poolName: {}, taskName: {}, runTime: {}ms"</span><span class="token punctuation">,</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterExecute</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b360e0a129e4413b962b40f6ef415af2~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
</div></template>


