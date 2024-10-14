import router from '../../router'
// 添加页面路由，"/" 为默认页面
router.addRoutes([
  {
    path: '/index',
    name: 'index',
    meta: { title: '小游戏主页', icon: '', needLogin: false},
    component: () => import('@/pages/miniGames/views/indexPage.vue')
  },
  {
    path: '/positNegatGames',
    name: 'positNegatGames',
    meta: { title: '正反博弈', icon: '', needLogin: false},
    component: () => import('@/pages/miniGames/views/positNegatGames.vue')
  },
  {
    path: '/positNegatGames2',
    name: 'positNegatGames2',
    meta: { title: '正反博弈2', icon: '', needLogin: false},
    component: () => import('@/pages/miniGames/views/positNegatGames2.vue')
  },
  {
    path: '/lotteryLuckTen',
    name: 'lotteryLuckTen',
    meta: { title: '好运十倍彩票刮刮乐', icon: '', needLogin: false},
    component: () => import('@/pages/miniGames/views/lotteryLuckTen/indexPage.vue')
  },
  {
    path: '/moatGas',
    name: 'moatGas',
    meta: { title: '壕气彩票刮刮乐', icon: '', needLogin: false},
    component: () => import('@/pages/miniGames/views/moatGas/indexPage.vue')
  },
])
export default router
