import { darkTheme } from 'naive-ui';
import { defineStore } from 'pinia';
import { EnumThemeLayoutMode } from '@/enum';
type ThemeState = Theme.Setting;
export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => {
    return {
      darkMode: false,
      siderCollapse: false,
      layout: {
        minWidth: 900,
        // 默认布局
        mode: 'vertical',
        modeList: [
          { value: 'vertical', label: EnumThemeLayoutMode.vertical },
          { value: 'horizontal', label: EnumThemeLayoutMode.horizontal },
        ],
      },
    };
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
    setLayoutMode(mode: EnumType.ThemeLayoutMode) {
      this.layout.mode = mode;
    },
    //设置侧边栏折叠状态
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse;
    },
    //折叠/展开 侧边栏折叠状态
    toggleSiderCollapse() {
      this.siderCollapse = !this.siderCollapse;
    },
  },
});
