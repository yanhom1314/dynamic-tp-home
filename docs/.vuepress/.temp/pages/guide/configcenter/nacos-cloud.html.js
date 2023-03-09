export const data = {
  "key": "v-fcc2e06e",
  "path": "/guide/configcenter/nacos-cloud.html",
  "title": "nacos-cloud 应用接入",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "nacos-cloud 应用接入",
    "icon": "mesh",
    "order": 1,
    "author": "yanhom",
    "date": "2022-06-11T00:00:00.000Z",
    "category": [
      "nacos-cloud 应用接入",
      "dynamictp"
    ],
    "tag": [
      "nacos-cloud 应用接入",
      "dynamictp"
    ],
    "sticky": true,
    "star": true,
    "summary": "1. 动态线程池配置文件，建议单独开一个文件放到 nacos 中，如：user-center-dtp-dev.yml 2. 如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好 3. 给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量 4. 集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/configcenter/nacos-cloud.html"
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
          "content": "nacos-cloud 应用接入"
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
          "content": "nacos-cloud 应用接入"
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
      "title": "maven 依赖",
      "slug": "maven-依赖",
      "children": []
    },
    {
      "level": 3,
      "title": "线程池配置文件",
      "slug": "线程池配置文件",
      "children": []
    },
    {
      "level": 3,
      "title": "bootstrap.yml 配置",
      "slug": "bootstrap-yml-配置",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.46,
    "words": 1039
  },
  "filePathRelative": "guide/configcenter/nacos-cloud.md",
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
