<template>
  <ul class="keyui-nav">
    <li @mouseenter="mouseEnter(0)"  @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==0}">
      <a href="">最新活动</a>
    </li>
    <li @mouseenter="mouseEnter(1)" @click="goch"  @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==1}">
      <a href="">产品</a>
    </li>
    <li  @mouseenter="mouseEnter(2)"  @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==2}">
      <a href="">大数据</a>
    </li>
    <li  @mouseenter="mouseEnter(3)" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==3}">
      <a href="">解决方案</a>
    </li>
    <li  @mouseenter="mouseEnter(4)" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==4}">
      <a href="">社区</a>
    </li>
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
    goch(){
      this.$router.push('/DocuMent')
    },
    mouseEnter(index){
      this.itemHoverIndex=index;
    },
    mouseLeave( ){
      this.itemHoverIndex=null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.itemHover{
  border-bottom:3px solid #009E94;
}
  .keyui-nav{
    display:flex;
    text-align:center;
    align-items: center;
    width: 100%;
    height: 100%;
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
