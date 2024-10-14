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
                  <img :src="picUrl" :style="picStyle">
                </div>
              </div>
              <div>
                <p class="title">原始图片</p>
                <img :src="picUrl">
              </div>
            </div>
          </a-layout-content>
          <a-layout-sider>
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
                      <a-button size="large" class="vam" @click="adjustStyle('lightness','+',0.2,'')">+</a-button>
                      <a-button size="large" class="vam" @click="adjustStyle('lightness','-',0.2,'')">-</a-button>
                  </a-col>
                </a-row>
                <a-row class="adjustRow">
                  <a-col :span="7">
                    对比度
                  </a-col>
                  <a-col :span="17">
                    <a-input size="large" class="vam"  v-model="contastRadio" ref="contastRadio" style="width: 50px" disabled/>
                    <a-button size="large" class="vam" @click="adjustStyle('contastRadio','+',0.2,'')">+</a-button>
                    <a-button size="large" class="vam" @click="adjustStyle('contastRadio','-',0.2,'')">-</a-button>
                  </a-col>
                </a-row>
                <a-row class="adjustRow">
                  <a-col :span="7">
                    饱和度
                  </a-col>
                  <a-col :span="17">
                    <a-input size="large" class="vam"  v-model="saturation" ref="saturation" style="width: 50px" disabled/>
                    <a-button size="large" class="vam" @click="adjustStyle('saturation','+',0.2,'')">+</a-button>
                    <a-button size="large" class="vam" @click="adjustStyle('saturation','-',0.2,'')">-</a-button>
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
              </div>
            </div>
          </a-layout-sider>
        </a-layout>
        <!--<a-layout-footer>Footer</a-layout-footer>-->
      </a-layout>
    </div>
  </div>
</template>
<script>
import {NumberUtil} from '@/utils/index'

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
      picStyle: {'filter': 'brightness(1) contrast(1)'}
    };
  },
  created(){

  },
  methods: {
    adjustStyle(type,sign,num,unit){
      let result = this[type]
      if(sign==='+'){
        result+= num;
        this[type]=NumberUtil.floatAdd(this[type],num);
      }
      if(sign==='-'){
        this[type]=NumberUtil.floatSub(this[type],num);
      }
      this.renderStyle()
    },
    renderStyle(){
      let lightness = this.lightness
      let contrast = this.contastRadio
      let saturate = this.saturation
      let hueRotate = this.tone
      let filterStyle = `brightness(${lightness}) contrast(${contrast}) saturate(${saturate}) hue-rotate(${hueRotate}deg)`
      this.$set(this.picStyle,'filter',filterStyle)
    },
    resetStyle(){
      this.lightness = 1
      this.contastRadio = 1
      this.saturation = 1
      this.tone = '0'
      this.renderStyle()
    },
    // 图片处理
    async handleChangeTp(info) {
      this.picUrl = await getBase64(info.file.originFileObj)
    },
  },
};
</script>
<style>
  .container img{
    width: 95%;
  }
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
</style>
