<template>
  <div>
    <div class="mainContain">
      <div class="mainstay">
        <ul class="">
          <li v-for="(item,index) in dataArr" :key="item.title">
            <div class="orderDiv">
              <div class="box">
                <div class="box1">
                  <div class="box2">
                    <div class="box3">
                      <div class="orderSpan">
                        <div class="flashlight orderIndex">
                          {{10-index}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <a-button class="testButton">位置变化测试</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr: [],
    }
  },
  created(){
    this.initData()
  },
  methods: {
    initData(){
      let json = require("@/assets/json/funNews/2022news.json")
      this.dataArr = json
      this.dataArr = this.dataArr.slice(0,10)
      this.dataArr = this.dataArr.reverse()
    }
  }
};
</script>
<style scoped>
  .orderDiv{
    width: 211px;
    height: 80px;
    text-align: center;
  }
  .orderSpan{
    height:70px;
    width: 70px;
    text-align: center;
    background-color: #00FED7;
  }
  .orderIndex{
    left: -9px;
    position: relative;
    top: 15px;
  }
  .singerDiv{
    height: 4px;
    width: 211px;
    background-color: green;
  }
  .mainstay ul li{
    display: inline-block;
    width: 211px;
    border: 3px solid green;
  }
  .titleDiv{
    display: inline-block;
    position: absolute;
    left: -2px;
    width: 211px;
    height: 303px;
    border: 3px solid green;
  }
  /*六边形序号*/
  .box
  {
    width: 70px;
    display: inline-block;
    animation: rotateEle 7s infinite linear;
  }
  .box1, .box2, .box3
  {
    width: 50px;
    height: 80px;
    overflow: hidden;
  }
  .box1
  {
    transform: rotate(120deg);
  }
  .box2
  {
    transform: rotate(-60deg);
  }
  .box3
  {
    transform: rotate(-60deg);
  }
  .mainstay ul{
    width: calc(220*20px);
    /*text-align: center;*/
  }
  /*前面部分移入动画*/
  /*.mainstay ul li:nth-child(1){*/
    /*transform: translateY(500px);*/
    /*animation: slideIn 2s ease;*/
    /*animation-delay: calc(0s + 2s);*/
    /*animation-fill-mode: forwards;*/
  /*}*/
  /*.mainstay ul li:nth-child(2){*/
    /*transform: translateY(500px);*/
    /*animation: slideIn 2s ease;*/
    /*animation-delay: calc(1s + 2s);*/
    /*animation-fill-mode: forwards;*/
  /*}*/
  /*.mainstay ul li:nth-child(3){*/
    /*transform: translateY(500px);*/
    /*animation: slideIn 2s ease;*/
    /*animation-delay: calc(2s + 2s);*/
    /*animation-fill-mode: forwards;*/
  /*}*/
  /*.mainstay ul li:nth-child(4){*/
    /*transform: translateY(500px);*/
    /*animation: slideIn 2s ease;*/
    /*animation-delay: calc(3s + 2s);*/
    /*animation-fill-mode: forwards;*/
  /*}*/
  /*整体左移*/
  .mainstay ul{
    /*animation: leftShift calc(3.5*20s) infinite linear;*/
    animation-delay: calc(5s + 2s);
  }
  @-webkit-keyframes slideIn {
    0%{
      transform: translateY(-500px);
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
  /*元素旋转*/
  @-webkit-keyframes rotateEle {
    0%{
      transform: rotateY(0);
    }
    50%{
      transform-origin: 45% 50%;
      transform: rotateY(180deg);
    }
    100%{
      transform-origin: 45% 50%;
      transform: rotateY(360deg);
    }
  }
  /*闪光文字*/
  .flashlight{
    font-size: 30px;
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
  .testButton{
    margin: 15px 50px 60px 70px;
  }
  .testButton:hover{
    margin: 50px 0 0 0;
  }
</style>
