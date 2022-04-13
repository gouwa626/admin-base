import { useOsTheme } from 'naive-ui';
import { useThemeStore } from '../modules';
import { handleWindicssDarkMode } from '../modules/theme/helpers';
import { onUnmounted, watch } from 'vue';
// 订阅状态
export function subscribeThemeStore() {
  const theme = useThemeStore();
  const osTheme = useOsTheme();
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
      console.log('操作系统主题', newValue);
      const isDark = newValue == 'dark';
      theme.setDarkMode(isDark);
    },
    {
      immediate: true,
    }
  );
  onUnmounted(() => {
    stopDarkMode();
    stopOsTheme();
  });
}
