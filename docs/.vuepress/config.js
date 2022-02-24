const autometa_options = {
    site: {
        name: 'KFS 服务器',
    },
    canonical_base: 'https://hello.mckfs.com',
};

module.exports = {
    title: 'KFS 服务器',
    description: 'KFS服务器全称“KizunaAI Fans Server”，是一名绝佳的Vtuber的粉丝麦块服务器，建立于2020年7月23日。目前......',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        lastUpdated: '上次更新时间'
    }
        locales: {
            '/': {
                selectText: '语言',
                label: '简体中文',
                nav: [
                    { text: '服规', link: 'https://hello.mckfs.com/ServerRules.html' },{ text: ' 游戏实时状态', link: 'https://hello.mckfs.com/Status.html' },{ text: ' 服务器状态', link: 'https://zt.mckfs.com' },{ text: ' 已成立时间', link: 'https://page.mckfs.com/time' },{ text: ' 加入我们', link: 'https://jq.qq.com/?_wv=1027&k=mS9tw9Gi' },
                ],
                sidebar: [
                    ['/', '前言'],
                    ['/ServerHistory', '服务器历史'],
                    ['/AuditDescription', '审核说明'],
                    ['/AuditProcess', '入服审核流程'],
                    ['/ServerRules', '服务器现行规则'],
                    ['/JoinServer', '加入服务器的方法'],
                    ['/JoinFailed', '入服错误排查'],
                    ['/Otherhelp', '其他教学'],
                    ['/Status', '服务器状态'],
                    ['/Donation', '服务器月租缴纳'],
                    ['/Evaluation', '服务器评价'],
                    ['/HonorRoll', '服务器名人榜'],
                    ['/Position', '服务器任职一览'],
                    ['/Other', '其他内容'],
                    ['/Email', '反馈信箱'],
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
            hostname: 'https://hello.mckfs.com',
            exclude: ["/404.html"]
        },
    }
}
