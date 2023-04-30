module.exports = {
    base: '/gulimall-pro-learn-docs/',
    themeConfig: {
      logo: '/assets/img/hero.png',
      //sidebar: 'auto',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'gitee', link: 'https://gitee.com/ZhaoShiBao/mall-learn-docs' },
    
      ],
      sidebar: [
        {
          title: '序章',   // 必要的
          path: '/mall_foreword/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/mall_foreword/mall_foreword_01',
            '/mall_foreword/mall_foreword_02'
          ]
        },
        {
          title: '架构篇',   // 必要的
          path: '/architect/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/architect/mall_arch_01',
            '/architect/mall_arch_02',
          ]
        },
        {
          title: '业务篇',   // 必要的
          path: '/database/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/database/mall_database_overview',
            '/database/mall_pms_01'
          ]
        }
      ]
    }
  }