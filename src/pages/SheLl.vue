<template>
    <div>
      <index-header>

      </index-header>
      <document-left>

      </document-left>
      <router-view>

      </router-view>
    </div>
</template>

<script>
  import IndexHeader from '../components/IndexHeader'
  import DocumentLeft from '../components/DocumentLeft'
    export default {
        name: "SheLl",
      components:{
        IndexHeader,
        DocumentLeft
      }
    }
</script>

<style scoped>

</style>
