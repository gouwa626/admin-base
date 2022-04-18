<template>
  <DarkModeContainer
    class="global-footer flex-center h-full"
    :style="[
      `padding-left:${
        isVertical ? (isCollapse ? theme.siderNormalWidth : theme.siderCollapseWidth) : '0'
      }px;`,
    ]"
    tag="footer"
  >
    底部
  </DarkModeContainer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';
import { computed } from 'vue';

const theme = useThemeStore();
const isVertical = computed(() => theme.layout.mode == 'vertical');
const isCollapse = computed(() => !theme.siderCollapse);
</script>

<style scoped lang="scss">
.global-footer {
  position: static;
  z-index: 999;
  min-width: 900px;
  height: 48px;
  padding-left: 220px;
  left: 0;
  bottom: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
</style>
