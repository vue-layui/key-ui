<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(imgs, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src='imgs.img1'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "rotation2",
      data () {
        return {
          mark: 0,
          timer: null,
          imgArray: [
            {
              img1:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'
            },
            {
              img1:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
            },
            {
              img1:'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'
            },
            {
              img1:'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658'
            }
          ]
        }
      },
      methods: {
        autoPlay () {
          this.mark++;
          if (this.mark === 4) {
            this.mark = 0
          }
        },
        play () {
          this.timer = setInterval(this.autoPlay, 2000)
        },
        change (i) {
          this.mark = i
        },
        stop () {
          clearInterval(this.timer)
        },
        move () {
          this.timer = setInterval(this.autoPlay, 2500)
        }
      },
      created () {
        this.play()
      }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 500px;
    height: 320px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 500px;
    height: 320px;
  }
  li {
    position: absolute;
  }
  img {
    width: 500px;
    height: 320px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
