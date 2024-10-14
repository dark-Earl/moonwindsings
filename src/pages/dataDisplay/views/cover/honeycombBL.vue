<template>
  <div>
    <div id="background">
      <div class="box">
        <!-- 第一行 -->
        <template >
          <div :class="{line1: index===1,lineover: index>1}" v-for="index in 5" :key="index">
            <div class="box1" v-for="(item,index2) in dataSub['sub'+index]">
              <div class="box2">
                <div :class="{'box3':true,'stars':index2===1}">
                  <img :src="item.face" alt="">
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'honeycomb',
  data () {
    return {
      dataArr: [],
      dataSub: {
        sub1: [],
        sub2: [],
        sub3: [],
        sub4: [],
        sub5: []
      },
      flyArr: [],
      addTask: null,
      app: null,
      clientW: null,
      clientH: null
    }
  },
  created () {
    this.initData()
    // 释放萤火虫
    this.loadFireFly()
  },
  methods: {
    initData () {
      let json = require('@/assets/json/bliUP/August04/life.json')
      this.dataArr = json
      this.dataArr = this.dataArr.reverse()
      this.dataSub.sub1 = this.dataArr.slice(0,4)
      this.dataSub.sub2 = this.dataArr.slice(4,9)
      this.dataSub.sub3 = this.dataArr.slice(9,15)
      this.dataSub.sub4 = this.dataArr.slice(15)
      this.dataSub.sub5 = this.dataArr.slice(0,4)
    },
    loadFireFly () {
      this.addTask = setInterval(this.addItem, 200)
      // setInterval(this.move, 500)
    },
    addItem () {
      this.app = this.app||document.getElementById("app")
      this.clientW = this.clientW || this.app.offsetWidth * 0.98
      this.clientH = this.clientH || this.app.offsetHeight * 0.98
      let div = document.createElement("div");
      const cName = (Math.floor(Math.random() * 3) + 1);
      div.setAttribute("class", "round" + (cName == 0 ? '' : cName));
      div.style.position = 'absolute';
      div.style.left = Math.floor(Math.random() * this.clientW) + "px";
      div.style.top = Math.floor(Math.random() * this.clientH) + "px";
      this.app.appendChild(div);
      this.flyArr.push(div);
      if (this.flyArr.length > 36) {
        clearInterval(this.addTask);
      }
    },
    move () {
      let arr = this.flyArr
      if (arr.length > 0) {
        arr.forEach(div => {
          let speed = Math.floor(Math.random() * this.clientW / 20) + 10;//定义总体速度
          let left = div.offsetLeft;
          let top = div.offsetTop;
          //随机设置在x和y方向的速度
          let theta = Math.floor(Math.random() * speed) + 10 * Math.PI * Math.random();
          let speedX = Math.floor(speed * Math.cos(theta));
          let speedY = Math.floor(speed * Math.sin(theta));
          left += speedX;
          top += speedY;
          div.style.left = left + "px"
          div.style.top = top + "px"
        })
      }
    }
  }
}
</script>

<style>
  html{
    overflow-x: hidden;
    overflow-y: hidden;
  }
  body, div, img
  {
    margin: 0;
    padding: 0;
  }
  #background{
    height: 390px !important;
    width: 844px !important;
    background-color: black;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .box
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: -93px 0px 0 68px;
  }
  .line1, .lineover
  {
    display: flex;
  }
  .lineover
  {
    margin-top: -20px;
  }
  .box1, .box2, .box3
  {
    width: 100px;
    height: 125px;
    overflow: hidden;
  }
  .box1
  {
    transform: rotate(120deg);
    margin-left: 10px;
  }
  .box2
  {
    transform: rotate(-60deg);
  }
  .box3
  {
    transform: rotate(-60deg);
  }
  .box3 img {
    width: 100%;
    height: 100%;
  }
  /*萤火虫*/
  .round1 {
    width: 10px;
    height: 10px;
    background-image: radial-gradient(rgba(255, 255, 199, 1), rgba(203, 255, 138, 0.8), rgba(105, 193, 114, 0.8));
    border-radius: 50%;
    z-index: 99;
  }

  .round2 {
    width: 8px;
    height: 8px;
    background-image: radial-gradient(rgba(255, 255, 199, 1), rgba(203, 255, 138, 0.8), rgba(105, 193, 114, 0.8));
    border-radius: 50%;
    z-index: 99;
  }

  .round3 {
    width: 5px;
    height: 5px;
    background-image: radial-gradient(rgba(255, 255, 199, 1), rgba(203, 255, 138, 0.8), rgba(105, 193, 114, 0.8));
    border-radius: 50%;
    z-index: 99;
  }
</style>
