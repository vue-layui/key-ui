<template>
  <div class="left">
    <div class="BigBox">
      <form action="#">
        <label>用户名：</label><input
              @blur="RegularUser()"
              class="FormUser" type="text"
              placeholder="请输入标题">
        <i id="UserPrompt"></i><br/>
        <label>密码：</label><input
              @blur="RegularPassWord()"
              class="FormPassword"
              type="text" >
        <i id="PassWordPrompt"></i><br/>
        <label>验证手机：</label><input
              @blur="RegularPhone()"
              class="FromPhone"
              type="text" >
        <i id="PhonePrompt"> </i><br/>
        <label>验证邮箱：</label><input
              @blur="RegularEmail()"
              class="FromEmail"
              type="text" >
        <i id="EmailPrompt"></i><br/>
        <label>身份证号：</label><input
              @blur="RegularCard()"
              class="FromCard"
              type="text" >
        <i id="CardPrompt"></i><br/>
        <!--爱好-->
        <label class="live">喜好：</label>
        <div  class="box_01" id="box" @click="flag=!flag">
          <p id="con">阅读</p><img id="ps" src="../assets/imgs/1.png" alt="">
          <ul id="uls" v-show="flag" >
            <li >阅读</li>
            <li >写代码</li>
            <li>游泳</li>
            <li>爬山</li>
            <li>上课</li>
            <li>聊天</li>
            <li>上网</li>
          </ul>
        </div>
        <br/>
        <!--原始复选框-->
        <div class="check">
          <label>原始复选框:</label>
          <label>写作</label><input type="checkbox" >
          <label>阅读</label><input type="checkbox">
          <label>游戏</label><input type="checkbox">
        </div><div class="radio">
        <label>单选框:</label>
        <label>男</label><input type="radio" name="sex">
        <label>女</label><input type="radio" name="sex">
      </div>
        <!--下拉列表  -->
          <div class="address">
              <label>所在城市:</label>
              省：<select v-model="user.selCity.sheng">
                     <option :value="s" v-for="s in cityData">{{s.province}}</option>
                 </select>
              市：<select v-model="user.selCity.shi">
                    <option :value="c" v-for="c in user.selCity.sheng.citys">{{c.city}}</option>
                 </select>
              区：<select v-model="user.selCity.qu">
                     <option :value="q" v-for="q in user.selCity.shi.areas">{{q}}</option>
                </select>
          </div>
        <!--普通文本域-->

        <div class="text">
          <label>普通文本域：</label><br/>
          <textarea cols="100" rows="8"></textarea>
        </div>
        <!--提交按钮-->
        <input calss="FormSubmit" type="submit" value="提交">
        <input calss="FormReset" type="reset" value="重置">
      </form>
        <!--说明-->
       <p class="state"> 通过上述的小小演示，你已经大致了解了一波 keyui的表单模块，你可能会觉得他还算不错，
           但并不太过瘾？譬如你希望看到日期选择、图片上传等等。然而你必须认识到，本篇文档核心介绍的是表单元素，对于日期、
           上传等更多丰富的元素，其实也是可以很方便地穿插在内的。
       </p>
    </div>
  </div>
</template>

<script>
    export default {

      // updated() {
      //
      // },
      data(){
        el:".select"
        return {
            flag:false,
            cityData:[
                {
                    province:"陕西省",
                    citys:[
                        {city:"西安市",areas:["钟楼区","雁塔区","南窑头区","高新区" ]}
                    ]
                },
                {
                    province:"甘肃省",
                    citys:[
                        {city:"平凉市",areas:["崇信县","泾川县","新耀县","灵台县","华亭县"]}
                    ]
                }
            ],
            user:{
                selCity:{
                    sheng:"",
                    shi:"",
                    qu:""
                }

            }
        }
      },
      mounted(){
        $("#box").click(function(){
          $("#uls").slideToggle("slow")
        })

        $("li").click(function(){
          $(this).css({
            background: "green",

          })
          if($(this).style.background==="green"){
              $(this).style.background="green"
          }else{
              $("li").style.background="white"
          }
          let lue=$(this).html();
           $("#con").html(lue)
        })




      },
      methods:{

        //用户名//////////////
        RegularUser(){
          let str = $(".FormUser").val();
          let patt1 = /^[a-zA-Z][a-zA-Z0-9]{3,15}/;
          if (patt1.test(str) == true) {
            $("#UserPrompt").html("用户名正确").css({
              color: "green"
            });
          } else {
            $("#UserPrompt").html("请输入正确的用户名").css({
              color: "red"
            });
          }
        },

        //密码//////////////
        RegularPassWord(){
            let str = $(".FormPassword").val();
            let patt2 = /^[0-9a-z@!$%&*#]{8,16}$/;
            if (patt2.test(str) == true) {

              $("#PassWordPrompt").html("密码输入正确").css({
                color: "green"
              });
            } else if(patt2.test(str) ==false){

              $("#PassWordPrompt").html("请输入正确的用户密码").css({
                color: "red"
              });
            }
          },
        //手机号/////////////
        RegularPhone(){
          let str = $(".FromPhone").val();
          let patt3 = /^1[3-9]\d{9}$/;
          if (patt3.test(str) == true) {

            $("#PhonePrompt").html("手机号输入正确").css({
              color: "green"
            });
          } else if(patt3.test(str) ==false){

            $("#PhonePrompt").html("请输入正确的手机号").css({
              color: "red"
            });
          }
        },
        //电子邮件、、、、、、
        RegularEmail(){
          let str = $(".FromEmail").val();
          let patt4 =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          if (patt4.test(str) == true) {

            $("#EmailPrompt").html("邮件输入正确").css({
              color: "green"
            });
          } else if(patt4.test(str) ==false){

            $("#EmailPrompt").html("请输入正确的邮件").css({
              color: "red"
            });
          }
        },
        //身份证号、、、、、、
        RegularCard(){
          let str = $(".FromCard").val();
          let patt5 =/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
          if (patt5.test(str) == true) {

            $("#CardPrompt").html("身份证号输入正确").css({
              color: "green"
            });
          } else if(patt5.test(str) ==false){

            $("#CardPrompt").html("请输入正确的身份证").css({
              color: "red"
            });
          }
        },
      }
    }
</script>

<style lang="scss"  scoped>
    *{
      padding: 0px;
      margin: 0px;
    }
    .BigBox{
      margin-top: 80px;
      margin-left: 50px;
    }
    .left{
      width: 86.955%;
      background: #cccccc;
      float: right;

      form{
        font-size: 14px;
        label:nth-of-type(1){
          margin-left: 15px;
        }
        label:nth-of-type(2){
          margin-left: 30px;
        }
        input{
          margin-bottom: 15px;
          width: 250px;
          height: 37px;
        }
        //爱好/////////
        .live{
          display: inline-block;
          vertical-align: middle;
          margin-left: 24px;
        }
        #box{
          vertical-align: middle;
          display: inline-block;
          width: 300px;
          height: 37px;
          border:1px solid #e6e6e6;
          position: relative;
          background: white;
          #con{
            width: 250px;
            height: 37px;
            line-height: 37px;
            display: inline-block;
          }
          #ps{
            padding-left: 10px;
            line-height: 37px;
          }
          #uls{
            /*display: none;*/
            position:absolute;
            left: 0px;
            top: 37px;
            box-shadow: 0 0 5px;
            background: white;
            li{
              line-height: 37px;
              list-style: none;
              width: 300px;
              height: 37px;


            }
          }

        }
        /*原始复选框*/
        .check{
          padding-top: 15px;
          overflow: hidden;
          label{
            float: left;
            margin-right: 10px;
          }
          input{
            float: left;
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
        }
        /*单选按钮*/
        .radio{
          /*padding-top: 15px;*/
          overflow: hidden;
          label{
            margin-right: 10px;
            float: left;
            display: inline-block;
            vertical-align: middle;

          }
          input{
            margin-right: 10px;
            width: 20px;
            float: left;
            height: 20px;
          }
        }
          /*下拉列表*/
          .address{
              select{
                  width: 80px;
                  height: 30px;
              }
          }

        /*文本域*/
        .text{
            margin-top: 8px;
          textarea{
            margin-left: 100px;
          }
        }
        /*提交按钮*/
        input:nth-of-type(6){
            width: 100px;
            border: 0;
            border-radius: 5px;
            background: #009688;
            color: white;
            margin-left: 100px;
        }
        input:nth-of-type(7){
          border-radius: 5px;
          width: 100px;
          border: 0;
        }
      }
        /*说明*/
        .state{
            width: 90%;
            min-height: 60px;
            box-shadow: 0 0 5px;
            background: white;
        }
    }

</style>
