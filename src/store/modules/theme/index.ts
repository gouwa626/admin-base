import { darkTheme } from 'naive-ui';
import { defineStore } from 'pinia';
import { EnumThemeLayoutMode, EnumThemeAnimateMode } from '@/enum';
type ThemeState = Theme.Setting;
export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => {
    return {
      darkMode: false,
      siderCollapse: false,
      siderNormalWidth: 220,
      siderCollapseWidth: 48,
      layout: {
        minWidth: 900,
        // 默认布局
        mode: 'vertical',
        modeList: [
          { value: 'vertical', label: EnumThemeLayoutMode.vertical },
          { value: 'horizontal', label: EnumThemeLayoutMode.horizontal },
        ],
      },
      page: {
        animate: true,
        animateMode: 'fade-slide',
        animateModeList: [
          { value: 'fade-slide', label: EnumThemeAnimateMode['fade-slide'] },
          { value: 'fade', label: EnumThemeAnimateMode['fade'] },
          { value: 'fade-bottom', label: EnumThemeAnimateMode['fade-bottom'] },
          { value: 'fade-scale', label: EnumThemeAnimateMode['fade-scale'] },
          { value: 'zoom-fade', label: EnumThemeAnimateMode['zoom-fade'] },
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
    // 修改布局模式
    setLayoutMode(mode: EnumType.ThemeLayoutMode) {
      // 修改为顶部布局时，强制展开菜单
      if (mode == 'horizontal') {
        this.siderCollapse = false;
      }
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
    setWidth(width: number) {
      this.siderNormalWidth = width;
    },
  },
});
