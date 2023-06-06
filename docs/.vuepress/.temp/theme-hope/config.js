import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/export.js";



import "D:/dynamic-tp-home/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});