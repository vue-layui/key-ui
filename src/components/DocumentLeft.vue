<template>
    <div>
      <div class="nav">
        <ul class="key_left_ul">
          <li class="key_left_li">
            <a href="" class="key_a">
              <i class="iconfont icon-kaifagongju"></i>
              <span>开发工具</span>
            </a>
          </li>
          <li class="key_left_li click_ul_2">
            <a class="key_a">
              <i class="iconfont icon-yuansu"></i>
              <span>基本元素</span>
            </a>
          </li>

          <ul>
            <li class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-anniu"></i>
                <span>按钮</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-iconfontwuyuandaohang"></i>
                <span>导航</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-biaodan"></i>
                <span>表单</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-biaoge"></i>
                <span>表格</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-fenye"></i>
                <span>分页</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mousemove="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-pingfen"></i>
                <span>评分</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-jiazai"></i>
                <span>加载</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-danchukuang"></i>
                <span>弹出框</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-lunbotu"></i>
                <span>轮播图</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-qicheqianlian-"></i>
                <span>购物车</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
            <li  class="key_li" @mouseover="hover($event)" @mouseout="over($event)">
              <a href="">
                <i class="iconfont icon-bk-tab"></i>
                <span>选项卡</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
          </ul>


          <li class="key_left_li">
            <a href="" class="key_a">
              <i class="iconfont icon-guanyuwomen"></i>
              <span>关于我们</span>
            </a>
          </li>


        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DocumentLeft",
        methods:{
          hover(e){
            e.currentTarget.style.background = 'green'
          },
          over(e){
            e.currentTarget.style.background = '#282c35'
          }
        }
    }
</script>

<style lang="scss" scoped>
  .nav{
    margin-top: 60px;
    width:200px;
    height:100%;
    float: left;
  }
  .key_left_ul{
    height:100%;
    display:block;
    padding:0;
  }
  .key_left_ul ul{
    width:100%;
    padding-left:0;
  }
  .nav li{
    list-style: none;
    height:45px;
    margin:0 auto;
    background:#282c35;
  }
  .nav a{
    text-decoration: none;
    color:#fff;
    font-size:16px;
    height:45px;
    line-height:45px;
  }
  .key_a i:nth-child(1){
    padding-left:10px;
    padding-right:10px;
  }
  .key_li a i:nth-child(1){
    padding-left:10px;
    padding-right:10px;
  }
  .key_right{
    float:right;
    font-size:12px;
    padding-right:10px;
    display:none;
  }
</style>
