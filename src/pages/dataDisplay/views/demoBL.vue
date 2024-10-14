<template>
  <div>
    <div class="mainContain">
      <div class="mainstay">
        <ul class="">
          <li v-for="(item,index) in dataArr" :key="item.title">
            <div class="order">
              {{20-index}}
            </div>
            <div class="imgDiv">
              <img :src="item.picUrl" class="imgShow">
            </div>
            <div class="tc titleDiv">
              <span :class="{'title':true,'titleSmall':false}">{{item.title}}</span>
            </div>
            <div class="tc singerDiv">
              <span class="singer flashlight">{{item.singer}}</span>
            </div>
            <div class="tc trendDiv">
              <span :class="{trend: true,red: item.rank.indexOf('↑')>-1,green: item.rank.indexOf('↓')>-1,blue: item.rank.indexOf('new')>-1,}">{{item.rank}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr: []
    }
  },
  created(){
    this.initData()
  },
  methods: {
    initData(){
      let json = require("@/assets/json/dataShow/rankVariety.json")
      this.dataArr = json
      this.dataArr = this.dataArr.reverse()
    }
  }
};
</script>
<style scoped>
  /*.mainContain{*/
    /*margin-top: 30px;*/
  /*}*/
  .imgDiv{
    margin-bottom: 26px;
  }
  .imgShow{
    width: 100%;
    height: 240px;
  }
  .order{
    width: 45px;
    height: 45px;
    text-align: center;
    display: inline-block;
    margin: 6px;
    z-index: 2;
    position: absolute;
    background-color: #ffb22f;
    border-radius: 50%;
    line-height: 45px;
    font-weight: 600;
    font-size: x-large;
    color: red;
  }
  .singer{
    font-size: larger;
    display: inline-block;
    width:211px;
  }
  .singerDiv{
    height: 50px;
    line-height: 50px;
    margin-top:45px;
  }
  .title{
    font-size: larger;
    display: inline-block;
    width:211px;
  }
  .trend{
    font-size: 20px;
    display: inline-block;
    width:211px;
  }
  .trendDiv{
    height: 50px;
    line-height: 50px;
  }
  .mainstay ul li{
    display: inline-block;
    width: 211px;
    padding: 2px;
    border: 1px solid #2fd9ec;
  }
  .titleDiv{
    display: inline-block;
    position: absolute;
    width: 206px;
    height: 35px;
    line-height: 35px;
    z-index: 2;
    background-color: #00FED7;
    margin: -25px 0 0 0;
  }
  .mainstay ul{
    width: calc(220*20px);
    /*text-align: center;*/
  }
  /*前面部分移入动画*/
  .mainstay ul li:nth-child(1){
    transform: translateY(500px);
    animation: slideIn 2s ease;
    animation-delay: calc(0s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(2){
    transform: translateY(500px);
    animation: slideIn 2s ease;
    animation-delay: calc(1s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(3){
    transform: translateY(500px);
    animation: slideIn 2s ease;
    animation-delay: calc(2s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(4){
    transform: translateY(500px);
    animation: slideIn 2s ease;
    animation-delay: calc(3s + 2s);
    animation-fill-mode: forwards;
  }
  /*整体左移*/
  .mainstay ul{
    animation: leftShift calc(2*20s) infinite linear;
    animation-delay: calc(5s + 2s);
  }
  @-webkit-keyframes slideIn {
    0%{
      transform: translateY(500px);
    }
    100%{
      transform: translateY(0);
    }
  }
  @-webkit-keyframes leftShift {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(calc(-211*20px));
    }
  }
  /*闪光文字*/
  .flashlight{
    font-size: 30px;
    background-image: -webkit-linear-gradient(66deg, red 0%, orange 20%, yellow 40%,green 60%, blue 80%,purple 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-animation: hue 8s infinite linear;
  }

  @keyframes hue{
    0% {
      background-position: 100% 0;
    }

    25% {
      background-position: 50% 0;
    }

    50% {
      background-position: -0 0;
    }

    75% {
      background-position: -50% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }
</style>
