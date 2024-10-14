<template>
  <div>
    <div>
      <div id="indexPage" v-if="picShow">
        <div id="container">
          <div class="topPart">
            <div class="leftTop">
              <img :src="picArrShow[0]" :draggable="true">
            </div>
            <div class="rightTop">
              <img :src="picArrShow[1]">
            </div>
          </div>
          <div class="centerPart">
            <div class="centerLeft">
              <img :src="picArrShow[2]">
            </div>
            <div class="centerRight">
              <img :src="picArrShow[3]">
            </div>
          </div>
          <div class="bottom">
            <img :src="picArrShow[4]">
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
      </a-drawer>
    </div>
  </div>
</template>
<script>
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
      saveUrl: ''
    };
  },
  created(){
    this.initPic()
  },
  methods: {
    initPic(){
      let url = require('@/assets/images/index/grass.png')
      this.picArr = new Array(5).fill(url)
      this.picArrShow = this.picArr
      this.picShow=true
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
    },
    showDrawer() {
      this.visibleMenu = true;
    },
    onClose() {
      this.visibleMenu = false;
    },
  },
};
</script>
<style>
  #indexPage{
    height:840px;
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
  .topPart{
    clip-path: polygon(0 0,100% 0,100% 70%,0 90%);
    height:35%;
  }
  .centerPart{
    clip-path: polygon(0 21%,115% 0,100% 90%,0 70%);
    margin-top: -24%;
    height: 40%;
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
  .bottom{
    margin-top: -25%;
    clip-path: polygon(-10% 0,104% 22%,104% 100%,0 100%);
  }
  .menu{
    position: absolute;
    bottom: 10%;
    left: 10%;
  }

</style>
