<template>
    <div>
        <ul class="keyui-nav">
            <li>最新活动</li>
            <li>产品</li>
            <li>大数据</li>
            <li>解决方案</li>
            <li>社区</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "underlineChange"
    }
</script>

<style lang="scss" scoped>
    .keyui-nav{
        width:500px;
        height:40px;
        display:flex;
        justify-content: space-around;
      li{
        height:37px;
        line-height:40px;
        list-style: none;
        color:#fff;
        position:relative;
        &:after {
            content: "";
            width: 0;
            height: 3px;
            background: #009E94;
            position: absolute;
            top: 100%;
            left: 50%;
            transition: all .4s;
        }  &:hover:after {
            left: 0;
            width: 100%;
        }
      }
    }
</style>
