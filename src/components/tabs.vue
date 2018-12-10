<template>
  <div class="tabs">
    <div class="toptitle">Tab选项卡 - 页面元素</div>
    <div class="introduction"><p>导航菜单可应用于头部和侧边，Tab选项卡提供多套风格，支持响应式，支持删除选项卡等功能。面包屑结构简单，支持自定义分隔符。</p></div>
    <div class="introduction introduction2"><p>依赖加载组件：无 （直接引用子组件，修改其样式即可）</p></div>
    <div class="tabsA">
      <p>Tab卡片风格</p>
      <p>Tab广泛应用于Web页面，因此我们也对其进行了良好的支持。keyui内置多种Tab风格。
        这是一个最基本的例子：</p>
    </div>
    <tabs1></tabs1>
    <div class="tabsA">
      <p>Tab自由添加功能</p>
      <p>Tab广泛应用于Web页面，因此我们也对其进行了良好的支持。keyui内置多种Tab风格.
        此选项卡可对标题和内容进行增加功能。</p>
    </div>
    <tabs2></tabs2>
    <div class="tabsA">
      <p>Tab卡片风格二</p>
      <p>Tab广泛应用于Web页面，因此我们也对其进行了良好的支持。keyui内置多种Tab风格。
        这是一个最基本的例子：</p>
    </div>
    <tabs3></tabs3>
    <div class="tabsA">
      <p>竖形折叠Tab</p>
      <p>Tab广泛应用于Web页面，因此我们也对其进行了良好的支持。keyui内置多种Tab风格。
        这是一个最基本的例子：</p>
    </div>
    <navigation1></navigation1>
    <div class="tabsA tabsB">
      <p>提示</p>
      <p>无论是导航、还是Tab，大部分行为都是在加载完该模块后自动完成的，但一些交互操作，如Tab事件监听等，需按照场景选择性使用。</p>
    </div>
    <div class="introduction introduction2 introduction3">
      <p>keyui - 遇见世界遇见你</p>
    </div>
  </div>
</template>

<script>

    import Tabs1 from "../components/Tabs/tabs1";
    import Tabs2 from "../components/Tabs/tabs00";
    import Tabs3 from "../components/Tabs/tabs3";
    import navigation1 from "../components/Tabs/navigation1";
    export default {
        name: "tabs",
      components: {Tabs3, Tabs2, Tabs1,navigation1,}
    }
</script>

<style scoped>
  .tabs{
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
    line-height: 52px;
  }
  .introduction2{
    margin-top: 10px;
  }
  .introduction p{
    margin-left: 14px;
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
