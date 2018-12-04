<template>
  <div class="Banner">
    <div class="Cont">
      <i class="layui-icon layui-icon-tree" id="fly"></i><br>
      <p class="Title">新一代模块化前端框架</p>
      <p class="us">由天码行空团队倾心制作，0门槛开箱即用的ui框架</p>
      <div class="Keyuidownload_box"><a class="Keyuidownload" @click="download">立即下载</a>
      </div>
      <p>版本：1.0.1 &nbsp;<span>收藏人数: &nbsp;888&nbsp;</span> 访问量&nbsp;{{this.$store.state.count}}</p>
      <p>
        <button class="KeyButton">
          添加
        </button>

        <button class="KeyButton">
          Fork
        </button>

        <button class="KeyButton">
          码云
        </button>

      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexConter",
    methods: {
      download() {
          this.$store.dispatch('addNumCount',10)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Banner {
    width: 100%;
    height: 660px;
    background: url("../../static/img/b1.jpg") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .Cont {
      text-align: center;
      line-height: 1;
    }

    .Title {
      color: #fff;
      font-size: 61px;
      margin-bottom: 10px;
    }

    #fly {
      color: #fff;
      font-size: 200px;
      animation-timing-function: linear;
      opacity: 0.4;
    }

    .Keyuidownload_box {
      width: 200px;
      height: 80px;
      margin: 0 auto;
    }

    .Keyuidownload {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #009E94;
      text-decoration: none;
      color: #00FFFF;
      font-weight: 600;
      transition: all .4s ease;
      border-radius: 5px;

      &:hover {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        line-height: 80px;
      }
    }

    .us {
      color: #fff;
      margin-bottom: 20px;
    }

    p {
      color: #fff;
      margin: 20px 0;

      i {
        font-size: 16px;
      }
    }

    .KeyButton {
      width: 50px;
      height: 30px;
      background: transparent;
      color: #fff;
      border: 1px solid #2F4056;
    }
  }
</style>
