<template>
  <hover-container
    class="hover-class h-full flex-center"
    @click="theme.toggleSiderCollapse"
  >
    <icon-line-md-menu-unfold-left
      v-if="theme.siderCollapse"
      class="text-16px"
    />
    <icon-line-md-menu-fold-left v-else class="text-16px" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';

const theme = useThemeStore();
</script>
<style scoped>
.hover-class {
  width: 40px;
}
</style>
