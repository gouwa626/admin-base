const { defineConfig } = require('@vue/cli-service');
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers');
const GenerateAssetWebpackPluginForWebpack5 = require('generate-asset-webpack-plugin-forwebpack5');
// build时构建配置文件
const configJson = require('./src/config/prod.json');
module.exports = defineConfig({
  devServer: {},
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        resolvers: [NaiveUiResolver()],
      }),
      new GenerateAssetWebpackPluginForWebpack5({
        filename: 'config.json',
        fn: (compilation, cb) => {
          cb(null, JSON.stringify(configJson));
        },
      }),
    ],
  },
});
