<template>
  <div class="test">杀了克己复礼卡就哭了</div>
  <n-button>Default</n-button>
  <n-button type="tertiary"> Tertiary </n-button>
  <n-button type="primary"> Primary </n-button>
  <n-button type="info" @click="theme.toggleDarkMode">点我切换主题</n-button>
  <n-space>
    <n-tag> 爱在西元前 </n-tag>
    <n-tag type="success"> 不该 </n-tag>
    <n-tag type="warning"> 超人不会飞 </n-tag>
    <n-tag type="error"> 手写的从前 </n-tag>
    <n-tag type="info"> 哪里都是你 </n-tag>
    <icon-mdi-github />
    <icon-mdi-github-face />
    <icon-mdi-alert-circle />
    <icon-custom-wind style="font-size: 400px" />
    <icon-system-uicons-external />
    icon-custom-wind
  </n-space>
  <n-dropdown :options="options">
    <n-button type="primary"> 你像只鱼儿 </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { userInfo } from '@/api/login';
import { useThemeStore } from '@/store';
import { ref } from '@vue/reactivity';
import { iconifyRender } from '@/utils';
const theme = useThemeStore();
function getuserInfo() {
  userInfo().then((res) => {
    console.log('-');
  });
}
const options = [
  {
    label: '用户中心',
    key: 'user-center',
    icon: iconifyRender('carbon:user-avatar'),
  },
  {
    type: 'divider',
    key: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: iconifyRender('carbon:logout'),
  },
];
</script>

<style scoped lang="scss">
.test {
}
.dark {
  .test {
    color: #fff;
  }
}
</style>
