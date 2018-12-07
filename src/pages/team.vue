<template class="team">
    <div class="teamall">
        <index-header>

        </index-header>
    <div class="teamheader">
        <!--<h3>关于KeyUI</h3>-->
        <words style="margin-top:-180px;"></words>
        <h4>团队介绍</h4>
    </div>
        <div class="Coreteam">
            <h2>核心团队</h2>
            <h3>Core team</h3>
        </div>
        <div class="nameall" id="nameall2">
            <div class="name">
                <div class="teamPicbox teamPicbox1">
                    <img src="../assets/imgs/lzk.jpg" alt="">
                </div>

                <p>梁志科 Williams</p>
                <span></span>
                <p class="introduce">
                    <i class="Name">梁志科</i>，前西安搜腾网络科技有限公司高级前端工程师，
                    拥有2年前端开发经验，勤奋认真，做事积极热情，有较强的责任心和耐心
                    关注新技术的学习和开发。在本次项目中担任测试师及高级前端开发工程师。
                </p>
            </div>
            <div class="name">
                <div class="teamPicbox teamPicbox2">
                   <img src="../assets/imgs/zsj.jpg" alt="">
                </div>
                <p>周思佳 Stella</p>
                <span></span>
                <p class="introduce">
                    <i class="Name">周思佳</i>
                    ，前西安搜腾网络科技有限公司高级前端工程师，拥有2年前端开发经验，
                    对于前端设计有着无与伦比的热情，喜欢主动学习新鲜技术；性格开朗，积极向上。
                    在本次项目中担任设计师和高级前端工程师。
                </p>
            </div>
        </div>
        <div class="name" id="name2">
            <div class="teamPicbox teamPicbox3">
               <img src="../assets/imgs/wh.jpg" alt="">
            </div>
            <p>王恒 Williams</p>
            <span></span>
            <p class="introduce">
                <i class="Name">王恒</i>
                ，前西安搜腾网络科技有限公司高级前端工程师，
                拥有3年前端开发经验，擅长前端最新框架的发现，测试和使用，
                关注新技术的学习和开发。在本次项目中担任项目架构和总负责人。
            </p>
        </div>
        <div class="nameall nameall2">
            <div class="name">
                <div class="teamPicbox teamPicbox4">
                    <img src="../assets/imgs/wwq.jpg" alt="">
                </div>
                <p>王文琪 Winter</p>
                <span></span>
                <p class="introduce">
                    <i class="Name">王文琪</i>
                    ，前陕西中悦网络科技有限公司高级前端工程师，兼市场部经理，
                    拥有2年前端开发经验与6年软件公司就职经验。喜爱挑战自我，不断学习新事物。擅长交互效果，产品功能模块设计，客户对接，
                    喜爱研究客户体验。在本次框架项目中担任产品功能设计，交互设计。
                </p>
            </div>
            <div class="name">
                <div class="teamPicbox teamPicbox5">
                   <img src="../assets/imgs/nwr.jpg" alt="">
                </div>
                <p>聂文茹 Vikki</p>
                <span></span>
                <p class="introduce">
                    <i class="Name">聂文茹</i>
                    ，前西安搜腾网络科技有限公司高级前端工程师，
                    拥有1年前端开发经验，擅长前端最新框架的发现，测试和使用，
                    环境适应能力较强，并且具有团队合作意识。在本次项目中担任产品设计及高级前端开发工程师。
                </p>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    import IndexHeader from '../components/IndexHeader'
    import words from '../components/words'
    export default {
        name: "team",
        components:{
            IndexHeader,
            words
        },
        mounted(){
            $(".teamPicbox1").mouseenter(function(){

               $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                   $(this).find("img").attr("src","../../static/img/lzk1.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            $(".teamPicbox1").mouseleave(function(){
                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/lzk.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
          //zsj
            $(".teamPicbox2").mouseenter(function(){

                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/zsj1.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            $(".teamPicbox2").mouseleave(function(){
                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/zsj.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            //wh
            $(".teamPicbox3").mouseenter(function(){

                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/wh1.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            $(".teamPicbox3").mouseleave(function(){
                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/wh.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            //wwq
            $(".teamPicbox4").mouseenter(function(){

                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/wwq1.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            $(".teamPicbox4").mouseleave(function(){
                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/wwq.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            //nwr
            $(".teamPicbox5").mouseenter(function(){

                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/nwr1.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
            $(".teamPicbox5").mouseleave(function(){
                $(this).find("img").animate({
                    width:0,
                    left:75
                },500,()=>{
                    $(this).find("img").attr("src","../../static/img/nwr.jpg").animate({
                        width:150,
                        left:0
                    },500)
                });
            });
        }
    }
</script>

<style scoped>
    .team{
        width: 100%;
    }
    .teamall{
        background:#ccc;
    }
    .Name{
        font-size:18px;
        color:red;
        font-style: normal;
    }
.teamheader{
    width: 100%;
    height: 200px;
    background: url("../assets/imgs/background.jpg") no-repeat;
    background-size: cover;
    display:flex;
}
 .teamheader h3,.teamheader h4{
     color: white;
     text-align: center;
 }
    .teamheader h4{
        font-size: 30px;
        font-weight: normal;
        line-height: 0;
        letter-spacing:5px;
    }
    .Coreteam{
        clear: both;
        text-align: center;
    }
    .Coreteam h2{
        margin-top:20px;
        letter-spacing:5px;
    }
    .Coreteam h3{
        letter-spacing:10px;
        color: #2385d5;
    }
    .nameall{
        width: 100%;
        margin: 50px 0;
    }
    .name{
        width: 35%;
        border: 1px solid #cccccc;
        margin: 0 auto;
        float: left;
        margin-right: 5%;
    }
    .teamPicbox{
        width: 150px;
        height: 150px;
        margin-left: 35%;
        margin-top: 10px;
        position:relative;
    }
    .teamPicbox img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        position:absolute;
        top:0;
        left:0;
    }
    .name p{
       margin-top:15px;
    }
    .name p:nth-child(2){
        color: #2385d5;
        text-align: center;
        font-size: 20px;
        line-height: 10px;
        padding-bottom:15px;
    }
    .nameall .name:first-child{
        margin-left: 12%;
    }
    .name span{
        display: block;
        width: 30px;
        height: 5px;
        background: #2385d5;
        margin:0 auto;
    }
    .introduce{
        width: 90%;
        margin: 10px auto;
        text-indent: 40px;
    }
    #name2{
        margin-left: 32%;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .footer{
        width: 100%;
        height: 50px;
        clear: both;
    }
</style>