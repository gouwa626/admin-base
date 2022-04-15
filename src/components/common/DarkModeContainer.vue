<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>
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
