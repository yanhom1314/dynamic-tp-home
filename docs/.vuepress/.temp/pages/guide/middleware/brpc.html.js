export const data = {
  "key": "v-cf3ff1b6",
  "path": "/guide/middleware/brpc.html",
  "title": "brpc 线程池管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "brpc 线程池管理",
    "icon": "snow",
    "order": 1,
    "author": "yanhom",
    "date": "2023-02-11T00:00:00.000Z",
    "category": [
      "brpc"
    ],
    "tag": [
      "brpc",
      "rpc",
      "dynamictp"
    ],
    "sticky": true,
    "star": true,
    "summary": "使用步骤 1. 引入下述依赖 2. 配置文件中配置 brpc 线程池 3. 启动日志 服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知 1. 线程池名称规则：bizthreadpool_name + \"#\" + client / server（可以在启动日志找输出的线程池名称） 2. brpc 线程池享有动态调参、监控、通知告警",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/middleware/brpc.html"
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
          "content": "brpc 线程池管理"
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
          "content": "brpc"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "rpc"
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
          "content": "2023-02-11T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "使用步骤",
      "slug": "使用步骤",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.23,
    "words": 368
  },
  "filePathRelative": "guide/middleware/brpc.md",
  "localizedDate": "2023年2月11日"
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
