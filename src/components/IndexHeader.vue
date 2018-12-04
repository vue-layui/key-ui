<template>
  <div>
    <div class="Head">
        <div class="k-col">
          <a href="#" class="LOGO"><img src="../../static/img/logo.png" alt=""></a>
          <div class="Serch">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="k-col1">
          <PopUp></PopUp>
        </div>
    </div>
  </div>
</template>

<script>
  import PopUp from './PopUp'
  export default {
      components:{
        PopUp
      }
  }
</script>

<style lang="scss" scoped>
.Head{
  width: 100%;
  height:60px ;
  z-index: 999;
  background: #4E5465;
  position: fixed;
  top: 0;
  left: 0;
}
  .k-col{
    width: 40%;
    height: 100%;
    float: left;
  }
  .k-col1{
    width: 60%;
    height: 100%;
    float: left;
  }
  .LOGO{
      padding-left:50px;
    display: block;
    float: left;
    width: 150px;
    height: 100%;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
    color: #fff;
    img{
      width: 100%;
      height: 60px;
    }
  }
  .Serch{
    margin-left: 40px;
    display: flex;
    align-items: center;
    float: left;
    text-align: center;
    height: 100%;
      .layui-input{
          border-radius:8px;
          padding-left:10px;
          width:200px;
          height:36px;
          background:#2F4056;
          outline: none;
          border:0;
      }
  }
</style>
