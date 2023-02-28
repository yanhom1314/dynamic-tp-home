export const data = {
  "key": "v-5306456a",
  "path": "/guide/monitor/way.html",
  "title": "采集类型",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "采集类型",
    "icon": "ability",
    "order": 1,
    "author": "yanhom",
    "date": "2022-06-11T00:00:00.000Z",
    "category": [
      "采集类型"
    ],
    "tag": [
      "采集类型"
    ],
    "sticky": true,
    "star": true,
    "summary": "目前框架提供了四种监控数据采集方式，通过 collectorTypes 属性配置监控指标采集类型，默认 Micrometer 1.Logging：线程池指标数据会以 Json 格式输出到指定的日志文件里 2.Internal_logging：线程池指标数据会以 Json 格式输出到项目日志文件里 3.Micrometer：采用监控门面，通过引入相关 Micr",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/monitor/way.html"
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
          "content": "采集类型"
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
          "content": "采集类型"
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
      "title": "micrometer",
      "slug": "micrometer",
      "children": []
    },
    {
      "level": 3,
      "title": "logging",
      "slug": "logging",
      "children": []
    },
    {
      "level": 3,
      "title": "endpoint",
      "slug": "endpoint",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.62,
    "words": 487
  },
  "filePathRelative": "guide/monitor/collect_types.md",
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
