const { defineConfig } = require('@vue/cli-service');
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
});
