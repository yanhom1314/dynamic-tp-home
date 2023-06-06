import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
