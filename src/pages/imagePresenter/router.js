import router from '../../router'
// 添加页面路由，"/" 为默认页面
router.addRoutes([
  {
    path: '/comprePicShow',
    meta: { title: '压缩图片模板展示', icon: '', needLogin: false},
    component: () => import('@/pages/imagePresenter/views/templates/comprePicShow.vue')
  },
  {
    path: '/imgShowHuangshanTravel',
    meta: { title: '黄山游记', icon: '', needLogin: false},
    component: () => import('@/pages/imagePresenter/views/imgShowHuangshanTravel.vue')
  },
])
export default router
