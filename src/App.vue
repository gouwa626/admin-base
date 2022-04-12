<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :inline-theme-disabled="true"
  >
    <n-message-provider>
      <router-view />
      <n-button @click="getuserInfo">sada</n-button>
      <naive-provider-content />
    </n-message-provider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { getCurrentInstance, defineComponent, h } from 'vue';
import { NConfigProvider, GlobalThemeOverrides, useMessage } from 'naive-ui';
import type { MessageRenderMessage, MessageReactive } from 'naive-ui';
import { userInfo } from './api/login';
// 在这里全局配置naiveUi组件主题
const themeOverrides: GlobalThemeOverrides = {};

function getuserInfo() {
  userInfo().then((res) => {
    console.log('-');
  });
}

let messageReactive: MessageReactive | null = null;
const NaiveProviderContent = defineComponent({
  setup() {
    window.$message = useMessage();
    window.$msg = useMessage();
    window.$msg.error = function (s: string) {
      console.log('777');
      if (!messageReactive) {
        messageReactive = 666;
        window.$message?.error(s, {
          onAfterLeave: () => {
            messageReactive = null;
          },
        });
      } else {
        return;
      }
    };
  },
  render() {
    return h('div');
  },
});
</script>
