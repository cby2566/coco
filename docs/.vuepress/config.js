module.exports = {
    base: '/cby2566.github.io/',
    title: 'OLD two-dimension',
    description: 'a old two-dimension',
    
    themeConfig: {
        //配置导航
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
          { 
            text: 'Languages',
            items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            }
        ],
        //配置导航 end
        //配置侧栏
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客'],
            '/page-a/a1.md',
        ],
        //配置侧栏end
    }
  }

// base：站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束。这里设置为 /coco/ ，我们再次在本地运行项目，访问路径就需要变更为 http://localhost:8080/coco/
// title：网站的标题
// description：网站的描述
