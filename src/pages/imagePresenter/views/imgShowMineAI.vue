<template>
    <div id="containId">
      <img src="@/assets/images/backIndex/kaien.jpg" @click="handleCancelShowPic(true)" class="bggroundImg">
      <pic-show :picShowVisible="picShowVisible" :picShowList="picShowListNew" @handleCancelShowPic="handleCancelShowPic" :picIndex="picIndex"></pic-show>
    </div>
</template>

<script>
import picShow from '@/pages/imagePresenter/components/picShow/picIndex.vue'

export default {
  name: 'imgShowHuangshanTravel',
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
      let files = require.context('@/assets/images/imgShowArea/imgShowMineAI', true, /\.jpeg$/).keys()
      that.shuffle(files)
      files = files.slice(0,8)
      files.forEach((e) => {
        let pic = require('@/assets/images/imgShowArea/imgShowMineAI' + e.slice(1))
        that.picShowListNew.push(pic)
        setTimeout(function () {
          that.picShowVisible = true
        }, 600)
      })
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
  }
}
</script>

<style scoped>
  .bggroundImg{
    width:100%;
    height:700px;
  }
</style>
