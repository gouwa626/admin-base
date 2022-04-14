<template>
  <n-config-provider
    :theme="theme.nativeTheme"
    :theme-overrides="themeOverrides"
  >
    <n-loading-bar-provider>
      <n-message-provider>
        <n-global-style />
        <router-view />
        <naive-provider-content />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { defineComponent, h } from 'vue';
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';
import { registerNaiveTools } from '@/utils/nativeTools';
import { useThemeStore, subscribeThemeStore } from '@/store';
import { darkTheme } from 'naive-ui';
// 在这里全局配置naiveUi组件主题
const themeOverrides: GlobalThemeOverrides = {};

const NaiveProviderContent = defineComponent({
  setup() {
    // 注册全局native组件
    registerNaiveTools();
  },
  render() {
    return h('div');
  },
});
const theme = useThemeStore();
subscribeThemeStore();
</script>
