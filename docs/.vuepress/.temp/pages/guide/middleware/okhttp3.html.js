export const data = {
  "key": "v-334508db",
  "path": "/guide/middleware/okhttp3.html",
  "title": "okhttp3 线程池管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "okhttp3 线程池管理",
    "icon": "branch",
    "order": 1,
    "author": "yanhom",
    "date": "2023-02-11T00:00:00.000Z",
    "category": [
      "okhttp3"
    ],
    "tag": [
      "okhttp3",
      "httpclient",
      "dynamictp"
    ],
    "sticky": true,
    "star": true,
    "summary": "使用步骤 1. 引入下述依赖 2. 配置文件中配置 okhttp3 线程池 3. 启动日志 服务启动看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知\r1. 服务启动会自动从 Spring 容器中获取所有被 Spring 容器管理的 OkHttpClient 实例 2. 线程池名称规则：beanName + Tp（可以在启动日志找输出的线",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/middleware/okhttp3.html"
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
          "content": "okhttp3 线程池管理"
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
          "content": "okhttp3"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "httpclient"
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
    "minutes": 1.38,
    "words": 413
  },
  "filePathRelative": "guide/middleware/okhttp3.md",
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
