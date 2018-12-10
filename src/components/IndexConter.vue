<template>
  <div class="Banner">
    <div class="night">
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
    </div>

    <div class="Cont">
      <!--<i class="layui-icon layui-icon-tree" id="fly"></i><br>-->
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
    height: 700px;
    background: url("../../static/img/b1.jpg") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    overflow: hidden;
    .Cont {
      text-align: center;
      line-height: 1;
      margin-top:30px;
    }

    .Title {
      color: #fff;
      font-size: 61px;
      margin-bottom: 50px;
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
      z-index:10;
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
        color:#fff;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        line-height: 80px;
      }
    }

    .us {
      color: #fff;
      margin-bottom: 30px;
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


  .night {
    position: absolute;
    -webkit-transform: rotateZ(45deg) translateX(150px);
    transform: rotateZ(45deg);
  }

  .shooting_star {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
    border-radius: 999px;
    -webkit-filter: drop-shadow(0 0 6px #699bff);
    filter: drop-shadow(0 0 6px #699bff);
    -webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
    animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
  }
  .shooting_star::before, .shooting_star::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
    -webkit-transform: translateX(50%) rotateZ(45deg);
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    -webkit-animation: shining 3000ms ease-in-out infinite;
    animation: shining 3000ms ease-in-out infinite;
  }
  .shooting_star::after {
    -webkit-transform: translateX(50%) rotateZ(-45deg);
    transform: translateX(50%) rotateZ(-45deg);
  }
  .shooting_star:nth-child(1) {
    top: calc(50% - 200px);
    left: calc(50% - 105px);
    -webkit-animation-delay: 9592ms;
    animation-delay: 9592ms;
  }
  .shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after, .shooting_star:nth-child(1)::after {
    -webkit-animation-delay: 9592ms;
    animation-delay: 9592ms;
  }
  .shooting_star:nth-child(2) {
    top: calc(50% - -18px);
    left: calc(50% - 87px);
    -webkit-animation-delay: 5908ms;
    animation-delay: 5908ms;
  }
  .shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
    -webkit-animation-delay: 5908ms;
    animation-delay: 5908ms;
  }
  .shooting_star:nth-child(3) {
    top: calc(50% - 131px);
    left: calc(50% - 81px);
    -webkit-animation-delay: 1191ms;
    animation-delay: 1191ms;
  }
  .shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after, .shooting_star:nth-child(3)::after {
    -webkit-animation-delay: 1191ms;
    animation-delay: 1191ms;
  }
  .shooting_star:nth-child(4) {
    top: calc(50% - 178px);
    left: calc(50% - 252px);
    -webkit-animation-delay: 9638ms;
    animation-delay: 9638ms;
  }
  .shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after, .shooting_star:nth-child(4)::after {
    -webkit-animation-delay: 9638ms;
    animation-delay: 9638ms;
  }
  .shooting_star:nth-child(5) {
    top: calc(50% - 54px);
    left: calc(50% - 207px);
    -webkit-animation-delay: 2554ms;
    animation-delay: 2554ms;
  }
  .shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after, .shooting_star:nth-child(5)::after {
    -webkit-animation-delay: 2554ms;
    animation-delay: 2554ms;
  }
  .shooting_star:nth-child(6) {
    top: calc(50% - 170px);
    left: calc(50% - 257px);
    -webkit-animation-delay: 2165ms;
    animation-delay: 2165ms;
  }
  .shooting_star:nth-child(6)::before, .shooting_star:nth-child(6)::after, .shooting_star:nth-child(6)::after {
    -webkit-animation-delay: 2165ms;
    animation-delay: 2165ms;
  }
  .shooting_star:nth-child(7) {
    top: calc(50% - -93px);
    left: calc(50% - 69px);
    -webkit-animation-delay: 9997ms;
    animation-delay: 9997ms;
  }
  .shooting_star:nth-child(7)::before, .shooting_star:nth-child(7)::after, .shooting_star:nth-child(7)::after {
    -webkit-animation-delay: 9997ms;
    animation-delay: 9997ms;
  }
  .shooting_star:nth-child(8) {
    top: calc(50% - 106px);
    left: calc(50% - 99px);
    -webkit-animation-delay: 422ms;
    animation-delay: 422ms;
  }
  .shooting_star:nth-child(8)::before, .shooting_star:nth-child(8)::after, .shooting_star:nth-child(8)::after {
    -webkit-animation-delay: 422ms;
    animation-delay: 422ms;
  }
  .shooting_star:nth-child(9) {
    top: calc(50% - -17px);
    left: calc(50% - 35px);
    -webkit-animation-delay: 2714ms;
    animation-delay: 2714ms;
  }
  .shooting_star:nth-child(9)::before, .shooting_star:nth-child(9)::after, .shooting_star:nth-child(9)::after {
    -webkit-animation-delay: 2714ms;
    animation-delay: 2714ms;
  }
  .shooting_star:nth-child(10) {
    top: calc(50% - -114px);
    left: calc(50% - 232px);
    -webkit-animation-delay: 6136ms;
    animation-delay: 6136ms;
  }
  .shooting_star:nth-child(10)::before, .shooting_star:nth-child(10)::after, .shooting_star:nth-child(10)::after {
    -webkit-animation-delay: 6136ms;
    animation-delay: 6136ms;
  }
  .shooting_star:nth-child(11) {
    top: calc(50% - 175px);
    left: calc(50% - 73px);
    -webkit-animation-delay: 9617ms;
    animation-delay: 9617ms;
  }
  .shooting_star:nth-child(11)::before, .shooting_star:nth-child(11)::after, .shooting_star:nth-child(11)::after {
    -webkit-animation-delay: 9617ms;
    animation-delay: 9617ms;
  }
  .shooting_star:nth-child(12) {
    top: calc(50% - -137px);
    left: calc(50% - 300px);
    -webkit-animation-delay: 8175ms;
    animation-delay: 8175ms;
  }
  .shooting_star:nth-child(12)::before, .shooting_star:nth-child(12)::after, .shooting_star:nth-child(12)::after {
    -webkit-animation-delay: 8175ms;
    animation-delay: 8175ms;
  }
  .shooting_star:nth-child(13) {
    top: calc(50% - 64px);
    left: calc(50% - 125px);
    -webkit-animation-delay: 2715ms;
    animation-delay: 2715ms;
  }
  .shooting_star:nth-child(13)::before, .shooting_star:nth-child(13)::after, .shooting_star:nth-child(13)::after {
    -webkit-animation-delay: 2715ms;
    animation-delay: 2715ms;
  }
  .shooting_star:nth-child(14) {
    top: calc(50% - 144px);
    left: calc(50% - 266px);
    -webkit-animation-delay: 9024ms;
    animation-delay: 9024ms;
  }
  .shooting_star:nth-child(14)::before, .shooting_star:nth-child(14)::after, .shooting_star:nth-child(14)::after {
    -webkit-animation-delay: 9024ms;
    animation-delay: 9024ms;
  }
  .shooting_star:nth-child(15) {
    top: calc(50% - -70px);
    left: calc(50% - 111px);
    -webkit-animation-delay: 4994ms;
    animation-delay: 4994ms;
  }
  .shooting_star:nth-child(15)::before, .shooting_star:nth-child(15)::after, .shooting_star:nth-child(15)::after {
    -webkit-animation-delay: 4994ms;
    animation-delay: 4994ms;
  }
  .shooting_star:nth-child(16) {
    top: calc(50% - -147px);
    left: calc(50% - 196px);
    -webkit-animation-delay: 6546ms;
    animation-delay: 6546ms;
  }
  .shooting_star:nth-child(16)::before, .shooting_star:nth-child(16)::after, .shooting_star:nth-child(16)::after {
    -webkit-animation-delay: 6546ms;
    animation-delay: 6546ms;
  }
  .shooting_star:nth-child(17) {
    top: calc(50% - -49px);
    left: calc(50% - 240px);
    -webkit-animation-delay: 895ms;
    animation-delay: 895ms;
  }
  .shooting_star:nth-child(17)::before, .shooting_star:nth-child(17)::after, .shooting_star:nth-child(17)::after {
    -webkit-animation-delay: 895ms;
    animation-delay: 895ms;
  }
  .shooting_star:nth-child(18) {
    top: calc(50% - 171px);
    left: calc(50% - 3px);
    -webkit-animation-delay: 4390ms;
    animation-delay: 4390ms;
  }
  .shooting_star:nth-child(18)::before, .shooting_star:nth-child(18)::after, .shooting_star:nth-child(18)::after {
    -webkit-animation-delay: 4390ms;
    animation-delay: 4390ms;
  }
  .shooting_star:nth-child(19) {
    top: calc(50% - -57px);
    left: calc(50% - 58px);
    -webkit-animation-delay: 5414ms;
    animation-delay: 5414ms;
  }
  .shooting_star:nth-child(19)::before, .shooting_star:nth-child(19)::after, .shooting_star:nth-child(19)::after {
    -webkit-animation-delay: 5414ms;
    animation-delay: 5414ms;
  }
  .shooting_star:nth-child(20) {
    top: calc(50% - 109px);
    left: calc(50% - 174px);
    -webkit-animation-delay: 9384ms;
    animation-delay: 9384ms;
  }
  .shooting_star:nth-child(20)::before, .shooting_star:nth-child(20)::after, .shooting_star:nth-child(20)::after {
    -webkit-animation-delay: 9384ms;
    animation-delay: 9384ms;
  }

  @-webkit-keyframes tail {
    0% {
      width: 0;
    }
    30% {
      width: 100px;
    }
    100% {
      width: 0;
    }
  }

  @keyframes tail {
    0% {
      width: 0;
    }
    30% {
      width: 100px;
    }
    100% {
      width: 0;
    }
  }
  @-webkit-keyframes shining {
    0% {
      width: 0;
    }
    50% {
      width: 30px;
    }
    100% {
      width: 0;
    }
  }
  @keyframes shining {
    0% {
      width: 0;
    }
    50% {
      width: 30px;
    }
    100% {
      width: 0;
    }
  }
  @-webkit-keyframes shooting {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(300px);
      transform: translateX(300px);
    }
  }
  @keyframes shooting {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(300px);
      transform: translateX(300px);
    }
  }
  @-webkit-keyframes sky {
    0% {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    100% {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg);
    }
  }
  @keyframes sky {
    0% {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    100% {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg);
    }
  }

</style>
