<template>
  <div v-if="showTooltip">
    <n-tooltip :placement="placement" trigger="hover">
      <template #trigger>
        <div class="showtooltip-class" :class="contentClass">
          <slot></slot>
        </div>
      </template>
      {{ tooltipContent }}
    </n-tooltip>
  </div>
  <div v-else class="showtooltip-class" :class="contentClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi';
import type { FollowerPlacement } from 'vueuc';
interface Props {
  // tooltip显示文本
  tooltipContent?: string;
  placement?: FollowerPlacement;
  contentClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  tooltipContent: '',
  placement: 'bottom',
  contentClass: '',
});
const showTooltip = computed(() => Boolean(props.tooltipContent));
</script>

<style scoped lang="scss">
.showtooltip-class {
  height: 100%;
  &:hover {
    cursor: pointer;
    background: #f6f6f6;
  }
}
.dark {
  .showtooltip-class {
    &:hover {
      background: #333;
    }
  }
}
</style>
