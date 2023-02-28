export const data = {
  "key": "v-38eb3608",
  "path": "/guide/notice/ratelimiter.html",
  "title": "通知限流",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "通知限流",
    "icon": "decorate",
    "order": 1,
    "author": "yanhom",
    "date": "2022-06-11T00:00:00.000Z",
    "category": [
      "通知限流"
    ],
    "tag": [
      "通知限流"
    ],
    "sticky": true,
    "star": true,
    "summary": "推送限流 1. 默认通知告警是基于单机模式的，服务集群每个节点都会产生通知告警信息进行推送，在集群机器数量很多的情况下同时可能会产生大量的通知告警信息，影响使用体验。 2. 1.0.8 版本开始支持集群限流，基于 redis 实现的滑动窗口限流，会限制实际进行推送的节点个数，使用引入以下依赖 3. 通知项配置 clusterLimit 字段",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/notice/ratelimiter.html"
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
          "content": "通知限流"
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
          "content": "通知限流"
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
  "headers": [],
  "readingTime": {
    "minutes": 0.95,
    "words": 286
  },
  "filePathRelative": "guide/notice/ratelimiter.md",
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
