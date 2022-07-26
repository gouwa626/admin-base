<template>
  <n-config-provider
    :theme="theme.nativeTheme"
    :theme-overrides="themeOverrides"
  >
    <NaiveProvider>
      <router-view />
    </NaiveProvider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';
import { useThemeStore, subscribeThemeStore } from '@/store';
// 在这里全局配置naiveUi组件主题
const themeOverrides: GlobalThemeOverrides = {};

const theme = useThemeStore();
// 监听主题变化
subscribeThemeStore();
</script>
