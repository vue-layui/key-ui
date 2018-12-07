<template>
  <div>
    <index-header>

    </index-header>
    <swiper :options="swiperOption" ref="mySwiper" class="K-swiper">
      <!-- slides -->
      <swiper-slide>
        <index-conter>

        </index-conter>
      </swiper-slide>
      <swiper-slide>
        <index-foot>

        </index-foot>
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>

  </div>
</template>

<script>
  import IndexHeader from '../components/IndexHeader'
  import IndexConter from '../components/IndexConter'
  import IndexFoot from '../components/IndexFoot'
    export default {
        name: "IndexPage",
        components:{
          IndexHeader,
          IndexConter,
          IndexFoot
        },
      data() {
        return {
          swiperOption: {
            direction: 'vertical',
            slidesPerView: 1,
            speed:1500,
            mousewheel: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            // some swiper options/callbacks
            // 所有的参数同 swiper 官方 api 参数
            // ...
          }
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        // console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(0, 1000, false)
      }
    }
</script>

<style lang="scss" scoped>
  .K-swiper{
    height: 700px;
  }
</style>
