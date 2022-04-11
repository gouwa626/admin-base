const { defineConfig } = require('@vue/cli-service');
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers');
const GenerateAssetPlugin = require('./generate');
const configJson = require('./src/config/prod.json');
// 构建配置文件
let createConfig = function () {
  return JSON.stringify(configJson);
};
module.exports = defineConfig({
  devServer: {},
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        resolvers: [NaiveUiResolver()],
      }),
      new GenerateAssetPlugin({
        filename: 'config.json',
        fn: (compilation, cb) => {
          cb(null, createConfig(compilation));
        },
      }),
    ],
  },
});
