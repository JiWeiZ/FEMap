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
                    'JS/js-thread'
                ]
            },
            {
                title: 'CSS',
                collapsable: false,
                children: [
                    'CSS/visual-format'
                ]
            },
            {
                title: 'HTTP',
                collapsable: false,
                children: [
                    'HTTP/network-architecture',
                    'HTTP/network-layer',
                    'HTTP/transport-layer',
                    'HTTP/CORS',
                    'HTTP/DNS',
                ]
            },         
        ]
    },
    markdown: {
        lineNumbers: true
    }
}
