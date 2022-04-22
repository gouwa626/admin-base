<template>
  <router-view v-slot="{ Component }" class="wh-full">
    <transition
      :name="theme.page.animate ? theme.page.animateMode : undefined"
      mode="out-in"
      appear
    >
      <div class="global-content-container">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';

const theme = useThemeStore();
</script>

<style scoped lang="scss"></style>
