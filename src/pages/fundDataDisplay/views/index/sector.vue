<template>
  <div>
    <!--接口路径：-->
    <!--https://finance.pae.baidu.com/vapi/v2/blocks?pn=0&rn=20&market=ab&typeCode=HY&finClientType=pc-->
    <div>
      <a-divider orientation="right">
        统计时间：{{nowTime}}
      </a-divider>
      <a-divider>行业板块涨跌情况</a-divider>
      <a-table :columns="columns" :data-source="dataArr" @change="onChange" />
    </div>
  </div>
</template>
<script>
import { Utils } from '@/utils/index'

const columns = [
  {
    title: '排名',
    customRender: (text, record, index) => index + 1,
  },
  {
    title: '板块名称',
    dataIndex: 'name',
  },
  {
    title: '板块涨跌幅',
    dataIndex: 'ratioV',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.ratioR*a.ratioDWCoef - b.ratioR*b.ratioDWCoef,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '行业股票总数',
    dataIndex: 'memberCount',
  },
  {
    title: '上涨股票数量',
    dataIndex: 'riseCount',
  },
  {
    title: '下跌股票数量',
    dataIndex: 'fallCount',
  },
  {
    title: '领涨股',
    dataIndex: 'nameRise',
  },
  {
    title: '领涨股涨跌幅',
    dataIndex: 'ratioVRise'
  },
];

export default {
  data() {
    return {
      dataArr: [],
      columns,
      nowTime: null,
      dataTest: null
    };
  },
  created(){
    this.initData()
  },
  methods: {
    onChange: function (pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter);
    },
    initData(){
      let json = require("@/assets/json/fundData/sector.json")
      let result = json.Result.blocks
      this.dataArr = result
      this.dataArr = this.dataArr.slice(0,20)
      this.dataArr.map((e,index)=>{
        let son = e.rise_first[0]
        e.ratioVRise = son.ratio.value
        e.nameRise = son.name
        if(e.ratio.value.indexOf("-")>-1){
          e.ratioDWCoef='-1.0'
          e.ratioR = e.ratio.value.replace("-","").replace('%','')
        }else{
          e.ratioDWCoef='1.0'
          e.ratioR = e.ratio.value.replace("+","").replace('%','')
        }
        e.ratioV = e.ratio.value
        e.key= index
      })
      // 当前时间
      let d = new Date()
      this.nowTime = Utils.formatDate(d, 'yyyy-MM-dd hh:mm:ss')
    },
  },
};
</script>
