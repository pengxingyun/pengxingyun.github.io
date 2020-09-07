module.exports = {
    title: 'central park',
    description: 'Just front-end docs',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: './logo.png',
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide/' },
            // { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: 'CSS',
                children: [
                    'CSS/介绍下BFC，IFC，FFC，GFC'
                ]
            },
            {
                title: 'Javascript',
                children: [
                    '/Javascript/Javascript两链一包还有this',
                    '/Javascript/防抖和节流',
                    '/Javascript/手写深拷贝',
                    '/Javascript/严格模式和非严格模式区别',
                    '/Javascript/立即执行函数的多种写法',
                    '/Javascript/作用域相关的问题',
                    '/Javascript/宏任务和微任务',
                    '/Javascript/Javascript ES6（一）',
                    '/Javascript/Javascript ES6（二）',
                    '/Javascript/Javascript ES6（三）',
                    '/Javascript/设计一个会过期的localStorage',
                    '/Javascript/Javascript实现常用排序'
                ]
            },
            {
                title: 'Vue',
                children: [
                    '/vue/vue-cli怎么改造成ssr',
                    '/vue/webpack+vue-loader手动配置项目'
                ]
            },
            {
              title: '数据结构与算法',   // 必要的
              path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //   collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/算法/Javascript数据结构与算法之队列',
                    '/算法/Javascript数据结构与算法之栈',
                    '/算法/Javascript数据结构与算法之链表',
                    '/算法/Javascript数据结构与算法之二叉树',
                    '/算法/Javascript数据结构与算法之bitmap',
                    '/算法/Javascript数据结构与算法之堆',
                    '/算法/Javascript数据结构与算法之并查集',
                    '/算法/Javascript数据结构与算法之广度优先搜索',
                    '/算法/Javascript数据结构与算法之深度优先搜索',
                    '/算法/Javascript数据结构与算法之二分查找',
                    '/算法/Javascript数据结构与算法之回溯算法',
                    '/算法/Javascript数据结构与算法之贪心算法',
                    '/算法/Javascript数据结构与算法之动态规划'
                ]
            },
            {
                title: '设计模式',
                children: [
                    '/设计模式/Javascript单例模式',
                    '/设计模式/Javascript观察者模式',
                    '/设计模式/Javascript装饰器模式',
                    '/设计模式/Javascript享元模式',
                ]
            },
            {
                title: '网络相关',
                children: [
                    '网络相关/HTTP传输流程',
                    '网络相关/HTTP状态码',
                    '网络相关/鉴权'
                ]
            },
            {
                title: 'webpack',
                children: [
                    'webpack/webpack常用配置解析',
                    'webpack/loader和plugin怎么写',
                    'webpack/分析webpack打包原理'
                ]
            },
            {
                title: 'nodejs',
                children: [
                    'nodejs/npm不完全解析'
                ]
            }
        ]
    }
}