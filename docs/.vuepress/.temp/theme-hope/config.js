import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-theme-hope/lib/client/export.js";

import { defineAutoCatalogIconComponent } from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import Slide from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});