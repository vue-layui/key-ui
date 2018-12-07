<template>
  <div>
    <link rel="stylesheet" type="text/css" href="http://www.jq22.com/jquery/bootstrap-3.3.4.css">
      <IndexHeader></IndexHeader>
  <div class="bodyLogin">
    <div class="veen">
      <div class="login-btn splits">
        <p>Already an user?</p>
        <button>Login</button>
      </div>
      <div class="rgstr-btn splits">
        <p>Don't have an account?</p>
        <button>Register</button>
      </div>
      <div class="wrapper">
        <div id="login">
            <h3>请登录</h3>
            <div class="mail">
              <input type="mail" name="" class="username">
              <label>邮箱或用户名</label>
            </div>
            <div class="passwd">
              <input type="password" name="" class="userpass">
              <label>密码</label>
            </div>
            <div class="submit">
              <button class="dark">Login</button>
            </div>
        </div>
        <div id="register">
            <h3>注册</h3>
            <div class="name">
              <input type="text" name="" class="username">
              <label>用户名</label>
            </div>
            <div class="mail">
              <input type="mail" name="" id="usermail">
              <label>邮箱</label>
            </div>
            <div class="uid">
              <input type="text" name="" id="userphone">
              <label>手机号</label>
            </div>
            <div class="passwd">
              <input type="password" name="" class="userpass">
              <label>密码</label>
            </div>
            <div class="submit">
              <button class="dark">Register</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
  import $ from 'jquery'
  import IndexHeader from '../components/IndexHeader'
    export default {
        name: "login",
        components:{
            IndexHeader
        },
      mounted(){
        $(document).ready(function(){
          $(".veen .rgstr-btn button").click(function(){
            $('.veen .wrapper').addClass('move');
            $('.bodyLogin').css('background','rgb(00, 96, 88)');
          });
          $(".veen .login-btn button").click(function(){
            $('.veen .wrapper').removeClass('move');
            $('.bodyLogin').css('background','#1f5485');
          });
        });
        //账号登录 邮箱或用户名
        $(".username").blur(function(){
            //邮箱：以若干数字字母开头，紧接着是@,紧接着是若干数字字母，紧接着.com或者.cn或者.net
            var reg1 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com|\.cn|\.net)$/;
            //用户名：3-15位字母
            var reg2 = /^[a-zA-Z][a-zA-Z0-9]{3-15}/;
            if(reg1.test($("#username").val())||reg2.test($("#username").val())==false){
                alert("请输入正确的邮箱地址或用户名"); 
            }
        });
        //密码验证
        $(".userpass").blur(function(){
            //至少6个字符，包含1个字母，1个数字
            var regps=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{6,}$/;
            if(regps.test($("#userpass").val())==false){
                alert("密码至少6个字符，包含1个字母，1个数字");
            }
        });
        //邮箱验证
        $("#usermail").blur(function(){
            //邮箱：以若干数字字母开头，紧接着是@,紧接着是若干数字字母，紧接着.com或者.cn或者.net
            var reg1 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com|\.cn|\.net)$/;
            if(reg1.test($("#usermail").val())==false){
                alert("请输入正确的邮箱地址"); 
            }
        });
        //手机号验证
        $("#userphone").blur(function(){
            //以1开头，第二位不能为0,1，2，紧接着是9个数字
            var reg = /^1[3-9]\d{9}$/;
            if(reg.test($("#userphone").val())==false){
                alert("请输入正确的手机号码"); 
            }
        });
      }
    }
</script>

<style scoped>
  .bodyLogin{
    background: #1f5485;
    transition: all .5s;
    padding-top:60px;
      height:100%;
  }
  .veen{
    width: 70%;
    margin: 100px auto;
    background: rgba(255,255,255,.5);
    min-height: 400px;
    display:table;
    position: relative;
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
  }
  .veen > div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #fff;
  }
  .veen button{
    background: transparent;
    display: inline-block;
    padding: 10px 30px;
    border: 3px solid #fff;
    border-radius: 50px;
    background-clip: padding-box;
    position: relative;
    color: #FFF;
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
    transition: all .25s;
  }
  .veen button.dark{
    border-color: #1f5485;
    background: #1f5485;
  }
  .veen .move button.dark{
    border-color: rgb(00, 96, 88);
    background: rgb(00, 96, 88);
  }
  .veen .splits p{
    font-size: 18px;
  }
  .veen button:active{
    box-shadow: none;
  }
  .veen button:focus{
    outline: none;
  }
  .veen > .wrapper {
    position: absolute;
    width: 40%;
    height: 120%;
    top: -10%;
    left: 5%;
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
    transition: all .5s;
    color: #303030;
    overflow: hidden;
  }
  .veen .wrapper > div{
    padding: 15px 30px 30px;
    width: 100%;
    transition: all .5s;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .veen .wrapper #login{
    padding-top: 20%;
  }
  .veen .wrapper #register{
    left: 100%;
  }
  .veen .wrapper.move #register{
    left: 0%;
  }
  .veen .wrapper.move #login{
    left: -100%;
  }
  .veen .wrapper > div> div {
    position: relative;
    margin-bottom: 15px;
  }
  .veen .wrapper label{
    position: absolute;
    top: -7px;
    font-size: 12px;
    white-space: nowrap;
    background: #fff;
    text-align: left;
    left: 15px;
    padding: 0 5px;
    color: #999;
    pointer-events: none;
  }
  .veen .wrapper h3{
    margin-bottom: 25px;
  }
  .veen .wrapper input{
    height: 40px;
    padding: 5px 15px;
    width: 100%;
    border: solid 1px #999;
  }
  .veen .wrapper input:focus{
    outline: none;
    border-color: #ff4931;
  }
  .veen > .wrapper.move{
    left: 45%;
  }
  .veen > .wrapper.move input:focus{
    border-color: #e0b722;
  }
</style>
