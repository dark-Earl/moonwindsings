<template>
  <div>
    <div class="lightShadowDiv">
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
      <p class="tc orange titleTop lightShadow">2022中国富豪排行榜</p>
    </div>
    <div class="mainContain">
      <div class="mainstay" id="mainstay">
        <ul class="">
          <li v-for="(item,index) in dataArr" :key="item.title">
            <div :class="{'order':true,'fiveStar':fiveStarShow,'love':loveShow}">
              {{20-index}}
            </div>
            <div class="imgDiv">
              <img :src="item.picUrl" class="imgShow">
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
              <span class="rank titleBigger">{{item.rank}}</span>
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
      dataArr: [],
      flyArr: [],
      addTask: null,
      app: null,
      clientW: null,
      clientH: null,
      fiveStarShow: true,
      loveShow: false
    }
  },
  created(){
    this.initData()
    let that = this

  },
  methods: {
    initData(){
      let json = require("@/assets/json/hurunRicher/2022China.json")
      this.dataArr = json
      this.dataArr = this.dataArr.reverse()
      let that = this
      this.$nextTick(() => {
        setTimeout(function () {
          that.loveShow = true
        },10000)
        setTimeout(function () {
          that.loveShow = false
        },12000)
        setTimeout(function () {
          that.fiveStarShow = false
        },14000)
      })
    },
  }
};
</script>
<style>
  .titleTop{
    margin-top:30%;
    font-size: xx-large;
  }
  body{
    background-color: black !important;
  }
  .mainContain{
    margin-top: 275px;
    background-color: white !important;
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
    margin: 193px 0 0 156px;
    z-index: 9;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    line-height: 35px;
    font-weight: 600;
    font-size: x-large;
    color: white;
    transition-property: all;
    transition-duration: 1s;
  }
  .singer{
    font-size: xx-large;
    display: inline-block;
    width:211px;
    position: absolute;
    left: 0;
    color: #9C27B0 !important;
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
    height: 35px;
    line-height: 35px;
    z-index: 2;
    background-color: #2fd9ec;
    margin: -25px 0 0 0;
  }
  .mainstay ul{
    width: calc(221*20px);
    /*text-align: center;*/
  }
  /*前面部分移入动画*/
  .mainstay ul li:nth-child(1){
    transform: translateX(-500px);
    animation: slideInX 2s ease;
    animation-delay: calc(0s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(2){
    transform: translateY(-900px);
    animation: slideIn 2s ease;
    animation-delay: calc(2s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(3){
    transform: translateY(-900px);
    animation: slideIn 2s ease;
    animation-delay: calc(4s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(4){
    transform: translateY(-900px);
    animation: slideIn 2s ease;
    animation-delay: calc(6s + 2s);
    animation-fill-mode: forwards;
  }
  /*整体左移*/
  .mainstay ul{
    animation: leftShift calc(2.5*18s) linear;
    animation-delay: calc(2s + 2s);
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
  @-webkit-keyframes slideInX {
    0%{
      transform: translateX(-500px);
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
      transform: translateX(calc(-212*18px));
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
    -webkit-text-stroke: 2px #607D8B;
  }

  .singerDiv .singer:nth-child(2) {
    color: #607D8B;
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
    width: 50px;
    height: 50px;
    border-radius: 0;
    background-color: pink;
    transition-property: all;
    transition-duration: 0.8s;
    margin: 150px 0 0 150px;
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
    margin: 139px 0 0 0;
  }
  .love::after {
    content: "♥";
    font-size: 100px;
    margin-top:-50%;
  }
  .rank{
    color:goldenrod;
  }
  /*光影变换*/
  .lightShadowDiv {
    animation: wobble 5s ease-in-out infinite;
    transform-origin: center center;
    transform-style: preserve-3d;
    /*     perspective: 500px; */
  }

  @keyframes wobble {
    0%,
    100% {
      transform: rotate3d(1, 1, 0, 40deg);
    }
    25% {
      transform: rotate3d(-1, 1, 0, 40deg);
    }
    50% {
      transform: rotate3d(-1, -1, 0, 40deg);
    }
    75% {
      transform: rotate3d(1, -1, 0, 40deg);
    }
  }

  .lightShadow {
    position: absolute;
    display: block;
    width: 100%;
    top: -300px;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(255, 100, 100, 1);
    text-shadow:
      0 0 5px rgba(255, 0, 0, 1),
      0 0 20px rgba(255, 0, 0, .8),
      0 0 50px rgba(255, 0, 0, .6);
    animation: glow 10s ease-in-out infinite;
  }

  @keyframes glow {
    from {
      filter: hue-rotate(0);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }

  .lightShadow:nth-child(2) {
    transform: translateZ(5px);
  }
  .lightShadow:nth-child(3) {
    transform: translateZ(10px);
  }
  .lightShadow:nth-child(4) {
    transform: translateZ(15px);
  }
  .lightShadow:nth-child(5) {
    transform: translateZ(20px);
  }
  .lightShadow:nth-child(6) {
    transform: translateZ(25px);
  }
  .lightShadow:nth-child(7) {
    transform: translateZ(30px);
  }
  .lightShadow:nth-child(8) {
    transform: translateZ(35px);
  }
  .lightShadow:nth-child(9) {
    transform: translateZ(40px);
  }
  .lightShadow:nth-child(10) {
    transform: translateZ(45px);
  }
</style>
