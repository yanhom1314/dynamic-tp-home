import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/open-source-code/dynamic-tp/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});