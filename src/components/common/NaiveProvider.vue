<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-dialog-provider>
        <n-global-style />
        <slot></slot>
        <naive-provider-content />
        <basicModal ref="modalRef"> </basicModal>
      </n-dialog-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
<script lang="ts" setup>
import { defineComponent, h } from 'vue';
import { registerNaiveTools } from '@/utils/nativeTools';

const NaiveProviderContent = defineComponent({
  setup() {
    // 注册全局native组件
    registerNaiveTools();
  },
  render() {
    return h('div');
  },
});
</script>
