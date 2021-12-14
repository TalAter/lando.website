const { path } = require('@vuepress/utils')

module.exports = {
  theme: path.resolve(__dirname, '.'),
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
  plugins: [
    '@vuepress/register-components',
    {
      componentsDir: path.resolve(__dirname, './components'),
    },
  ],
}
