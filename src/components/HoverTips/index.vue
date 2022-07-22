<template>
  <n-popover :trigger="trigger">
    <template #trigger>
      <icon:ph-question
        :style="`margin: ${marginValue};font-size:${fontSizeValue}`"
      ></icon:ph-question>
    </template>
    <span v-html="tipsText"></span>
  </n-popover>
</template>
<script setup lang="ts">
interface Props {
  // 提示内容
  tipsText?: string;
  trigger?: string;
  marginValue?: string;
  fontSizeValue?: string;
}
const props = withDefaults(defineProps<Props>(), {
  tipsText: '暂无提示',
  trigger: 'hover',
  marginValue: '0 0 0 5px',
  fontSizeValue: '15px',
});
</script>
