.
├── vue.config.js	webpack相关配置
├── tsconfig.json	ts配置
├── src
│   ├── views	页面级组件
│   │   ├── Table
│   │   │   ├── index.vue
│   │   │   └── components
│   │   │       └── Add.vue
│   │   ├── Modal
│   │   │   └── index.vue
│   │   └── Home.vue
│   ├── utils	工具类函数
│   │   ├── utils.ts
│   │   ├── request.ts
│   │   ├── nativeTools.ts
│   │   ├── is
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── icon.ts
│   │   └── drag.ts
│   ├── typings	ts类型声明
│   │   ├── system.d.ts
│   │   ├── global.d.ts
│   │   └── config.d.ts
│   ├── style	公共样式
│   │   ├── variables.scss	全局scss变量/函数
│   │   ├── transition.scss	动画scss
│   │   ├── reset.scss	重置页面
│   │   ├── index.scss
│   │   ├── common.scss	全局公共class
│   │   └── base.scss	基础覆盖
│   ├── store	状态树-pinia
│   │   ├── subscribe	订阅监听模块
│   │   │   └── index.ts
│   │   ├── modules
│   │   │   ├── theme	主题模块
│   │   │   │   ├── index.ts
│   │   │   │   └── helpers.ts
│   │   │   ├── index.ts
│   │   │   └── conf	项目配置
│   │   │       └── index.ts
│   │   └── index.ts
│   ├── shims-vue.d.ts	vuets声明
│   ├── router	路由模块
│   │   ├── routes
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── guard
│   │       ├── permission.ts
│   │       └── index.ts
│   ├── mock	mock数据
│   │   ├── menuData.ts
│   │   └── index.ts
│   ├── main.ts	入口文件
│   ├── layouts	布局模块
│   │   ├── index.vue
│   │   ├── GlobalSider	侧边栏
│   │   │   └── index.vue
│   │   ├── GlobalLogo	logo
│   │   │   └── index.vue
│   │   ├── GlobalHeader	头部组件
│   │   │   ├── index.vue
│   │   │   └── components
│   │   │       ├── index.ts
│   │   │       ├── UserAvatar.vue	用户
│   │   │       ├── ThemeMode.vue	主题父组件
│   │   │       ├── MenuCollapse.vue	菜单收起组件
│   │   │       ├── LayoutMode.vue	布局切换组件
│   │   │       └── GlobalBreadcrumb.vue	面包屑组件（待完成）
│   │   ├── GlobalFooter	底部组件
│   │   │   └── index.vue
│   │   └── GlobalContent	内容组件
│   │       └── index.vue
│   ├── enum	枚举
│   │   ├── system.ts
│   │   └── index.ts
│   ├── config	动态配置
│   │   ├── prod.json
│   │   ├── index.ts
│   │   └── dev.json
│   ├── components	全局公共组件
│   │   ├── common
│   │   │   ├── NaiveProvider.vue	处理naive组件
│   │   │   ├── MenuProvider.vue	菜单组件
│   │   │   ├── HoverContainer.vue	悬浮样式组件
│   │   │   ├── DarkModeSwitch.vue	主题切换组件
│   │   │   └── DarkModeContainer.vue	样式包裹父组件
│   │   ├── Modal	公共modal组件
│   │   │   ├── src
│   │   │   │   ├── type
│   │   │   │   │   └── index.ts
│   │   │   │   ├── props.ts
│   │   │   │   ├── hooks
│   │   │   │   │   └── useModal.ts
│   │   │   │   └── basicModal.vue
│   │   │   └── index.ts
│   │   └── HomeItem.vue
│   ├── assets
│   │   └── svg	本地svg
│   │       └── wind.svg
│   ├── api	api相关
│   │   └── login.ts
│   └── App.vue
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
├── package-lock.json
├── dir.md
├── components.d.ts	由自动导入插件unplugin-vue-components,自动生成
├── babel.config.js
├── README.md
├── .prettierrc.js	prettier规则
├── .gitignore
├── .eslintrc.js	eslint规则
├── .eslintignore	eslint忽略
├── .editorconfig	编辑器配置
└── .browserslistrc

37 directories, 81 files
