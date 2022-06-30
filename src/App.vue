<template>
  <n-config-provider
    :theme="theme.nativeTheme"
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <NaiveProvider>
      <router-view />
    </NaiveProvider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';
import { useThemeStore, subscribeThemeStore, useEnumsDataStore } from '@/store';
import { zhCN, dateZhCN } from 'naive-ui';
// 在这里全局配置naiveUi组件主题
const themeOverrides: GlobalThemeOverrides = {};

const theme = useThemeStore();

const enums = useEnumsDataStore();
// 监听主题变化
subscribeThemeStore();
//初始化-下拉框选择数据
enums.setEnumsDataData();
</script>
