<template>
  <div class="home">
    <n-button type="primary" @click="router.push('/table')">
      去看看表格
    </n-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
