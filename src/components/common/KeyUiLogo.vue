<template>
    <div class="KeyCopyright">
        <p>©2018 KeyUI 天码团队</p>
        <h3><img src="../../../static/img/timg.jpg" alt="">&nbsp;&nbsp;&nbsp;&nbsp;提供技术支持</h3>
    </div>
</template>

<script>
    export default {
        name: "KeyUiLogo"
    }
</script>

<style scoped lang="scss">
    .KeyCopyright {
        height: 50px;
        margin: 0 auto;
        margin-top: 150px;
        text-align: center;
        p {
            font-size: 14px;
            color: #999;
        }
        h3 {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #333;
            display: flex;
            padding-top: 5px;
            justify-content: center;
            img {
                width: 60px;
                height: 30px;
            }
        }
    }
</style>