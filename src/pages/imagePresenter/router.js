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
  {
    path: '/imgShowMine',
    meta: { title: '图片展示', icon: '', needLogin: false},
    component: () => import('@/pages/imagePresenter/views/imgShowMine.vue')
  },
  {
    path: '/imgShowMineAI',
    meta: { title: '图片展示', icon: '', needLogin: false},
    component: () => import('@/pages/imagePresenter/views/imgShowMineAI.vue')
  },
  {
    path: '/imgShowPicDemo1',
    meta: { title: '图片展示', icon: '', needLogin: false},
    component: () => import('@/pages/imagePresenter/views/imgShowPicDemo1.vue')
  },
])
export default router
