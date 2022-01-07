const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Instant dev environments for all your projects.',
  theme: path.resolve(__dirname, './theme/index.js'),
  themeConfig: {
    contributors: false,
    editLink: false,
    lastUpdated: false,
    logo: '/images/logo-small-pink.png',
    logoDark: '/images/logo-small-white.png',
    navbar: [
      {text: 'Docs', link: 'https://docs.lando.dev'},
      {text: 'Lando Cloud Beta', link: '/lando-cloud-beta/'},
      {text: 'Blog', link: 'https://blog.lando.dev'},
    ],
    sidebar: false,
  },
  bundler: '@vuepress/bundler-webpack',
}
