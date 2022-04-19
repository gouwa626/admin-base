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
import { computed, h, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useThemeStore } from '@/store';
import { iconifyRender } from '@/utils';
import { mockRouters } from '@/mock/menuData';
import type { MenuOption } from 'naive-ui';
const theme = useThemeStore();
const route = useRoute();
const activeKey = computed(() => {
  let res = findRouteInfo(mockRouters.data, 'url', route.path);
  return res.nodeId;
});
let menuOptions: MenuOption[] = [];
interface routerType {
  nodeId: string;
  nodeName: string;
  nodeCode: string;
  url: string;
  icon: string;
  portalIcon: string | null;
  location: string;
  isRoot: number;
  dspFlag: string;
  remark: string;
  buttonList?: string[];
  children?: routerType[];
  pnodeId: string;
}
function setRouterTree(routers: routerType[]): MenuOption[] {
  let arr: MenuOption[] = [];
  routers.forEach((item: routerType) => {
    let temp: MenuOption = {
      label: () =>
        item.children && item.children.length == 0
          ? h(
              RouterLink,
              {
                to: {
                  path: item.url,
                },
              },
              { default: () => item.nodeName }
            )
          : item.nodeName,
      key: item.nodeId,
      children: [],
      icon: item.icon ? iconifyRender(item.icon) : () => '',
    };
    if (item.children && item.children.length) {
      temp.children = setRouterTree(item.children);
    }
    if (temp.children?.length == 0) delete temp.children;
    arr.push(temp);
  });
  return arr;
}

function findRouteInfo(arr: routerType[], key: string, findKey: string | number): any {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key as keyof routerType] == findKey) {
      return arr[i];
    }
    if (arr[i].children && arr[i].children?.length) {
      return findRouteInfo(arr[i].children as routerType[], key, findKey);
    }
  }
}
menuOptions = setRouterTree(mockRouters.data);
</script>

<style scoped lang="scss"></style>
