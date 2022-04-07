<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :inline-theme-disabled="true"
  >
    <router-view />
    <n-button @click="handelClick">a++</n-button>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { reactive, ref } from '@vue/reactivity';
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';
// 在这里全局配置naiveUi组件主题
const themeOverrides: GlobalThemeOverrides = {};
const a = ref(0);
interface nameType {
  name: number;
}
const obj: nameType = reactive({
  name: 55,
});
console.log(a.value);
function handelClick() {
  a.value++;
  // obj.name = 55;
  obj.name++;
  console.log(a.value);
  console.log('obj', obj.name);
}
</script>
