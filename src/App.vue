<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :inline-theme-disabled="true"
  >
    <n-loading-bar-provider>
      <n-message-provider>
        <router-view />
        <n-button @click="getuserInfo">sada</n-button>
        <naive-provider-content />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { defineComponent, h } from 'vue';
import {
  NConfigProvider,
  GlobalThemeOverrides,
  useMessage,
  useLoadingBar,
  MessageType,
} from 'naive-ui';
import type { MessageReactive, MessageOptions } from 'naive-ui';
import { userInfo } from './api/login';
// 在这里全局配置naiveUi组件主题
const themeOverrides: GlobalThemeOverrides = {};

function getuserInfo() {
  userInfo().then((res) => {
    console.log('-');
  });
}
// 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
// 重写message,限制为弹出一个
const types: MessageType[] = ['success', 'info', 'warning', 'error', 'loading'];
let messageReactive: MessageReactive | null = null;
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  const message = useMessage();
  window.$message = useMessage();
  types.forEach((type) => {
    window.$message[type] = (s: string, options: MessageOptions) => {
      if (!messageReactive) {
        messageReactive =
          message.create(s, {
            ...options,
            type: type,
            onAfterLeave: () => {
              messageReactive = null;
            },
          }) || null;
      }
    };
  });
}
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
