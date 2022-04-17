declare namespace EnumType {
  // 布局模式
  type ThemeLayoutMode = keyof typeof import('@/enum').EnumThemeLayoutMode;
  // 过度动画
  type ThemeAnimateMode = keyof typeof import('@/enum').EnumThemeAnimateMode;
}
//主题相关类型
declare namespace Theme {
  //主题配置
  interface Setting {
    //暗黑模式
    darkMode: boolean;
    //布局样式
    layout: Layout;
    //侧边栏折叠状态
    siderCollapse: boolean;
    //侧边栏折叠状态宽度
    siderCollapseWidth: number;
    //侧边栏展开状态宽度
    siderNormalWidth: number;

    // 页面相关
    page: Page;
  }
  interface Layout {
    //最小宽度
    minWidth: number;
    //布局模式
    mode: EnumType.ThemeLayoutMode;
    //布局模式列表
    modeList: LayoutModeList[];
  }
  interface Page {
    animate: boolean;
    animateMode: EnumType.ThemeAnimateMode;
    animateModeList: AnimateModeList[];
  }
  interface LayoutModeList {
    value: EnumType.ThemeLayoutMode;
    label: import('@/enum').EnumThemeLayoutMode;
  }
  interface AnimateModeList {
    value: EnumType.ThemeAnimateMode;
    label: import('@/enum').EnumThemeAnimateMode;
  }
}
declare namespace Conf {
  // 系统配置
  interface Setting {
    //标题
    title: string;
    icon: string;
  }
}
