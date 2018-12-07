<template>
  <ul class="keyui-nav">
    <li @mouseenter="mouseEnter(0)"  @click="goindex" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==0}">
      <a >首页</a>
    </li>
    <li @mouseenter="mouseEnter(1)" @click="goch"  @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==1}">
      <a >基本框架</a>
    </li>
    <li  @mouseenter="mouseEnter(2)"  @click="goteam" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==2}">
      <a >关于我们</a>
    </li>
    <li  @mouseenter="mouseEnter(3)" @click="goBigData"  @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==3}">
      <a >数据展示</a>
    </li>
    <!--<li  @mouseenter="mouseEnter(4)" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==4}">-->
      <!--<a href="">社区</a>-->
    <!--</li>-->
  </ul>
</template>

<script>
export default {
    data(){
    return {
      itemHoverIndex:null
    }
  },
  methods:{
      goindex(){
          this.$router.push('/')
      },
    goch(){
      this.$router.push('DocuMent')
    },
      goteam(){
          this.$router.push('team')
      },
      goBigData(){
          this.$router.push('BigData')
      },
    mouseEnter(index){
      this.itemHoverIndex=index;
    },
    mouseLeave(){
      this.itemHoverIndex=null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
.itemHover{
  border-bottom:3px solid #009E94;
}
  .keyui-nav{
    display:flex;
    text-align:center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left:100px;
    li{
      width:100px;
      height:100%;
      line-height: 60px;
      padding:0 10px;
      box-sizing: border-box;
      list-style:none;
    }
    a{
      font-size:14px;
      color:#fff;
      text-decoration: none;
    }
  }


</style>
