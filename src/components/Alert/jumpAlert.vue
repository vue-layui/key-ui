<template>
    <div>
        <button @click="alertJump" class="GerenalJumpBtn">点我试试</button>
        <!--遮罩层-->
        <div class="master1"></div>
        <!--弹出框-->
        <h3 class="AlertJumpBox">
            <p>提示</p>
            <h4>你确定要删除这条数据吗</h4>
            <button @click="closeJumpAlert" class="closebtn1">确定</button>
        </h3>
    </div>

</template>

<script>

    export default {
        methods:{
            alertJump(){
                 document.getElementsByTagName('h3')[0].className = "AlertJumpBox AlertJumpBox_active";
                 document.querySelector(".master1").style.display="block";
            },
            closeJumpAlert(){
                document.getElementsByTagName('h3')[0].className = "AlertJumpBox";
                document.querySelector(".master1").style.display="none";
            }
        }
    }
</script>
<style scoped>
    .GerenalJumpBtn{
        width:100px;
        height:34px;
        line-height:34px;
        border:0;
        border-radius: 5px;
        color:#fff;
        background:#c8268d;
        display:block;
    }

    .master1{
        width:100%;
        height:100%;
        position:fixed;
        top:0;
        left:0;
        background:#000;
        z-index:1;
        opacity: 0.4;
        display:none;
    }
    .AlertJumpBox{
        background: #fff;
        width:240px;
        height:140px;
        position:fixed;
        left:40%;
        top:50%;
        z-index:2;
        display:none;
        border-radius: 5px;
    }
    .AlertJumpBox_active{
        display:block;
        animation:icon-ani 1s linear 1;
    }

    @keyframes icon-ani{
        0%{
            transform:translateY(-8px);
        }
        25%{
            transform:translateY(8px);
        }
        50%{
            transform:translateY(-5px);
        }
        75%{
            transform: translateY(5px);
        }
        100%{
            transform: translateY(0px);
        }
    }
    p{
        padding-left:5px;
        color:#fff;
        background:#1e9fff;
        width:100%;
        height:30px;
        box-sizing:border-box;
    }
    h4{
        font-size:14px;
        text-align: center;
        line-height:40px;
        font-style: normal;
    }
    .closebtn1{
        background:#1e9fff;
        width:40px;
        height:25px;
        font-size:14px;
        display:block;
        margin:40px auto;
        border:0;
    }
</style>
