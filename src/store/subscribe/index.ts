import { useOsTheme } from 'naive-ui';
import { useThemeStore } from '../modules';
import { handleWindicssDarkMode } from '../modules/theme/helpers';
import { onUnmounted, watch } from 'vue';
import { useElementSize } from '@vueuse/core';
// 订阅状态
export function subscribeThemeStore() {
  const theme = useThemeStore();
  const osTheme = useOsTheme();
  const { width } = useElementSize(document.documentElement);
  const { addDarkClass, removeDarkClass } = handleWindicssDarkMode();

  //监听主题设置
  const stopDarkMode = watch(
    () => theme.darkMode,
    (newValue) => {
      if (newValue) {
        addDarkClass();
      } else {
        removeDarkClass();
      }
    },
    { immediate: true }
  );

  // 监听操作系统主题
  const stopOsTheme = watch(
    osTheme,
    (newValue) => {
      const localIsDark = localStorage.getItem('darkMode');
      const isDark = newValue == 'dark' || localIsDark == 'dark';
      theme.setDarkMode(isDark);
    },
    {
      immediate: true,
    }
  );
  // 禁用横向滚动(页面切换时,过渡动画会产生水平方向的滚动条, 小于最小宽度时，不禁止)
  const stopWidth = watch(width, (newValue) => {
    if (newValue < theme.layout.minWidth) {
      document.documentElement.style.overflowX = 'auto';
    } else {
      document.documentElement.style.overflowX = 'hidden';
    }
  });
  // 设置布局模式
  const localLayoutMode = localStorage.getItem('layoutMode') || 'vertical';
  theme.setLayoutMode(localLayoutMode as EnumType.ThemeLayoutMode);
  onUnmounted(() => {
    stopDarkMode();
    stopOsTheme();
    stopWidth();
  });
}
