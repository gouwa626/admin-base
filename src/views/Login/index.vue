<template>
  <div
    class="relative wh-full flex-center"
    :style="{ backgroundColor: bgColor }"
  >
    <dark-mode-switch
      :dark="theme.darkMode"
      class="darkmode-warper absolute"
      @update:dark="theme.setDarkMode"
    />
    <n-card :bordered="false" size="large" class="ncard-warper">
      <div class="login-warper">
        <header class="flex-y-center justify-between">
          <div class="logo-warper overflow-hidden">
            <GlobalLogo class="text-70px text-primary" :showTitle="false" />
          </div>
          <n-gradient-text type="primary" :size="28">{{
            title
          }}</n-gradient-text>
        </header>
        <main class="main-warper">
          <div>
            <PwdLogin></PwdLogin>
          </div>
        </main>
      </div>
    </n-card>
    <login-bg :theme-color="bgThemeColor" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/store';
import { getColorPalette, mixColor } from '@/utils';
import { LoginBg, PwdLogin } from './components';
import GlobalLogo from '@/layouts/GlobalLogo';
import { userConf } from '@/store/modules/conf';
const theme = useThemeStore();
const { title } = userConf();

const bgThemeColor = computed(() =>
  theme.darkMode ? getColorPalette('#18a058', 7) : '#18a058'
);

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff';
  const ratio = theme.darkMode ? 0.5 : 0.2;
  return mixColor(COLOR_WHITE, '#18a058', ratio);
});
</script>
<style scoped lang="scss">
.darkmode-warper {
  left: 48px;
  top: 24px;
  font-size: 20px;
  z-index: 3;
}
.ncard-warper {
  width: auto !important;
  z-index: 4;
  --un-shadow: var(--un-shadow-inset) 0 1px 2px 0
    var(--un-shadow-color, rgba(0, 0, 0, 0.05));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000),
    var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
  .login-warper {
    width: 360px;
    .logo-warper {
      width: 70px;
      height: 70px;
      border-radius: 35px;
    }
    .main-warper {
      padding-top: 24px;
    }
  }
}
</style>
