# admin-base

### 主要技术栈

1. Vue3

   |                    | Vue2                       | Vue3                              |
   | ------------------ | -------------------------- | --------------------------------- |
   | 响应式原理         | defineProperty             | proxy                             |
   | diff算法，渲染算法 | 对比全部DOM                | 对比动态DOM，静态部分直接使用     |
   | 建立数据           | 选项类型API（Options API） | 合成型API（Composition API）setup |

   

2. TypeScript

   引入静态类型声明，减少不必要的类型判断和文档注释

   及早发现错误，静态类型检查或编译时发现问题，不用等到运行

3. Vue-router

   支持Vue3 compositionApi

4. pinia

   从Vuex更改为pinia，pinia较好的支持TS，也更为轻量化

5. axios

6. naive-ui

   Naive UI 全量使用 TypeScript 编写，契合 TypeScript 项目

7. sass

   css预处理器

8. @vueuse/core

   一款基于Vue组合式API的函数工具集。

9. Webpack5





### icon使用教程：

icon 网站icon使用方法   [icon获取地址](https://icones.netlify.app/)  

```javascript
<icon-mdi-github />
```

项目本地icon，需将svg放在<u>src/assets/svg</u>使用方法:

```javascript
<icon-custom-banner/>
```

