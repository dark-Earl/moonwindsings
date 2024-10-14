<template>
  <div>
    <div class="mt30 lineStyle">
      <div>
        <span class="fl">目标地址：</span>
        <div class="tc">
          <a-input size="large"  v-model="targetUrl" ref="targetUrl" style="width: 380px" />
        </div>
        <span class="fl">目标标题：</span>
        <div class="tc">
          <a-input size="large"  v-model="targetTitle" ref="targetTitle" style="width: 380px" />
        </div>

        <div class="mt30 tc">
          <a-button size="large" @click="getQRCode">生成二维码</a-button>
        </div>
      </div>
    </div>

    <div class="mt70 tc">
      <p class="flashlight title">{{title}}</p>
    </div>
    <div class="containDiv">
      <div class="container">
        <canvas id="QRCode_header" style="width: 280px; height: 280px"></canvas>
        <div>
          <img src="@/assets/images/logo/kaien.jpg"   class="logoMine">
        </div>
      </div>
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
      title: ''
    };
  },
  watch: {},
  mounted() {
    // this.getQRCode();
  },
  created() {},
  methods: {
    getQRCode() {
      //生成的二维码为URL地址js
      this.qrUrl= this.targetUrl;
      this.title = this.targetTitle
      let opts = {
        errorCorrectionLevel: "H", //容错级别
        type: "image/png", //生成的二维码类型
        quality: 0.3, //二维码质量
        margin: 0, //二维码留白边距
        width: 280, //宽
        height: 280, //高
        text: this.targetUrl, //二维码内容
        color: {
          dark: "#9776a4", //前景色
          light: "#fff", //背景色
        },
      };

      let msg = document.getElementById("QRCode_header");
      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg, this.qrUrl, opts, function (error) {
        if (error) {
          console.log("二维码加载失败", error);
          this.$message.error("二维码加载失败");
        }
      });
    },
  },
};
</script>

<style>
  .container{
    text-align: center;
    height:340px;
    line-height: 340px;
    margin: 30px;
  }
  .logoMine{
    width: 66px;
    height: 66px;
    position: absolute;
    z-index: 9;
    margin: -337px 0 0 -28px;
  }
  .mt70{
    margin-top: 70px !important;
  }
  .title{
    font-size: x-large;
  }
  /*闪光文字*/
  .flashlight{
    background-image: -webkit-linear-gradient(66deg, purple 0%, blue 20%, yellow 40%,green 60%, orange 80%,red 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-animation: hue 8s infinite linear;
  }

  @keyframes hue{
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
</style>
