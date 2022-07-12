<template>
  <div class="home flex-y-center flex-direction-column">
    <n-space style="width: 290px">
      <n-gradient-text
        gradient="linear-gradient(90deg, #FFCF71 0%, #2376DD 100%)"
        size="18"
      >
        系统时间：
      </n-gradient-text>
      <n-gradient-text
        gradient="linear-gradient(90deg, #F6D242 0%, #FF52E5 100%)"
        size="18"
      >
        {{ nowTime }}
      </n-gradient-text>
    </n-space>
    <n-calendar #="{ year, month, date }">
      {{ year }}-{{ month }}-{{ date }}
    </n-calendar>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from 'vue';
import dayjs from 'dayjs';

const nowTime = ref('');

let timer = 0;
function setNowTime() {
  nowTime.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
  clearInterval(timer);
  timer = setInterval(() => {
    nowTime.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
  }, 1000);
}
setNowTime();
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
<style scoped lang="scss">
.home {
  .n-calendar {
    max-width: 700px;
    max-height: 600px;
  }
}
</style>
