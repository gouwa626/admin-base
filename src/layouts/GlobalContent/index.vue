<template>
  <DarkModeContainer
    class="global-content"
    :style="[
      `padding-left:${
        isVertical
          ? isCollapse
            ? theme.siderNormalWidth + 20
            : theme.siderCollapseWidth + 20
          : '0'
      }px;`,
    ]"
    tag="main"
  >
    <router-view v-slot="{ Component }">
      <transition
        :name="theme.page.animate ? theme.page.animateMode : undefined"
        mode="out-in"
        appear
      >
        <component :is="Component" />
      </transition>
    </router-view>
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
.global-content {
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;
  padding-top: 76px;
  padding-bottom: 0px;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  background: #f6f9f8;
}
.dark {
  .global-content {
    background: #101014;
  }
}
</style>
