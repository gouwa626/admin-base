const { defineConfig } = require('@vue/cli-service');
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers');
const Components = require('unplugin-vue-components/webpack');
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
const { FileSystemIconLoader } = require('unplugin-icons/loaders');
const GenerateAssetWebpackPluginForWebpack5 = require('generate-asset-webpack-plugin-forwebpack5');
// build时构建配置文件
const configJson = require('./src/config/prod.json');
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '网关管理系统';
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/style/variables.scss";',
      },
    },
  },
  devServer: {
    port: 8088,
    proxy: {
      '^/apis': {
        target: 'http://10.155.10.190:80',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': '',
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      // 自动挂载组件
      Components({
        dirs: ['src/components'],
        dts: true,
        resolvers: [
          NaiveUiResolver(),
          IconsResolver({
            customCollections: ['custom'],
            componentPrefix: 'icon',
          }),
        ],
      }),
      // 自动安装icon
      Icons({
        compiler: 'vue3',
        // 自动安装
        // autoInstall: true,
        customCollections: {
          custom: FileSystemIconLoader('src/assets/svg', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
        scale: 1,
        defaultClass: 'inline-block',
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
