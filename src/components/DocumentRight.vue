<template>
    <div class="K-dis">
      <up-load>

      </up-load>
      <LayOut>

      </LayOut>
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
      height: 100%;
      display: flex;
      flex: 1;
      float: left;
      margin-top: 60px;
    }
</style>
