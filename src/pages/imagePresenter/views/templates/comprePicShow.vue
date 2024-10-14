<template>
  <div id="containId">
    <img src="@/assets/images/backIndex/kaien.jpg" @click="handleCancelShowPic(true)" class="bggroundImg">
    <pic-show :picShowVisible="picShowVisible" :picShowList="picShowListNew" @handleCancelShowPic="handleCancelShowPic" :picIndex="picIndex"></pic-show>
  </div>
</template>

<script>
import picShow from '@/pages/imagePresenter/components/picShow/picIndex.vue'

export default {
  name: 'comprePicShow',
  data () {
    return {
      picShowVisible: false,
      picIndex: 0,
      picShowListNew: [],
      compressCount: 0
    }
  },
  components: {
    picShow
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let that = this
      let files = require.context('@/assets/images/imgShowArea/TravelHuangshan', true, /\.jpg$/).keys()
      that.shuffle(files)
      files = files.slice(0,6)
      files.forEach((e) => {
        let pic = require('@/assets/images/imgShowArea/TravelHuangshan' + e.slice(1))
        let temp = {'picUrl':pic}
        that.picShowListNew.push(temp)
      })
      that.picHandle(that.picShowListNew)
    },
    handleCancelShowPic: function (value) {
      this.picShowVisible = value
    },
    shuffle(arr){
      for(let i in arr){
        let random = Math.floor(Math.random()*(+i+1));
        [arr[i],arr[random]] = [arr[random],arr[i]]
      }
    },
    async picHandle(picList){
      let that = this
      let a = picList
      await that.compressPicList(picList,10)
      let b = picList

    },
    testPicHandle(){
      let that = this
      that.compressCount = that.compressCount +1
      if(that.compressCount === 6){
        setTimeout(function () {
          let tem = that.picShowListNew
          that.picShowListNew = tem.map((e) => {
            return e.picUrl
          })
          that.picShowVisible = true
        }, 600)
      }

    },
    compressPicList(list,scale){
      for(let map of list){
        map['picUrlLarge'] = map.picUrl
        let base64 = map.picUrl
        const that = this;
        let _img = new Image();
        _img.src = base64;
        _img.crossOrigin = 'anonymous'
        _img.onload = function() {
          let _canvas = document.createElement("canvas");
          let w = this.width / scale;
          let h = this.height / scale;
          _canvas.setAttribute("width", w);
          _canvas.setAttribute("height", h);
          _canvas.getContext("2d").drawImage(this, 0, 0, w, h);
          let pic = _canvas.toDataURL("image/jpeg");
          // return pic
          map['picUrl'] = pic
          that.testPicHandle()
        }
      }
    },

  }
}
</script>

<style scoped>
  .bggroundImg{
    width:100%;
    height:700px;
  }
</style>
