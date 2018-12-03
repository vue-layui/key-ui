<template>
    <div>
        <button @click="alert" class="GerenalAlertBtn">点我试试</button>
        <!--遮罩层-->
        <div class="master"></div>
        <!--弹出框-->
        <nav class="AlertBox">
            <p>提示</p>
            <h4>你吃饭了吗</h4>
            <button @click="closeAlert" class="closebtn">确定</button>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "AnimaAlert",
        methods:{
            alert(){
                document.getElementsByTagName('nav')[0].className ="AlertBox AlertBox_active";
                document.querySelector(".master").style.display="block";
            },
            closeAlert(){
                 document.getElementsByTagName('nav')[0].className = "AlertBox";
                document.querySelector(".master").style.display="none";
            }
        }
    }
</script>
<style scoped lang="scss">
    .GerenalAlertBtn{
        width:100px;
        height:34px;
        line-height:34px;
        border:0;
        border-radius: 5px;
        color:#fff;
        background:#563bfe;
        display:block;
    }

    .master{
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
    .AlertBox{
        background: #fff;
        width:240px;
        height:140px;
        position:fixed;
        left:40%;
        top:50%;
        z-index:2;
        border-radius:5px;
        transform:scale(0) rotate(360deg);
        transition: all 0.75s;
    }
    .AlertBox_active{
        transform:scale(1) rotate(0deg);
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
    .closebtn{
      background:#1e9fff;
      width:40px;
      height:25px;
      font-size:14px;
      display:block;
      margin:40px auto;
      border:0;
  }
</style>
