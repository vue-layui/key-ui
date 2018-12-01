<template>
    <div class="Banner">
      <div class="Cont">
        <i class="layui-icon layui-icon-tree" id="fly"></i><br>
        <p class="Title">新一代模块化前端框架</p>
        <p class="us">由天码行空团队倾心制作，0门槛开箱即用的ui框架</p>
        <a href="http://www.layui.com" class="layui-btn" @click="download">一个可跳转的按钮</a>
        <p>版本：1.0.0 <a href="#">更新日志</a> 访问量：{{}}</p>
        <p>
          <button class="layui-btn">
          <i class="layui-icon layui-icon-star"></i> 添加
          </button>
          <button class="layui-btn">
            <i class="layui-icon layui-icon-star-fill"></i> Fork
          </button>
          <button class="layui-btn">
             码云
          </button>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexConter",
        methods:{
            download(){

            }
        }
    }
</script>

<style lang="scss" scoped>
.Banner{
  margin-top: 60px;
  width: 100%;
  height: 600px;
  background: url("../../static/img/b1.jpg") no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .Cont{
    text-align: center;
    line-height: 1;
  }
  .Title{
    color: #fff;
    font-size: 61px;
    margin-bottom: 10px;
  }
  #fly{
    color: #fff;
    font-size: 200px;
    animation-timing-function: linear;
    opacity: 0.4;
  }
  .us{
    color: #fff;
    margin-bottom: 20px;
  }
  p{
    color: #fff;
    margin: 20px 0;
    i{
      font-size: 16px;
    }
  }
}
</style>
