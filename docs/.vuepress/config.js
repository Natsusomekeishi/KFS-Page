const autometa_options = {
    site: {
        name: 'KFS 服务器',
    },
    canonical_base: 'https://mckfs.com',
};

module.exports = {
    title: 'KFS 服务器',
    description: 'KFS服务器全称“KizunaAI Fans Server”，是一名绝佳的Vtuber的粉丝麦块服务器，建立于2020年7月23日。目前......',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        locales: {
            '/': {
                selectText: '语言',
                label: '简体中文',
                nav: [
                    { text: '加入我们', link: 'https://jq.qq.com/?_wv=1027&k=mS9tw9Gi' },
                ],
                sidebar: [
                    {
                        title: '如何使用',
                        collapsable: false,
                        children: [
                            ['How-to-ues/Start', '部署'],
                            ['How-to-ues/configyml-template', 'config.yml模板']
                        ],
                    },
                    ['/About', '关于这个项目']
                ]
            },
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'KFS 服务器',
            description: 'KFS服务器全称“KizunaAI Fans Server”，是一名绝佳的Vtuber的粉丝麦块服务器，建立于2020年7月23日。目前......',
        }
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-task-checkbox'))
        }
    },
    plugins: ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    plugins: ['@vuepress/back-to-top'],
    plugins: ['autometa', autometa_options],
    plugins: {
        'sitemap': {
            hostname: 'https://shionbot.xyz',
            exclude: ["/404.html"]
        },
    }
}