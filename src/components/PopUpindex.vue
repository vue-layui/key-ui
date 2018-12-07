<template>
    <div>
        <div class="KeyNav">
            <p class="KeyuiNavTit">导航相关-页面元素</p>
            <hr class="KeyHr"/>
            <div class="KeyUiP">
                导航一般指页面引导性频道集合，多以菜单的形式呈现，可应用于头部和侧边，是整个网页画龙点晴般的存在。
                千万不要忘了加载 element模块。虽然大部分行为都是在加载完该模块后自动完成的，但一些交互操作，
                如呼出二级菜单等，需借助element模块才能使用。
            </div>
            <h5>水平导航——下划线移动</h5>
            <pop></pop>
            <div class="KeyUiNavCode">
                <p>组件代码</p>
                <textarea name="" readonly >

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


                </textarea>
            </div>
            <h5>水平导航——下划线变化</h5>
            <underlineChange style="background: #2F4056;width:500px"></underlineChange>

            <div class="KeyUiNavCode">
                <p>组件代码</p>
                <textarea name="" readonly >

                       <template>
                            <div>
                                <ul class="keyui-nav">
                                    <li>最新活动</li>
                                    <li>产品</li>
                                    <li>大数据</li>
                                    <li>解决方案</li>
                                    <li>社区</li>
                                </ul>
                            </div>
                        </template>

                        <script>
                            export default {
                                name: "underlineChange"
                            }
                        </script>

                        <style lang="scss" scoped>
                            .keyui-nav{
                                width:500px;
                                height:40px;
                                display:flex;
                                justify-content: space-around;
                                li{
                                    height:37px;
                                    line-height:40px;
                                    list-style: none;
                                    color:#fff;
                                    position:relative;
                                    &:after {
                                        content: "";
                                        width: 0;
                                        height: 3px;
                                        background: #009E94;
                                        position: absolute;
                                        top: 100%;
                                        left: 50%;
                                        transition: all .4s;
                                    }  &:hover:after {
                                           left: 0;
                                           width: 100%;
                                       }
                                }
                            }
                        </style>


                </textarea>
            </div>
            <h5>当然你可以根据自己的心情更改导航主题颜色</h5>
            <underlineChange style="background: #2f4056;width:500px;margin-top:20px;"></underlineChange>
            <underlineChange style="background: #b21eff;width:500px;margin-top:20px;"></underlineChange>
            <underlineChange style="background: #1e9fff;width:500px;margin-top:20px;margin-bottom:30px;"></underlineChange>
            <div class="KeyUiP">
                Keyui用心与你沟通
            </div>
            <keyUiLogo></keyUiLogo>
        </div>
        <div class="CarMobile">
            <span>~案例展示~</span>
            <img src="../../static/img/daohang.gif" alt=""/>
        </div>
    </div>

</template>


<script>
  import pop from './PopUp/PopUp'
  import underlineChange from './PopUp/underlineChange'
  import keyUiLogo from '../components/common/keyUiLogo'
    export default {
      name: "PopUpindex",
      components:{
          pop,
          underlineChange,
          keyUiLogo
      }
    }
</script>

<style  lang="scss" scoped>
  .KeyNav{
    width:50%;
    margin-top:70px;
    float:left;
    margin-left:230px;
    padding-right:20px;
    box-sizing: border-box;
    .KeyuiNavTit{
      font-size:30px;
    }
    .KeyHr{
      margin-top:10px;
      margin-bottom:20px;
    }
    .KeyUiP{
      width:96%;
      padding:10px 20px;
      background:#f2f2f2;
      border-left:4px solid #009688;
      font-size:16px;
      border-radius: 3px;
    }
    h5{
      font-size:20px;
      line-height:60px;
      color:#2F4056;
    }
  }
  .KeyUiNavCode{
      width:90%;
      border:1px solid #ccc;
      margin-top:10px;
      p{
          width:100%;
          padding-left:10px;
          background:#f2f2f2;
          height:30px;
          line-height:30px;
          color:#737383;
          font-size:16px;
          box-sizing: border-box;
          border-bottom:1px solid #ccc;
      }
      textarea{
          width:100%;
          height:500px;
          background: #f0f0f0;
          border:0;
          resize:none;
      }
  }



  .NavCodeimg{
      width:95%;
      img{
          width:100%;
          margin:0;
          padding:0;
      }
  }
</style>
