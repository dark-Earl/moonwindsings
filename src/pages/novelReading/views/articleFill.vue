<template>
  <div>
    <div class="bgDiv">
      <div>
        <span class="fl">请输入文章段落：</span>
        <a-input  v-model="passages" ref="passages" type="textarea" class="article"/>
      </div>
      <div>
        <a-button @click="fillBlank" class="butStyle" >填充空格</a-button>
        <a-button @click="clearContent" class="butStyle">清空内容</a-button>
      </div>
      <div>
        <span class="fl">效果展示：</span>
        <a-input v-model="resultSHow" type="textarea" class="article"/>

        <div class="ysz">早上好</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      passages: '',
      resultSHow: '',
      blankNumberRatio: 5,
      randArr: []
    }
  },
  created () {
  },
  methods: {
    clearContent () {
      this.passages = ''
    },
    fillBlank () {
      let str = this.passages
      let charArr = str.split('')
      let len = charArr.length
      let blankNumber = Math.ceil(len / this.blankNumberRatio)
      for (let i = 0; i < blankNumber; i++) {
        let random = Math.floor(Math.random() * len)
        this.randArr.push(charArr, random)
        this.fillRules(charArr, random)
      }
      let result = charArr.join('')
      this.resultSHow = result
    },
    fillRules (arr, random) {
      let target = random
      let regPos = /^\d|\.|，|。|、| |是|\n|：|—|（|）/
      if (regPos.test(arr.at(random))) {
        target += 1
        if (target < arr.length) {
          this.fillRules(arr, target)
        }
      } else {
        arr.splice(random, 1, '__')
      }
    },
    test(){
      const style = 'background-image: linear-gradient(red,orange,yellow,green,cyan,blue,purple);\n' +
        '    -webkit-background-clip: text;\n' +
        '    -webkit-text-fill-color: transparent;'
      const text = ' ____   ___ ____  _  _   \n' +
        '|___ \\ / _ \\___ \\| || |  \n' +
        '  __) | | | |__) | || |_ \n' +
        ' / __/| |_| / __/|__   _|\n' +
        '|_____|\\___/_____|  |_|  \n' +
        '                         ';

      console.log(`%c${text}`,style);
    }
  }
}
</script>
<style scoped>
  .article{
    height: 300px;
  }
  .butStyle{
    margin: 10px;
  }
  .ysz{
    background-image: linear-gradient(red,orange,yellow,green,cyan,blue,purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
