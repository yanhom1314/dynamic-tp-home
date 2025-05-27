import {sidebar} from "vuepress-theme-hope";
export default sidebar([
  {
    text: "简介",
    icon: "introduction",
    prefix: "/guide",
    children: [
      {
        text: "项目背景",
        icon: "background1",
        collapsable: false,
        link: "/guide/introduction/background"
      },
      {
        text: "功能特性",
        icon: "feature",
        collapsable: false,
        link: "/guide/introduction/functions"
      },
      {
        text: "架构设计",
        icon: "Architecture",
        collapsable: false,
        link: "/guide/introduction/architecture"
      },
      {
        text: "性能测试",
        icon: "benchmark",
        collapsable: false,
        link: "/guide/introduction/benchmark"
      },
    ],
  },

  {
    text: "快速开始",
    icon: "hot",
    prefix: "/guide",
    children: [
      {
        text: "使用步骤",
        icon: "launch",
        collapsable: false,
        link: "/guide/use/quick-start"
      },
      {
        text: "环境支持",
        icon: "enviroment-copy",
        collapsable: false,
        link: "/guide/use/env"
      },
      {
        text: "线程池模式",
        icon: "mode",
        collapsable: false,
        link: "/guide/use/mode"
      },
      {
        text: "代码使用",
        icon: "Code",
        collapsable: false,
        link: "/guide/use/code"
      },
      {
        text: "全局配置",
        icon: "global",
        collapsable: false,
        link: "/guide/use/global"
      },
      {
        text: "任务包装器",
        icon: "wrapper1",
        collapsable: false,
        link: "/guide/use/wrapper"
      },
      {
        text: "agent 场景",
        icon: "agent",
        collapsable: false,
        link: "/guide/use/agent"
      },
      {
        text: "拒绝策略",
        icon: "reject",
        collapsable: false,
        link: "/guide/use/reject"
      }
    ],
  },
  {
    text: "配置中心",
    icon: "peizhizhongxin",
    prefix: "/guide",
    children: [
      {
        text: "apollo 应用接入",
        icon: "a-apollo1",
        collapsable: false,
        link: "/guide/configcenter/apollo"
      },
      {
        text: "nacos 应用接入",
        icon: "Nacoskongzhitai",
        collapsable: false,
        link: "/guide/configcenter/nacos"
      },
      {
        text: "nacos-cloud 应用接入",
        icon: "Nacoskongzhitai",
        collapsable: false,
        link: "/guide/configcenter/nacos-cloud"
      },
      {
        text: "consul-cloud 应用接入",
        icon: "a-consul-community_on-lighte8e68a5f",
        collapsable: false,
        link: "/guide/configcenter/consul-cloud"
      },
      {
        text: "polaris 应用接入",
        icon: "Polaris",
        collapsable: false,
        link: "/guide/configcenter/polaris"
      },
      {
        text: "huawei-cloud 应用接入",
        icon: "huawei",
        collapsable: false,
        link: "/guide/configcenter/huawei-cloud"
      },
      {
        text: "zoopkeeper 应用接入",
        icon: "Zookeeper",
        collapsable: false,
        link: "/guide/configcenter/zookeeper"
      },
      {
        text: "zookeeper-cloud 应用接入",
        icon: "Zookeeper",
        collapsable: false,
        link: "/guide/configcenter/zookeeper-cloud"
      },
      {
        text: "etcd 应用接入",
        icon: "icon_etcd",
        collapsable: false,
        link: "/guide/configcenter/etcd"
      },
      {
        text: "自研配置中心应用接入",
        icon: "customize",
        collapsable: false,
        link: "/guide/configcenter/custom"
      },
      {
        text: "无配置中心应用接入",
        icon: "discover",
        collapsable: false,
        link: "/guide/configcenter/none"
      }
    ],
  },
  {
    text: "通知报警",
    icon: "notice",
    prefix: "/guide",
    children: [
      {
        text: "调参通知",
        icon: "change",
        collapsable: false,
        link: "/guide/notice/notice"
      },
      {
        text: "运行报警",
        icon: "alert",
        collapsable: false,
        link: "/guide/notice/alarm"
      },
      {
        text: "推送限流",
        icon: "limit_rate",
        collapsable: false,
        link: "/guide/notice/ratelimiter"
      },
      {
        text: "邮件通知",
        icon: "email",
        collapsable: false,
        link: "/guide/notice/email"
      },
      {
        text: "云之家通知",
        icon: "yunzhijia",
        collapsable: false,
        link: "/guide/notice/yunzhijia"
      },
      {
        text: "自定义通知渠道",
        icon: "customize",
        collapsable: false,
        link: "/guide/notice/custom"
      },
      {
        text: "扩展告警信息",
        icon: "extension",
        collapsable: false,
        link: "/guide/notice/populate_message"
      }
    ],
  },

  {
    text: "监控",
    icon: "monitoring",
    prefix: "/guide",
    children: [
      {
        text: "数据采集",
        icon: "shujucaiji",
        collapsable: false,
        link: "/guide/monitor/collect_types"
      },
      {
        text: "grafana 监控",
        icon: "grafana",
        collapsable: false,
        link: "/guide/monitor/prometheus_grafana"
      },
      {
        text: "hertzbeat 监控",
        icon: "jiankong",
        collapsable: false,
        link: "/guide/monitor/hertzbeat"
      },
      {
        text: "自定义采集器",
        icon: "customize1",
        collapsable: false,
        link: "/guide/monitor/custom"
      }
    ],
  },

  {
    text: "三方框架集成",
    icon: "plugin",
    prefix: "/guide",
    children: [
      {
        text: "tomcat 线程池管理",
        icon: "TOMCAT",
        collapsable: false,
        link: "/guide/middleware/tomcat"
      },
      {
        text: "undertow 线程池管理",
        icon: "Undertow",
        collapsable: false,
        link: "/guide/middleware/undertow"
      },
      {
        text: "jetty 线程池管理",
        icon: "jetty",
        collapsable: false,
        link: "/guide/middleware/jetty"
      },
      {
        text: "dubbo 线程池管理",
        icon: "dubbo2",
        collapsable: false,
        link: "/guide/middleware/dubbo"
      },
      {
        text: "rocketmq 线程池管理",
        icon: "apacherocketmq",
        collapsable: false,
        link: "/guide/middleware/rocketmq"
      },
      {
        text: "hystrix 线程池管理",
        icon: "hystrix",
        collapsable: false,
        link: "/guide/middleware/hystrix"
      },
      {
        text: "okhttp3 线程池管理",
        icon: "http",
        collapsable: false,
        link: "/guide/middleware/okhttp3"
      },
      {
        text: "grpc 线程池管理",
        icon: "GRPC",
        collapsable: false,
        link: "/guide/middleware/grpc"
      },
      {
        text: "brpc 线程池管理",
        icon: "brpc",
        collapsable: false,
        link: "/guide/middleware/brpc"
      },
      {
        text: "motan 线程池管理",
        icon: "mixi",
        collapsable: false,
        link: "/guide/middleware/motan"
      },
      {
        text: "tars 线程池管理",
        icon: "stars",
        collapsable: false,
        link: "/guide/middleware/tars"
      },
      {
        text: "sofarpc 线程池管理",
        icon: "sofarpc",
        collapsable: false,
        link: "/guide/middleware/sofa"
      },
      {
        text: "rabbitmq 线程池管理",
        icon: "rabbitmq",
        collapsable: false,
        link: "/guide/middleware/rabbitmq"
      },
      {
        text: "liteflow 线程池管理",
        icon: "flow",
        collapsable: false,
        link: "/guide/middleware/liteflow"
      },
      {
        text: "thrift 线程池管理",
        icon: "Thrift",
        collapsable: false,
        link: "/guide/middleware/thrift"
      }
    ],
  },

  {
    text: "其他",
    icon: "Other",
    prefix: "/guide",
    children: [
      {
        text: "加群交流",
        icon: "wechat",
        collapsable: false,
        link: "/guide/other/contact"
      },
      {
        text: "常见问题",
        icon: "question",
        collapsable: false,
        link: "/guide/other/faq"
      },
      {
        text: "项目成员",
        icon: "member",
        collapsable: false,
        link: "/guide/other/members"
      },
      {
        text: "接入公司",
        icon: "user1",
        collapsable: false,
        link: "/guide/other/users"
      },
      {
        text: "支持我们",
        icon: "f-support",
        collapsable: false,
        link: "/guide/other/supportme"
      },
      {
        text: "参与开发",
        icon: "develop",
        collapsable: false,
        link: "/guide/other/develop"
      },
      {
        text: "相关文章",
        icon: "-article",
        collapsable: false,
        link: "/guide/other/articles"
      },
      {
        text: "发版记录",
        icon: "banbenzi",
        collapsable: false,
        link: "/guide/other/release"
      },
    ],
  },
]);
