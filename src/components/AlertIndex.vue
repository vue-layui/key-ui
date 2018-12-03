<template>
    <div class="AlertPage">
        <p class="KeyuiNavTit">弹出框相关-页面元素</p>
        <hr class="KeyHr"/>
        <div class="KeyUiP">
            Alerter 至今仍作为 Keyui 的代表作，她的受众广泛并非偶然，而是这数年来的坚持、不弃的执念，将那些不屑的眼光转
            化为应得的尊重， 不断完善和维护、不断建设和提升社区服务, 不过请注意 Alerter 只是作为 Keyui 的一个弹层模块，
            由于 其用户基数较大，所以至今仍把她作为独立组件来维护。不过请注意：无论是独立的 Alerter，还是作为内置模块
            Alerter，文档都以本页为准。
        </div>
        <!--常规弹窗及代码展示-->
        <h5>常规弹窗</h5>
        <Popover class="GerenalAlert"></Popover>
        <div class="KeyUiNavCode">
            <p>组件代码</p>
            <div class="NavCode">
                <textarea name="" readonly >

                        <template>
                                <button @click="alert"> 点我试试</button>
                        </template>

                        <script>
                            export default {
                                name: "Popover",
                                props:[
                                    "collect"
                                ],
                                methods:{
                                    alert(){
                                        //创建一个遮罩层
                                        let master = document.createElement("div");
                                        master.setAttribute("class","master1");
                                        master.style.backgroundColor = "#000";
                                        master.style.opacity="0.4";
                                        master.style.width = "100%";
                                        master.style.height = "100%";
                                        master.style.position="fixed";
                                        master.style.left="0";
                                        master.style.top="0";
                                        master.style.zIndex="1";
                                        //创建一个弹出框
                                        let div = document.createElement("div");
                                        div.style.backgroundColor="#fff";
                                        div.style.width = "240px";
                                        div.style.height = "140px";
                                        div.style.position="fixed";
                                        div.style.borderRadius="5px";
                                        div.style.left="40%";
                                        div.style.top="50%";
                                        div.style.zIndex="2";
                                        //创建弹出框标题
                                        let PDom = document.createElement("p");
                                        PDom.style.paddingLeft="5px";
                                        PDom.innerHTML="提示";
                                        PDom.style.color="#fff";
                                        PDom.style.boxSizing="border-box"
                                        PDom.style.backgroundColor = "#1e9fff";
                                        PDom.style.width = "240px";
                                        PDom.style.height = "30px";
                                        //创建弹出框内容
                                        let content = document.createElement("h4");
                                        content.innerHTML="今天也要开心呀~";
                                        content.style.fontSize="14px";
                                        content.style.textAlign="center";
                                        content.style.lineHeight="40px";
                                        content.style.fontStyle="100";
                                        //弹出框确定按钮
                                        let BtnDom = document.createElement("button");
                                        BtnDom.innerHTML="确定";
                                        BtnDom.style.backgroundColor="#1e9fff";
                                        BtnDom.style.width = "40px";
                                        BtnDom.style.border="none";
                                        BtnDom.style.display="block"
                                        BtnDom.style.margin="40px auto";
                                        BtnDom.style.height = "25px";
                                        BtnDom.style.fontSize="14px";

                                        BtnDom.addEventListener('click',function(e){
                                            div.style.display="none";
                                            master.style.display="none";
                                        });

                                        //将内容与标题追加到弹出框
                                        div.appendChild(PDom);
                                        div.appendChild(content);
                                        div.appendChild(BtnDom);

                                        //把弹出框及遮罩层追加到body
                                        document.getElementsByTagName("body").item(0).appendChild(div);
                                        document.getElementsByTagName("body").item(0).appendChild(master);
                                    }
                                }
                            }
                        </script>
                        <style scoped lang="scss">
                        </style>

                </textarea>
            </div>
        </div>

        <!--旋转弹窗及代码展示-->
        <h5>动画弹窗——旋转出现</h5>
        <AnimatAlert></AnimatAlert>
        <div class="KeyUiNavCode">
            <p>组件代码</p>
            <div class="NavCode">
                <textarea name="" readonly >

                        <template>
                                <div>
                                    <button @click="alert()" class="GerenalAlertBtn">点我试试</button>
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
                                    name: "Popover",
                                    methods:{
                                        alert(){
                                            document.getElementsByTagName('nav')[0].className = "AlertBox AlertBox_active";
                                            document.querySelector(".master").style.display="block";
                                        },
                                        closeAlert(){
                                            document.getElementsByTagName('nav')[0].className = "AlertBox";
                                            document.querySelector(".master").style.display="none";
                                        }
                                    }
                                }
                            </script>
                            <style lang="scss" scoped>
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
                                    border-radius: 5px;
                                    transform: scale(0) rotate(360deg);
                                    transition: all 0.75s;
                                }
                                .AlertBox_active{
                                    transform: scale(1) rotate(0deg);
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
                </textarea>
            </div>
        </div>

        <!--跳一跳弹窗及代码展示-->
        <h5>动画弹窗——跳一跳出现</h5>
        <jumpAlert></jumpAlert>
        <div class="KeyUiNavCode">
            <p>组件代码</p>
            <div class="NavCode">
                <textarea name="" readonly >
                        <template>
                            <div>
                                <button @click="alert1()" class="GerenalAlertBtn">点我试试</button>
                                <!--遮罩层-->
                                <div class="master"></div>
                                <!--弹出框-->
                                <h3 class="AlertBox">
                                    <p>提示</p>
                                    <h4>你确定要删除这条数据吗</h4>
                                    <button @click="closeAlert" class="closebtn">确定</button>
                                </h3>
                            </div>

                        </template>

                        <script>
                            export default {
                                name: "Popover",
                                methods:{
                                    alert1(){
                                        document.getElementsByTagName('h3')[0].className = "AlertBox AlertBox_active";
                                        document.querySelector(".master").style.display="block";
                                    },
                                    closeAlert(){
                                        document.getElementsByTagName('h3')[0].className = "AlertBox";
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
                                background:#c8268d;
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
                                opacity:0;
                                border-radius: 5px;
                            }
                            .AlertBox_active{
                                opacity: 1;
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

                </textarea>
            </div>
        </div>
        
    </div>

</template>

<script>
    import  Popover from "./Alert/Popover"
    import  AnimatAlert from "./Alert/AnimatAlert"
    import  jumpAlert from "./Alert/jumpAlert"
    export default {
        name: "AlertIndex",
        components:{
            Popover,
            AnimatAlert,
            jumpAlert
        }
    }
</script>

<style lang="scss" scoped>
.AlertPage{
    margin-left:200px;
    padding-top:60px;
    padding-left:20px;
    padding-right:20px;
    box-sizing:border-box;
}
.KeyuiNavTit{
    padding-top:10px;
    font-size:30px;
}
.KeyHr{
    margin-top:10px;
    margin-bottom:20px;
}
.KeyUiP{
    width:96%;
    padding:10px 20px;
    background:#f2f2f2;
    border-left:4px solid #009688;
    font-size:16px;
    border-radius: 3px;
}
h5{
    font-size:20px;
    line-height:60px;
    color:#2F4056;
}
.GerenalAlert{
    width:100px;
    height:34px;
    line-height:34px;
    border:0;
    border-radius: 5px;
    color:#fff;
    background:#009688;
}

.KeyUiNavCode{
    width:90%;
    border:1px solid #ccc;
    margin-top:10px;
    p{
        width:100%;
        padding-left:10px;
        background:#f2f2f2;
        height:30px;
        line-height:30px;
        color:#737383;
        font-size:16px;
        box-sizing: border-box;
        border-bottom:1px solid #ccc;
    }

    textarea{
        width:100%;
        height:500px;
        background: #f0f0f0;
        border:0;
        resize:none;
    }
}

</style>
