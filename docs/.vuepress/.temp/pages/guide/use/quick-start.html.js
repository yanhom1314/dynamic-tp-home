export const data = {
  "key": "v-bd86dfea",
  "path": "/guide/use/quick-start.html",
  "title": "接入步骤",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "接入步骤",
    "icon": "launch",
    "order": 1,
    "author": "yanhom",
    "date": "2022-06-11T00:00:00.000Z",
    "category": [
      "接入步骤"
    ],
    "tag": [
      "接入步骤"
    ],
    "sticky": true,
    "star": true,
    "summary": "接入步骤 1.引入相应配置中心的依赖，具体见下述 maven 依赖 2.配置中心配置线程池实例，配置见下述（给出的是全配置项，不用的可以删除） 3.启动类加 @EnableDynamicTp 注解 4.使用 @Resource 或 @Autowired 进行依赖注入，或通过 DtpRegistry.getDtpExecutor(\"name\") 获取 5.通过",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/use/quick-start.html"
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
          "content": "接入步骤"
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
          "content": "接入步骤"
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
    "minutes": 1.18,
    "words": 354
  },
  "filePathRelative": "guide/use/quick-start.md",
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
