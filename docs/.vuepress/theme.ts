import { getDirname, path } from "vuepress/utils";
import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  footer: "MIT Licensed  |  Theme by <a href=\"https://vuepress-theme-hope.github.io\">vuepress-theme-hope</a> ",
  copyright: "Copyright © 2022-present <a href=\"https://github.com/yanhom1314\">yanhom</a>  |  <a href=\"https://beian.miit.gov.cn\">京ICP备2023004774号</a>",
  hostname: "https://gitee.com/dromara/dynamic-tp",

  author: {
    name: "yanhom",
    url: "https://gitee.com/dromara/dynamic-tp",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.png",

  // navbar
  navbar: navbar,
  fullscreen: true,
  // sidebar
  sidebar: sidebar,
  lastUpdated: true,
  backToTop: true,

  docsDir: 'dtp-docs/docs',
  displayFooter: true,
  darkmode: "auto",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    components: {
      components: ["Badge", "SiteInfo", "VPCard","VPBanner"]
    },
    copyCode: {
      showInMobile: true,
      duration: 1000
    },
    docsearch: {
      appId: "QS7KPCCCMF",
      apiKey: "748c46e8a474fc153fcc545ff35ef12f",
      indexName: "dynamictp",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
            },
          },
        },
      },
    },
    mdEnhance: {
      align: true,
      chart: true,
      tabs: true,
      codetabs: true,
      container: true,
      component: true,
      mermaid: true,
      flowchart: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
      include: {
        resolvePath: (file) =>
            file.startsWith("@src")
                ? file.replace("@src", path.resolve(__dirname, ".."))
                : file,
      },
      demo: true,
      mark: true,
      footnote: true,
      tasklist: true,
      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,
      presentation: true,
    },
  },
}, {
  custom: true,
});
