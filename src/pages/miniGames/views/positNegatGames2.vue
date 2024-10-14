<template>
  <div>
    <div>
      <img src="@/assets/images/games/positNegatGames/winners.png" class="imgBg">
    </div>
    <div class="mt8 lineStyle moneyDiv">
      <p>剩余金额：<span class="money">{{remains}}</span></p>
    </div>
    <div v-if="throwShow">
      <img src="@/assets/images/games/positNegatGames/throw.gif" class="throwPic">
    </div>
    <div class="clear"></div>
    <div class="mt8 lineStyle">
      <a-radio-group v-model="model" @change="modelTip">
        <a-radio value="1">
          普通模式
        </a-radio>
        <a-radio value="2">
          抽佣模式
        </a-radio>
      </a-radio-group>
    </div>
    <div class="mt8 lineStyle">
      <button :class="{'frontP':true,'redBg':selectedP==='front'}" @click="selectedP='front'">猜正面</button>
      <button :class="{'opposP':true,'redBg':selectedP==='oppos'}" @click="selectedP='oppos'">猜反面</button>
    </div>
    <div class="lineStyle begin">
      <button @click="begging">抛硬币</button>
    </div>
    <div class="mt30 lineStyle">
      <div>
        <span class="fl">连猜</span>
        <a-input size="large"  v-model="wagerCount" ref="wagerCount" style="width: 200px" :suffix="'次'"/>

        <a-button size="large" @click="begging">开始许愿</a-button>

      </div>
    </div>
    <div class="mt30 lineStyle">
      <div>
        <div class="fl">竞猜结果：</div>
        <ul>
          <li v-for="(item,index) in resultArr" :key="index">
            第{{index+1}}次：
            <span :class="{'red':item.result==='成功','green':item.result==='失败'}">{{item.result}}</span>
            ,剩余金额：{{item.money}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { NumberUtil } from '@/utils/index'

export default {
    name: "PositNegatGames",
  data(){
      return {
        wagerCount: 1,
        remains: 10000,
        throwShow: false,
        selectedP: '',
        multiple: 1.1,
        resultArr: [],
        model: "1"
      }
  },
  methods: {
    begging: function(){
      let that = this
      let count = this.wagerCount
      this.resultArr = []
      if(!this.selectedP){
        this.$message.error("请先猜正反面!")
        return false
      }
      if(this.remains<200){
        this.$message.error("😱😱😱金额小于200，你已经破产啦！🥶🥶🥶")
        return false
      }
      this.throwShow = true
      setTimeout(function () {
        that.throwShow = false
        let start = that.remains
        for(let i=0;i<count;i++){
          let result = Math.random()
          let resultMsg = '失败'
          if(that.selectedP==='front'&&result>0.5||that.selectedP==='oppos'&&result<0.5){
            resultMsg = '成功'
            that.remains =NumberUtil.floatMul(that.remains,1.1)
          }else{
            that.remains =NumberUtil.floatMul(that.remains,0.9)
          }
          if(that.model==="2"){
            that.remains =NumberUtil.floatMul(that.remains,0.999)
          }
          let resultItem = {result:resultMsg,money:that.remains}
          that.resultArr.push(resultItem)
        }
        if(that.remains>start){
          that.$message.success("🎇🎇🎇恭喜你猜对啦!🎇🎇🎇")
        }else{
          that.$message.warn("😭😭😭很遗憾你猜错了!😭😭😭")
        }
        that.resultArr = that.resultArr.slice(0,10)
      },1500)
    },
    modelTip: function (result) {
      let key = result.target.value
      if(key==="1"){
        this.$message.warn("普通模式：无手续费，硬币正面概率为50%")
      }else{
        this.$message.warn("抽佣模式：每次竞猜扣除手续费0.1%")
      }
    }
  }
}
</script>

<style scoped>
  .imgBg{
    width:100%;
  }
  >>>.ant-form-item-control-wrapper{
    display: inline-block;
  }
  .moneyDiv{
    text-align: center;
  }
  .money{
    color:red;
    font-size: 20px;
  }
  .lineStyle{
    line-height: 43px;
  }
  .frontP{
    margin: 0 0 0 90px;
  }
  .opposP{
    float: right;
    margin: 0 80px 0 0;
  }
  .begin{
    text-align: center;
    margin: 14px 0 0 17px;
  }
  .throwPic{
    position: fixed;
    z-index:999;
  }
  .redBg{
    color:yellow;
    background-color: red;
  }
</style>
