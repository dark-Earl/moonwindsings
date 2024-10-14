<template>
  <div>
    <div id="showArea">
      <div id="indexPage" v-if="picShow">
        <div id="container">
          <div :style="topPartClass">
            <div class="leftTop">
              <img :src="picArrShow[0]" :draggable="true">
            </div>
            <div class="rightTop">
              <img :src="picArrShow[1]">
            </div>
          </div>
          <div :style="centerPartClass">
            <div class="centerLeft">
              <img :src="picArrShow[2]">
            </div>
            <div class="centerRight">
              <img :src="picArrShow[3]">
            </div>
          </div>
          <div :style="bottomPartClass">
            <div class="bottom">
              <canvas width="400" height="400" id="c" style="border: 1px solid #ccc;"></canvas>
              <!--<img :src="picArrShow[4]">-->
            </div>
          </div>
        </div>
      </div>
      <div class="menu">
        <a-button @click="showDrawer">菜单</a-button>
      </div>
      <a-drawer
        title="编辑菜单"
        placement="bottom"
        :closable="false"
        :visible="visibleMenu"
        @close="onClose"
      >
        <p>
          <a-upload
            name="file"
            :multiple="true"
            action=""
            @change="handleChangeTp"
            list-type="picture"
            :remove="handleRemove"
            :default-file-list="fileList"
          >
            <!--<a-button> <a-icon type="upload" /> 上传图片 </a-button>-->

            <div v-if="picArr.length < 10">
              <a-button class="ant-upload-text">
                上传图片
              </a-button>
            </div>
          </a-upload>
        </p>
        <p>
          <a-button size="large" class="vam" @click="createImage">
            保存图片
          </a-button>
        </p>
        <p>
          <a-collapse>
            <a-collapse-panel key="3" header="自定义裁剪">
              <div>
                <div>
                  <a-divider>上层模块调整</a-divider>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      左下角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="topPart.LB" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('topPart','+',3,'LB')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('topPart','-',3,'LB')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      右下角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="topPart.RB" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('topPart','+',3,'RB')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('topPart','-',3,'RB')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-divider>中层模块调整</a-divider>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      左上角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="centerPart.LT" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','+',3,'LT')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','-',3,'LT')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      右上角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="centerPart.RT" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','+',4,'RT')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','-',4,'RT')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      左下角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="centerPart.LB" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','+',3,'LB')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','-',3,'LB')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      右下角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="centerPart.RB" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','+',3,'RB')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','-',3,'RB')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      整块位置调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="centerPart.TOP" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','+',2,'TOP')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('centerPart','-',2,'TOP')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-divider>下层模块调整</a-divider>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      左上角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="bottomPart.LT" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('bottomPart','+',3,'LT')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('bottomPart','-',3,'LT')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      右上角高度调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="bottomPart.RT" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('bottomPart','+',3,'RT')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('bottomPart','-',3,'RT')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="10">
                      整块位置调整
                    </a-col>
                    <a-col :span="14">
                      <a-input size="large" class="vam"  v-model="bottomPart.TOP" style="width: 75px" disabled suffix="%"/>
                      <a-button size="large" class="vam" @click="adjustStyle('bottomPart','+',2,'TOP')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('bottomPart','-',2,'TOP')">-</a-button>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </p>
      </a-drawer>
    </div>
  </div>
</template>
<script>
import {NumberUtil} from '@/utils/index'
import domtoimage from 'dom-to-image'
import { fabric } from 'fabric' // 引入 fabric

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export default {
  data() {
    return {
      dataArr: [],
      picUrl: require('@/assets/images/index/grass.png'),
      lightness: 1,
      contastRadio: 1,
      saturation: 1,
      tone: '0',
      picStyle: {'filter': 'brightness(1) contrast(1)'},
      visibleMenu: false,
      picArr: [],
      picArrShow: [],
      picShow: false,
      fileList: [],
      saveUrl: '',
      topPart: {'LB':75,'RB':61,'LT':0,'RT':0},
      centerPart: {'LT': 18,'RT': 4,'LB': 58,'RB': 72,'TOP': -36},
      bottomPart: {'LT': 8,'RT': 23,'TOP': -45,'LB':100,'RB':100},
      topPartClass: {'clip-path': 'polygon(0 0,100% 0,100% 61%,0 75%)','height':'35%'},
      centerPartClass: {'clip-path': 'polygon(0 18%,115% 4%,100% 72%,0 58%)','height':'40%','margin-top':'-36%'},
      bottomPartClass: {'clip-path': 'polygon(0 8%,104% 23%,104% 100%,0 100%)','height':'38%','margin-top':'-45%'},
      emoteList: ['🌸', '❄', '🌺', '❄', '🍂', '❄', '🍀', '❄', '🍃', '❄'],
      innerW: 100,
      innerH: 100,
    };
  },
  created(){
    this.setInnerSize()
    this.initPic()
    // this.startFallFlower()
  },
  methods: {
    initPic(){
      let url = require('@/assets/images/index/grass.png')
      this.picArr = new Array(5).fill(url)
      this.picArrShow = this.picArr
      let that = this
      this.picShow=true
      this.$nextTick(() => {
        that.setCanvasPic()
      })
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      this.picArr.splice(index+5,1)
      this.picArrShow = this.picArr.slice(-5)
    },
    refreshPic(){
      this.picShow=!this.picShow
    },
    createImage() {
      let node = document.getElementById('container');
      let that = this
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          //console.log(dataUrl)
          that.saveUrl = dataUrl
          //将图片下载到本地
          let a = document.createElement("a"); // 生成一个a元素
          let event = new MouseEvent("click"); // 创建一个单击事件
          a.download = name || "截图名称"; // 设置图片名称没有设置则为默认
          a.href = that.saveUrl; // 将生成的URL设置为a.href属性
          a.dispatchEvent(event); // 触发a的单击事件
        })
        .catch(function (error) {
          console.error('生成失败', error);
        });
    },
    // 图片处理
    async handleChangeTp(info) {
      if(info.file.status==='error'){
        this.picUrl = await getBase64(info.file.originFileObj)
        this.picArr.push(this.picUrl)
        let a = this.picArr
        this.picArrShow = this.picArr.slice(-5)
      }
      this.fileList = info.fileList;
      this.debounce(this.setCanvasPic(),3000,false)
    },
    setCanvasPic(){
      const canvas = new fabric.Canvas('c') // 这里传入的是canvas的id
      let url = this.picArrShow[4]
      fabric.Image.fromURL(url, img => {
        img.scale(0.5) // 图片缩小50%
        canvas.add(img)
      })
    },
    showDrawer() {
      this.visibleMenu = true;
    },
    onClose() {
      this.visibleMenu = false;
    },
    // 调整裁剪
    adjustStyle(type,sign,num,direction){
      let result = this[type][direction]
      if(sign==='+'){
        result=NumberUtil.floatAdd(result,num);
      }
      if(sign==='-'){
        result=NumberUtil.floatSub(result,num);
      }
      this[type][direction] = result;
      this.renderStyle(type,direction);
    },
    renderStyle(type,direction){
      if(direction==='TOP'){
        let result = this[type]['TOP'];
        let filterStyle = `${result}%`;
        this.$set(this[type+'Class'],'margin-top',filterStyle);
      }else{
        let LT = this[type]['LT'];
        let RT = this[type]['RT'];
        let LB = this[type]['LB'];
        let RB = this[type]['RB'];
        let filterStyle2 = `polygon(0 ${LT}%,110% ${RT}%,100% ${RB}%,0 ${LB}%)`;
        this.$set(this[type+'Class'],'clip-path',filterStyle2);
        let a = '';
      }
    },
    // 落花特效相关函数
    setInnerSize(){
      this.innerW = window.innerWidth
      this.innerH = window.innerHeight
    },
    createEmoteElement(){
      const rand = 40;
      const fs = 10 +Math.round(Math.random() * rand);
      const left = Math.round(Math.random() * this.innerW);
      const top = Math.round(Math.random() * 50)
      const opacity = ((Math.random() * 34 + 66) / 100).toFixed(1) - 0
      const transitionDuration = 3000 + Math.round(Math.random() * 2000);

      const emoteEl = $('<div></div>').css({
        position: 'absolute',
        color: '#fff',
        top: `${ top }px`,
        left: `${ left }px`,
        fontSize: `${fs }px`,
        opacity: opacity,
        zIndex: 9999,
        textShadow: `0 0 ${ fs / 3 }px #ffffffcc`,
        transition: `transform ${ transitionDuration }ms linear`
      }).html(this.emoteList[Math.round(Math.random() * (this.emoteList.length - 1))])

      return { emoteEl, emoteParams: { fs, left, top, opacity, transitionDuration } }
    },
    setEmoteAnimate(){
      const { emoteEl, emoteParams } = this.createEmoteElement()
      $('#indexPage').append(emoteEl)
      const leftRange =  [-200, 200];
      const endLeft = emoteParams.left + leftRange[Math.round(Math.random())];
      const endTop = this.innerH - Math.round(Math.random() * 466);
      const moveDuration = this.innerH * 10 + Math.round(Math.random() * 4000);
      const endScale = 1.0 - ((Math.round(Math.random() * 4) / 10).toFixed(2) - 0);
      const hideDuration = 1200 + Math.round(Math.random() * 2000);

      emoteEl.animate({ left: `${ endLeft }px`, top: `${ endTop }px`, }, moveDuration, 'linear', () => {
        emoteEl.css({ transform: `scale(${ endScale })` })
          .animate({ opacity: 0 }, hideDuration, 'linear', () => (emoteEl.remove()))
      })
    },
    startFallFlower(){
      let num = 0;
      let that = this
      setInterval(function () {
        if (num % 10 === 0) {
          that.setInnerSize()
        }
        num += 1
        that.setEmoteAnimate()
      },4000)
    },
    debounce (func, wait, immediate) {
      let timeout, args, context, timestamp, result

      let later = function () {
        let last = new Date().getTime() - timestamp // timestamp会实时更新

        if (last < wait && last >= 0) {
          timeout = setTimeout(later, wait - last)
        } else {
          timeout = null
          if (!immediate) {
            result = func.apply(context, args)
            if (!timeout) context = args = null
          }
        }
      }

      return function () {
        context = this
        args = arguments
        timestamp = new Date().getTime()
        let callNow = immediate && !timeout

        if (!timeout) {
          timeout = setTimeout(later, wait)
        }
        if (callNow) {
          result = func.apply(context, args)
          context = args = null
        }
        return result
      }
    }
  },
};
</script>
<style>
  #indexPage{
    height:840px;
  }
  .vam{
    vertical-align: middle;
  }
  #container{
    width: 100%;
    height: 100%;
    background-color: white;
  }
  #container img{
    display: block;
    position: absolute;
    overflow: hidden;
    border: 2px solid black;
  }
  .leftTop,.rightTop,.centerLeft,.centerRight,.bottom{
    display: inline-block;
    border: white 4px solid;
    margin: 3px 0 0 5px;
  }
  .leftTop,.leftTop img{
    width: 55%;
    height: 35%;
  }
  .rightTop,.rightTop img{
    width: 40%;
    height: 35%;
  }
  .centerLeft,.centerLeft img{
    width: 40%;
    height: 40%;
  }
  .centerRight,.centerRight img{
    width: 55%;
    height: 40%;
  }
  .bottom,.bottom img{
    width: 96%;
    height: 38%;
  }

  .menu{
    position: absolute;
    bottom: 10%;
    left: 10%;
  }
  .adjustRow{
    height:50px;
    line-height: 50px;
    border-bottom: 1px solid #2d0707;
  }

</style>
