<template>
  <div>
    <div :class="{'mainContain':true,'showTrue':rollShow2>16}">
      <div class="mainstay" id="mainstay">
        <ul class="">
          <li v-for="(item,index) in dataArr" :key="item.title">
            <div :class="{'order':true,'fiveStar':rollShow>-7,'love':-6<rollShow&&rollShow<-3}">
              {{10-index}}
            </div>
            <div class="imgDiv">
              <div class="imgShowDiv">
                <img :src="item.picUrl" :class="{'imgShow':true,'rollBegin':index<4&&rollShow>index+2,'roll':index<4&&rollShow>index&&rollShow<index+4}">
              </div>
            </div>
            <div class="tc titleDiv">
              <span :class="{'title':true,'titleSmall':false,'flashlight':true}">{{item.name}}</span>
            </div>
            <!--<div class="tc singerDiv">-->
            <!--<span class="singer">{{item.enterName}}</span>-->
            <!--<span class="singer">{{item.enterName}}</span>-->
            <!--</div>-->
            <div class="tc wealthDiv">
              <span class="wealth titleBig">{{item.price}}元</span>
            </div>
            <!--<div class="tc trendDiv">-->
            <!--<span class="yellow titleBigger">{{item.rank}}</span>-->
            <!--</div>-->
          </li>
        </ul>
      </div>
    </div>
    <div class="indexPageBack">
      <div :class="{'indexPageDiv':true,'showTrue':rollShow2<16}">
        <ul class="indexPage">
          <li v-for="(item,index) in dataArr" :key="index" :class="{'bgColor1':index%2===0,'bgColor2':index%2!==0,
        'rightMove':rollShow2>index&&rollShow2<index+12,'indexPageLi':true}">
            <span class="order2">{{index+1}}</span>
            <span>
                {{item.name}}
            </span>
            <span class="news_time fr">{{item.price}}元</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataArr: [],
      flyArr: [],
      addTask: null,
      app: null,
      clientW: null,
      clientH: null,
      testId: 0,
      testId2: 0,
      rollShow: 16,
      rollShow2: -2
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      let json = require('@/assets/json/ITproduct/phone3000Below.json')
      this.dataArr = json
      this.dataArr = this.dataArr.reverse()
      let that = this
      this.$nextTick(() => {
        that.testId = setInterval(function () {
          that.rollShow = that.rollShow - 1
          if(that.rollShow<-50){
            clearInterval(that.testId)
          }
        }, 1000)
      })
      this.$nextTick(() => {
        that.testId2 = setInterval(function () {
          that.rollShow2 = that.rollShow2 + 1
          if(that.rollShow2>30){
            clearInterval(that.testId2)
          }
        }, 500)
      })
    }
  }
}
</script>
<style>
  ::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  .indexPageBack{
    background-image: url('~@/assets/images/index/snow.gif');
    background-size: 100% 130%;
  }
  .indexPageDiv{
    width:50%;
    margin-left:25%;
    text-align: left;
    display: none;
  }
  .mainContain{
    display: none;
  }
  .indexPage{
    transform: translateX(-1000px);
  }
  .indexPageLi{
    transition-property: all;
    transition-duration: 1s;
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
  .bgColor1{
    background-color: #859bc3;
  }
  .bgColor2{
    background-color: #91a9d0;
  }
  .indexPage li{
    height: 39px;
    line-height: 39px;
  }
  .showTrue{
    display: block;
  }
  .showFalse{
    display: none;
  }
  .mainstay{
    height: 390px;
    overflow-y: hidden;
  }
  .imgDiv{
    margin-bottom: 26px;
    background-color: white;
  }
  .imgShowDiv{
    height: 240px;
    line-height: 240px;
    text-align: center;
  }
  .imgShow{
    width: 206px;
    height:289px;
    transition-property: border-radius,width,height;
    transition-duration: 2s;
    /*transition-timing-function: cubic-bezier(0.49, 1.59, 0.46, -0.21);*/

    animation: scaleT calc(3s) linear infinite;
    animation-delay: calc(5s + 0s);
  }
  .rollBegin{
    transition-property: all;
    transition-duration: 3s;
  }
  .order{
    width: 35px;
    height: 35px;
    text-align: center;
    display: inline-block;
    margin: 0 0 0 153px;
    z-index: 2;
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
    font-size: larger;
    display: inline-block;
    width:211px;
    position: absolute;
    left: 0;
    color: pink !important;
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
  /*.wealthDiv{*/
  /*height: 25px;*/
  /*line-height: 25px;*/
  /*background-color: white;*/
  /*}*/
  .wealthDiv {
    height: 120px;
    line-height: 141px;
    background-color: white;
  }
  .mainstay ul li{
    display: inline-block;
    background-color: white;
    width: 211px;
    padding: 2px;
    border: 1px solid #00FED7;
  }
  .titleDiv{
    display: inline-block;
    position: absolute;
    width: 206px;
    height: 35px;
    line-height: 35px;
    z-index: 2;
    background-color: #2fd9ec;
    margin: -11px 0 0 0;
  }
  .mainstay ul{
    width: calc(220*10px);
    /*text-align: center;*/
  }
  /*前面部分移入动画*/
  .mainstay ul li:nth-child(4){
    transform: translateX(2000px);
    animation: slideIn 2s ease;
    animation-delay: calc(0s + 0s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(3){
    transform: translateX(1000px);
    animation: slideIn 2s ease;
    animation-delay: calc(1s + 0s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(2){
    transform: translateX(1000px);
    animation: slideIn 2s ease;
    animation-delay: calc(2s + 0s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(1){
    transform: translateX(1000px);
    animation: slideIn 2s ease;
    animation-delay: calc(3s + 0s);
    animation-fill-mode: forwards;
  }
  /*整体左移*/
  .mainstay ul{
    animation: leftShift calc(3*6s) linear;
    animation-delay: calc(6s + 0s);
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes slideIn {
    0%{
      transform: translateX(calc(-221*4px));
    }
    100%{
      transform: translateX(0);
    }
  }

  @-webkit-keyframes scaleT {
    0%{
      transform: scale(1.0);
    }
    25%{
      transform: scale(0.6);
    }
    50%{
      transform: scale(0.45);
    }
    75%{
      transform: scale(0.9);
    }
    100%{
      transform: scale(1.2);
    }
  }
  @-webkit-keyframes rotateEle {
    0%{
      transform: rotateY(180deg);
    }
    50%{
      transform: rotateY(180deg);
    }
    100%{
      transform: rotateY(0);
    }
  }
  @-webkit-keyframes leftShift {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(calc(-211*6px));
    }
  }
  /*闪光文字*/
  .flashlight{
    font-size: 23px;
    background-image: -webkit-linear-gradient(66deg, purple 0%, blue 20%,black 40%,green 60%, orange 80%,red 100%);
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
    -webkit-text-stroke: 2px #03a9f4;
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
  .roll {
    width: 205px;
    height: 205px;
    border-radius: 50%;
    transform: rotate(1080deg);
    /*background-color: skyblue;*/
  }
  /*额外拓展部分*/
  .fiveStar {
    width: 50px;
    height: 50px;
    border-radius: 0;
    background-color: pink;
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
    background-color: skyblue;
    margin: 20px;
  }
  .love::after {
    content: "♥";
    font-size: 100px;
    margin-top:-50%;
  }
  .rightMove{
    transform: translateX(1000px);
  }

</style>
