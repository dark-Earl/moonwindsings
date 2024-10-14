<template>
  <div>
    <header>
      壕"7"彩票刮刮乐
      <img src="@/assets/images/games/lotteryLucky/gold.png" alt="">
    </header>
    <!--<div class="size">-->
      <!--<a-form-model-item label="刮奖工具">-->
        <!--<a-radio-group v-model="defaultSize" prop="defaultSize" @change="sizeChange">-->
          <!--<a-radio :value="5">-->
            <!--指甲直接扣-->
          <!--</a-radio>-->
          <!--<a-radio :value="8">-->
            <!--硬币刮-->
          <!--</a-radio>-->
          <!--<a-radio :value="12">-->
            <!--钥匙刮-->
          <!--</a-radio>-->
          <!--<a-radio :value="25">-->
            <!--尺子，银行卡刮-->
          <!--</a-radio>-->
        <!--</a-radio-group>-->
      <!--</a-form-model-item>-->

    <!--</div>-->

    <!--加载中-->
    <div v-if="loading" class="loading">
      <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
    </div>

    <div v-show="!loading" class="card-wrap">
      <div class="card">
        <!-- 卡片头部 -->
        <div class="card-head">
          <div class="card-head-result">刮奖结果</div>
        </div>
        <!-- 刮奖区域 -->
        <div class="card-main">
          <div v-for="(item, rowIndex) in raffleLot" :key="rowIndex" class="card-main-lot">
            <div>
              <div class="num">{{item.num}}</div>
              <div class="price">￥{{item.price}}</div>
            </div>
          </div>
        </div>
        <!-- 中奖号码区域 -->
        <div class="card-award">
          <div v-for="(item,index) in awardNumArr" :key="index">{{item}}</div>
        </div>
      </div>

      <!-- canvas画布 -->
      <canvas id="mask" width="346" height="450"></canvas>
    </div>
  </div>
</template>
<script>
import '@/assets/css/miniGames/index.css'
import { fabric } from 'fabric-with-erasing'

export default {
  data () {
    return {
      awardNum: this.createRandomNum(),
      numList: [],
      defaultSize: 25,
      canvas: null,
      loading: true,
      awardNumArr: [],
      rowsNum: 5,
      jackpot: [],
      raffleLot: []
    }
  },
  created () {
  },
  mounted () {
    this.initMask()
    this.initAwardArr()
    this.initJackPot(5,4,4,4,3,2,1,1,1)
  },
  methods: {
    initJackPot(a,b,c,d,e,f,g,h,i){
      let arr1 = new Array(a).fill('10');
      let arr2 = new Array(b).fill('20');
      let arr3 = new Array(c).fill('50');
      let arr4 = new Array(d).fill('70');
      let arr5 = new Array(e).fill('100');
      let arr6 = new Array(f).fill('700');
      let arr7 = new Array(g).fill('1000');
      let arr8 = new Array(h).fill('7000');
      let arr9 = new Array(i).fill('40万');
      let jackpot = [...arr1,...arr2,...arr3,...arr4,...arr5,...arr6,...arr7,...arr8,...arr9];
      this.jackpot = jackpot
      this.shuffle(this.jackpot)
      this.iniTraffleLot()
      console.log(this.jackpot)
    },
    iniTraffleLot(){
      let that = this
      this.jackpot.map((e)=>{
        that.raffleLot.push({num: that.createRandomNum(),price: e})
      })
    },
    shuffle(arr){
      for(let i in arr){
        let random = Math.floor(Math.random()*(+i+1));
        [arr[i],arr[random]] = [arr[random],arr[i]]
      }
    },
    initAwardArr () {
      for (let i = 0; i < this.rowsNum; i++) {
        this.awardNumArr.unshift(this.createRandomNum())
      }
    },
    initMask () {
      let that = this
      this.canvas = new fabric.Canvas('mask', { isDrawingMode: true })

      /* 设置画笔 */
      this.canvas.freeDrawingBrush = new fabric.EraserBrush(this.canvas)
      this.canvas.freeDrawingBrush.width = this.defaultSize

      /* 绘制遮罩卡片 */
      const backgroundImageUrl = require('@/assets/images/games/moatGas/newTicket.png'); // 替换为你的底层图像
      fabric.Image.fromURL(backgroundImageUrl, (img) => {
        img.set({ selectable: false })
        img.scaleToWidth(that.canvas.width, true)
        img.scaleToHeight(that.canvas.height, true)
        that.canvas.add(img)
        that.loading = false
      })
    },
    createRandomNum () {
      const randomNum = Math.floor(Math.random() * 59) + 1
      return randomNum > 9 ? randomNum : '0' + randomNum
    },
    sizeChange () {
      this.canvas.freeDrawingBrush.width = this.defaultSize
    }
  }
}
</script>
<style scoped>
  .card-wrap .card {
    position: relative;
    width: 305px;
    height: 450px;
    background: #f4f4f4 url("~@/assets/images/games/moatGas/openTicket.png") center no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    overflow: hidden;
  }
  /*中奖号码区域*/
  .card-wrap .card .card-award {
    position: absolute;
    display: inline-block;
    left: 40px;
    bottom: 125px;
    margin: 1px 0px -5px -1px;
  }
  .card-wrap .card .card-award > div {
    width: 21px;
    height: 39px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 600;
    -webkit-text-stroke: 1px #222;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }
  /*中奖号码*/
  .card-wrap .card .card-main {
    width: 215px;
    height: 207px;
    position: absolute;
    left: 69px;
    top: 122px;
    padding: 8px 0;
    margin: 0 auto;
    background-size: 100% 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }
  .card-main-lot{
    width: 43px;
    height: 41px;
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
  }
</style>
