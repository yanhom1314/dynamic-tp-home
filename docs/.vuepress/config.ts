import {defineUserConfig} from "vuepress";
import theme from "./theme";
import {docsearchPlugin} from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  lang: "zh-CN",
  title: "dynamic-tp",
  description: "DynamicTp，基于配置中心的轻量级动态线程池，内置监控告警功能，可通过SPI自定义扩展实现",
  base: "/",
  theme,
  head: [
    ['meta', { name: 'keywords', content: 'DynamicTp，dynamic-tp，动态线程池，' +
          'ThreadPoolExecutor，美团线程池，线程池，Dynamic ThreadPool，线程池监控，' +
          'Dubbo线程池，RocketMq线程池，线程池调优，线程池告警，线程池参数设置'}],
    ['script', {src: '/baidu.js', async: 'async'}],
    ['script', {src: '/makemoney.js'}],
    ['script', {src: '/adblocked.js'}],
  ],
  plugins: [
    docsearchPlugin({
      appId: "8FRYEU6KqK8",
      apiKey: "84f513dfq1e83406ba42179da778d87bq",
      indexName: "dromaqra-fast-request",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
            },
          },
        },
        "/en": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation",
            },
          },
        },
      },
    }),
  ],
});
