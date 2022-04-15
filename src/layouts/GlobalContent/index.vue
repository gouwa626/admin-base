<template>
  <DarkModeContainer class="global-content">
    <main class="main">内容区</main>
  </DarkModeContainer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.global-content {
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;
  transition-property: padding-left;
  padding-top: 100px;
  padding-bottom: 0px;
  padding-left: 220px;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  .main {
    height: 1000px;
  }
}
</style>
