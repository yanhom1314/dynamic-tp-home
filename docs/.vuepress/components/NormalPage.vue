<template>
  <NormalPage>
    <template #contentBefore>
      <AdPage content="content" />
      <!-- <div class="zsxq">-->
        <!-- <a href="https://t.zsxq.com/annca" target="_blank">-->
          <!-- <img src="/images/sponsor/zsxq-ad.png" width="776px">-->
        <!-- </a>-->
      <!-- </div>-->
    </template>
  </NormalPage>
</template>
<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import AdPage from "./AdPage.vue"
</script>

<style>
@use "vuepress-shared/styles/wrapper";
.zsxq {
  max-width: var(--content-width, 780px);
  margin: -15px auto;
  background-color: #f4f8fa;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  min-width: 200px;
  position: relative;
  padding-bottom: 0px;
  padding-top: 3px;
  padding-right: 2px;
  padding-left: 2px;
  margin-bottom: 20px;
}
</style>
