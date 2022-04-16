<template>
  <router-link to="/" class="logo-warper flex-center w-full nowrap-hidden">
    <icon-ph:airplane-tilt-fill class="logo" />
    <h2 v-show="showTitle" class="title">
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup lang="ts">
import { userConf } from '@/store/modules/conf';

interface Props {
  /** 显示名字 */
  showTitle: boolean;
}

defineProps<Props>();

const { title } = userConf();
</script>
<style scoped lang="scss">
.logo-warper {
  height: 56px;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
.logo {
  font-size: 32px;
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: #18a058;
  white-space: nowrap;
}
</style>
