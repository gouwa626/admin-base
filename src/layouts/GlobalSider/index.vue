<template>
  <DarkModeContainer
    class="global-sider"
    tag="aside"
    :style="[`width:${isVertical ? (isCollapse ? '220' : '48') : '0'}px;`]"
  >
    <GlobalLogo :show-title="isCollapse" v-if="isVertical"></GlobalLogo>
    <n-scrollbar>
      <n-menu :options="menuOptions" :collapsed="theme.siderCollapse" />
    </n-scrollbar>
  </DarkModeContainer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';
import { iconifyRender } from '@/utils';
import type { MenuOption } from 'naive-ui';
import GlobalLogo from '@/layouts/GlobalLogo/index.vue';
import { computed } from 'vue-demi';
const theme = useThemeStore();
const isVertical = computed(() => (theme.layout.mode = 'vertical'));
const isCollapse = computed(() => !theme.siderCollapse);
const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: iconifyRender('mdi:account-circle'),
    children: [
      {
        label: '红烧',
        key: 'braise',
        children: [
          {
            label: '加辣',
            key: 'spicy',
          },
        ],
      },
      {
        label: '清蒸',
        key: 'steamed',
        children: [
          {
            label: '不要葱',
            key: 'no-green-onion',
          },
        ],
      },
    ],
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: iconifyRender('mdi:account-circle'),
    children: [
      {
        label: '保护野生动物',
        key: 'protect-wild-animals',
      },
    ],
  },
  {
    label: '两个都要',
    key: 'both',
    icon: iconifyRender('mdi:account-circle'),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not',
      },
    ],
  },
];
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
