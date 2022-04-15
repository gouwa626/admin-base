<template>
  <div class="layout">
    <GlobalHeader></GlobalHeader>
    <GlobalSider></GlobalSider>
    <GlobalContent></GlobalContent>
    <GlobalFooter></GlobalFooter>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from './GlobalHeader/index.vue';
import GlobalSider from './GlobalSider/index.vue';
import GlobalContent from './GlobalContent/index.vue';
import GlobalFooter from './GlobalFooter/index.vue';
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
