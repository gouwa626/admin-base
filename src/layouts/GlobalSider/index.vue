<template>
  <DarkModeContainer
    class="global-sider"
    tag="aside"
    :style="[
      `width:${
        isVertical
          ? isCollapse
            ? theme.siderNormalWidth
            : theme.siderCollapseWidth
          : '0'
      }px;`,
    ]"
  >
    <GlobalLogo :show-title="isCollapse" v-if="isVertical"></GlobalLogo>
    <n-scrollbar>
      <MenuProvider></MenuProvider>
    </n-scrollbar>
  </DarkModeContainer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';
import { computed } from 'vue-demi';
import GlobalLogo from '@/layouts/GlobalLogo/index.vue';
import MenuProvider from '@/components/common/MenuProvider.vue';
const theme = useThemeStore();
const isVertical = computed(() => (theme.layout.mode = 'vertical'));
const isCollapse = computed(() => !theme.siderCollapse);
</script>

<style scoped lang="scss">
.global-sider {
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  height: 100%;
  z-index: 1002;
  padding-top: 0px;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
}
</style>
