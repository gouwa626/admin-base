<template>
  <DarkModeContainer class="global-footer">
    <footer>底部</footer>
  </DarkModeContainer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.global-footer {
  position: static;
  z-index: 999;
  min-width: 900px;
  height: 48px;
  padding-left: 220px;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  left: 0;
  bottom: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  transition-property: padding-left;
}
</style>
