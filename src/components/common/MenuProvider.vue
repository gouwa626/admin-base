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
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
          },
        },
        { default: () => '首页' }
      ),
    key: 'home',
    icon: iconifyRender('mdi:home'),
  },
  {
    label: '组件示例',
    key: 'bear-paw',
    icon: iconifyRender('mdi:access-point-network'),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'table',
              },
            },
            { default: () => '表格展示' }
          ),
        key: 'table',
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'modal',
              },
            },
            { default: () => '弹窗展示' }
          ),
        key: 'modal',
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
