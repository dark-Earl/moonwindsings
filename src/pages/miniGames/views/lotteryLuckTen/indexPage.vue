<template>
  <div>
    <header>
      好运十倍刮刮乐
      <img src="@/assets/images/games/lotteryLucky/ten.png" @click="test" alt="">
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
          <div v-for="(row, rowIndex) in numList" :key="rowIndex" class="card-main-row">
            <div v-for="(num, numIndex) in row" :key="numIndex" class="card-main-col">
              <template v-if="numIndex === row.length - 1">
                <div class="gold">
                  <span>{{ num }}元</span>
                  <img src="@/assets/images/games/lotteryLucky/gold.png" alt="">
                </div>

              </template>
              <template v-else>
                <div class="num" :class="num === 10 || num === awardNum ? 'active' : ''">{{ num }}</div>
              </template>

            </div>
          </div>
        </div>
        <!-- 玩法释义 -->
        <div  v-if="false" class="card-desc">
          任意一个“我的号码”与“中奖号码”相同，即可获得该对应的奖金；
          如果刮出号码“10”，即可获得该行对应奖金的10倍.
        </div>

        <!-- 定位元素 -->
        <!-- 聚宝盆背景 -->
        <img class="card-pot" src="@/assets/images/games/lotteryLucky/pot.png" alt=""></img>

        <!-- 点点星星背景 -->
        <img class="card-star" src="@/assets/images/games/lotteryLucky/star.png" alt=""></img>

        <!-- 中奖号码区域 -->
        <div class="card-award">
          <p>中奖号码</p>
          <div>{{ awardNum }}</div>
        </div>

        <!-- 10次机会 -->
        <div v-if="false" class="card-ten">
          <p>10次</p>
          <p>中奖机会</p>
          <p>面值10元</p>
        </div>
      </div>

      <!-- canvas画布 -->
      <canvas id="mask" width="346" height="450"></canvas>
    </div>
  </div>
</template>
<script>
import '@/assets/css/miniGames/index.css'
import {fabric} from 'fabric-with-erasing'

export default {
  data () {
    return {
      awardNum: this.createMedalRandomNum(),
      defaultNumList: [[500], [60], [60], [20], [200], ['40万'], [10], [100], [40], [500]],
      winningNumber: [0,1,1,2,2,3],
      medalNumber: [1,1,2,2,5,7],
      tenFoldNumber: [0,1,1,1,2,2,2,3,3,3],
      numList: [],
      defaultSize: 25,
      canvas: null,
      loading: true
    }
  },
  created () {
    // this.initNumList()
  },
  mounted () {
    this.initNumList()
    this.initMask()
  },
  methods: {
    initNumList () {
      this.numList = this.defaultNumList.sort(() => Math.random() - 0.5).map((row, rowIndex) => {
        const rowTotal = rowIndex > 6 ? 8 : rowIndex + 1

        for (let i = 0; i < rowTotal; i++) {
          let num = this.createRandomNum()
          // if(num===this.awardNum){
          //   let random = Math.floor(Math.random()*7)
          //   num += this.winningNumber[random]
          // }else if(num===10){
          //   let random2 = Math.floor(Math.random()*11)
          //   num += this.tenFoldNumber[random2]
          // }
          row.unshift(num)
        }
        return row
      }).reverse()
    },
    initMask () {
      let that = this
      this.canvas = new fabric.Canvas('mask', { isDrawingMode: true })

      /* 设置画笔 */
      this.canvas.freeDrawingBrush = new fabric.EraserBrush(this.canvas)
      this.canvas.freeDrawingBrush.width = this.defaultSize

      /* 绘制遮罩卡片 */
      const backgroundImageUrl = require('@/assets/images/games/lotteryLucky/mask.png'); // 替换为你的底层图像
      fabric.Image.fromURL(backgroundImageUrl, (img) => {
        img.set({ selectable: false })
        img.scaleToWidth(that.canvas.width, true)
        that.canvas.add(img)
        that.loading = false
      })
    },
    createRandomNum () {
      let num = Math.floor(Math.random() * 99) + 1
      if(num===this.awardNum){
        let random = Math.floor(Math.random()*6)
        num += this.winningNumber[random]
      }else if(num===10){
        let random2 = Math.floor(Math.random()*10)
        num += this.tenFoldNumber[random2]
      }
      return num > 9 ? num : '0' + num
    },
    createMedalRandomNum () {
      let randomNum = Math.floor(Math.random() * 99) + 1;
      if(randomNum===10){
        let random = Math.floor(Math.random()*6)
        randomNum += this.medalNumber[random]
      }
      return randomNum > 9 ? randomNum : '0' + randomNum
    },
    sizeChange () {
      this.canvas.freeDrawingBrush.width = this.defaultSize
    },
    test(){
      console.log(this.numList)
    }
  }
}
</script>
<style scoped></style>
