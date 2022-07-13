<template>
  <n-breadcrumb>
    <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.key">
      <n-breadcrumb-item>
        <n-dropdown
          v-if="breadcrumb.children && breadcrumb.children.length"
          :options="breadcrumb.children"
          key-field="nodeId"
          label-field="nodeName"
          @select="dropdownSelect"
          :render-icon="renderIcon"
        >
          <span>
            <svg-icon
              v-if="breadcrumb.icon"
              :icon="breadcrumb.icon"
              class="breadcrumb-icon"
            ></svg-icon>
            <span>{{ breadcrumb.nodeName }}</span>
          </span>
        </n-dropdown>
        <template v-else>
          <svg-icon
            v-if="breadcrumb.icon"
            :icon="breadcrumb.icon"
            class="breadcrumb-icon"
          ></svg-icon>
          <span>{{ breadcrumb.nodeName }}</span>
        </template>
      </n-breadcrumb-item>
    </template>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { DropdownOption } from 'naive-ui';
import { cloneDeep } from 'lodash';
import { useRouteStore } from '@/store';
import { customIconRender } from '@/utils';

const route = useRoute();
const router = useRouter();
const routeStore = useRouteStore();
// 处理下拉菜单的icon
function renderIcon(option: DropdownOption) {
  return customIconRender((option.icon || '') as string)();
}

const breadcrumbs = computed(() =>
  setBreadcrumbs(cloneDeep(routeStore.routerInfos), route.path)
);
// 根据路由生成面包屑数据
function setBreadcrumbs(arr: any, path: string): GlobalBreadcrumb[] {
  let res: GlobalBreadcrumb[] = [];
  // 当前数组内children为空时，将children置为undefined
  arr.map((item: GlobalBreadcrumb) => {
    if (item.children?.length == 0) {
      item.children = undefined;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].url == path) {
      res.push(arr[i]);
      return res;
    }
    if (arr[i].children && arr[i].children?.length) {
      let childRes = setBreadcrumbs(
        arr[i].children as GlobalBreadcrumb[],
        path
      );
      if (childRes && childRes.length) {
        res.push(
          arr[i],
          ...setBreadcrumbs(arr[i].children as GlobalBreadcrumb[], path)
        );
        return res;
      }
    }
  }
  return res;
}
function dropdownSelect(key: string, option: DropdownOption) {
  router.push({ path: option.url as string });
}
</script>
<style scoped lang="scss">
.breadcrumb-icon {
  font-size: 16px;
  display: inline-block;
  vertical-align: text-bottom;
  margin-right: 4px;
}
</style>
