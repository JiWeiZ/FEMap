module.exports = {
  base: '/FEMap/',
  dest: 'dist',
  title: '前端知识小记',
  description: 'Personal Front End Knowledge Map',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `./public/logo.png` }],
    ['meta', { name: 'msapplication-TileImage', content: './public/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'JiWeiZ/FEMap',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
    ],
    sidebar: [
      {
        title: 'JS',
        collapsable: false,
        children: [
          'JS/array',
          'JS/object',
          'JS/function',
          'JS/event',
          'JS/event-loop',
          'JS/distance',
          'JS/regex',
          'JS/ajax',
          'JS/high-level',
          'JS/byhand',
          'JS/repaint-reflow',
          'JS/recursive',
        ]
      }, {
        title: 'CSS',
        collapsable: false,
        children: [
          'CSS/visual-format',
          'CSS/float-position',
          'CSS/visibility-z-index',
          'CSS/text',
          'CSS/css-selector',
        ]
      }, {
        title: '网络',
        collapsable: false,
        children: [
          'Network/network-architecture',
          'Network/link-layer',
          'Network/network-layer',
          'Network/transport-layer',
          'Network/cross-domain',
          'Network/DNS',
          'Network/CDN',
          'Network/cache',
        ]
      }, {
        title: '一些题目',
        collapsable: false,
        children: [
          'Questions/UI',
          'Questions/questions',
        ]
      } , {
        title: '算法/数据结构',
        collapsable: false,
        children: [
          '',
        ]
      } , {
        title: '工程化',
        collapsable: false,
        children: [
          '',
        ]
      } , {
        title: 'Vue',
        collapsable: false,
        children: [
          'Vue/responsive',
        ]
      } , {
        title: 'Node',
        collapsable: false,
        children: [
          '',
        ]
      } , {
        title: 'Express',
        collapsable: false,
        children: [
          '',
        ]
      } , {
        title: 'Koa',
        collapsable: false,
        children: [
          '',
        ]
      } , {
        title: 'Git',
        collapsable: false,
        children: [
          '',
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: false
  }
}
