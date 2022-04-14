import { darkTheme } from 'naive-ui';
import { defineStore } from 'pinia';
type ThemeState = Theme.Setting;
export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => {
    return { darkMode: false };
  },
  getters: {
    nativeTheme(state) {
      return state.darkMode ? darkTheme : undefined;
    },
  },
  actions: {
    //设置主题
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode;
    },
    // 切换黑色主题
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});
