<template>
    <div>
        <div class="contentbox">
            <div class="qcontainer">
                <div class="film">
                    <div class="face front"><img src="../../../static/img/img1.jpg"></div>
                    <div class="face back"><h3>这是老大!!</h3></div>
                </div>
            </div>
            <div class="qcontainer">
                <div class="film">
                    <div class="face front"><img src="../../../static/img/img2.jpg"></div>
                    <div class="face back"><h3>这是大姐头!!</h3></div>
                </div>
            </div>
            <div class="qcontainer">
                <div class="film">
                    <div class="face front"><img src="../../../static/img/img3.jpg"></div>
                    <div class="face back"><h3>这是小清!!</h3></div>
                </div>
            </div>
            <div class="qcontainer">
                <div class="film">
                    <div class="face front"><img src="../../../static/img/img4.jpg"></div>
                    <div class="face back"><h3>这是学霸!!</h3></div>
                </div>
            </div>
        </div>
        <div class="tabs222">
            <p>鼠标悬停动画切换图片</p>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "DAOH1",
        mounted() {
        }
    }
</script>

<style scoped>
    body{border:none;margin:0;background-color:#0D3462;}
    li{list-style:none;}
    ul{margin:0;padding:0;}
    .contentbox{width:80%;margin:auto;clear:left;
    }
    .qcontainer{-webkit-perspective:400;-moz-perspective:400;float:left;width:220px;margin-right:20px;}
    .film{width:100%;height:300px;-webkit-transform-style:preserve-3d;-webkit-transition:1.5s;-moz-transform-style:preserve-3d;-moz-transition:1.5s;}
    .qcontainer:hover .film{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);}
    .face{position:absolute;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;}
    .face h3{color:white;text-align:center;}
    .back{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);background:-webkit-gradient(linear,left top,left bottom,from(#fdbb5a),to(#db5726));background:-moz-linear-gradient(top,#fdbb5a,#db5726);width:220px;height:300px;}
    .foot{text-align:center;color:#fff;position:fixed;bottom:20px;left:50%;margin-left:-126px;font-size:12px;font-family:"微软雅黑"；}
    .tabs222{
        top: 70px;
        width: 100%;
        /*height: 90px;*/
        border-top:1px solid #eeeeee;
        position: relative;
        margin-left: 130px;
        clear: both;
    }
    .tabs222 p:first-child{
        font-size: 24px;
        position: absolute;
        top: -41px;
        left: 22px;
        background: white;
        padding-left: 10px;
        padding-right: 10px;
    }
    .tabs222 p:first-child:hover{
        color: #9F9F9F;
    }
</style>