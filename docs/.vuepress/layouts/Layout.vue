<script setup lang="ts">
import {usePageData, usePageFrontmatter} from "vuepress/client";
import {ref, watch} from "vue";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import SkipLink from "@theme-hope/components/SkipLink";
import FadeSlideY from "@theme-hope/components/transitions/FadeSlideY";

import type {ThemePageFrontmatter} from "vuepress-theme-hope";

const page = usePageData();
const frontmatter = usePageFrontmatter<ThemePageFrontmatter>();

const sidebarTopArray = [
  `<a href="https://www.jnpfsoft.com?from=dynamictp" target="_blank">
    <img className="no-zoom" height="50px" width="220px" src="/images/sponsor/jnpfsoft.png">
  </a>`,
];

const sidebarContent = ref("");

function shuffle(arr) {
  var l = arr.length;
  var index, temp;
  while (l > 0) {
    index = Math.floor(Math.random() * l);
    temp = arr[l - 1];
    arr[l - 1] = arr[index];
    arr[index] = temp;
    l--;
  }
  return arr;
}

watch(
    () => page.value.path,
    () => {
      if (page.value.path.startsWith("/en/")) {
        sidebarContent.value = "";
        return;
      }
      shuffle(sidebarTopArray);
      sidebarContent.value = `\
<div style="width:230px;margin-top:10px;margin-bottom:10px; border-radius: 10px;border: 1px solid #3eaf7c;">
${sidebarTopArray.slice(0, 4).join("\n  ")}
<br/>
<!--  <span style='color: grey;font-size: 11px;'>广告采用随机方式显示</span>-->
  <span style='float: right; margin-top:2px; '>
  <a href='/guide/other/supportme.html#成为赞助商' style='color: var(--theme-color);font-size: 11px;font-weight: bolder;'>成为赞助商</a>
  </span>
</div>
`;
    },
);
</script>
<template>
  <SkipLink />
  <CommonWrapper>
    <template #default>
      <HomePage v-if="frontmatter.home" />
      <FadeSlideY v-else>
        <NormalPage :key="page.path" />
      </FadeSlideY>
    </template>
    <template v-if="!frontmatter.home" #sidebarTop>
      <div v-html="sidebarContent" />
    </template>
  </CommonWrapper>
</template>
