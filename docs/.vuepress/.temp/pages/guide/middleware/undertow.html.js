export const data = {
  "key": "v-d420e1f8",
  "path": "/guide/middleware/undertow.html",
  "title": "undertow 线程池管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "undertow 线程池管理",
    "icon": "safari",
    "order": 1,
    "author": "yanhom",
    "date": "2023-02-11T00:00:00.000Z",
    "category": [
      "undertow"
    ],
    "tag": [
      "undertow",
      "webserver",
      "dynamictp"
    ],
    "sticky": true,
    "star": true,
    "summary": "使用步骤 1. 引入下述依赖 2. 配置文件中配置 undertow 线程池 3. 启动日志 服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知 1. 线程池名称：undertowTp 2. undertow 线程池目前只享有动态调参和监控功能，没通知报警功能 3. undertow 内部使用 xnio 网络框架，类似 netty",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/middleware/undertow.html"
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
          "content": "undertow 线程池管理"
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
          "content": "undertow"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "webserver"
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
    "minutes": 0.76,
    "words": 229
  },
  "filePathRelative": "guide/middleware/undertow.md",
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
