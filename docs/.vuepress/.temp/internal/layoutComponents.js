import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/dynamic-tp-home/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/dynamic-tp-home/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
}
