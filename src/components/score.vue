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
              <div class="TxtLis">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </div>
              <div class="HtmlTxt">   
              </div>
          </div>
          <ScoreTwo></ScoreTwo>
          <div class="site-text">
              <h3 class="code-h3">组件代码</h3>
              <div class="TxtLis">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </div>
              <div class="HtmlTxt">   
              </div>
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
  margin: 80px 20px;
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
    padding:  0 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: -35px;
    left: 25px;
}
.ScoreBase:hover{
    color: #777;
}
.site-text{
    width: 100%;
    /* height: 100%; */
    height: 475px;
    border: 1px solid #e2e2e2;
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
.layui-code{
    margin: 0;
}
.tip{
    font-size: 14px;
    margin: 20px 0;
}
</style>