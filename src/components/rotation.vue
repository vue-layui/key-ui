<template>
    <div class="rota">
        <div class="toptitle">通用轮播组件文档 - keyui</div>
        <div class="introduction"><p>本轮播主要适用于跑马灯/轮播等交互场景。它并非单纯地为焦点图而生，准确地说，它可以满足任何类型内容的轮播式切换操作，更可以胜任 FullPage （全屏上下轮播）的需求，简洁而不失强劲，灵活而优雅。</p></div>
        <div class="introduction introduction2"><p>依赖加载组件：无 （直接引用子组件，修改其样式即可）</p></div>
        <div class="tabsA">
            <p>左右点击无缝划出轮播</p>
            <p>如下是几个常用的轮播示例，其中背景图是为了区分条目单独加的，在keyui框架中并不会包含。条目区域可以放上文字列表、图片等任意内容：</p>
        </div>
      <rotation1></rotation1>
        <div class="tabsA">
            <p>鼠标悬停无缝划出轮播</p>
            <p>自动轮播示例，其中背景图是为了区分条目单独加的，在keyui框架中并不会包含。条目区域可以放上文字列表、图片等任意内容：</p>
        </div>
      <rotation2></rotation2>
        <div class="tabsA">
            <p>点击翻转轮播</p>
            <p>手动轮播示例，其中背景图是为了区分条目单独加的，在keyui框架中并不会包含。条目区域可以放上文字列表、图片等任意内容：</p>
        </div>
        <transition1></transition1>
        <div class="tabsA">
            <p>上下翻转新闻公告</p>
            <p>自动轮播示例，可以放上文字列表的任意内容：</p>
        </div>
        <notice1></notice1>
        <div class="tabsA tabsB">
            <p>提示</p>
            <p>由于轮播的使用非常简单，所以本篇不做过于详细的讲解，你也可以前往示例页面进行更为直观的了解。需按照场景选择性使用。</p>
        </div>
        <div class="introduction introduction2 introduction3">
           <p>keyui - 遇见世界遇见你</p>
        </div>
    </div>
</template>

<script>
  import rotation1 from  "../components/Rotation/rotation1";
  import rotation2 from  "../components/Rotation/rotation2";
  import transition1 from  "../components/Rotation/transition1";
  import notice1 from  "../components/Rotation/notice1";
    export default {
      name: "rotation",
      components:{
        rotation1,rotation2,transition1,notice1,
      },
    }
</script>

<style scoped>
.rota{
    width: 75%;
    margin-top: 60px;
    float: left;
    margin-left: 230px;
}
.toptitle{
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 27px;
    font-weight: normal;
    border-bottom: 1px solid #eeeeee;
}
.introduction{
    width: 100%;
    height: 52px;
    background: #f2f2f2;
    margin-top: 20px;
    border-left: 5px solid #009688;
    font-size: 14px;
}
.introduction2{
    margin-top: 10px;
}
.introduction p{
    margin-left: 14px;
    padding-top: 10px;
}
.introduction2 p{
    padding-top: 16px;
}
.tabsA{
    margin-top: 50px;
    width: 100%;
    height: 120px;
    border-top:1px solid #eeeeee;
    position: relative;
}
.tabsA p:first-child{
    font-size: 24px;
    position: absolute;
    top: -41px;
    left: 22px;
    background: white;
    padding-left: 10px;
    padding-right: 10px;
}
.tabsA p:first-child:hover{
    color: #9F9F9F;
}
.tabsA p:last-child{
    font-size: 14px;
    line-height: 100px;
}
.tabsB{
    height: 60px;
}
.tabsB p:last-child{
    line-height: 50px;
}
.tabsB p:first-child{
    top: -40px;
}
.introduction3{
    margin-bottom: 30px;
}
</style>
