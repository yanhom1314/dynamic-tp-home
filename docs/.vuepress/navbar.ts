import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "shouye", link: "/" },
  { text: "文档", icon: "read1", link: "/guide/introduction/background" },
  { text: "接入指南", icon: "launch", link: "/guide/use/quick-start" },
  { text: "加入社群", icon: "wechat", link: "/guide/other/contact" },
  { text: "支持", icon: "f-support", link: "/guide/other/supportme" },
  { text: "用户", icon: "user1", link: "/guide/other/users" },
  { text: "成员", icon: "member", link: "/guide/other/members" },
  { text: "参与开发", icon: "develop", link: "/guide/other/develop" },
  { text: "faq", icon: "question", link: "/guide/other/faq" },
  { text: "版本记录", icon: "banbenzi", link: "/guide/other/release" },
  {
    text: "仓库托管",
    icon: "git",
    children:[
      { text: "Github", icon: "github", link: "https://github.com/dromara/dynamic-tp" },
      { text: "Gitee", icon: "gitee2", link: "https://gitee.com/dromara/dynamic-tp" },
      { text: "Gitcode", icon: "GitCode-logo", link: "https://gitcode.com/dromara/dynamic-tp" },
    ]}
]);
