<template>
  <div>
    <a-input type="textarea" v-model="strTest"></a-input>
    <a-button type="primary" @click="testFunc">
      函数测试-小说
    </a-button>
    <br/>
    <a-input type="textarea" v-model="pkCount">片段个数</a-input>
    <a-button type="primary" @click="testFuncPK">
      函数测试-跑酷
    </a-button>
  </div>
</template>

<script>
import {cxStatisticalData} from '@/api/home/home'

export default {
  name: "interfaceTestOld",
  components: {
  },
  data() {
    return {
      contents: '',
      dataTest: [],
      strTest: '',
      pkCount: 51
    };
  },
  created() {

  },
  methods: {
    testFunc() {
      let str = this.strTest
      // 换行方式：
      // let str0 = str.replace(/<\/p>/g,'\n');
      // let str0 = str.replace(/<br>/g,'\n');
      let str0 = str.replace(/\n\n/g,'\n');
      // 过滤html格式
      let str1 = str0.replace(/<[^<>]+>/g,'');
      let str2 = str1.replace(/[0-9]+.\n/g,'\n');
      let str3 = str2.replace(/[0-9]+\n/g,'\n');
      console.log(str3)
    },
    testFuncPK() {
      let count = this.pkCount
      let arr = [];
      for(let i=1;i<count+1;i++){
        arr.push(i)
      }
      this.shuffle(arr)
      let result = arr.join(';')
      console.log(result)
    },
    shuffle(arr){
      for(let i in arr){
        let random = Math.floor(Math.random()*(+i+1));
        [arr[i],arr[random]] = [arr[random],arr[i]]
      }
    }
  }
}
</script>
