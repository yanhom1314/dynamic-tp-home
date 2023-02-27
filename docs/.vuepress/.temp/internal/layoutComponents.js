import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
}
