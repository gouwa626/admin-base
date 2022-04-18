<template>
  <n-menu
    :value="activeKey"
    :options="menuOptions"
    :collapsed="theme.siderCollapse"
    :collapsed-width="theme.siderCollapseWidth"
    :mode="theme.layout.mode"
  />
</template>

<script setup lang="ts">
import { computed, h } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useThemeStore } from '@/store';
import { iconifyRender } from '@/utils';
import type { MenuOption } from 'naive-ui';
const theme = useThemeStore();
const route = useRoute();
const activeKey = computed(() => route.name as string);
const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: iconifyRender('mdi:abacus'),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'home',
              },
            },
            { default: () => '回家' }
          ),
        key: 'home',
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'about',
              },
            },
            { default: () => '关于' }
          ),
        key: 'about',
      },
    ],
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: iconifyRender('mdi:access-point-network'),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'test',
              },
            },
            { default: () => '测试' }
          ),
        key: 'test',
      },
    ],
  },
  {
    label: '两个都要',
    key: 'both',
    icon: iconifyRender('mdi:television-ambient-light'),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not',
      },
    ],
  },
];
</script>

<style scoped lang="scss"></style>
