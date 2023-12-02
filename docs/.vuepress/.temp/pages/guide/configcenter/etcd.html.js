export const data = JSON.parse("{\"key\":\"v-a237d906\",\"path\":\"/guide/configcenter/etcd.html\",\"title\":\"etcd 应用接入\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"etcd 应用接入\",\"icon\":\"contrast\",\"order\":1,\"author\":\"yanhom\",\"date\":\"2022-06-11T00:00:00.000Z\",\"tag\":[\"etcd 应用接入\",\"dynamictp\"],\"sticky\":true,\"star\":true,\"description\":\"1. 动态线程池配置文件，建议单独开一个文件放到配置中心 etcd 2. 如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好 3. 给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量 4. 集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反...\"},\"headers\":[{\"level\":3,\"title\":\"maven 依赖\",\"slug\":\"maven-依赖\",\"link\":\"#maven-依赖\",\"children\":[]},{\"level\":3,\"title\":\"线程池配置文件\",\"slug\":\"线程池配置文件\",\"link\":\"#线程池配置文件\",\"children\":[]},{\"level\":3,\"title\":\"application.yml 配置\",\"slug\":\"application-yml-配置\",\"link\":\"#application-yml-配置\",\"children\":[]}],\"readingTime\":{\"minutes\":2.36,\"words\":708},\"filePathRelative\":\"guide/configcenter/etcd.md\",\"localizedDate\":\"2022年6月11日\",\"autoDesc\":true}")

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
