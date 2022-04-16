<template>
  <HoverContainer tooltip-content="菜单布局" class="layout-class">
    <div class="flex-center wh-full" @click="handelLayoutMode">
      <icon-mdi-drag-vertical v-if="isVertical" />
      <icon-mdi-drag-horizontal v-else />
    </div>
  </HoverContainer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';
import { computed } from 'vue';

const theme = useThemeStore();
const isVertical = computed(() => {
  return theme.layout.mode == 'vertical';
});
function handelLayoutMode() {
  theme.setLayoutMode(isVertical.value ? 'horizontal' : 'vertical');
}
</script>

<style scoped lang="scss">
.layout-class {
  width: 40px;
}
</style>
