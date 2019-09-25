module.exports = {
  base: '/fe-dev-command/',
  title: 'fe-dev-command',
  description: '前端开发实践中所知的SSH命令',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    smoothScroll: true,
    nav: [
      {
        text: '指南',
        link: '/guide/Shell'
      },
      {
        text: 'Github',
        link: 'https://github.com/one-pupil/fe-dev-command'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          collapsable: false,
          children: [
            'Shell',
            'Git',
            'Npm',
            'PM2'
          ]
        }
      ]
    }
  }
};
