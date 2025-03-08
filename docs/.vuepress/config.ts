import {defineUserConfig} from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import theme from "./theme.js";
import { viteBundler } from "@vuepress/bundler-vite";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: "zh-CN",
  title: "dynamictp",

  description: "DynamicTp，基于配置中心的轻量级动态线程池，内置监控告警功能，可通过SPI自定义扩展实现",
  base: "/",
  theme,
  bundler: viteBundler(),
  head: [
    ['meta', { name: 'keywords', content: 'DynamicTp，dynamic-tp，动态线程池，' +
          'ThreadPoolExecutor，美团线程池，线程池，Dynamic ThreadPool，线程池监控，' +
          'Dubbo线程池，RocketMq线程池，线程池调优，线程池告警，线程池参数设置，线程池监控'}],
    ["script", { src: "https://cdn.wwads.cn/js/makemoney.js", charset: "UTF-8" }],
    ['script', {src: '/adblocked.js'}],
  ],
  plugins: [
    slimsearchPlugin({
      indexContent: true,
      locales: {
        "/": {
          placeholder: "搜索文档"
        },
      },
    }),
  ],
  alias: {
    "@theme-hope/components/HomePage": path.resolve(
        __dirname,
        "./components/HomePage.vue"
    ),
    "@theme-hope/components/NormalPage": path.resolve(
        __dirname,
        "./components/NormalPage.vue"
    ),
    "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
        __dirname,
        "./components/Sidebar.vue",
    )
  },

  pagePatterns: ["**/*.md", "!*.snippet.md", "!.vuepress", "!node_modules"],
});
