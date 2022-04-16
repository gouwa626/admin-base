<template>
  <DarkModeContainer class="container">
    <slot></slot>
  </DarkModeContainer>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue';
interface Props {
  // 渲染标签
  tag?: string;
}
const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
});
const DarkModeContainer = defineComponent({
  render() {
    return h(props.tag, {}, this.$slots);
  },
});
</script>
<style scoped lang="scss">
.container {
  color: #333639;
  transition: all 300ms ease-in-out;
  background: #fff;
}
.dark {
  .container {
    background: #18181c;
    color: rgba($color: #fff, $alpha: 0.82);
  }
}
</style>
