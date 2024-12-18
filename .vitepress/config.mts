import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AirPower4T",
  description: "AirPower4T 开发文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/img/logo.png',
    siteTitle: false,
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '掘金专栏', link: 'https://juejin.cn/column/7249148919505682491' },
      { text: '关于作者', link: 'https://hamm.cn' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HammCn/AirPower4T' },
    ],
    footer: {
      copyright: 'Copyright © 2024 Hamm.cn'
    },
    editLink: {
      pattern: 'https://github.com/HammCn/AirPower-Document/edit/main/:path',
      text: '有错误?点击修改'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    returnToTopLabel: "回顶部",
    sidebar: [
      {
        text: '请先阅读',
        items: [
          { text: '项目介绍', link: '/readme/project' },
          { text: '术语说明', link: '/readme/words' },
        ]
      },
      {
        text: '快速开始',
        items: [
          { text: '项目初始化', link: '/start/init' },
          { text: '基础配置', link: '/start/config' },
        ]
      },
      {
        text: '内置装饰器',
        items: [
          { text: '@Model', link: '/decorator/model' },
          { text: '@Field', link: '/decorator/field' },
          { text: '@Form', link: '/decorator/form' },
          { text: '@Table', link: '/decorator/table' },
          { text: '@Search', link: '/decorator/search' },
        ]
      },
      {
        text: '内置组件',
        items: [
          { text: 'ACopy', link: '/component/copy' },
          { text: 'ADateTime', link: '/component/datetime' },
          { text: 'AButton', link: '/component/button' },
          { text: 'AFrame', link: '/component/frame' },
          { text: 'APanel', link: '/component/panel' },
          { text: 'APage', link: '/component/page' },
          { text: 'ATable', link: '/component/table' },
          { text: 'AToolBar', link: '/component/toolbar' },
          { text: 'AGroup', link: '/component/group' },
          { text: 'ADialog', link: '/component/dialog' },
          { text: 'AInput', link: '/component/input' },
          { text: 'AUser', link: '/component/user' },
          { text: 'AUpload', link: '/component/upload' },
          { text: 'AImage', link: '/component/image' },
          { text: 'AEmpty', link: '/component/empty' },
          { text: 'AMenu', link: '/component/menu' },
          { text: 'ATreeBox', link: '/component/treebox' },
          { text: 'ATabs', link: '/component/tabs' },
          { text: 'ATab', link: '/component/tab' },
          { text: 'APhone', link: '/component/phone' },
          { text: 'AQrcode', link: '/component/qrcode' },
          { text: 'ASelect', link: '/component/select' },
          { text: 'ASelector', link: '/component/selector' },
          { text: 'AMoney', link: '/component/money' },
          { text: 'AFormField', link: '/component/formfield' },
          { text: 'ATablePayload', link: '/component/tablepayload' },
          { text: 'ADesensitize', link: '/component/desensitize' },
        ]
      },
      {
        text: '内置工具类',
        items: [
        ]
      }
    ],
  }
})
