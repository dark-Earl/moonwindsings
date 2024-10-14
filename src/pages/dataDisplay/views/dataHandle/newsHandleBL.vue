<template>

</template>

<script>
export default {
  name: 'newsHandle',
  data () {
    return {
      dataArr: [],
      dataStr: '',
      isInit: false
    }
  },
  created () {
    if(this.isInit){
      this.scrambleData()
    }else{
      this.initData()
    }
  },
  methods: {
    initData () {
      let json = require('@/assets/json/funNews/tempNews.json');
      this.dataArr = json
      this.dataArr = this.dataArr.slice(0, 17)
      let str = ''
      this.dataArr = this.dataArr.map((e, index) => {
        str = str + e.title + '。\n'
      })
      console.log(str)
    },
    scrambleData () {
      let json = require('@/assets/json/funNews/2019news.json');
      this.dataArr = json
      this.suffle(this.dataArr)
      let arr = this.dataArr
      console.log(arr)
    },
    dataHandle () {

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

<style scoped>

</style>
