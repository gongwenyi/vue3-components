module.exports = {
  title: 'Vue3 UI Components',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: [
      {
        text: '首页',
        link: '/index',
      },
      {
        text: '基础组件',
        children: [
          {
            text: '按钮',
            link: '/components/button/index'
          },
        ]
        
      },
    ],
  }
}