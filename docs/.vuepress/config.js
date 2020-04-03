const pluginConf = require('./config/plugin');
const sidebarConf = require('./config/sidebar');
const navConf = require('./config/nav');
const headConf = require('./config/head');

module.exports = {
  base: '/lsy-vuepress-blog/',
  title: 'lsy-blog',
  description: 'record',
  head: headConf,
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    nav: navConf,
    sidebar: sidebarConf,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！',
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: { '@alias': '' },
  //   },
  // },
  plugins: pluginConf,
};
