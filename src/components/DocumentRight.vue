<template>
        <div class="K-dis">
            <p class="K-title">这是部分实例，测试您的浏览器是否支持这些案例展示以及key-ui！</p>
            <div class="K-dis1">
                <LayOut>
                </LayOut>
                <up-load>

                </up-load>
            </div>

        </div>

</template>

<script>
  import UpLoad from '../components/UpLoad'
  import LayOut from '../components/LayOut'
    export default {
        name: "DocumentRight",
        components:{
          UpLoad,
          LayOut
      }
    }
</script>

<style lang="scss" scoped>
 .K-dis{
     display:flex;
     /*float:left;*/
     margin-top:80px;
     margin-left:210px;
     flex-direction: column;;
 }
    .K-dis1{
        display:flex;

    }
</style>
