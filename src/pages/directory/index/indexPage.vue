<template>
  <div>
    <a-switch
      default-checked
      checked-children="dark"
      un-checked-children="light"
      @change="changeTheme"
    />
    <br />
    <br />
    <a-menu
      style="width: 256px"
      :default-selected-keys="['atest']"
      :default-open-keys="['atest_3']"
      mode="inline"
      :theme="theme"
      :selected-keys="[current]"
      @click="handleClick"
    >
      <a-sub-menu key="atest">
        <span slot="title"><a-icon type="appstore" /><span>测试页</span></span>
        <a-menu-item key="atest_3">
          <a href="atest.html#/antVueTest" target="_blank">
            组件测试0
          </a>
        </a-menu-item>
        <a-menu-item key="atest_4">
          <a href="atest.html#/funcTest" target="_blank">
            功能测试
          </a>
        </a-menu-item>
        <a-menu-item key="atest_5">
          <a href="atest.html#/interfaceTest" target="_blank">
            接口测试
          </a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="dataDisplay">
        <span slot="title"><a-icon type="appstore" /><span>数据展示</span></span>
        <a-menu-item key="dataDisplay_3">
          <a href="dataDisplay.html#/honeycombBL" target="_blank">
            数据展示封面-蜂巢
          </a>
        </a-menu-item>
        <a-menu-item key="dataDisplay_4">
          <a href="dataDisplay.html#/hurunRicher" target="_blank">
            胡润富豪排行榜
          </a>
        </a-menu-item>
        <a-menu-item key="dataDisplay_5">
          <a href="dataDisplay.html#/loadingDemo3" target="_blank">
            人物排行加载模板
          </a>
        </a-menu-item>
        <a-menu-item key="dataDisplay_6">
          <a href="dataDisplay.html#/newsHandleBL" target="_blank">
            新闻数据处理页面
          </a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="imagePresenter">
        <span slot="title"><a-icon type="appstore" /><span>图片展示器</span></span>
        <a-menu-item key="imagePresenter_3">
          <a href="imagePresenter.html#/comprePicShow" target="_blank">
            压缩图片模板展示
          </a>
        </a-menu-item>
        <a-menu-item key="imagePresenter_4">
          <a href="imagePresenter.html#/imgShowHuangshanTravel" target="_blank">
            黄山游记
          </a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="miniGames">
        <span slot="title"><a-icon type="appstore" /><span>小游戏</span></span>
        <a-menu-item key="miniGames_3">
          <a href="miniGames.html#/positNegatGames" target="_blank">
            正反博弈
          </a>
        </a-menu-item>
        <a-menu-item key="miniGames_4">
          <a href="miniGames.html#/positNegatGames2" target="_blank">
            正反博弈2
          </a>
        </a-menu-item>
        <a-menu-item key="lotteryLuckTen">
          <a href="miniGames.html#/lotteryLuckTen" target="_blank">
            好运十倍彩票刮奖
          </a>
        </a-menu-item>
        <a-menu-item key="moatGas">
          <a href="miniGames.html#/moatGas" target="_blank">
            壕“7”彩票刮奖
          </a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="novelReading">
        <span slot="title"><a-icon type="appstore" /><span>小说阅读</span></span>
        <a-menu-item key="novelReading_3">
          <a href="novelReading.html#/display" target="_blank">
            小说自动滚动
          </a>
        </a-menu-item>
        <a-menu-item key="articleFill">
          <a href="novelReading.html#/articleFill" target="_blank">
            文章填空
          </a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="picHandle">
        <span slot="title"><a-icon type="appstore" /><span>图片处理</span></span>
        <a-menu-item key="picHandle_3">
          <a href="picHandle.html#/picHandleZHHU" target="_blank">
            在线图片处理器
          </a>
        </a-menu-item>
        <a-menu-item key="picHandle_5">
          <a href="picHandle.html#/coverDesignStory" target="_blank">
            封面图制作-小说
          </a>
        </a-menu-item>
        <a-menu-item key="picHandle_4">
          <a href="picHandle.html#/comicPic" target="_blank">
            漫画图片格式
          </a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="usefulUtils">
        <span slot="title"><a-icon type="appstore" /><span>小工具</span></span>
        <a-menu-item key="usefulUtils_3">
          <a href="usefulUtils.html#/QRCode" target="_blank">
            二维码生成
          </a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="fundDataDisplay">
        <span slot="title"><a-icon type="appstore" /><span>行业板块</span></span>
        <a-menu-item key="fundDataDisplay_1">
          <a href="fundDataDisplay.html#/sector" target="_blank">
            基金行业板块上涨情况
          </a>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 'atest',
      theme: 'dark',
    };
  },
  methods: {
    handleClick(e) {
      console.log('click ', e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
  },
};
</script>
