<template>
  <div>
    <link rel="stylesheet" type="text/css" href="http://www.jq22.com/jquery/bootstrap-3.3.4.css">
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
              <input type="mail" name="">
              <label>邮箱或用户名</label>
            </div>
            <div class="passwd">
              <input type="password" name="">
              <label>密码</label>
            </div>
            <div class="submit">
              <button class="dark" >Login</button>
            </div>
        </div>
        <div id="register">
            <h3>注册</h3>
            <div class="name">
              <input type="text" name="" class="username" @blur="UserName()">
              <label>用户名</label>
            </div>
            <div class="mail">
              <input type="mail" name="" class="usermail" @blur="UsersMail()">
              <label>邮箱</label>
            </div>
            <div class="uid">
              <input type="text" name="" class="userphone" @blur="UserNum()">
              <label>手机号</label>
            </div>
            <div class="passwd" >
              <input type="password" name="" class="userpass" @blur="UsersPass()">
              <label>密码</label>
            </div>
            <div class="submit">
              <button class="dark">Register</button>
            </div>
        </div>
      </div>
    </div>
  </div>


     <!--遮罩层-->
      <div class="master"></div>

      <!--登录成功弹出框-->
      <h5 class="AlertJumpBox">
          <p>温馨提示</p>
          <h4>登录成功！即将为你跳转首页</h4>
          <button @click="closeAlert" class="closebtn1">确定</button>
      </h5>

      <!--注册成功弹出框-->
      <nav class="AlertBox">
          <p>温馨提示</p>
          <h4>恭喜你注册成功！即将为你跳转首页</h4>
          <button @click="closeAlert" class="closebtn">确定</button>
      </nav>
  </div>
</template>


<script>
  import $ from 'jquery'
    export default {
        name: "login",
        data(){
            return{
                flag1:false,
                flag2:false,
                flag3:false,
                flag4:false,
            }
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
            //登录动画
            $(".dark1").click(()=>{
                document.getElementsByTagName('h5')[0].className = "AlertJumpBox AlertJumpBox_active";
                document.querySelector(".master").style.display="block";
            });
            //注册动画
            $(".dark").click(()=>{
                if(this.flag1 && this.flag2 && this.flag3 && this.flag4){
                    document.getElementsByTagName('nav')[0].className ="AlertBox AlertBox_active";
                    document.querySelector(".master").style.display="block";
                }
            });

        },

      methods:{

        //账号登录 邮箱或用户名
         UserName(){
                  //用户名：3-15位字母
                  let reg1 = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
                  let str=$(".username").val();
                  if(reg1.test(str)===true ){
                      this.flag1=true
                      $(".username").css({"color":"black","border":"1px solid black"});

                  }else{
                      $(".username").val("请输入正确的用户名").css({"color":"red","border":"1px solid red"});
                  }

          },
          UsersMail(){
              //邮箱验证
                  //邮箱：以若干数字字母开头，紧接着是@,紧接着是若干数字字母，紧接着.com或者.cn或者.net
                  var reg2 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com|\.cn|\.net)$/;
              if(reg2.test($(".usermail").val())===true ){
                  this.flag2=true;
                  $(".usermail").css({"color":"black","border":"1px solid black"});

              }else{
                  $(".usermail").val("请输入正确的邮箱名").css({"color":"red","border":"1px solid red"});
              }

          },
          UserNum(){
                   //以1开头，第二位不能为0,1，2，紧接着是9个数字
                   var reg3 = /^1[3-9]\d{9}$/;
              if(reg3.test($(".userphone").val())===true ){
                  this.flag3=true
                  $(".userphone").css({"color":"black","border":"1px solid black"});

              }else{
                  $(".userphone").val("请输入正确的手机号码").css({"color":"red","border":"1px solid red"});
              }
          },
          UsersPass(){
              //密码验证
              //至少6个字符，包含1个字母，1个数字
              let reg4= /^[0-9a-z@!$%&*#]{8,16}$/;
              if(reg4.test($(".userpass").val())===true ){
                  this.flag4=true
                  $(".userpass").css({"color":"black","border":"1px solid black"});
              }else{
                  $(".userpass").val("密码至少6个字符，包含1个字母，1个数字").css({"color":"red","border":"1px solid red"});
              }
          },
          closeAlert(){
               this.$router.push('/')
          }
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
  /*注册成功弹出框*/
  .AlertBox{
      background: #fff;
      width:240px;
      height:140px;
      position:fixed;
      left:40%;
      top:50%;
      z-index:2;
      transform:scale(0) rotate(360deg);
      transition: all 0.75s;
      border-radius:10px;
  }
  .AlertBox_active{
      transform:scale(1) rotate(0deg);
  }
  .AlertBox p{
      padding-left:5px;
      color:#fff;
      background:#1e9fff;
      width:100%;
      height:30px;
      box-sizing:border-box;
      border-radius:10px 10px 0 0;
  }
  .AlertBox h4{
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
      margin:30px auto;
      border:0;
  }
    /*登录成功弹出框*/
  .AlertJumpBox{
      background: #fff;
      width:240px;
      height:140px;
      position:fixed;
      left:40%;
      top:50%;
      z-index:2;
      display:none;
      border-radius: 10px;
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
  .AlertJumpBox p{
      padding-left:5px;
      color:#fff;
      background:#1e9fff;
      width:100%;
      height:30px;
      line-height:30px;
      box-sizing:border-box;
      border-radius:10px 10px 0 0;
  }
  .AlertJumpBox h4{
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
      margin:30px auto;
      border:0;

  }

</style>
