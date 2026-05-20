<template>
  <div>
    <div class="mt30 lineStyle">
      <p>请输入最大数</p>
      <a-input type="text" v-model="inputText" style="width:800px;"/>
      <button @click="search">随机</button>
      <a-textarea class="height55" type="text" v-model="inputTextJG" style="width:800px;" ></a-textarea>

      <p>请输入所有待随机元素(用逗号或封号间隔)</p>
      <a-textarea class="height55" type="text" id="inputTextAll" v-model="inputTextAll" style="width:800px;"></a-textarea>
      <button @click="searchCommon">随机</button>
      <a-textarea class="height55" type="text" v-model="inputTextAllJG" style="width:800px;" ></a-textarea>

      <p>淘宝限定</p>
      <a-textarea class="height55" type="text" v-model="inputTextAllTB" style="width:800px;"></a-textarea>
      <button @click="searchTB">随机</button>
      <a-textarea class="height55" type="text" v-model="inputTextAllTBJG" style="width:800px;" ></a-textarea>


      <p>百度限定</p>
      <a-textarea class="height55" type="text" v-model="inputTextAllBD" style="width:800px;"></a-textarea>
      <button @click="searchBD">随机</button>
      <a-textarea class="height55" type="text" v-model="inputTextAllBDJG" style="width:800px;" ></a-textarea>
    </div>

  </div>
</template>

<script>
  import QRCode from "qrcode"; //引入生成二维码插件
  export default {
    props: [""],
    data() {
      return {
        qrUrl: location.href,
        targetUrl: '',
        targetTitle: '',
        title: '',
        inputText: '',
        inputTextJG: '',
        inputTextAll: '',
        inputTextAllJG: '',
        inputTextAllTB: '彩妆卡、药品卡、运动卡、农具卡、书籍卡、办公卡、护肤卡、文玩卡、家居卡、食品卡、潮玩卡、饮料卡、母婴卡、箱包卡、宠物卡、五金卡、户外卡、植物卡、数码卡、厨具卡、床品卡、出行卡、灯具卡、鞋履卡、洗护卡、节庆卡、茶香卡、美发卡、餐具卡、配饰卡、服饰卡、乐器卡、家电卡、美酒卡、建材卡、健康卡、家具卡、生鲜卡、童装卡、厨电卡',
        inputTextAllTBJG: '',
        inputTextAllBD: '北京市，天津市，上海市，重庆市，河北省，山西省，辽宁省，吉林省，黑龙江省，江苏省，浙江省，安徽省，福建省，江西省，山东省，河南省，湖北省，湖南省，广东省，海南省，四川省，贵州省，云南省，陕西省，甘肃省，青海省，台湾省，内蒙古自治区，广西壮族自治区，西藏自治区，宁夏回族自治区，新疆维吾尔自治区，香港特别行政区，澳门特别行政区',
        inputTextAllBDJG: '',

      };
    },
    watch: {},
    mounted() {
      // this.getQRCode();
    },
    created() {
    },
    methods: {
      shuffleInPlace(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
        }
        return arr; // 返回修改后的原数组
      },
      search() {
        var total = this.inputText;
        const arr = [...Array(parseInt(total)).keys()].map(i => i + 1);
        var result = this.shuffleInPlace(arr)
        this.inputTextJG = result;
      },
      searchAll(str) {
        str = str.replace(/，/g, ",").replace(/、/g, ",")
        const arr = str.split(",")
        var result = this.shuffleInPlace(arr)
        return result
      },
      searchCommon() {
        var result = this.searchAll(this.inputTextAll)
        this.inputTextAllJG = result
      },
      searchTB() {
        var result = this.searchAll(this.inputTextAllTB)
        this.inputTextAllTBJG = result
      },
      searchBD() {
        var result = this.searchAll(this.inputTextAllBD)
        this.inputTextAllBDJG = result
      }
    },
  };
</script>

<style>
  .container {
    text-align: center;
    height: 340px;
    line-height: 340px;
    margin: 30px;
  }

  .logoMine {
    width: 66px;
    height: 66px;
    position: absolute;
    z-index: 9;
    margin: -337px 0 0 -28px;
  }

  .mt70 {
    margin-top: 70px !important;
  }

  .title {
    font-size: x-large;
  }

  /*闪光文字*/
  .flashlight {
    background-image: -webkit-linear-gradient(66deg, purple 0%, blue 20%, yellow 40%, green 60%, orange 80%, red 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-animation: hue 8s infinite linear;
  }

  @keyframes hue {
    0% {
      background-position: 100% 0;
    }

    25% {
      background-position: 50% 0;
    }

    50% {
      background-position: -0 0;
    }

    75% {
      background-position: -50% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }
  .lineStyle .height55{
    height: 95px;
  }
  .lineStyle{
    line-height: 90px;
    margin: 10px;
  }
  .lineStyle p{
    line-height: 10px;
  }
</style>
