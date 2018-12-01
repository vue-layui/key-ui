<template>
    <div>
        <div class="pagger-box pagger" id="box"></div>
        <div id="page" class="paging"></div>
    </div>

</template>
<script>
    import '../assets/js/paging'
    export default {
        name: "WebPages",
        mounted(){
            var setTotalCount = 1000;
            $('#box').paging({
                initPageNo: 3, // 初始页码
                totalPages: 750, //总页数
                totalCount: '合计' + setTotalCount + '条数据', // 条目总数
                slideSpeed: 600, // 缓动速度。单位毫秒
                jump: true, //是否支持跳转
                callback: function(page) { // 回调函数
                    // console.log(page);
                }
            })
            $("#page").paging({
                total: 10000,
                numberPage: 10
                },
            function(msg){
                //回调函数 msg为选中页码
            });
        }
    }
</script>

<style scoped>
    @import '../assets/css/paging.css';
</style>