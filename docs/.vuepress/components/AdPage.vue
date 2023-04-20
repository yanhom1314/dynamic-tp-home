<template>
  <div :class="`wwads-cn wwads-${mode} page-wwads-${sticky}`" data-id="212"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    sticky: {
      type: String,
      default: 'sticky',
    },
  }

});

</script>
<style>
@use "vuepress-shared/styles/wrapper";

.page-wwads-content {
  max-width: var(--content-width, 180px);
  margin: 0 auto;
}
</style>
