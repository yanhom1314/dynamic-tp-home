import {sidebar} from "vuepress-theme-hope";
export default sidebar([
  {
    text: "简介",
    icon: "guide",
    prefix: "/guide",
    children: [
      {
        text: "项目背景",
        icon: "ask",
        collapsable: false,
        link: "/guide/introduction/background"
      },
      {
        text: "功能特性",
        icon: "enum",
        collapsable: false,
        link: "/guide/introduction/functions"
      },
      {
        text: "架构设计",
        icon: "structure",
        collapsable: false,
        link: "/guide/introduction/architecture"
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
        icon: "set",
        collapsable: false,
        link: "/guide/use/env"
      },
      {
        text: "线程池模式",
        icon: "select",
        collapsable: false,
        link: "/guide/use/mode"
      },
      {
        text: "代码使用",
        icon: "code",
        collapsable: false,
        link: "/guide/use/code"
      },
      {
        text: "全局配置",
        icon: "discover",
        collapsable: false,
        link: "/guide/use/global"
      },
      {
        text: "任务包装器",
        icon: "wrap",
        collapsable: false,
        link: "/guide/use/wrapper"
      },
      {
        text: "agent 场景",
        icon: "info",
        collapsable: false,
        link: "/guide/use/agent"
      },
      {
        text: "拒绝策略",
        icon: "linter",
        collapsable: false,
        link: "/guide/use/reject"
      }
    ],
  },
  {
    text: "配置中心",
    icon: "type",
    prefix: "/guide",
    children: [
      {
        text: "apollo 应用接入",
        icon: "palette",
        collapsable: false,
        link: "/guide/configcenter/apollo"
      },
      {
        text: "nacos 应用接入",
        icon: "module",
        collapsable: false,
        link: "/guide/configcenter/nacos"
      },
      {
        text: "nacos-cloud 应用接入",
        icon: "mesh",
        collapsable: false,
        link: "/guide/configcenter/nacos-cloud"
      },
      {
        text: "consul-cloud 应用接入",
        icon: "emoji",
        collapsable: false,
        link: "/guide/configcenter/consul-cloud"
      },
      {
        text: "polaris 应用接入",
        icon: "alias",
        collapsable: false,
        link: "/guide/configcenter/polaris"
      },
      {
        text: "huawei-cloud 应用接入",
        icon: "speed",
        collapsable: false,
        link: "/guide/configcenter/huawei-cloud"
      },
      {
        text: "zoopkeeper 应用接入",
        icon: "leaf",
        collapsable: false,
        link: "/guide/configcenter/zookeeper"
      },
      {
        text: "zookeeper-cloud 应用接入",
        icon: "interact",
        collapsable: false,
        link: "/guide/configcenter/zookeeper-cloud"
      },
      {
        text: "etcd 应用接入",
        icon: "contrast",
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
        icon: "notice",
        collapsable: false,
        link: "/guide/notice/notice"
      },
      {
        text: "运行报警",
        icon: "warn",
        collapsable: false,
        link: "/guide/notice/alarm"
      },
      {
        text: "推送限流",
        icon: "decorate",
        collapsable: false,
        link: "/guide/notice/ratelimiter"
      },
      {
        text: "邮件通知",
        icon: "at",
        collapsable: false,
        link: "/guide/notice/email"
      },
      {
        text: "云之家通知",
        icon: "community",
        collapsable: false,
        link: "/guide/notice/yunzhijia"
      },
      {
        text: "自定义通知渠道",
        icon: "variable",
        collapsable: false,
        link: "/guide/notice/custom"
      },
      {
        text: "扩展告警信息",
        icon: "add",
        collapsable: false,
        link: "/guide/notice/populate_message"
      }
    ],
  },

  {
    text: "监控",
    icon: "eye",
    prefix: "/guide",
    children: [
      {
        text: "数据采集",
        icon: "ability",
        collapsable: false,
        link: "/guide/monitor/collect_types"
      },
      {
        text: "prometheus+grafana 监控",
        icon: "config",
        collapsable: false,
        link: "/guide/monitor/prometheus_grafana"
      },
      {
        text: "hertzbeat 监控",
        icon: "computer",
        collapsable: false,
        link: "/guide/monitor/hertzbeat"
      },
      {
        text: "自定义采集器",
        icon: "customize",
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
        icon: "Apache",
        collapsable: false,
        link: "/guide/middleware/tomcat"
      },
      {
        text: "undertow 线程池管理",
        icon: "safari",
        collapsable: false,
        link: "/guide/middleware/undertow"
      },
      {
        text: "jetty 线程池管理",
        icon: "alias",
        collapsable: false,
        link: "/guide/middleware/jetty"
      },
      {
        text: "dubbo 线程池管理",
        icon: "selection",
        collapsable: false,
        link: "/guide/middleware/dubbo"
      },
      {
        text: "rocketmq 线程池管理",
        icon: "angular",
        collapsable: false,
        link: "/guide/middleware/rocketmq"
      },
      {
        text: "hystrix 线程池管理",
        icon: "bit",
        collapsable: false,
        link: "/guide/middleware/hystrix"
      },
      {
        text: "okhttp3 线程池管理",
        icon: "branch",
        collapsable: false,
        link: "/guide/middleware/okhttp3"
      },
      {
        text: "grpc 线程池管理",
        icon: "chrome",
        collapsable: false,
        link: "/guide/middleware/grpc"
      },
      {
        text: "brpc 线程池管理",
        icon: "snow",
        collapsable: false,
        link: "/guide/middleware/brpc"
      },
      {
        text: "motan 线程池管理",
        icon: "dart",
        collapsable: false,
        link: "/guide/middleware/motan"
      },
      {
        text: "tars 线程池管理",
        icon: "function",
        collapsable: false,
        link: "/guide/middleware/tars"
      },
      {
        text: "sofarpc 线程池管理",
        icon: "linter",
        collapsable: false,
        link: "/guide/middleware/sofa"
      },
      {
        text: "rabbitmq 线程池管理",
        icon: "app",
        collapsable: false,
        link: "/guide/middleware/rabbitmq"
      },
      {
        text: "liteflow 线程池管理",
        icon: "mesh",
        collapsable: false,
        link: "/guide/middleware/liteflow"
      }
    ],
  },

  {
    text: "其他",
    icon: "more",
    prefix: "/guide",
    children: [
      {
        text: "加群交流",
        icon: "wechat",
        collapsable: false,
        link: "/guide/other/contact"
      },
      {
        text: "接入公司",
        icon: "people",
        collapsable: false,
        link: "/guide/other/users"
      },
      {
        text: "支持我们",
        icon: "like",
        collapsable: false,
        link: "/guide/other/supportme"
      },
      {
        text: "参与开发",
        icon: "merge",
        collapsable: false,
        link: "/guide/other/develop"
      },
      {
        text: "相关文章",
        icon: "note",
        collapsable: false,
        link: "/guide/other/articles"
      },
      {
        text: "发版记录",
        icon: "list",
        collapsable: false,
        link: "/guide/other/release"
      },
    ],
  },
]);
