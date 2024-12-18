import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "启智云开放平台",
  description: "启智云开放文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开放文档', link: '/readme' }
    ],

    sidebar: [
      {
        text: '写在前面',
        items: [
          { text: '平台简介', link: '/readme' },
          { text: '术语说明', link: '/readme/words' },
          { text: '错误代码表', link: '/readme/errorcodes' },
        ]
      },
      {
        text: '技术对接',
        items: [
          { text: '对接方式说明', link: '/connect/readme' },
          { text: '签名与验签', link: '/connect/signature' },
          { text: '加密和解密', link: '/connect/security' },
        ]
      },
      {
        text: '开放接口',
        items: [
          {
            text: '公共接口',
            items: [
              { text: '获取系统错误代码', link: '/common/errorcodes' },
            ]
          },
          {
            text: '企业与园区',
            items: [
              { text: '查询当前企业信息', link: '/enterprise/get' },
              { text: '查询可用任务列表', link: '/enterprise/tasks' },
              { text: '查询可用园区列表', link: '/enterprise/parks' },
            ]
          },
          {
            text: '资金发放',
            items: [
              { text: '创建支付订单', link: '/order/create' },
              { text: '查询支付订单', link: '/order/get' },
              { text: '处理订单回调', link: '/order/callback' },
            ]
          },
          {
            text: '账单与回单',
            items: [
              { text: '申请支付账单', link: '/order/apply' },
              { text: '申请支付回单', link: '/receipt/apply' },
            ]
          },
        ]
      },
      {
        text: 'WebHook',
        items: [
          {
            text: '任务',
            items: [
              { text: '任务创建', link: '/webhook/task/create' },
              { text: '任务审核', link: '/webhook/task/create' },
            ]
          },
          {
            text: '订单',
            items: [
              { text: '手动发放订单', link: '/webhook/task/create' },
              { text: '任务审核', link: '/webhook/task/audit' },
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HammCn' }
    ]
  }
})
