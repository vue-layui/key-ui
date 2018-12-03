<template>
        <button @click="alert">点我试试</button>
</template>

<script>
    export default {
        name: "Popover",
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
                content.innerHTML="今天也要加油鸭~";
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
