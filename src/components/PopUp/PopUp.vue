<template>
  <div>
    <div>
      <ul class="keyui-nav">
        <li @mouseenter="mouseEnter(0)"  @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==0}">
          <a href="">最新活动</a>
        </li>
        <li @mouseenter="mouseEnter(1)"  @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==1}">
          <a href="">产品</a>
        </li>
        <li @mouseenter="mouseEnter(2)" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==2}">
          <a href="">大数据</a>
        </li>
        <li @mouseenter="mouseEnter(3)" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==3}">
          <a href="">解决方案</a>
        </li>
        <li @mouseenter="mouseEnter(4)" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex==4}">
          <a href="">社区</a>
        </li>
      </ul>
    </div>

  </div>

</template>
<script>
export default {
    data(){
    return {
      itemHoverIndex:null
    }
  },
  methods:{
    mouseEnter(index){
      this.itemHoverIndex=index;
    },
    mouseLeave( ){
      this.itemHoverIndex=null;
    }
  }
}
</script>
<style scoped lang="scss">
 .itemHover{
   border-bottom:3px solid #009E94;
 }
  .keyui-nav{
    display:flex;
    text-align:center;
    width:500px;
    height:40px;
    box-sizing: border-box;
    li{
      width:100%;
      line-height:40px;
      padding:0 10px;
      background:#2F4056;
      list-style: none;
    }
    a{
      color:#fff;
      font-size:14px;
      text-decoration: none;
    }
  }

</style>
