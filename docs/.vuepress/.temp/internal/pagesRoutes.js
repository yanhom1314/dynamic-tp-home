import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页","icon":"home"},["/index.html","/README.md"]],
  ["v-6b8af25e","/guide/configcenter/apollo.html",{"title":"apollo 应用接入","icon":"palette"},["/guide/configcenter/apollo","/guide/configcenter/apollo.md"]],
  ["v-67d5631d","/guide/configcenter/consul-cloud.html",{"title":"consul-cloud 应用接入","icon":"emoji"},["/guide/configcenter/consul-cloud","/guide/configcenter/consul-cloud.md"]],
  ["v-a237d906","/guide/configcenter/etcd.html",{"title":"etcd 应用接入","icon":"contrast"},["/guide/configcenter/etcd","/guide/configcenter/etcd.md"]],
  ["v-3c9f555e","/guide/configcenter/huawei-cloud.html",{"title":"huawei-cloud 应用接入","icon":"speed"},["/guide/configcenter/huawei-cloud","/guide/configcenter/huawei-cloud.md"]],
  ["v-fcc2e06e","/guide/configcenter/nacos-cloud.html",{"title":"nacos-cloud 应用接入","icon":"mesh"},["/guide/configcenter/nacos-cloud","/guide/configcenter/nacos-cloud.md"]],
  ["v-7b8b5af1","/guide/configcenter/nacos.html",{"title":"nacos 应用接入","icon":"module"},["/guide/configcenter/nacos","/guide/configcenter/nacos.md"]],
  ["v-257f7e95","/guide/configcenter/none.html",{"title":"无配置中心应用接入","icon":"discover"},["/guide/configcenter/none","/guide/configcenter/none.md"]],
  ["v-4cf39e7d","/guide/configcenter/polaris.html",{"title":"polaris-cloud 应用接入","icon":"alias"},["/guide/configcenter/polaris","/guide/configcenter/polaris.md"]],
  ["v-35c1031e","/guide/configcenter/zookeeper-cloud.html",{"title":"zookeeper-cloud 应用接入","icon":"interact"},["/guide/configcenter/zookeeper-cloud","/guide/configcenter/zookeeper-cloud.md"]],
  ["v-136e6799","/guide/configcenter/zookeeper.html",{"title":"zookeeper 应用接入","icon":"leaf"},["/guide/configcenter/zookeeper","/guide/configcenter/zookeeper.md"]],
  ["v-3406509d","/guide/introduction/architecture.html",{"title":"架构设计","icon":"structure"},["/guide/introduction/architecture","/guide/introduction/architecture.md"]],
  ["v-774e7762","/guide/introduction/background.html",{"title":"项目背景","icon":"ask"},["/guide/introduction/background","/guide/introduction/background.md"]],
  ["v-2be5ef72","/guide/introduction/functions.html",{"title":"功能特性","icon":"enum"},["/guide/introduction/functions","/guide/introduction/functions.md"]],
  ["v-5d4ddef6","/guide/monitor/collect_types.html",{"title":"采集类型","icon":"ability"},["/guide/monitor/collect_types","/guide/monitor/collect_types.md"]],
  ["v-4ce8ba29","/guide/monitor/hertzbeat.html",{"title":"hertzbeat 接入流程","icon":"computer"},["/guide/monitor/hertzbeat","/guide/monitor/hertzbeat.md"]],
  ["v-0a66322e","/guide/monitor/prometheus_grafana.html",{"title":"prometheus+grafana 接入流程","icon":"config"},["/guide/monitor/prometheus_grafana","/guide/monitor/prometheus_grafana.md"]],
  ["v-d2565d5a","/guide/notice/alarm.html",{"title":"报警","icon":"warn"},["/guide/notice/alarm","/guide/notice/alarm.md"]],
  ["v-1e7216e8","/guide/notice/email.html",{"title":"邮件通知","icon":"at"},["/guide/notice/email","/guide/notice/email.md"]],
  ["v-540df636","/guide/notice/notice.html",{"title":"通知","icon":"notice"},["/guide/notice/notice","/guide/notice/notice.md"]],
  ["v-38eb3608","/guide/notice/ratelimiter.html",{"title":"通知限流","icon":"decorate"},["/guide/notice/ratelimiter","/guide/notice/ratelimiter.md"]],
  ["v-3ee2c8de","/guide/other/articles.html",{"title":"介绍文章","icon":"article"},["/guide/other/articles","/guide/other/articles.md"]],
  ["v-ad6e9978","/guide/other/contact.html",{"title":"加群交流","icon":"wechat"},["/guide/other/contact","/guide/other/contact.md"]],
  ["v-300ff086","/guide/other/release.html",{"title":"发版记录","icon":"list"},["/guide/other/release","/guide/other/release.md"]],
  ["v-775c611c","/guide/other/users.html",{"title":"接入公司","icon":"people"},["/guide/other/users","/guide/other/users.md"]],
  ["v-cf3ff1b6","/guide/middleware/brpc.html",{"title":"brpc 线程池管理","icon":"snow"},["/guide/middleware/brpc","/guide/middleware/brpc.md"]],
  ["v-bd029e68","/guide/middleware/dubbo.html",{"title":"dubbo 线程池管理","icon":"selection"},["/guide/middleware/dubbo","/guide/middleware/dubbo.md"]],
  ["v-7db6322a","/guide/middleware/grpc.html",{"title":"grpc 线程池管理","icon":"chrome"},["/guide/middleware/grpc","/guide/middleware/grpc.md"]],
  ["v-5678df0a","/guide/middleware/hystrix.html",{"title":"hystrix 线程池管理","icon":"bit"},["/guide/middleware/hystrix","/guide/middleware/hystrix.md"]],
  ["v-2e062fec","/guide/middleware/jetty.html",{"title":"jetty 线程池管理","icon":"alias"},["/guide/middleware/jetty","/guide/middleware/jetty.md"]],
  ["v-f89b2414","/guide/middleware/middleware.html",{"title":"已集成框架","icon":"plugin"},["/guide/middleware/middleware","/guide/middleware/middleware.md"]],
  ["v-5499b6aa","/guide/middleware/motan.html",{"title":"motan 线程池管理","icon":"dart"},["/guide/middleware/motan","/guide/middleware/motan.md"]],
  ["v-334508db","/guide/middleware/okhttp3.html",{"title":"okhttp3 线程池管理","icon":"branch"},["/guide/middleware/okhttp3","/guide/middleware/okhttp3.md"]],
  ["v-956c28ec","/guide/middleware/rabbitmq.html",{"title":"rabbitmq 线程池管理","icon":"app"},["/guide/middleware/rabbitmq","/guide/middleware/rabbitmq.md"]],
  ["v-092e30e0","/guide/middleware/rocketmq.html",{"title":"rocketmq 线程池管理","icon":"angular"},["/guide/middleware/rocketmq","/guide/middleware/rocketmq.md"]],
  ["v-24dfddd1","/guide/middleware/sofa.html",{"title":"sofarpc 线程池管理","icon":"linter"},["/guide/middleware/sofa","/guide/middleware/sofa.md"]],
  ["v-b7544a4c","/guide/middleware/tars.html",{"title":"tars 线程池管理","icon":"function"},["/guide/middleware/tars","/guide/middleware/tars.md"]],
  ["v-79613104","/guide/middleware/tomcat.html",{"title":"tomcat 线程池管理","icon":"Apache"},["/guide/middleware/tomcat","/guide/middleware/tomcat.md"]],
  ["v-d420e1f8","/guide/middleware/undertow.html",{"title":"undertow 线程池管理","icon":"safari"},["/guide/middleware/undertow","/guide/middleware/undertow.md"]],
  ["v-cf6119d0","/guide/use/code.html",{"title":"代码使用","icon":"code"},["/guide/use/code","/guide/use/code.md"]],
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
