<template>
  <div>
    <n-empty description="你什么也找不到">
      <template #extra>
        <n-button size="small" @click="back"> 看看别的 </n-button>
      </template>
    </n-empty>
    <n-progress type="circle" :percentage="percentage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
const percentage = ref(10);
const router = useRouter();
function back() {
  router.back();
}
</script>

<style scoped lang="scss"></style>
