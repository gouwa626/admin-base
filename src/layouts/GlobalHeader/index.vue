<template>
  <n-affix :top="0" :trigger-top="0" position="fix" class="affix">
    <DarkModeContainer
      class="global-header"
      :style="[
        `padding-left:${
          isVertical
            ? isCollapse
              ? theme.siderNormalWidth
              : theme.siderCollapseWidth
            : '0'
        }px;`,
      ]"
      tag="header"
    >
      <GlobalLogo
        :show-title="true"
        v-if="!isVertical"
        style="width: 220px"
      ></GlobalLogo>
      <MenuCollapse v-else></MenuCollapse>
      <div class="header-left">asdad</div>
      <div class="header-right">
        <LayoutMode></LayoutMode>
        <ThemeMode></ThemeMode>
      </div>
    </DarkModeContainer>
  </n-affix>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';
import { computed } from 'vue';
import { LayoutMode, ThemeMode, MenuCollapse } from './components';
import GlobalLogo from '../GlobalLogo/index.vue';
const theme = useThemeStore();
const isVertical = computed(() => theme.layout.mode == 'vertical');
const isCollapse = computed(() => !theme.siderCollapse);
</script>

<style scoped lang="scss">
.affix {
  width: 100%;
}
.global-header {
  // position: fixed;
  z-index: 1001;
  min-width: 900px;
  height: 56px;
  padding-left: 220px;
  left: 0;
  top: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  transition-property: padding-left;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  display: flex;
  align-items: center;
  .header-left {
    flex: 1 1 0%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .header-right {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
