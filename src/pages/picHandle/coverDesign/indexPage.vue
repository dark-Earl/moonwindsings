<template>
  <div>
    <div>
      <div id="indexPage">
        <div id="container">
          <canvas width="800" height="600" id="canvasA" style="border: 1px solid #ccc;"></canvas>
        </div>
        <div id="fallFlowerArea" class="fallFlowerArea" style="display: none">
          <!--test-->
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
            :multiple="false"
            action=""
            @change="handleChangeTp($event,'BG')"
          >
            <div>
              <a-button class="ant-upload-text">
                上传背景图
              </a-button>
            </div>
          </a-upload>
        </p>
        <p>
          <a-upload
            name="file"
            :multiple="false"
            action=""
            @change="handleChangeTp($event,'MB')"
          >
            <div>
              <a-button class="ant-upload-text">
                上传主体图
              </a-button>
            </div>
          </a-upload>
        </p>
        <p>
          <a-button @click="showFlower" :class="{'red':flowerShow}">落花区域</a-button>
        </p>
        <p>
          <a-button @click="addText">添加文字</a-button>
        </p>
        <p>
          <a-button size="large" class="vam" @click="createImage">
            保存图片
          </a-button>
        </p>
      </a-drawer>
    </div>
  </div>
</template>
<script>
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
      visibleMenu: false,
      emoteList: ['🌸', '❄', '🌺', '❄', '🍂', '❄', '🍀', '❄', '🍃', '❄'],
      innerW: 100,
      innerH: 100,
      picUrlBG: '',
      picUrlMB: '',
      flowerShow: false,
      canvasA: null
    };
  },
  created(){
    this.setInnerSize()
    // this.startFallFlower()
  },
  methods: {
    createImage() {
      let node = document.getElementById('indexPage');
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
    showFlower() {
      this.flowerShow = !this.flowerShow
      $("#fallFlowerArea").toggle()
    },
    // 图片处理
    async handleChangeTp(info, type) {
      if (info.file.status === 'error') {
        this.picUrl = await getBase64(info.file.originFileObj)
        if ('BG' === type) {
          this.picUrlBG = this.picUrl
          this.debounce(this.setCanvasPicBG(), 2000, false)
        } else {
          this.picUrlMB = this.picUrl
          this.debounce(this.setCanvasPicMB(), 2000, false)
        }
      }
    },
    showDrawer() {
      this.visibleMenu = true;
    },
    onClose() {
      this.visibleMenu = false;
    },
    // 落花特效相关函数
    setInnerSize() {
      this.innerW = window.innerWidth
      this.innerH = window.innerHeight
    },
    createEmoteElement() {
      const rand = 40;
      const fs = 10 + Math.round(Math.random() * rand);
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

      return {emoteEl, emoteParams: {fs, left, top, opacity, transitionDuration}}
    },
    setEmoteAnimate() {
      const {emoteEl, emoteParams} = this.createEmoteElement()
      $('#fallFlowerArea').append(emoteEl)
      const leftRange = [-200, 200];
      const endLeft = emoteParams.left + leftRange[Math.round(Math.random())];
      const endTop = this.innerH - Math.round(Math.random() * 66);
      const moveDuration = this.innerH * 10 + Math.round(Math.random() * 4000);
      const endScale = 1.0 - ((Math.round(Math.random() * 4) / 10).toFixed(2) - 0);
      const hideDuration = 1200 + Math.round(Math.random() * 2000);

      emoteEl.animate({left: `${ endLeft }px`, top: `${ endTop }px`,}, moveDuration, 'linear', () => {
        emoteEl.css({transform: `scale(${ endScale })`})
          .animate({opacity: 0}, hideDuration, 'linear', () => (emoteEl.remove()))
      })
    },
    startFallFlower() {
      let num = 0;
      let that = this
      setInterval(function () {
        if (num % 10 === 0) {
          that.setInnerSize()
        }
        num += 1
        that.setEmoteAnimate()
      }, 4000)
    },
    debounce(func, wait, immediate) {
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
    },
    setCanvasPicBG() {
      const canvas = this.canvasA||new fabric.Canvas('canvasA') // 这里传入的是canvas的id
      this.canvasA = canvas
      let url = this.picUrlBG
      fabric.Image.fromURL(url, img => {
        canvas.setBackgroundImage(
          url,
          canvas.renderAll.bind(canvas),
          {
            scaleX: canvas.width / img.width, // 计算出图片要拉伸的宽度
            scaleY: canvas.height / img.height // 计算出图片要拉伸的高度
          }
        )
      })
    },
    setCanvasPicMB() {
      const canvas = this.canvasA||new fabric.Canvas('canvasA') // 这里传入的是canvas的id
      this.canvasA = canvas
      let url = this.picUrlMB
      fabric.Image.fromURL(url, img => {
        img.scale(0.4)
        canvas.add(img)
      })
    },
    addText() {
      const canvas = this.canvasA||new fabric.Canvas('canvasA')
      this.canvasA = canvas

      const text = new fabric.IText('文本', {
        top: 40,
        left: 40,
        fontSize: 22,
        backgroundColor: '#112237', // 背景色：绿色
        fill: '#f3e6cb', // 填充色：橙色
        stroke: '#f6416c', // 边框颜色：粉色
        strokeWidth: 0, // 边框粗细：3px
        strokeDashArray: [20, 5, 14], // 边框虚线规则：填充20px 空5px 填充14px 空20px 填充5px ……
        shadow: '10px 20px 6px rgba(10, 20, 30, 0.1)', // 投影：向右偏移10px，向下偏移20px，羽化6px，投影颜色及透明度
        transparentCorners: false, // 选中时，角是被填充了。true 空心；false 实心
        borderColor: '#16f1fc', // 选中时，边框颜色：天蓝
        borderScaleFactor: 0, // 选中时，边的粗细：5px
        borderDashArray: [20, 5, 10, 7], // 选中时，虚线边的规则
        cornerColor: "#a1de93", // 选中时，角的颜色是 青色
        cornerStrokeColor: 'pink', // 选中时，角的边框的颜色是 粉色
        cornerStyle: 'circle', // 选中时，叫的属性。默认rect 矩形；circle 圆形
        cornerSize: 20, // 选中时，角的大小为20
        cornerDashArray: [10, 2, 6], // 选中时，虚线角的规则
        selectionBackgroundColor: '#7f1300', // 选中时，选框的背景色：朱红
        padding: 0, // 选中时，选择框离元素的内边距：40px
        borderOpacityWhenMoving: 0.6, // 当对象活动和移动时，对象控制边界的不透明度
      })

      canvas.add(text)
    }
  },
};
</script>
<style>
  #indexPage{
    height:840px;
  }
  .fallFlowerArea{
    position: absolute;
    text-align: center;
    top: 2%;
    width:100%;
    height: 600px;
    overflow: hidden;
  }
  .vam{
    vertical-align: middle;
  }
  #container{
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .menu{
    position: absolute;
    bottom: 10%;
    left: 10%;
  }
</style>
