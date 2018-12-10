<template>
    <div class="sdfsf">
        <div class="tabs2">
            <p>鼠标悬停文字旋转</p>
        </div>
    <div class="main">

        <div class="view">
            <img src="../../../static/img/modeo02.jpg" >
            <div class="hover">
                <h3>魔力唇彩</h3>
                <p>嘴唇的诱惑嘴唇的诱唇的诱惑嘴唇的诱惑</p>
            </div>
        </div>
        <div class="view">
            <img src="../../../static/img/modeo03.jpg" >
            <div class="hover">
                <h3>魔力唇彩</h3>
                <p>嘴唇的诱惑嘴唇的诱唇的诱惑嘴唇的诱惑</p>
            </div>
        </div>
        <div class="view">
            <img src="../../../static/img/modeo04.jpg" >
            <div class="hover">
                <h3>魔力唇彩</h3>
                <p>嘴唇的诱惑嘴唇的诱唇的诱惑嘴唇的诱惑</p>
            </div>
        </div>
        <div class="view">
            <img src="../../../static/img/modeo05.jpg">
            <div class="hover">
                <h3>魔力唇彩</h3>
                <p>嘴唇的诱惑嘴唇的诱唇的诱惑嘴唇的诱惑</p>
            </div>
        </div>
        <div class="view">
            <img src="../../../static/img/modeo06.jpg">
            <div class="hover">
                <h3>魔力唇彩</h3>
                <p>嘴唇的诱惑嘴唇的诱唇的诱惑嘴唇的诱惑</p>
            </div>
        </div>
        <div class="view">
            <img src="../../../static/img/modeo07.jpg">
            <div class="hover">
                <h3>魔力唇彩</h3>
                <p>嘴唇的诱惑嘴唇的诱唇的诱惑嘴唇的诱惑</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "pic3"
    }
</script>

<style scoped>
    .tabs2{
        top:20px;
        width: 100%;
        height: 50px;
        border-top:1px solid #eeeeee;
        position: relative;
        margin-left: 130px;
        clear: both;
        margin-top: 130px;
    }
    .tabs2 p:first-child{
        font-size: 24px;
        position: absolute;
        top: -41px;
        left: 22px;
        background: white;
        padding-left: 10px;
        padding-right: 10px;
    }
    .tabs2 p:first-child:hover{
        color: #9F9F9F;
    }
    *{margin:0;padding:0;list-style:none;}
    .main{ width:660px; border:1px solid #ccc; height:440px;margin-left: 140px;}
    .main .view{ width:200px; height:200px; overflow:hidden; position:relative; margin:10px; float:left;}
    .main .hover{
        width:200px; background:rgba(0, 0 ,0 ,0.5); position:absolute; top:20px; left:0; text-align:center; color:#fff;
        transform:rotate(55deg);
        -moz-transform:rotate(55deg);
        -webkit-transform:rotate(55deg);
        transition:all 0.5s;
        -moz-transition:all 0.5s;
        -webkit-transition:all 0.5s;
        overflow:hidden; height:0; z-index:4000;/*transform:translateX(200px);*/}/*写好样式，进行隐藏，用overflow:hidden; height:0;*/
    .main .hover h3{color:#fff; border-bottom:2px solid rgba(255, 255 ,255, 0.5); padding-bottom:10px;padding-top: 10px;}
    .main .hover p{line-height: 130%;padding: 10px 0;}
    .main .view:hover .hover{height:120px;transform:rotate(0deg);-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);}
    /*before   after为选择器，一般给选择器加动画背景，设置动画样式*/
    .main .view:before{
        content:""; position:absolute; top:-240px; right:0;width:360px; height:360px; background:rgba( 150, 50, 100,0.5);
        transform:rotate(55deg) translateX(60px);
        -moz-transform:rotate(55deg) translateX(60px);
        -webkit-transform:rotate(55deg) translateX(60px);
        transform-origin:100% 0%;
        -moz-transform-origin:100% 0%;
        -webkit-transform-origin:100% 0%;
        transition:all 0.5s ease 0.3s;
        -moz-transition:all 0.5s ease 0.3s;
        -webkit-transition:all 0.5s ease 0.3s;

    }/*写好样式，进行隐藏，用top:-240px;*/
    .main .view:hover:before{ top:0;}
    .main .view:after{
        content:""; position:absolute;bottom:-240px; left:0;width:360px; height:360px; background:rgba( 150, 50, 100,0.5);
        transform:rotate(55deg) translateX(-60px);
        -moz-transform:rotate(55deg) translateX(-60px);
        -webkit-transform:rotate(55deg) translateX(-60px);
        transform-origin:0% 100%;
        -moz-transform-origin:0% 100%;
        -webkit-transform-origin:0% 100%;
        transition:all 0.5s ease 0.3s;
        -moz-transition:all 0.5s ease 0.3s;
        -webkit-transition:all 0.5s ease 0.3s;
    }
    .main .view:hover:after{ bottom:0px;}
</style>