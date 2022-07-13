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
// import SvgIcon from '@/components/custom/SvgIcon.vue';
// import '@/assets/svg/MdiHome.svg';
import { computed, h } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useRouteStore, useThemeStore } from '@/store';
import { customIconRender } from '@/utils';
import type { MenuOption } from 'naive-ui';
const theme = useThemeStore();
const routeStore = useRouteStore();
const route = useRoute();
const activeKey = computed(() => {
  let res = findRouteInfo(routeStore.routerInfos, 'url', route.path);
  return res ? res.nodeId : '';
});
let menuOptions: MenuOption[] = [];
// 转换成菜单组件数据
function setRouterTree(routers: Route.RouterInfo[]): MenuOption[] {
  let arr: MenuOption[] = [];
  routers.forEach((item: Route.RouterInfo) => {
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
      icon: item.icon ? customIconRender(item.icon) : () => '',
    };
    if (item.children && item.children.length) {
      temp.children = setRouterTree(item.children);
    }
    if (temp.children?.length == 0) delete temp.children;
    arr.push(temp);
  });
  return arr;
}
// 查找当前路由
function findRouteInfo(arr: Route.RouterInfo[], key: string, findKey: string | number): any {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key as keyof Route.RouterInfo] == findKey) {
      return arr[i];
    }
    if (arr[i].children && arr[i].children?.length) {
      return findRouteInfo(arr[i].children as Route.RouterInfo[], key, findKey);
    }
  }
}
menuOptions = setRouterTree(routeStore.routerInfos);
</script>

<style scoped lang="scss"></style>
