import { ref } from "vue"

<template>
  <div class="home">
    <n-calendar #="{ year, month, date }">
      {{ year }}-{{ month }}-{{ date }}
    </n-calendar>
  </div>
</template>

<script lang="ts" setup></script>
