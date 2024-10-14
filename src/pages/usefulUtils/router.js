import router from '../../router'
// 添加页面路由，"/" 为默认页面
router.addRoutes([
  {
    path: '/QRCode',
    meta: { title: '二维码生成', icon: '', needLogin: false},
    component: () => import('@/pages/usefulUtils/views/QRCode.vue')
  },
])
export default router
