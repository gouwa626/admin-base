module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //引号类型 `` "" '',有\转义字符时,允许使用双引号和反斜杠
    quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'vue/multi-word-component-names': [
      // 组件名称驼峰，忽略index
      'error',
      {
        ignores: ['index'],
      },
    ],
    'max-len': ['error', { code: 100 }],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
};
