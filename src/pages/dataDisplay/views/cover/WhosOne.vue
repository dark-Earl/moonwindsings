<template>
  <div>
    <div id="background">
      <div class="box">
        <!-- 第一行 -->
        <template >
          <div :class="{line1: index===1,lineover: index>1}" v-for="index in 3" :key="index">
            <div class="box1" v-for="item in dataSub['sub'+index]">
              <div class="box2">
                <div :class="{'box3':true}">
                  <img :src="item.picUrl" alt="">
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
      },
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      let json = require('@/assets/json/hurunRicher/2008China.json')
      this.dataArr = json
      this.dataArr = this.dataArr.slice(0,7)
      this.suffle(this.dataArr)
      this.dataSub.sub1 = this.dataArr.slice(0,2)
      this.dataSub.sub2 = this.dataArr.slice(2,5)
      this.dataSub.sub3 = this.dataArr.slice(5,7)
    },
    suffle(arr){
      for(let i = 1;i<arr.length;i++){
        let random = Math.floor(Math.random()*(i+1));
        [arr[i],arr[random]] = [arr[random],arr[i]]
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
    /*background-color: black;*/
    overflow-x: hidden;
    overflow-y: hidden;
    background-image: url('~@/assets/images/index/sky.png');
    background-size: 100% auto;
  }
  .box
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: -6px 0 0 -139px;
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
    width: 130px;
    height: 147px;
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
</style>
