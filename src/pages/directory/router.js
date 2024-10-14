import router from '../../router'
// 添加页面路由，"/" 为默认页面
router.addRoutes([
  {
    path: '/',
    meta: { title: '首页', icon: '' },
    component: () => import('@/layout/BlankLayout'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/directory/index/indexPage.vue'),
        name: 'index',
        meta: { title: '首页', icon: '' }
      },
      {
        path: '/indexPage',
        component: () => import('@/pages/directory/index/indexPage.vue'),
        name: 'indexPage',
        meta: { title: '功能目录页', icon: '' }
      }]
  }
])
export default router
