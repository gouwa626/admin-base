<template>
  <DarkModeContainer class="global-header">
    <header>头部</header>
    <n-affix :top="10" :trigger-top="0" position="fix">
      <n-tag>顶部触发距离 50px</n-tag>
    </n-affix>
  </DarkModeContainer>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
</script>

<style scoped lang="scss">
.global-header {
  // position: fixed;
  z-index: 1001;
  min-width: 900px;
  height: 56px;
  padding-left: 220px;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  left: 0;
  top: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  transition-property: padding-left;
}
</style>
