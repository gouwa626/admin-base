declare namespace EnumType {
  type ThemeLayoutMode = keyof typeof import('@/enum').EnumThemeLayoutMode;
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
  }
  interface Layout {
    //最小宽度
    minWidth: number;
    //布局模式
    mode: EnumType.ThemeLayoutMode;
    //布局模式列表
    modeList: LayoutModeList[];
  }
  interface LayoutModeList {
    value: EnumType.ThemeLayoutMode;
    label: import('@/enum').EnumThemeLayoutMode;
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
