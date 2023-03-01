export const data = {
  "key": "v-0a66322e",
  "path": "/guide/monitor/prometheus_grafana.html",
  "title": "micrometer接入流程",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "micrometer接入流程",
    "icon": "config",
    "order": 1,
    "author": "yanhom",
    "date": "2022-06-11T00:00:00.000Z",
    "category": [
      "micrometer接入流程",
      "dynamictp"
    ],
    "tag": [
      "micrometer接入流程",
      "dynamictp"
    ],
    "sticky": true,
    "star": true,
    "summary": "集成步骤 这块要讲的是集成 prometheus+grafana 做监控，事先你得安装好 prometheus+grafana，这个就不展开讲了，网上教程很多，测试使用可以直接用 docker 安装，非常简单，安装完之后接着往下看。 1. 首先配置文件中开启 micrometer 数据采集 2. 项目中引入 micrometer-prometheus 依赖 ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/monitor/prometheus_grafana.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "dynamic-tp"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "micrometer接入流程"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:author",
          "content": "yanhom"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "micrometer接入流程"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "dynamictp"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-06-11T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "集成步骤",
      "slug": "集成步骤",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.44,
    "words": 432
  },
  "filePathRelative": "guide/monitor/prometheus_grafana.md",
  "localizedDate": "2022年6月11日"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
