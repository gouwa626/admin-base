<template>
  <div class="layout" :style="`min-width:${theme.layout.minWidth}px`">
    <GlobalHeader></GlobalHeader>
    <GlobalSider v-if="isVertical"></GlobalSider>
    <GlobalContent></GlobalContent>
    <GlobalFooter></GlobalFooter>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from './GlobalHeader/index.vue';
import GlobalSider from './GlobalSider/index.vue';
import GlobalContent from './GlobalContent/index.vue';
import GlobalFooter from './GlobalFooter/index.vue';
import { useThemeStore } from '@/store';
import { computed } from 'vue';
const theme = useThemeStore();
const isVertical = computed(() => theme.layout.mode == 'vertical');
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
