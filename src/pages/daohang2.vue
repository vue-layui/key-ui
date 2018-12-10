<template>
    <div class="pics">
        <div class="toptitle">图片效果 - 页面元素</div>
        <div class="introduction"><p>图片效果可应用于页面图片展示.</p></div>
        <div class="introduction introduction2"><p>依赖加载组件：无 （直接引用子组件，修改其样式即可）</p></div>
        <div class="tabsA">
            <p>图片翻转展示</p>
            <p>图片交互效果广泛应用于Web页面，因此我们也对其进行了良好的支持。keyui内置多种图片展示风格。
                这是一个最基本的例子：</p>
        </div>
        <DAOH1></DAOH1>
        <pic2></pic2>
        <pic3></pic3>
    </div>
</template>

<script>
    import DAOH1 from "../components/daohang2/DAOH1";
    import pic2 from "../components/daohang2/pic2";
    import Pic3 from "../components/daohang2/pic3";
    export default {
        name: "daohang2",
        components:{
            Pic3,
            pic2,
            DAOH1,
        }
    }
</script>

<style scoped>
    .pics{
        width: 100%;
        margin-top: 60px;
        float: left;
        margin-left: 100px;
    }
    .toptitle{
        width: 100%;
        height: 90px;
        line-height: 90px;
        font-size: 27px;
        font-weight: normal;
        border-bottom: 1px solid #eeeeee;
        margin-left: 130px;
    }
    .introduction{
        width: 100%;
        height: 52px;
        background: #f2f2f2;
        margin-top: 20px;
        border-left: 5px solid #009688;
        font-size: 14px;
        line-height: 32px;
        margin-left: 130px;
    }
    .introduction2{
        margin-top: 10px;
        margin-left: 130px;
    }
    .introduction p{
        margin-left: 14px;
    }
    .tabsA{
        margin-top: 70px;
        width: 100%;
        height: 90px;
        border-top:1px solid #eeeeee;
        position: relative;
        margin-left: 130px;
        clear: both;
    }
    .tabsA p:first-child{
        font-size: 24px;
        position: absolute;
        top: -41px;
        left: 22px;
        background: white;
        padding-left: 10px;
        padding-right: 10px;
    }
    .tabsA p:first-child:hover{
        color: #9F9F9F;
    }
    .tabsA p:last-child{
        font-size: 14px;
        line-height: 100px;
    }

</style>