<template>
  <div>
    <div>
      <!--左边是一个input输入框，要求只读，而且里面的内容通过url?后面的code传入-->
      <input type="text" value="AJS4EFS" readonly id="textAreas"/>
      <!--右边是一个按钮-->
      <a href="javascript:;" class="cuteShareBtn" id="copy">复制</a>

    </div>
  </div>
</template>

<script>

export default {
  name: "test1",
  props: [],
  data() {
    return {
      state: [],
      markers: [],
      pointLast: null
    };
  },
  mounted() {
    //复制按钮事件绑定
    $("#copy").on("click",function(){
      //获取input对象
      var obj = document.getElementById("textAreas");
      //选择当前对象
      obj.select();
      try{
        //进行复制到剪切板
        if(document.execCommand("Copy","false",null)){
          //如果复制成功
          alert("复制成功！");
        }else{
          //如果复制失败
          alert("复制失败！");
        }
      }catch(err){
        //如果报错
        alert("复制错误！")
      }
    })

  },
  methods: {

  },
  watch: {
  },
}

</script>
