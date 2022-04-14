<template>
  <div>
    <n-empty description="你什么也找不到">
      <template #extra>
        <n-button size="small" @click="back"> 看看别的 </n-button>
      </template>
    </n-empty>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function back() {
  router.back();
}
</script>

<style scoped lang="scss"></style>
