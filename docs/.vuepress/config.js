module.exports = {
    base: '/coco/',
    title: 'OLD two-dimension',
    description: 'a old two-dimension',
    
    themeConfig: {
        //配置导航
        nav: [
          { text: 'Home', link: '/' },
        //   { text: 'Guide', link: '/guide/' }, 不显示git链接
        //   { text: 'External', link: 'https://google.com' }, 不显示外部链接
        //   { 
        //     text: 'Languages',
        //     items: [
        //             { text: 'Chinese', link: '/language/chinese' },
        //             { text: 'Japanese', link: '/language/japanese' }
        //         ]
        //     }
        ],
        //配置导航 end
        //配置侧栏
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客'],
            '/page-b/b1.md',
            {
                title: 'Group 2',
                children: [ '/page-a/a1.md','/page-a/a2.md' ]
            },
            ['/page-c/关于博客.md', '和博客相关'],
            {
                title: '七月学习',
                children: [ ['/seven/seven.md','711'] ]
            },
        ],
        //配置侧栏end
        // >>搜索框
        themeConfig: {
            search: false,
            searchMaxSuggestions: 10
        },
        //最后更新时间
        themeConfig: {
            lastUpdated: 'Last Updated', // string | boolean
        },
        //end
        serviceWorker: {
            updatePopup: true
        }
    }
  }

// base：站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束。这里设置为 /coco/ ，我们再次在本地运行项目，访问路径就需要变更为 http://localhost:8080/coco/
// title：网站的标题
// description：网站的描述
