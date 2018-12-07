<template>
  <div>
    <div class="nav1">
      <ul class="key_left_ul">
          <li class="key_li" @click="goelement()">
            <a class="key_a">
              <i class="iconfont icon-yuansu"></i>
              <span>基本元素</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
            <li class="key_li" @click="goto()">
              <a class="key_a">
                <i class="iconfont icon-anniu"></i>
                <span>按钮</span>
                <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
              </a>
            </li>
          <li class="key_li" @click="goha()">
            <a class="key_a">
              <i class="iconfont icon-iconfontwuyuandaohang"></i>
              <span>导航</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="goda">
            <a class="key_a">
              <i class="iconfont icon-biaodan"></i>
              <span>表单</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="gobl">
            <a class="key_a">
              <i class="iconfont icon-biaoge"></i>
              <span>表格</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="gofe">
            <a class="key_a">
              <i class="iconfont icon-fenye"></i>
              <span>分页</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="gosc">
            <a class="key_a">
              <i class="iconfont icon-pingfen"></i>
              <span>评分</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="golo">
            <a class="key_a">
              <i class="iconfont icon-jiazai"></i>
              <span>加载</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="goca">
            <a class="key_a">
              <i class="iconfont icon-danchukuang"></i>
              <span>弹出框</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="golun">
            <a class="key_a">
              <i class="iconfont icon-lunbotu"></i>
              <span>轮播图</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="gocar">
            <a class="key_a">
              <i class="iconfont icon-qicheqianlian-"></i>
              <span>购物车</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
          <li class="key_li" @click="xugo">
            <a class="key_a">
              <i class="iconfont icon-bk-tab"></i>
              <span>选项卡</span>
              <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
            </a>
          </li>
        <li class="key_li" >
          <a class="key_a">
            <i class="iconfont icon-kaifagongju"></i>
            <span>数据展示</span>
            <i class="iconfont icon-yousanjiaoxiangyoumianxing key_right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DocumentLeft",
      data(){
          return {
              HoverIndex:null
          }
      },
      mounted(){
         $(".key_li").click(function(){
             $(this).css({"background":"#009688"});
             $(this).siblings().css({"background":"#282c35"});
             $(this).find(".key_right").css({"display":"block"});
             $(this).siblings().find(".key_right").css({"display":"none"})
         })
      },
    methods: {
        goelement(){
            this.$router.push('/DocuMent/DocumentRight')
        },
       goto(){
         this.$router.push('/DocuMent/ButtOn')
       },
       xugo(){
         this.$router.push('/DocuMent/Tab')
       },
       golun(){
         this.$router.push('/DocuMent/RotaTion')
       },
       gobl(){
         this.$router.push('/DocuMent/Table')
       },
       gosc(){
         this.$router.push('/DocuMent/Score')
       },
       goda(){
         this.$router.push('/DocuMent/Biaodan')
       },
       gofe(){
         this.$router.push('/DocuMent/WebPaging')
       },
       goha(){
         this.$router.push('/DocuMent/PopUpindex')
       },
       golo(){
        this.$router.push('/DocuMent/LoadIng')
       },
       gocar(){
         this.$router.push('/DocuMent/Car')
       },
       goca(){
         this.$router.push('/Document/AlertIndex')
       }
    }
  }
</script>

<style lang="scss" scoped>
  .nav1{
    margin-top: 60px;
    width: 200px;
    height: 100%;
    float: left;
    position: fixed;
    left: 0;
  }

  .key_left_ul {
    height: 100%;
    display: block;
    padding: 0;
  }

  .key_left_ul ul {
    width: 100%;
    padding-left: 0;
  }

  .nav1 li {
    list-style: none;
    height: 45px;
    margin: 0 auto;
    background:#282c35;
  }

  .nav1 a{
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    height: 45px;
    line-height: 45px;
  }
 .key_li{
   width:100%;
   height:100%;
 }
 .key_a{
   width:100%;
   height:100%;
 }
  .key_a i:nth-child(1) {
    padding-left: 10px;
    padding-right: 10px;
  }

  .key_li a i:nth-child(1) {
    padding-left: 10px;
    padding-right: 10px;
  }

  .key_right {
    float: right;
    font-size: 12px;
    padding-right: 10px;
    display:none;
  }
</style>
