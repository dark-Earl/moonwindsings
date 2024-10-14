import router from '../../router'
// 添加页面路由，"/" 为默认页面
router.addRoutes([
  {
    path: '/picHandle',
    component: () => import('@/pages/picHandle/index/picHandle.vue'),
    name: 'picHandle',
    meta: { title: '在线图片处理器', icon: '' }
  },
  {
    path: '/picHandleZHHU',
    component: () => import('@/pages/picHandle/index/picHandleZHHU.vue'),
    name: 'picHandleZHHU',
    meta: { title: '在线图片处理器2', icon: '' }
  },
  {
    path: '/comicPic',
    component: () => import('@/pages/picHandle/comicPic/indexPage.vue'),
    name: 'comicPic',
    meta: { title: '漫画图片格式', icon: '' }
  },
  {
    path: '/coverDesign',
    component: () => import('@/pages/picHandle/coverDesign/indexPage.vue'),
    name: 'coverDesign',
    meta: { title: '封面图片制作', icon: '' }
  },
  {
    path: '/coverDesignStory',
    component: () => import('@/pages/picHandle/coverDesign/indexPageStory.vue'),
    name: 'coverDesignStory',
    meta: { title: '封面图片制作-小说', icon: '' }
  },
])
export default router
