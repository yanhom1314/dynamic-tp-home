import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页","icon":"home"},["/index.html","/README.md"]],
  ["v-3406509d","/guide/introduction/architecture.html",{"title":"架构设计","icon":"structure"},["/guide/introduction/architecture","/guide/introduction/architecture.md"]],
  ["v-774e7762","/guide/introduction/background.html",{"title":"项目背景","icon":"ask"},["/guide/introduction/background","/guide/introduction/background.md"]],
  ["v-2be5ef72","/guide/introduction/functions.html",{"title":"功能特性","icon":"enum"},["/guide/introduction/functions","/guide/introduction/functions.md"]],
  ["v-4ce8ba29","/guide/monitor/hertzbeat.html",{"title":"hertzbeat 接入流程","icon":"computer"},["/guide/monitor/hertzbeat","/guide/monitor/hertzbeat.md"]],
  ["v-0a66322e","/guide/monitor/prometheus_grafana.html",{"title":"micrometer接入流程","icon":"config"},["/guide/monitor/prometheus_grafana","/guide/monitor/prometheus_grafana.md"]],
  ["v-5306456a","/guide/monitor/way.html",{"title":"采集类型","icon":"ability"},["/guide/monitor/way","/guide/monitor/collect_types.md"]],
  ["v-3ee2c8de","/guide/other/articles.html",{"title":"介绍文章","icon":"article"},["/guide/other/articles","/guide/other/articles.md"]],
  ["v-ad6e9978","/guide/other/contact.html",{"title":"加群交流","icon":"wechat"},["/guide/other/contact","/guide/other/contact.md"]],
  ["v-300ff086","/guide/other/release.html",{"title":"发版记录","icon":"list"},["/guide/other/release","/guide/other/release.md"]],
  ["v-cf3ff1b6","/guide/middleware/brpc.html",{"title":"brpc 线程池管理","icon":"snow"},["/guide/middleware/brpc","/guide/middleware/brpc.md"]],
  ["v-bd029e68","/guide/middleware/dubbo.html",{"title":"dubbo 线程池管理","icon":"selection"},["/guide/middleware/dubbo","/guide/middleware/dubbo.md"]],
  ["v-7db6322a","/guide/middleware/grpc.html",{"title":"grpc 线程池管理","icon":"chrome"},["/guide/middleware/grpc","/guide/middleware/grpc.md"]],
  ["v-5678df0a","/guide/middleware/hystrix.html",{"title":"hystrix 线程池管理","icon":"bit"},["/guide/middleware/hystrix","/guide/middleware/hystrix.md"]],
  ["v-2e062fec","/guide/middleware/jetty.html",{"title":"jetty 线程池管理","icon":"alias"},["/guide/middleware/jetty","/guide/middleware/jetty.md"]],
  ["v-f89b2414","/guide/middleware/middleware.html",{"title":"已集成框架","icon":"plugin"},["/guide/middleware/middleware","/guide/middleware/middleware.md"]],
  ["v-5499b6aa","/guide/middleware/motan.html",{"title":"motan 线程池管理","icon":"dart"},["/guide/middleware/motan","/guide/middleware/motan.md"]],
  ["v-334508db","/guide/middleware/okhttp3.html",{"title":"okhttp3 线程池管理","icon":"branch"},["/guide/middleware/okhttp3","/guide/middleware/okhttp3.md"]],
  ["v-092e30e0","/guide/middleware/rocketmq.html",{"title":"rocketmq 线程池管理","icon":"angular"},["/guide/middleware/rocketmq","/guide/middleware/rocketmq.md"]],
  ["v-24dfddd1","/guide/middleware/sofa.html",{"title":"sofarpc 线程池管理","icon":"linter"},["/guide/middleware/sofa","/guide/middleware/sofa.md"]],
  ["v-b7544a4c","/guide/middleware/tars.html",{"title":"tars 线程池管理","icon":"function"},["/guide/middleware/tars","/guide/middleware/tars.md"]],
  ["v-79613104","/guide/middleware/tomcat.html",{"title":"tomcat 线程池管理","icon":"Apache"},["/guide/middleware/tomcat","/guide/middleware/tomcat.md"]],
  ["v-d420e1f8","/guide/middleware/undertow.html",{"title":"undertow 线程池管理","icon":"safari"},["/guide/middleware/undertow","/guide/middleware/undertow.md"]],
  ["v-d2565d5a","/guide/notice/alarm.html",{"title":"报警","icon":"warn"},["/guide/notice/alarm","/guide/notice/alarm.md"]],
  ["v-1e7216e8","/guide/notice/email.html",{"title":"邮件通知","icon":"at"},["/guide/notice/email","/guide/notice/email.md"]],
  ["v-540df636","/guide/notice/notice.html",{"title":"通知","icon":"notice"},["/guide/notice/notice","/guide/notice/notice.md"]],
  ["v-38eb3608","/guide/notice/ratelimiter.html",{"title":"通知限流","icon":"decorate"},["/guide/notice/ratelimiter","/guide/notice/ratelimiter.md"]],
  ["v-cf6119d0","/guide/use/code.html",{"title":"代码使用","icon":"code"},["/guide/use/code","/guide/use/code.md"]],
  ["v-204ad7e3","/guide/use/config.html",{"title":"配置文件","icon":"config"},["/guide/use/config","/guide/use/config.md"]],
  ["v-ced828bc","/guide/use/maven.html",{"title":"maven依赖","icon":"install"},["/guide/use/maven","/guide/use/maven.md"]],
  ["v-bd86dfea","/guide/use/quick-start.html",{"title":"接入步骤","icon":"launch"},["/guide/use/quick-start","/guide/use/quick-start.md"]],
  ["v-7a9d6b66","/guide/use/tool.html",{"title":"工具","icon":"tool"},["/guide/use/tool","/guide/use/tool.md"]],
  ["v-fa813ecc","/guide/use/wrapper.html",{"title":"任务包装","icon":"wrap"},["/guide/use/wrapper","/guide/use/wrapper.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
