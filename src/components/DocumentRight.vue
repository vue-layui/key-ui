<template>
    <!--<biao-dan></biao-dan>-->
    <!--<web-paging></web-paging>-->
    <router-view></router-view>
</template>

<script>
    // import BiaoDan from './BiaoDan'
    import WebPaging from "./WebPaging";
    export default {
        name: "DocumentRight",
        components:{
            WebPaging,
            // BiaoDan
        }
    }
</script>

<style scoped>

</style>