<template>
  <div>
    <div :class="{'mainContain':true,'showTrue':rollShow2>24}">
      <div class="mainstay" id="mainstay">
        <ul class="">
          <li v-for="(item,index) in dataArr" :key="item.title">
            <div>
              <div>
                <div :class="{'order':true,'fiveStar':fiveStarShow,'love':loveShow}">
                  {{20-index}}
                </div>
              </div>
            </div>
            <div class="imgDiv">
              <img :src="item.picUrl2" class="imgShow" v-if="item.picUrl2 && count>3 && count%2===0">
              <img :src="item.picUrl" class="imgShow" v-else>
            </div>
            <div class="tc titleDiv">
              <span :class="{'title':true,'titleSmall':false,'flashlight':false}">{{item.name}}</span>
            </div>
            <div class="tc singerDiv">
              <span class="singer">{{item.enterName}}</span>
              <span class="singer">{{item.enterName}}</span>
            </div>
            <div class="tc wealthDiv">
              <span class="wealth titleBig flashlight">{{item.wealth}}亿</span>
            </div>
            <div class="tc trendDiv">
              <span class="red titleBigger">{{item.industry}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="indexPageBack">
      <div :class="{'indexPageDiv':true,'showTrue':rollShow2<24}">
        <ul class="indexPage">
          <li v-for="(item,index) in dataArr2" :key="index" :class="{'bgColor1':index%2===0,'bgColor2':index%2!==0,
        'rightMove':rollShow2>index&&rollShow2<index+16,'indexPageLi':true}">
            <span class="order2">{{index+1}}</span>
            <span>
                {{item.name}}
            </span>
            <span class="news_time fr">{{item.wealth}}亿</span>
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
      dataArr: [],
      dataArr2: [],
      flyArr: [],
      addTask: null,
      app: null,
      clientW: null,
      clientH: null,
      fiveStarShow: true,
      loveShow: false,
      count: 0,
      testId: 0,
      testId2: 0,
      rollShow: 16,
      rollShow2: -2
    }
  },
  created(){
    this.initData()
    let that = this

  },
  methods: {
    initData(){
      let json = require("@/assets/json/hurunRicher/2014China.json");
      this.dataArr = json;
      this.dataArr2 = this.dataArr.slice(0,10);
      this.dataArr = this.dataArr.slice(0,20).reverse();
      let that = this;
      this.$nextTick(() => {
        setTimeout(function () {
          that.loveShow = true
        },22000)
        setTimeout(function () {
          that.loveShow = false
        },24000)
        setTimeout(function () {
          that.fiveStarShow = false
        },26000)
        that.testId = setInterval(function () {
          that.count = that.count + 1
          if(that.count>56){
            clearInterval(that.testId)
          }
        },2000)
      })
      this.$nextTick(() => {
        that.testId2 = setInterval(function () {
          that.rollShow2 = that.rollShow2 + 1
          if(that.rollShow2>36){
            clearInterval(that.testId2)
          }
        }, 500)
      })
    },
  }
};
</script>
<style>
  ::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  .mainContain{
    display: none;
  }
  .order2{
    background-color: pink;
    display: inline-block;
    width: 30px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
  }
  .indexPageLi{
    transition-property: all;
    transition-duration: 1s;
  }
  .rightMove{
    transform: translateX(1000px);
  }
  .indexPageDiv{
    width:50%;
    margin-left:25%;
    text-align: left;
    display: none;
  }
  .indexPage{
    transform: translateX(-1000px);
  }
  .indexPageBack{
    background-image: url('~@/assets/images/index/snow.gif');
    background-size: 100% 130%;
  }
  .showTrue{
    display: block;
  }
  .showFalse{
    display: none;
  }
  .bgColor1{
    background-color: antiquewhite;
  }
  .bgColor2{
    background-color: beige;
  }
  .indexPage li{
    height: 39px;
    line-height: 39px;
  }
  .mainstay{
    height: 390px;
    overflow-y: hidden;
  }
  .imgDiv{
    margin-bottom: 26px;
  }
  .imgShow{
    width: 100%;
    height: 240px;
  }
  .order{
    width: 35px;
    height: 35px;
    text-align: center;
    display: inline-block;
    margin: 6px 0 0 161px;
    z-index: 99;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    line-height: 35px;
    font-weight: 600;
    font-size: x-large;
    color: white;
    transition-property: all;
    transition-duration: 0.8s;
  }
  .singer{
    font-size: x-large;
    display: inline-block;
    width:211px;
    position: absolute;
    left: 0;
    color: dodgerblue !important;
  }
  .singerDiv{
    height: 45px;
    line-height: 45px;
    margin-top:40px;
    position: relative;
  }
  .title{
    font-size: larger;
    display: inline-block;
    width:211px;
  }
  .titleBigger{
    font-size: x-large;
  }
  .titleBig{
    font-size: large;
  }
  .trend{
    font-size: 20px;
    display: inline-block;
    width:211px;
  }
  .trendDiv{
    height: 35px;
    line-height: 35px;
  }
  .wealthDiv{
    height: 25px;
    line-height: 25px;
  }
  .mainstay ul li{
    display: inline-block;
    width: 211px;
    padding: 2px;
    border: 1px solid #00FED7;
  }
  .titleDiv{
    display: inline-block;
    position: absolute;
    width: 206px;
    height: 36px;
    line-height: 36px;
    z-index: 2;
    background-color: mediumpurple;
    color:white;
    margin: -26px 0 0 0;
  }
  .mainstay ul{
    width: calc(221*25px);
    /*text-align: center;*/
  }
  /*前面部分移入动画*/
  .mainstay ul li:nth-child(1){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(0s + 0s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(2){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(1s + 0s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(3){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(2s + 0s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(4){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(3s + 0s);
    animation-fill-mode: forwards;
  }
  /*整体左移*/
  .mainstay ul{
    animation: leftShift calc(2.5*16s) linear;
    animation-delay: calc(5s + 0s);
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes slideIn {
    0%{
      transform: translateY(-500px);
    }
    100%{
      transform: translateY(0);
    }
  }
  @-webkit-keyframes rotateEle {
    0%{
      transform: rotateY(450deg);
      transform-origin: 884px 0;
    }
    100%{
      transform: rotateY(0);
      transform-origin: 884px 0;
    }
  }
  @-webkit-keyframes leftShift {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(calc(-211*16px));
    }
  }
  /*闪光文字*/
  .flashlight{
    background-image: -webkit-linear-gradient(66deg, purple 0%, blue 20%, black 40%,green 60%, orange 80%,red 100%);
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

  /*水波浪*/
  .singerDiv .singer:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #125371;
  }

  .singerDiv .singer:nth-child(2) {
    color: #03a9f4;
    animation: animateWater 4s ease-in-out infinite;
  }

  @keyframes animateWater {

    /*显示内容的位置，上波浪位置，---下波浪位置*/

    0% ,100%{
      clip-path: polygon(1% 5%, 32% 15%, 44% 25%, 69% 40%, 86% 62%, 97% 77%, 100% 84%,108% 100%, 3% 100%, 1% 100%);
    }

    50% {
      clip-path: polygon(1% 73%, 24% 74%, 40% 74%, 66% 59%, 87% 50%, 97% 45%, 108% 43%,108% 100%, 3% 100%, 1% 100%);
    }

  }

  /*额外拓展部分*/
  .fiveStar {
    width: 44px;
    height: 44px;
    border-radius: 0;
    background-color: deepskyblue;
    transition-property: all;
    transition-duration: 0.8s;
  }
  .fiveStar::after {
    content: "★";
    color: rgba(255, 255, 255, 0.8);
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.8s;
    margin-top:-50%;
  }
  .love {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: lightpink;
    margin: 10px;
  }
  .love::after {
    content: "♥";
    font-size: 100px;
    margin-top:-50%;
  }
</style>
