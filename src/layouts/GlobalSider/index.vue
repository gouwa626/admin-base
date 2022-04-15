<template>
  <DarkModeContainer class="global-sider">
    <aside>侧边栏</aside>
  </DarkModeContainer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.global-sider {
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  height: 100%;
  transition-property: all;
  z-index: 1002;
  width: 220px;
  padding-top: 0px;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
}
</style>
