<template>
  <div>
    <div>
      <img src="@/assets/images/games/positNegatGames/winners.png" class="imgBg">
    </div>
    <div class="mt8 lineStyle moneyDiv">
      <p>剩余金块：<span class="money">{{remains}}</span></p>
    </div>
    <div v-if="throwShow">
      <img src="@/assets/images/games/positNegatGames/throw.gif" class="throwPic">
    </div>
    <div class="mt8 lineStyle">
      <div>
        <span class="fl">押注：</span>
        <a-input size="large"  v-model="wagerMoney" ref="wagerMoney" style="width: 200px" :suffix="'金块'" disabled/>

        <a-button size="large" @click="calculate('+',1)">+</a-button>
        <a-button size="large" @click="calculate('-',1)">-</a-button>

      </div>
    </div>
    <div class="clear"></div>
    <div class="mt8 lineStyle">
      <span class="fl">加价倍数：</span>
      <div class="price-btn-box">
        <a-button  v-for="bs in 3" :key="bs" @click="calculate('+',bs)">
            +{{bs}}
        </a-button>
        <a-button @click="calculate('*',2)">*2</a-button>
      </div>
      <div class="clear"></div>
    </div>
    <div class="mt8 lineStyle">
      <span class="fl">减价倍数：</span>
      <div class="price-btn-box">
        <a-button  v-for="bs in 3" :key="bs" @click="calculate('-',bs)">
          -{{bs}}
        </a-button>
        <a-button @click="calculate('/',2)">÷2</a-button>
      </div>
      <div class="clear"></div>
    </div>

    <div class="mt8 lineStyle">
      <button :class="{'frontP':true,'redBg':selectedP==='front'}" @click="selectedP='front'">猜正面</button>
      <button :class="{'opposP':true,'redBg':selectedP==='oppos'}" @click="selectedP='oppos'">猜反面</button>
    </div>
    <div class="lineStyle begin">
      <button @click="begging">抛硬币</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "PositNegatGames",
  data(){
      return {
        wagerMoney: 1,
        remains: 10,
        throwShow: false,
        selectedP: ''
      }
  },
  methods: {
    calculate(sign,num){
      let result = this.wagerMoney
      if(sign==='+'){
        result+= num;
      }
      if(sign==='-'){
        result-= num;
      }
      if(sign==='*'){
        result= this.wagerMoney * 2;
      }
      if(sign==='/'){
        result= Math.floor(this.wagerMoney / 2)
      }
      if(result<=0||result>this.remains){
        this.$message.error("金额设置不合理!")
      }else{
        this.wagerMoney = result
      }
    },
    begging(){
      let that = this
      if(!this.selectedP){
        this.$message.error("请先猜正反面!")
        return false
      }
      if(this.remains===0){
        this.$message.error("😱😱😱你已经破产啦！🥶🥶🥶")
        return false
      }
      this.throwShow = true
      setTimeout(function () {
        that.throwShow = false
        let result = Math.random()
        if(that.selectedP==='front'&&result>0.5||that.selectedP==='oppos'&&result<0.5){
          that.remains = that.remains +that.wagerMoney
          that.$message.success("🎇🎇🎇恭喜你猜对啦!🎇🎇🎇")
        }else{
          that.remains = that.remains - that.wagerMoney
          that.$message.warn("😭😭😭很遗憾你猜错了!😭😭😭")
          if(that.wagerMoney>that.remains){
            that.wagerMoney = that.remains
          }
        }
      },1500)
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
