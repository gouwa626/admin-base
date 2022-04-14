<template>
  <div class="test">杀了克己复礼卡就哭了</div>
  <n-button>Default</n-button>
  <n-button type="tertiary"> Tertiary </n-button>
  <n-button type="primary" @click="goAbout"> 去about </n-button>
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
  </n-space>
  <n-dropdown :options="options">
    <n-button type="primary" @click="getuserInfo"> 你像只鱼儿 </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { userInfo } from '@/api/login';
import { useThemeStore } from '@/store';
import { iconifyRender } from '@/utils';
import { useRouter } from 'vue-router';
const theme = useThemeStore();
function getuserInfo() {
  userInfo().then(() => {
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

const router = useRouter();
function goAbout() {
  router.push('/about');
}
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
