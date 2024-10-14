<template>
  <div>
    <div class="mainContain">
      <div class="mainstay" id="mainstay">
        <ul class="">
          <li v-for="(item,index) in dataArr" :key="item.title">
            <div class="order">
              {{20-index}}
            </div>
            <div class="imgDiv">
              <img :src="item.picUrl" class="imgShow">
            </div>
            <div class="tc titleDiv">
              <span :class="{'title':true,'titleSmall':false,'flashlight':true}">{{item.name}}</span>
            </div>
            <div class="tc singerDiv">
              <span class="singer">{{item.enterName}}</span>
              <span class="singer">{{item.enterName}}</span>
            </div>
            <div class="tc wealthDiv">
              <span class="wealth titleBig">{{item.wealth}}亿</span>
            </div>
            <div class="tc trendDiv">
              <span class="yellow titleBigger">{{item.rank}}</span>
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
      clientH: null
    }
  },
  created(){
    this.initData()

  },
  methods: {
    initData(){
      let json = require("@/assets/json/hurunRicher/2022China.json")
      this.dataArr = json
      this.dataArr = this.dataArr.reverse()
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
    margin: 193px 0 0 0;
    z-index: 2;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    line-height: 35px;
    font-weight: 600;
    font-size: x-large;
    color: white;
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
    width: calc(220*20px);
    /*text-align: center;*/
  }
  /*前面部分移入动画*/
  .mainstay ul li:nth-child(1){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(0s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(2){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(1s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(3){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(2s + 2s);
    animation-fill-mode: forwards;
  }
  .mainstay ul li:nth-child(4){
    transform: translateY(500px);
    animation: rotateEle 2s ease;
    animation-delay: calc(3s + 2s);
    animation-fill-mode: forwards;
  }
  /*整体左移*/
  .mainstay ul{
    animation: leftShift calc(3*16s) linear;
    animation-delay: calc(5s + 1s);
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
      transform: translateX(calc(-211*16px));
    }
  }
  /*闪光文字*/
  .flashlight{
    font-size: 23px;
    background-image: -webkit-linear-gradient(66deg, purple 0%, blue 20%, yellow 40%,green 60%, orange 80%,red 100%);
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
</style>
