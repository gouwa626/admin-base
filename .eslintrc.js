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
    'vue/multi-word-component-names': 'off',
    // 'max-len': ['error', { code: 100 }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 关闭未声明，ts控制
    'no-undef': 'off',
    //生命未使用-剔除函数
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
  },
};
