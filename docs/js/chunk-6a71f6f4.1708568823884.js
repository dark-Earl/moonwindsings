(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a71f6f4"],{"07e3a":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"mainContain"},[a("div",{staticClass:"mainstay",attrs:{id:"mainstay"}},[a("ul",{},t._l(t.dataArr,(function(i,e){return a("li",{key:i.title},[a("div",{staticClass:"order"},[t._v("\n            "+t._s(20-e)+"\n          ")]),a("div",{staticClass:"imgDiv"},[a("img",{staticClass:"imgShow",attrs:{src:i.picUrl}})]),a("div",{staticClass:"tc titleDiv"},[a("span",{class:{title:!0,titleSmall:!1,flashlight:!0}},[t._v(t._s(i.title))])]),a("div",{staticClass:"tc singerDiv"},[a("span",{staticClass:"singer"},[t._v(t._s(i.type))]),a("span",{staticClass:"singer"},[t._v(t._s(i.type))])]),a("div",{staticClass:"tc trendDiv"},[a("span",{staticClass:"yellow titleBigger"},[t._v(t._s(i.grade))])])])})),0)])])])},p=[],c=(i("ac6a"),{data:function(){return{dataArr:[],flyArr:[],addTask:null,app:null,clientW:null,clientH:null}},created:function(){this.initData();var t=this;setTimeout((function(){t.loadFireFly()}),5e3)},methods:{initData:function(){var t=i("9509");this.dataArr=t,this.dataArr=this.dataArr.reverse()},loadFireFly:function(){this.addTask=setInterval(this.addItem,400),setInterval(this.move,1e3)},addItem:function(){this.app=this.app||document.getElementById("mainstay"),this.clientW=this.clientW||.7*this.app.offsetWidth,this.clientH=this.clientH||.7*this.app.offsetHeight;var t=document.createElement("div"),a=Math.floor(3*Math.random())+1;t.setAttribute("class","round"+(0==a?"":a)),t.style.position="absolute",t.style.left=5+Math.floor(Math.random()*this.clientW)+"px",t.style.top=5+Math.floor(Math.random()*this.clientH)+"px",this.app.appendChild(t),this.flyArr.push(t),this.flyArr.length>36&&clearInterval(this.addTask)},move:function(){var t=this,a=this.flyArr;a.length>0&&a.forEach((function(a){var i=Math.floor(Math.random()*t.clientW/20)+10,e=a.offsetLeft,p=a.offsetTop,c=Math.floor(Math.random()*i)+10*Math.PI*Math.random(),s=Math.floor(i*Math.cos(c)),m=Math.floor(i*Math.sin(c));e+=5+s,p+=5+m,a.style.left=e+"px",a.style.top=p+"px"}))}}}),s=c,m=(i("ac05"),i("2877")),n=Object(m["a"])(s,e,p,!1,null,null,null);a["default"]=n.exports},1236:function(t,a,i){},9509:function(t){t.exports=JSON.parse('[{"index":"1","title":"Party Animal","grade":"🌟8.9","picUrl":"https://img.tapimg.com/market/images/7d2fc7b2bfa183091baccdda35d72245.png/appicon_m","type":"Steam移植·可爱·搞笑"},{"index":"2","title":"冒险岛","grade":"🌟8.1","picUrl":"https://img.tapimg.com/market/images/d4b3330ae8c6744c2f221842d22afbeb.png/appicon_m","type":"冒险"},{"index":"3","title":"永劫无间手游","grade":"🌟8.3","picUrl":"https://img.tapimg.com/market/images/6a8774fcdcc4bec9969704cde422232d.png/appicon_m","type":"动作·多人联机·吃鸡"},{"index":"4","title":"未来之役","grade":"🌟8.4","picUrl":"https://img.tapimg.com/market/images/1e773b7ec1e07a5040e07e25f60708bb.jpg/appicon_m","type":"射击·动作·竞技"},{"index":"5","title":"方舟生存进化","grade":"🌟7.6","picUrl":"https://img.tapimg.com/market/images/a62e860dac7209059c034befd1bf6126.jpg/appicon_m","type":"生存·恐龙·Steam移植"},{"index":"6","title":"绝区零","grade":"🌟9.1","picUrl":"https://img.tapimg.com/market/images/d287427248d356414571d8283a4bc4e1.png/appicon_m","type":"动作·高画质·ARPG"},{"index":"7","title":"元气骑士前传","grade":"🌟8.8","picUrl":"https://img.tapimg.com/market/images/7626b0a4467a8ed720de6574df499793.png/appicon_m","type":"动作·像素·地牢"},{"index":"8","title":"全面憨憨战争","grade":"🌟9.4","picUrl":"https://img.tapimg.com/market/images/501346ca4110ebc74df303bdab4590a2.png/appicon_m","type":"模拟·策略·战争"},{"index":"9","title":"Woodo","grade":"🌟9.7","picUrl":"https://img.tapimg.com/market/images/00de72415a2a81c84d3cded67fc89747.png/appicon_m","type":"可爱·休闲·积木"},{"index":"10","title":"高能英雄","grade":"🌟7.8","picUrl":"https://img.tapimg.com/market/images/9c88d32038476568a38fb9be9f06934e.png/appicon_m","type":"射击·动作·FPS"},{"index":"11","title":"星之破晓","grade":"🌟5.9","picUrl":"https://img.tapimg.com/market/images/3bc0a07cf07346353410bed4003a8594.jpg/appicon_m","type":"多人联机·大乱斗·动作"},{"index":"12","title":"天道：创造","grade":"🌟8.9","picUrl":"https://img.tapimg.com/market/images/3b3a10ebd89b1bd96513b89f503ffb18.jpg/appicon_m","type":"沙盒·放置·模拟·经营"},{"index":"13","title":"饥荒：新家园","grade":"🌟6.9","picUrl":"https://img.tapimg.com/market/images/fcdd4c0147f3ea35407dc4d5d6711c1e.jpg/appicon_m","type":"生存·多人联机·饥荒"},{"index":"14","title":"符文之路","grade":"🌟9.4","picUrl":"https://img.tapimg.com/market/images/0cf55ce4735bdd48b410024fe001d7a8.jpg/appicon_m","type":"高自由度·沙盒·开放世界"},{"index":"15","title":"小小噩梦","grade":"🌟9.5","picUrl":"https://img.tapimg.com/market/images/296d430e6415df1df082683f6237a7f9.jpg/appicon_m","type":"剧情·恐怖·横版"},{"index":"16","title":"战地手游","grade":"🌟7.0","picUrl":"https://img.tapimg.com/market/images/29b794d9425e661136fc365e74d250c2.jpg/appicon_m","type":"多人联机·动作·射击"},{"index":"17","title":"徒","grade":"🌟8.1","picUrl":"https://img.tapimg.com/market/images/ade5a0c62d2b08e0b3b9b9a301e04906.png/appicon_m","type":"ARPG·动作·角色扮演"},{"index":"18","title":"世上英雄","grade":"🌟9.9","picUrl":"https://img.tapimg.com/market/images/ce61e3a540af8c275594e8d3e1c26898.jpg/appicon_m","type":"叙事·单机·怀旧"},{"index":"19","title":"鹅鸭杀","grade":"🌟8.7","picUrl":"https://img.tapimg.com/market/images/06b7d4ab57a405a9935ca8901850aa09.jpg/appicon_m","type":"休闲·多人联机·狼人杀"},{"index":"20","title":"使命召唤:战区","grade":"🌟8.9","picUrl":"https://img.tapimg.com/market/images/62c3c5106578e8ba360a2cf5a885fe47.png/appicon_m","type":"FPS竞技·射击"}]')},ac05:function(t,a,i){"use strict";i("1236")}}]);