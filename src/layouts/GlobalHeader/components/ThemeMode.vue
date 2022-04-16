<template>
  <HoverContainer tooltip-content="主题模式" class="hover-class">
    <DarkModeSwitch
      :dark="theme.darkMode"
      class="wh-full"
      @update:dark="theme.setDarkMode"
    ></DarkModeSwitch>
  </HoverContainer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';

const theme = useThemeStore();
</script>

<style scoped lang="scss">
.hover-class {
  width: 40px;
}
</style>
