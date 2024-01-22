export const data = JSON.parse("{\"key\":\"v-5678df0a\",\"path\":\"/guide/middleware/hystrix.html\",\"title\":\"hystrix 线程池管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"hystrix 线程池管理\",\"icon\":\"bit\",\"order\":1,\"author\":\"yanhom\",\"date\":\"2023-02-11T00:00:00.000Z\",\"tag\":[\"hystrix\",\"circuitbreaker\",\"dynamictp\"],\"sticky\":true,\"star\":true,\"description\":\"使用步骤 1. 引入下述依赖 SpringBoot1x、2x 用此依赖 SpringBoot3x 用此依赖 2. 配置文件中配置 hystrix 线程池 3. 启动日志 第一次访问时看到有如下日志输出说明接入成功，如果开启了通知，同时会推送参数修改通知 ::: tip 1. hystrix 线程池在第一次访问时才进行初始化，服务启动并不会立即初始化 2...\"},\"headers\":[{\"level\":3,\"title\":\"使用步骤\",\"slug\":\"使用步骤\",\"link\":\"#使用步骤\",\"children\":[]}],\"readingTime\":{\"minutes\":2,\"words\":599},\"filePathRelative\":\"guide/middleware/hystrix.md\",\"localizedDate\":\"2023年2月11日\",\"autoDesc\":true}")

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
