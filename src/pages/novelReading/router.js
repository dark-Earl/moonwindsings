import router from '../../router'
// 添加页面路由，"/" 为默认页面
router.addRoutes([
  {
    path: '/display',
    component: () => import('@/pages/novelReading/views/display.vue'),
    name: 'display',
    meta: { title: '小说阅读', icon: '' }
  },
  {
    path: '/articleFill',
    component: () => import('@/pages/novelReading/views/articleFill.vue'),
    name: 'articleFill',
    meta: { title: '文章填空', icon: '' }
  },
])
export default router
