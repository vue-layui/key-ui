<template class="team">
    <div class="teamall">
    <div class="teamheader">
        <h3>关于KeyUI</h3>
        <h4>团队介绍</h4>
    </div>
        <div class="Coreteam">
            <h2>核心团队</h2>
            <h3>Core team</h3>
        </div>
        <div class="nameall" id="nameall2">
            <div class="name">
                <img src="../assets/imgs/lzk.jpg" alt="">
                <p>梁志科 Williams</p>
                <span></span>
                <p class="introduce">
                    王恒先生，前西安搜腾网络科技有限公司高级前端工程师，
                    拥有3年前端开发经验，擅长前端最新框架的发现，测试和使用，
                    关注新技术的学习和开发。在本次项目中担任项目架构和总负责人。
                </p>
            </div>
            <div class="name">
                <img src="../assets/imgs/zsj.jpg" alt="">
                <p>周思佳 Stella</p>
                <span></span>
                <p class="introduce">
                    王恒先生，前西安搜腾网络科技有限公司高级前端工程师，
                    拥有3年前端开发经验，擅长前端最新框架的发现，测试和使用，
                    关注新技术的学习和开发。在本次项目中担任项目架构和总负责人。
                </p>
            </div>
        </div>
        <div class="name" id="name2">
            <img src="../assets/imgs/wh.jpg" alt="">
            <p>王恒 Williams</p>
            <span></span>
            <p class="introduce">
                王恒先生，前西安搜腾网络科技有限公司高级前端工程师，
                拥有3年前端开发经验，擅长前端最新框架的发现，测试和使用，
                关注新技术的学习和开发。在本次项目中担任项目架构和总负责人。
            </p>
        </div>
        <div class="nameall nameall2">
            <div class="name">
                <img src="../assets/imgs/wwq.jpg" alt="">
                <p>王文琪 Winter</p>
                <span></span>
                <p class="introduce">
                    王文琪，前陕西中悦网络科技有限公司高级前端工程师，兼市场部经理，
                    拥有2年前端开发经验，与6年软件公司就职经验。喜爱挑战自我，不断学习新事物。擅长交互效果，产品功能模块设计，客户对接，
                    喜爱研究客户体验。在本次框架项目中担任产品功能设计，交互设计。
                </p>
            </div>
            <div class="name">
                <img src="../assets/imgs/nwr.jpg" alt="">
                <p>聂文茹 vikki</p>
                <span></span>
                <p class="introduce">
                    王恒先生，前西安搜腾网络科技有限公司高级前端工程师，
                    拥有3年前端开发经验，擅长前端最新框架的发现，测试和使用，
                    关注新技术的学习和开发。在本次项目中担任项目架构和总负责人。
                </p>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "team"
    }
</script>

<style scoped>
    .team{
        width: 100%;
    }
.teamheader{
    float: right;
    width: 85.5%;
    height: 200px;
    margin:75px auto;
    background: url("../assets/imgs/background.jpg") no-repeat;
    background-size: cover;
}
 .teamheader h3,.teamheader h4{
     color: white;
     text-align: center;
 }
    .teamheader h3{
        font-size: 40px;
        /*line-height: 20px;*/
        margin-top: 40px;
        letter-spacing:5px;
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
        margin-left: 14%;
    }
    .Coreteam h2{
        letter-spacing:5px;
    }
    .Coreteam h3{
        letter-spacing:10px;
        color: #2385d5;
    }
    .nameall{
        width: 100%;
        margin: 50px 90px ;
    }
    .name{
        width: 35%;
        border: 1px solid #cccccc;
        margin: 0 auto;
        float: left;
        margin-right: 5%;
    }
    .name img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-left: 35%;
        margin-top: 10px;
    }
    .name p:nth-child(2){
        color: #2385d5;
        text-align: center;
        font-size: 20px;
        line-height: 10px;
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
    }
    #name2{
        margin-left: 39%;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .footer{
        width: 100%;
        height: 50px;
        clear: both;
    }
</style>