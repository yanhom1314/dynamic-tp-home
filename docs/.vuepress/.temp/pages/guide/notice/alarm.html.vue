<template><div><h3 id="告警类型" tabindex="-1"><a class="header-anchor" href="#告警类型" aria-hidden="true">#</a> 告警类型</h3>
<p>框架目前提供以下告警功能，每一个告警项都可以独立配置是否开启、告警阈值、告警间隔时间、平台等，具体代码请看 core 模块 notifier 包，
告警信息同时会高亮与该告警项相关的字段。</p>
<ul>
<li>线程池活跃度告警</li>
</ul>
<blockquote>
<ol>
<li>
<p>活跃度 = (activeCount / maximumPoolSize) * 100</p>
</li>
<li>
<p>比如 threshold 阈值配置 80，表示活跃度达到 80% 时触发告警</p>
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
<p>容量使用率 = (queueSize / queueCapacity) * 100</p>
</li>
<li>
<p>比如 threshold 阈值配置 80，表示容量使用率达到 80% 时触发告警</p>
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
<p>线程池线程数达到配置的最大线程数，且任务队列已满，再提交任务会触发拒绝策略。DtpExecutor 线程池用到的 RejectedExecutionHandler 是经过动态代理包装过的，
在执行具体的拒绝策略之前会执行 RejectedAware 类 beforeReject() 方法，此方法会去做拒绝数量累加（总数值累加、周期值累加）。且判断如果周期累计值达到配置的阈值，
则会触发一次告警通知（同时重置周期累加值为 0 及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Do sth before reject.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">runnable</span> Runnable instance
 * <span class="token keyword">@param</span> <span class="token parameter">executor</span> ThreadPoolExecutor instance
 * <span class="token keyword">@param</span> <span class="token parameter">log</span>      logger
 */</span>
<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">beforeReject</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> runnable<span class="token punctuation">,</span> <span class="token class-name">ThreadPoolExecutor</span> executor<span class="token punctuation">,</span> <span class="token class-name">Logger</span> log<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>executor <span class="token keyword">instanceof</span> <span class="token class-name">DtpExecutor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        val dtpRunnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> runnable<span class="token punctuation">;</span>
        dtpRunnable<span class="token punctuation">.</span><span class="token function">cancelQueueTimeoutTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DtpExecutor</span> dtpExecutor <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpExecutor</span><span class="token punctuation">)</span> executor<span class="token punctuation">;</span>
        dtpExecutor<span class="token punctuation">.</span><span class="token function">incRejectCount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">doAlarmAsync</span><span class="token punctuation">(</span>dtpExecutor<span class="token punctuation">,</span> <span class="token constant">REJECT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"DynamicTp execute, thread pool is exhausted, tpName: {}, taskName: {}, traceId: {}, "</span> <span class="token operator">+</span>
                        <span class="token string">"poolSize: {} (active: {}, core: {}, max: {}, largest: {}), "</span> <span class="token operator">+</span>
                        <span class="token string">"task: {} (completed: {}), queueCapacity: {}, (currSize: {}, remaining: {}), "</span> <span class="token operator">+</span>
                        <span class="token string">"executorStatus: (isShutdown: {}, isTerminated: {}, isTerminating: {})"</span><span class="token punctuation">,</span>
                dtpExecutor<span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dtpRunnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">MDC</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">TRACE_ID</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">getPoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                executor<span class="token punctuation">.</span><span class="token function">getActiveCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">getCorePoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">getMaximumPoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                executor<span class="token punctuation">.</span><span class="token function">getLargestPoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">getTaskCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">getCompletedTaskCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                dtpExecutor<span class="token punctuation">.</span><span class="token function">getQueueCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dtpExecutor<span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remainingCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                executor<span class="token punctuation">.</span><span class="token function">isShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">isTerminated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token function">isTerminating</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/651049fe286f4cb099ab8936bfc4b425~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
<ul>
<li>
<p>任务排队超时告警</p>
<p>重写 ThreadPoolExecutor 的 execute() 方法和 beforeExecute() 方法，采用时间轮处理任务排队超时逻辑。
任务提交时用 DtpRunnable 包装任务， 并根据 queueTimeout 开启一个处理排队超时的 TimerTask，
排队超时后执行 TimerTask 的 run 方法，累加排队超时任务数量（总数值累加、周期值累加）。 且判断如果周期累计值达到配置的阈值，
则会触发一次告警通知（同时重置周期累加值为 0 及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">DtpRunnable</span> dtpRunnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> <span class="token function">wrapTasks</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dtpRunnable<span class="token punctuation">.</span><span class="token function">startQueueTimeoutTask</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>dtpRunnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">beforeExecute</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Runnable</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">beforeExecute</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DtpRunnable</span> runnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> r<span class="token punctuation">;</span>
    runnable<span class="token punctuation">.</span><span class="token function">cancelQueueTimeoutTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    runnable<span class="token punctuation">.</span><span class="token function">startRunTimeoutTask</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8f34edbedee4683a9525a6e9423a1be~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
<ul>
<li>
<p>任务执行超时告警</p>
<p>重写 ThreadPoolExecutor 的 beforeExecute() 和 afterExecute() 方法，采用时间轮处理任务执行超时逻辑。
beforeExecute() 阶段根据 runTimeout 开启一个处理执行超时的 TimerTask，超时后执行 TimerTask 的 run 方法，
累加执行超时任务数量（总数值累加、周期值累加）。且判断如果周期累计值达到配置的阈值，则会触发一次告警通知
（同时重置周期累加值为 0 及上次告警时间为当前时间），告警间隔内多次触发不会发送告警通知。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterExecute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterExecute</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> r<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cancelRunTimeoutTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">tryPrintError</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">clearContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b360e0a129e4413b962b40f6ef415af2~tplv-k3u1fbpfcp-zoom-1.image" width="50%" height="50%">
</blockquote>
</div></template>


