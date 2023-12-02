export const data = JSON.parse("{\"key\":\"v-3406509d\",\"path\":\"/guide/introduction/architecture.html\",\"title\":\"架构设计\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"架构设计\",\"icon\":\"structure\",\"order\":1,\"author\":\"yanhom\",\"date\":\"2022-06-11T00:00:00.000Z\",\"tag\":[\"架构设计\",\"dynamictp\"],\"sticky\":false,\"star\":true,\"description\":\"模块划分 配置变更监听模块; 1. 监听配置中心配置变动（已实现 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb）的监听器，可通过内部提供的 SPI 接口扩展其他实现 2. 解析配置文件内容，内置实现 yml、properties、json 配置文件的解析，可通过内部提供的 SPI 接口扩展...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://gitee.com/dromara/dynamic-tp/guide/introduction/architecture.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"dynamic-tp\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"架构设计\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"模块划分 配置变更监听模块; 1. 监听配置中心配置变动（已实现 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb）的监听器，可通过内部提供的 SPI 接口扩展其他实现 2. 解析配置文件内容，内置实现 yml、properties、json 配置文件的解析，可通过内部提供的 SPI 接口扩展...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"yanhom\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"架构设计\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"dynamictp\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-11T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"架构设计\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-06-11T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"yanhom\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"模块划分\",\"slug\":\"模块划分\",\"link\":\"#模块划分\",\"children\":[]},{\"level\":3,\"title\":\"代码结构\",\"slug\":\"代码结构\",\"link\":\"#代码结构\",\"children\":[]},{\"level\":3,\"title\":\"架构图\",\"slug\":\"架构图\",\"link\":\"#架构图\",\"children\":[]}],\"readingTime\":{\"minutes\":3.65,\"words\":1094},\"filePathRelative\":\"guide/introduction/architecture.md\",\"localizedDate\":\"2022年6月11日\",\"autoDesc\":true,\"excerpt\":\"\"}")

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
