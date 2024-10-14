import router from '../../router'
// 添加页面路由，"/" 为默认页面
router.addRoutes([
  {
    path: '/honeycombBL',
    meta: { title: '数据展示封面-蜂巢', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/cover/honeycombBL.vue')
  },
  {
    path: '/honeycombDY',
    meta: { title: '数据展示封面-蜂巢', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/cover/honeycombDY.vue')
  },
  {
    path: '/starsMoon',
    meta: { title: '数据展示封面-众星拱月', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/cover/starsMoon.vue')
  },
  {
    path: '/whosOne',
    meta: { title: '数据展示封面-众星拱月', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/cover/WhosOne.vue')
  },
  {
    path: '/demoBL',
    meta: { title: '数据展示demo1', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/demoBL.vue')
  },
  {
    path: '/demoDY',
    meta: { title: '数据展示demo2', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/demoDY.vue')
  },
  {
    path: '/demoDY2',
    meta: { title: '数据展示demo2', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/demoDY2.vue')
  },
  {
    path: '/demoNews',
    meta: { title: '喜闻资讯', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/dataShow/demoNews.vue')
  },
  {
    path: '/test',
    meta: { title: '测试使用页面', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/test.vue')
  },
  {
    path: '/newsHandleBL',
    meta: { title: '新闻数据处理页面', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/dataHandle/newsHandleBL.vue')
  },
  {
    path: '/hurunRicher',
    meta: { title: '胡润富豪', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/dataShow/hurunRicher.vue')
  },
  {
    path: '/hurunRicherDY',
    meta: { title: '胡润富豪', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/dataShow/hurunRicherDY.vue')
  },
  {
    path: '/loadingDemo1',
    meta: { title: '加载模板1', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/loadingTemplate/demo1.vue')
  },
  {
    path: '/loadingDemo2',
    meta: { title: '加载模板2', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/loadingTemplate/demo2.vue')
  },
  {
    path: '/loadingDemo4',
    meta: { title: '加载模板2', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/loadingTemplate/demo4.vue')
  },
  {
    path: '/loadingDemo3',
    meta: { title: '人物加载模板', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/loadingTemplate/demoChara.vue')
  },
  {
    path: '/demoChara2',
    meta: { title: '人物加载模板2', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/loadingTemplate/demoChara2.vue')
  },
  {
    path: '/demoCharaBli',
    meta: { title: '人物加载模板2', icon: '', needLogin: false},
    component: () => import('@/pages/dataDisplay/views/loadingTemplate/demoCharaBli.vue')
  },
])
export default router
