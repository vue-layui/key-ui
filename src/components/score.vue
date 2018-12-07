<template>
    <div class="ScoreBox">
        <div class="ScoreTitle">评分组件文档</div>
        <p class="ScoreTxt">评分组件在电商和 O2O 平台尤为常见，一般用于对商家进行服务满意度评价。其对应的自定义内容功能，可让它有更多的发挥空间。</p>
          <div class="ScoreLine">
              <p class="ScoreBase">使用</p>
          </div>
          <ScoreOne></ScoreOne>
          <div class="site-text">
              <h3 class="code-h3">组件代码</h3>
              <textarea name="" class="KeyUiNavCode" readonly>
                   <template>
                             <div id="AppScore" class="row">
                                  <div class="form-group clearfix">
                                      <!-- <label class="control-label col-md-4">评分:{{starNum}}星</label> -->
                                      <div class="col-md-8">
                                          <div class="grade-box">
                                              <img v-for="(star,index) in stars" :src="star.src" @click="rating(index)" alt="星星图片" :key='index'/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </template>

                            <script>
                            export default {
                                name: 'ScoreOne',
                                data(){
                                    return {
                                        stars: [
                                            {
                                                src: "../../static/img/off.png",
                                                active: false
                                            },
                                            {
                                                src: "../../static/img/off.png",
                                                active: false
                                            },
                                            {
                                                src: "../../static/img/off.png",
                                                active: false
                                            },
                                            {
                                                src: "../../static/img/off.png",
                                                active: false
                                            },
                                            {
                                                src: "../../static/img/off.png",
                                                active: false
                                            }
                                        ],
                                        starNum: 0,
                                    }
                                },
                                methods: {
                                    //评分
                                    rating: function(index) {
                                        var total = this.stars.length; //星星总数
                                        var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量
                                        //进入if说明页面为初始状态
                                        if(this.starNum == 0) {
                                            this.starNum = idx;
                                            for(var i = 0; i < idx; i++) {
                                                this.stars[i].src = "../../static/img/on.png";
                                                this.stars[i].active = true;
                                            }
                                        } else {
                                            //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                                            if(idx == this.starNum) {
                                                for(var i = index; i < total; i++) {
                                                    this.stars[i].src = "../../static/img/off.png";
                                                    this.stars[i].active = false;
                                                }
                                            }
                                            //如果小于当前最高星级，则直接保留当前星级
                                            if(idx < this.starNum) {
                                                for(var i = idx; i < this.starNum; i++) {
                                                    this.stars[i].src = "../../static/img/off.png";
                                                    this.stars[i].active = false;
                                                }
                                            }
                                            //如果大于当前星级，则直接选到该星级
                                            if(idx > this.starNum) {
                                                for(var i = 0; i < idx; i++) {
                                                    this.stars[i].src = "../../static/img/on.png";
                                                    this.stars[i].active = true;
                                                }
                                            }
                                            var count = 0; //计数器-统计当前有几颗星
                                            for(var i = 0; i < total; i++) {
                                                if(this.stars[i].active) {
                                                    count++;
                                                }
                                            }
                                            this.starNum = count;
                                        }
                                    },
                                }
                            }
                            </script>

                                              <!-- Add "scoped" attribute to limit CSS to this component only -->
                            <style scoped>
                            .grade-box img{
                                width: 50px;
                                height: 50px;
                            }
                            .grade-box{
                                margin: 20px;
                            }
                            .col-md-8{
                                width:100%;
                            }
                            .form-group{
                                width:100%;
                            }
                            .grade-box {
                                width:100%;
                            }

                            </style>

              </textarea>
          </div>
          <ScoreTwo></ScoreTwo>
          <div class="site-text">
              <h3 class="code-h3">组件代码</h3>
              <textarea name=""class="KeyUiNavCode" readonly>

                         <template>
                          <div class="evaStar">
                            <ul class="star">
                              <li v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" @click="stars(index)" track-by="index" :key='index'></li><!--性能优化 track-by 数据不改变时不会重新渲染-->
                            </ul>
                          </div>
                        </template>

                        <script>
                            export default {
                                name: "ScoreTwo",
                                data(){
                                    return{
                                        score: 4,
                                    }
                                },
                                computed:{ //计算属性
                                    itemClasses(){
                                        let result = []; // 返回的是一个数组,用来遍历输出星星
                                        let score = Math.floor(this.score * 2 ) / 2; // 计算所有星星的数量
                                        let hasDecimal = score % 1 !== 0; // 非整数星星判断
                                        let integer = Math.floor(score); // 整数星星判断
                                        for(let i=0;i<integer;i++){ // 整数星星使用on
                                            result.push("on"); // 一个整数星星就push一个CLS_ON到数组
                                        }
                                        if(hasDecimal){ // 非整数星星使用half
                                            result.push("half"); // 类似

                                        }
                                        while(result.length < 5){// 余下的用无星星补全,使用off
                                            result.push("off");
                                        }
                                        return result;
                                    }
                                },
                                methods:{
                                    stars:function(index){
                                        this.score = index + 1
                                    }
                                }
                            }
                        </script>

                        <style scoped>
                          .evaStar{
                              margin: 20px;
                          }
                          .star-item{
                              display: inline-block;
                              background-repeat: no-repeat;
                              width: 30px;
                              height: 30px;
                              background-size: 100%;
                          }
                          .star-item.on{
                              background-image: url(../../../static/img/shineon.png);
                          }
                          .star-item.off{
                              background-image: url(../../../static/img/shineoff.png);
                          }
                        </style>

              </textarea>
          </div>
          <p class="tip">你可以按照实际需求自由设定,完善你的代码</p>
          <div class="ScoreLine">
            <p class="ScoreBase">结语</p>
          </div>
          <p class="tip">评分组件非常简单，重点在于参数选项的设置，你可以前往示例页面进行更为直观的了解。</p>
          <p class="ScoreTxt">keyui - 用心与你沟通</p>
    </div>
</template>

<script>
    import ScoreOne from '../components/score/ScoreOne.vue'
    import ScoreTwo from '../components/score/ScoreTwo.vue'
    
    export default {
      components: {
        ScoreOne,
        ScoreTwo
      },
    }
</script>

<style scoped>
.ScoreBox{
  margin: 80px 20px 80px 230px;
  float: left;
}
.ScoreTitle{
    font-size: 27px;
    color: #393d49;
    line-height: 52px;
    border-bottom: 1px solid #eeeeee;
}
.ScoreTxt{
    font-size: 14px;
    background: #f2f2f2;
    padding: 20px;
    border-left: 5px solid #009688;
}
.ScoreLine{
    border-bottom: 1px solid #eeeeee;
    position: relative;
    margin-top: 28px;
}
.ScoreBase{
    color: #333;
    font-size: 20px;
    padding:0 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: -10px;
    left: 25px;
}
.ScoreBase:hover{
    color: #777;
}
.site-text{
    width: 100%;
    height: 475px;
    border: 1px solid #e2e2e2;
    margin-top:50px;
    margin-bottom:80px;
}
.code-h3 {
    color: #333333;
    font-size: 12px;
    padding: 0 10px;
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #e2e2e2;
    border-left: 5px solid #e2e2e2;
    background: #fafafa;
    margin: 0;
}
.TxtLis{
    width: 50px;
    background: #fafafa;
    margin: 0;
    float: left;
}
.TxtLis li{
    list-style: decimal;
    text-align: center;
    color: #333333;
    font-size: 12px;
    line-height: 22px;
    border-left: 5px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
}
.tip{
    font-size: 14px;
    margin: 20px 0;
}
.KeyUiNavCode{
    width:100%;
    height:500px;
    background: #f0f0f0;
    border:0;
    resize:none;
}

</style>
