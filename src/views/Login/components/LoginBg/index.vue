<template>
  <div class="color-warper wh-full absolute">
    <div class="absolute top">
      <corner-top :start-color="lightColor" :end-color="darkColor" />
    </div>
    <div class="absolute bottom">
      <corner-bottom :start-color="darkColor" :end-color="lightColor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { getColorPalette } from '@/utils';
import { CornerTop, CornerBottom } from './components';

interface Props {
  /** 主题颜色 */
  themeColor: string;
}

const props = defineProps<Props>();

const lightColor = computed(() => getColorPalette(props.themeColor, 3));
const darkColor = computed(() => getColorPalette(props.themeColor, 6));
</script>
<style scoped lang="scss">
.color-warper {
  z-index: 1;
  overflow: hidden;
  left: 0;
  top: 0;
  .top {
    right: -300px;
    top: -900px;
  }
  .bottom {
    left: -200px;
    bottom: -400px;
  }
}
</style>
