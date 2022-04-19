<template>
  <DarkModeContainer
    class="global-content"
    :style="[
      `padding-left:${
        isVertical ? (isCollapse ? theme.siderNormalWidth + 20 : theme.siderCollapseWidth + 20) : 20
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
        <div class="global-content-container">
          <component :is="Component" />
        </div>
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
  padding-right: 20px;
  padding-bottom: 20px;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  background: #f6f9f8;
  .global-content-container {
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
  }
}
.dark {
  .global-content {
    background: #101014;
  }
  .global-content-container {
    background: #18181c;
  }
}
</style>
