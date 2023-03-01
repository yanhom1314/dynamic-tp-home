export const themeData = {
  "blog": {},
  "encrypt": {},
  "pure": false,
  "darkmode": "switch",
  "themeColor": {
    "blue": "#087CFA",
    "red": "#FE2857",
    "green": "#21D789",
    "orange": "#FC801D",
    "pink": "#FF318C",
    "lightBlue": "#07C3F2"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        {
          "text": "简介",
          "icon": "guide",
          "prefix": "/guide",
          "children": [
            {
              "text": "项目背景",
              "icon": "ask",
              "collapsable": false,
              "link": "/guide/introduction/background"
            },
            {
              "text": "功能特性",
              "icon": "enum",
              "collapsable": false,
              "link": "/guide/introduction/functions"
            },
            {
              "text": "架构设计",
              "icon": "structure",
              "collapsable": false,
              "link": "/guide/introduction/architecture"
            }
          ]
        },
        {
          "text": "快速开始",
          "icon": "hot",
          "prefix": "/guide",
          "children": [
            {
              "text": "使用步骤",
              "icon": "launch",
              "collapsable": false,
              "link": "/guide/use/quick-start"
            },
            {
              "text": "maven依赖",
              "icon": "install",
              "collapsable": false,
              "link": "/guide/use/maven"
            },
            {
              "text": "配置文件",
              "icon": "config",
              "collapsable": false,
              "link": "/guide/use/config"
            },
            {
              "text": "代码使用",
              "icon": "code",
              "collapsable": false,
              "link": "/guide/use/code"
            },
            {
              "text": "任务包装器",
              "icon": "wrap",
              "collapsable": false,
              "link": "/guide/use/wrapper"
            },
            {
              "text": "工具",
              "icon": "tool",
              "collapsable": false,
              "link": "/guide/use/tool"
            }
          ]
        },
        {
          "text": "通知报警",
          "icon": "notice",
          "prefix": "/guide",
          "children": [
            {
              "text": "调参通知",
              "icon": "notice",
              "collapsable": false,
              "link": "/guide/notice/notice"
            },
            {
              "text": "运行报警",
              "icon": "warn",
              "collapsable": false,
              "link": "/guide/notice/alarm"
            },
            {
              "text": "推送限流",
              "icon": "decorate",
              "collapsable": false,
              "link": "/guide/notice/ratelimiter"
            },
            {
              "text": "邮件通知",
              "icon": "at",
              "collapsable": false,
              "link": "/guide/notice/email"
            }
          ]
        },
        {
          "text": "监控",
          "icon": "eye",
          "prefix": "/guide",
          "children": [
            {
              "text": "数据采集",
              "icon": "ability",
              "collapsable": false,
              "link": "/guide/monitor/collect_types"
            },
            {
              "text": "prometheus+grafana 监控",
              "icon": "config",
              "collapsable": false,
              "link": "/guide/monitor/prometheus_grafana"
            },
            {
              "text": "hertzbeat 监控",
              "icon": "computer",
              "collapsable": false,
              "link": "/guide/monitor/hertzbeat"
            }
          ]
        },
        {
          "text": "三方框架集成",
          "icon": "plugin",
          "prefix": "/guide",
          "children": [
            {
              "text": "tomcat 线程池管理",
              "icon": "Apache",
              "collapsable": false,
              "link": "/guide/middleware/tomcat"
            },
            {
              "text": "undertow 线程池管理",
              "icon": "safari",
              "collapsable": false,
              "link": "/guide/middleware/undertow"
            },
            {
              "text": "jetty 线程池管理",
              "icon": "alias",
              "collapsable": false,
              "link": "/guide/middleware/jetty"
            },
            {
              "text": "dubbo 线程池管理",
              "icon": "selection",
              "collapsable": false,
              "link": "/guide/middleware/dubbo"
            },
            {
              "text": "rocketmq 线程池管理",
              "icon": "angular",
              "collapsable": false,
              "link": "/guide/middleware/rocketmq"
            },
            {
              "text": "hystrix 线程池管理",
              "icon": "bit",
              "collapsable": false,
              "link": "/guide/middleware/hystrix"
            },
            {
              "text": "okhttp3 线程池管理",
              "icon": "branch",
              "collapsable": false,
              "link": "/guide/middleware/okhttp3"
            },
            {
              "text": "grpc 线程池管理",
              "icon": "chrome",
              "collapsable": false,
              "link": "/guide/middleware/grpc"
            },
            {
              "text": "brpc 线程池管理",
              "icon": "snow",
              "collapsable": false,
              "link": "/guide/middleware/brpc"
            },
            {
              "text": "motan 线程池管理",
              "icon": "dart",
              "collapsable": false,
              "link": "/guide/middleware/motan"
            },
            {
              "text": "tars 线程池管理",
              "icon": "function",
              "collapsable": false,
              "link": "/guide/middleware/tars"
            },
            {
              "text": "sofarpc 线程池管理",
              "icon": "linter",
              "collapsable": false,
              "link": "/guide/middleware/sofa"
            },
            {
              "text": "rabbitmq 线程池管理",
              "icon": "app",
              "collapsable": false,
              "link": "/guide/middleware/rabbitmq"
            }
          ]
        },
        {
          "text": "其他",
          "icon": "more",
          "prefix": "/guide",
          "children": [
            {
              "text": "加群交流",
              "icon": "wechat",
              "collapsable": false,
              "link": "/guide/other/contact"
            },
            {
              "text": "相关文章",
              "icon": "note",
              "collapsable": false,
              "link": "/guide/other/articles"
            },
            {
              "text": "发版记录",
              "icon": "list",
              "collapsable": false,
              "link": "/guide/other/release"
            }
          ]
        }
      ],
      "sidebarIcon": true,
      "headerDepth": 2,
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "author": "作者",
        "date": "写作日期",
        "origin": "原创",
        "views": "访问量",
        "category": "分类",
        "tag": "标签",
        "readingTime": "阅读时间",
        "words": "字数",
        "toc": "此页内容",
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "文章已加密",
        "placeholder": "输入密码",
        "remember": "记住密码",
        "errorHint": "请输入正确的密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家",
        "openInNewWindow": "Open in new window"
      },
      "footer": "MIT Licensed  | Theme by <a href=\"https://vuepress-theme-hope.github.io\">vuepress-theme-hope</a> ",
      "copyright": "Copyright © 2022-present <a href=\"https://github.com/yanhom1314\">yanhom</a>",
      "author": {
        "name": "yanhom",
        "url": "https://gitee.com/dromara/dynamic-tp"
      },
      "logo": "/logo.png",
      "navbar": [
        {
          "text": "主页",
          "icon": "home",
          "link": "/"
        },
        {
          "text": "文档",
          "icon": "read",
          "link": "/guide/introduction/background"
        },
        {
          "text": "接入指南",
          "icon": "launch",
          "link": "/guide/use/quick-start"
        },
        {
          "text": "加入社群",
          "icon": "wechat",
          "link": "/guide/other/contact"
        },
        {
          "text": "Gitee",
          "icon": "gitee",
          "link": "https://gitee.com/dromara/dynamic-tp"
        },
        {
          "text": "Github",
          "icon": "github",
          "link": "https://github.com/dromara/dynamic-tp"
        }
      ],
      "lastUpdated": true,
      "docsDir": "dtp-docs/docs",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ]
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
