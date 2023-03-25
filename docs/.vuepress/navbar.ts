import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "文档", icon: "read", link: "/guide/introduction/background" },
  { text: "接入指南", icon: "launch", link: "/guide/use/quick-start" },
  { text: "加入社群", icon: "wechat", link: "/guide/other/contact" },
  { text: "支持", icon: "like", link: "/guide/other/supportme" },
  { text: "用户", icon: "people", link: "/guide/other/users" },
  { text: "参与开发", icon: "merge", link: "/guide/other/develop" },
  { text: "Gitee", icon: "gitee", link: "https://gitee.com/dromara/dynamic-tp" },
  { text: "Github", icon: "github", link: "https://github.com/dromara/dynamic-tp" }
]);
