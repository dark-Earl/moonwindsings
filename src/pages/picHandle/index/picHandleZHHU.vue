<template>
  <div>
    <div>
      <a-layout>
        <a-layout-header>
          <div>
            <a-divider>图片渲染器</a-divider>
          </div>
        </a-layout-header>
        <a-layout>
          <a-layout-content>
            <div class="container">
              <!--接口路径：-->
              <div>
                <p class="title">渲染效果图</p>
                <div>
                  <img :src="picUrl" :style="picStyle" class="renderEffect" id="renderImg">
                </div>
              </div>
              <!--<div>-->
                <!--<p class="title">原始图片</p>-->
                <!--<img :src="picUrl" class="originEffect">-->
              <!--</div>-->
            </div>
          </a-layout-content>
          <a-layout-sider v-if="!isMobile">
            <div class="sideDiv">
              <div>
                <a-divider>渲染参数调整</a-divider>
              </div>
              <div>
                <a-row class="adjustRow">
                  <a-col :span="7">
                    明亮度
                  </a-col>
                  <a-col :span="17">
                      <a-input size="large" class="vam"  v-model="lightness" ref="lightness" style="width: 50px" disabled/>
                      <a-button size="large" class="vam" @click="adjustStyle('lightness','+',0.1,'')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('lightness','-',0.1,'')">-</a-button>
                  </a-col>
                </a-row>
                <a-row class="adjustRow">
                  <a-col :span="7">
                    对比度
                  </a-col>
                  <a-col :span="17">
                    <a-input size="large" class="vam"  v-model="contastRadio" ref="contastRadio" style="width: 50px" disabled/>
                    <a-button size="large" class="vam" @click="adjustStyle('contastRadio','+',0.1,'')">+</a-button>
                    <a-button size="large" class="vam" @click="adjustStyle('contastRadio','-',0.1,'')">-</a-button>
                  </a-col>
                </a-row>
                <a-row class="adjustRow">
                  <a-col :span="7">
                    饱和度
                  </a-col>
                  <a-col :span="17">
                    <a-input size="large" class="vam"  v-model="saturation" ref="saturation" style="width: 50px" disabled/>
                    <a-button size="large" class="vam" @click="adjustStyle('saturation','+',0.1,'')">+</a-button>
                    <a-button size="large" class="vam" @click="adjustStyle('saturation','-',0.1,'')">-</a-button>
                  </a-col>
                </a-row>
                <a-row class="adjustRow">
                  <a-col :span="7">
                    色调调整
                  </a-col>
                  <a-col :span="17">
                    <a-input size="large" class="vam"  v-model="tone" ref="tone" style="width: 50px" disabled/>
                    <a-button size="large" class="vam" @click="adjustStyle('tone','+',10,'deg')">+</a-button>
                    <a-button size="large" class="vam" @click="adjustStyle('tone','-',10,'deg')">-</a-button>
                  </a-col>
                </a-row>
                <a-row class="adjustRow tc">
                  <a-col :span="7">
                  </a-col>
                  <a-col :span="17">
                    <a-button size="large" class="vam" @click="resetStyle">重置样式</a-button>
                  </a-col>
                </a-row>
                <a-row class="adjustRow tc">
                  <a-col :span="7">
                  </a-col>
                  <a-col :span="17">
                    <a-upload
                      name="file"
                      :multiple="false"
                      action=""
                      @change="handleChangeTp"
                    >
                      <a-button> <a-icon type="upload" /> 上传图片 </a-button>
                    </a-upload>
                  </a-col>
                </a-row>
                <a-row class="adjustRow tc">
                  <a-col :span="7"></a-col>
                  <a-col :span="17">
                    <a-button size="large" class="vam" @click="createImage">
                      保存渲染效果图片
                    </a-button>
                  </a-col>
                </a-row>
              </div>
            </div>
          </a-layout-sider>
          <div v-else>
              <div>
                <div>
                  <a-divider>渲染参数调整</a-divider>
                </div>
                <div>
                  <a-row class="adjustRow">
                    <a-col :span="7">
                      明亮度
                    </a-col>
                    <a-col :span="17">
                      <a-input size="large" class="vam"  v-model="lightness" ref="lightness" style="width: 50px" disabled/>
                      <a-button size="large" class="vam" @click="adjustStyle('lightness','+',0.1,'')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('lightness','-',0.1,'')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="7">
                      对比度
                    </a-col>
                    <a-col :span="17">
                      <a-input size="large" class="vam"  v-model="contastRadio" ref="contastRadio" style="width: 50px" disabled/>
                      <a-button size="large" class="vam" @click="adjustStyle('contastRadio','+',0.1,'')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('contastRadio','-',0.1,'')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="7">
                      饱和度
                    </a-col>
                    <a-col :span="17">
                      <a-input size="large" class="vam"  v-model="saturation" ref="saturation" style="width: 50px" disabled/>
                      <a-button size="large" class="vam" @click="adjustStyle('saturation','+',0.1,'')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('saturation','-',0.1,'')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow">
                    <a-col :span="7">
                      色调调整
                    </a-col>
                    <a-col :span="17">
                      <a-input size="large" class="vam"  v-model="tone" ref="tone" style="width: 50px" disabled/>
                      <a-button size="large" class="vam" @click="adjustStyle('tone','+',10,'deg')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('tone','-',10,'deg')">-</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow tc">
                    <a-col :span="2">
                    </a-col>
                    <a-col :span="17">
                      <a-button size="large" class="vam" @click="resetStyle">重置样式</a-button>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow tc">
                    <a-col :span="2">
                    </a-col>
                    <a-col :span="17">
                      <a-upload
                        name="file"
                        :multiple="false"
                        action=""
                        @change="handleChangeTp"
                      >
                        <a-button> <a-icon type="upload" /> 上传图片 </a-button>
                      </a-upload>
                    </a-col>
                  </a-row>
                  <a-row class="adjustRow tc">
                    <a-col :span="2"></a-col>
                    <a-col :span="17">
                      <a-button size="large" class="vam" @click="createImage">
                        保存渲染效果图片
                      </a-button>
                    </a-col>
                  </a-row>
                </div>
              </div>
          </div>
        </a-layout>
        <!--<a-layout-footer>Footer</a-layout-footer>-->
      </a-layout>
    </div>
  </div>
</template>
<script>
import { NumberUtil } from '@/utils/index'
import domtoimage from 'dom-to-image'

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export default {
  data () {
    return {
      dataArr: [],
      picUrl: require('@/assets/images/index/grass.png'),
      renderUrl: '',
      lightness: 1,
      contastRadio: 1,
      saturation: 1,
      tone: '0',
      picStyle: { 'filter': 'brightness(1) contrast(1)' },
      visibleMenu: false
    }
  },
  computed: {
    isMobile: function () {
      let a = window.innerWidth <= 600
      return window.innerWidth <= 600
    }
  },
  created () {

  },
  methods: {
    adjustStyle (type, sign, num, unit) {
      let result = this[type]
      if (sign === '+') {
        result += num
        this[type] = NumberUtil.floatAdd(this[type], num)
      }
      if (sign === '-') {
        this[type] = NumberUtil.floatSub(this[type], num)
      }
      this.renderStyle()
    },
    showDrawer () {
      this.visibleMenu = true
    },
    onClose () {
      this.visibleMenu = false
    },
    createImage () {
      let node = document.getElementById('renderImg')
      let that = this
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          that.renderUrl = dataUrl
          // 将图片下载到本地
          let a = document.createElement('a') // 生成一个a元素
          let event = new MouseEvent('click') // 创建一个单击事件
          a.download = name || '截图名称' // 设置图片名称没有设置则为默认
          a.href = that.renderUrl // 将生成的URL设置为a.href属性
          a.dispatchEvent(event) // 触发a的单击事件
        })
        .catch(function (error) {
          console.error('生成失败', error)
        })
    },
    renderStyle () {
      let lightness = this.lightness
      let contrast = this.contastRadio
      let saturate = this.saturation
      let hueRotate = this.tone
      let filterStyle = `brightness(${lightness}) contrast(${contrast}) saturate(${saturate}) hue-rotate(${hueRotate}deg)`
      this.$set(this.picStyle, 'filter', filterStyle)
    },
    resetStyle () {
      this.lightness = 1
      this.contastRadio = 1
      this.saturation = 1
      this.tone = '0'
      this.renderStyle()
    },
    // 图片处理
    async handleChangeTp (info) {
      this.picUrl = await getBase64(info.file.originFileObj)
    }
  }
}
</script>
<style>
  /*.container img{*/
    /*width: 95%;*/
  /*}*/
  .vam{
    vertical-align: middle;
  }
  .title{
    text-align: center;
    height:20px;
    line-height: 20px;
  }
  .ant-divider-inner-text {
    color: #b0c6da;
  }
  .adjustRow{
    height:50px;
    line-height: 50px;
    border-bottom: 1px solid #2d0707;
  }
  .ant-layout-sider {
    background: #b0c6da;
  }
  .renderEffect{
    width:890px;
    min-height: 560px;
  }
  .originEffect{
    width: 200px;
  }
  /*移动端样式*/
  @media screen and (min-width: 320px) and (max-width: 600px){
    .renderEffect{
      width: 93%;
      min-height: auto;
    }
  }
</style>
