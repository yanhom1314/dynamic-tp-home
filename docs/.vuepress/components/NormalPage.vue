<template>
  <NormalPage>
    <template #contentBefore>
      <AdPage content="content" />
      <div class="zsxq">
        <a href="https://t.zsxq.com/DVGGO" target="_blank">
          <img src="/images/sponsor/img.png" width="800px">
        </a>
      </div>
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
  max-width: var(--content-width, 800px);
  margin: 0 auto;
  background-color: #f4f8fa;
  padding: 5px;
  min-height: 120px;
  margin-top: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: sans-serif;
  display: flex;
  min-width: 200px;
  position: relative;
}
</style>