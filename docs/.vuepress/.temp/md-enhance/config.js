import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "/Users/yanhom/opensource/dynamic-tp-home/node_modules/reveal.js/dist/reveal.css";
import Presentation from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/yanhom/opensource/dynamic-tp-home/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
  },
  setup: () => {

  }
});
