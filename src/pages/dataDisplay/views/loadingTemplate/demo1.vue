<template>
  <div>
    <div class="mainContain">
      <div class="mainstay" id="mainstay">
        <ul class="">
          <li v-for="(item,index) in dataArr" :key="item.title">
            <div>
              <div>
                <div :class="{'order':true,'fiveStar':fiveStarShow,'love':loveShow}">
                  {{25-index}}
                </div>
              </div>
            </div>
            <div class="imgDiv">
              <img :src="item.face" class="imgShow">
            </div>
            <div class="tc titleDiv">
              <span :class="{'title':true,'titleSmall':false,'flashlight':false}">{{item.name}}</span>
            </div>
            <div class="tc singerDiv">
              <span class="singer">涨粉数：{{item.followerDiff}}</span>
              <span class="singer">涨粉数：{{item.followerDiff}}</span>
            </div>
            <div class="tc wealthDiv">
              <span class="wealth titleBig flashlight">投币数：{{item.coinCount}}</span>
            </div>
            <div class="tc trendDiv">
              <span class="yellow titleBigger">播放量：{{item.playCount}}</span>
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
      let json = require("@/assets/json/bliUP/August04/games.json")
      this.dataArr = json
      this.dataArr = this.dataArr.slice(0,25)
      this.dataArr = this.dataArr.reverse()
      let that = this
      this.$nextTick(() => {
        setTimeout(function () {
          that.loveShow = true
        },7000)
        setTimeout(function () {
          that.loveShow = false
        },9000)
        setTimeout(function () {
          that.fiveStarShow = false
        },11000)
      })
    },
  }
};
</script>
<style>
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
    width: 35px;
    height: 35px;
    text-align: center;
    display: inline-block;
    margin: 0 0 0 0;
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
    font-size: x-large;
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
    width: calc(220*25px);
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
    animation: leftShift calc(2*21s) linear;
    animation-delay: calc(5s + 2s);
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
      transform: translateX(calc(-211*21px));
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
  }
  .love::after {
    content: "♥";
    font-size: 100px;
    margin-top:-50%;
  }
</style>
