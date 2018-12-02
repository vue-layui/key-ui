<template>
    <div class="K-all">
        <div class="K-kay">
          <div class="K-left">

          </div>
          <div class="K-right">

          </div>
        </div>
      <div class="K-all">
        <div class="K-ord">a</div>
        <div class="K-ord">b</div>
        <div class="K-ord">c</div>
      </div>
      <div class="K-all">
        <div class="K-ord">a</div>
        <div class="K-ord">c</div>
      </div>
      <div class="K-all">
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
      </div>
      <div class="K-all">
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
      </div>
      <button class="K-btn">
          基础按钮
      </button>
      <button class="K-btn1">
        基础按钮
      </button>
      <button class="K-btn2">
        基础按钮
    </button>
      <!--/2/-->
      <button class="K-btn3">
        基础按钮
      </button>
      <button class="K-btn4">
        基础按钮
      </button>
      <button class="K-btn5">
        基础按钮
      </button>
      <!--/3/-->
      <button class="K-btn6">
        基础按钮
      </button>
      <button class="K-btn7">
        基础按钮
      </button>
      <button class="K-btn8">
        基础按钮
      </button>
      <!--/4/-->
      <button class="K-btn9">
        基础按钮
      </button>
      <button class="K-btn10">
        基础按钮
      </button>
      <button class="K-btn11">
        基础按钮
      </button>
      <!--/5/-->
      <button class="K-btn12">
        基础按钮
      </button>
      <button class="K-btn13">
        基础按钮
      </button>
      <button class="K-btn14">
        基础按钮
      </button>
    </div>
</template>

<script>
    export default {
        name: "LayOut",
        created() {

        }
    }
</script>

<style lang="scss" scoped>

  .pop-click,.pop-btn {
    padding:10px 15px;
    border:1px solid #EEEEEE;
    background:white;
    border-radius:5px;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
  }
  .pop-btn {
    margin-top:15px;
  }
  .pop-cover {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.5);
    z-index:1;
    display:none;
  }
  .pop {
    width:20%;
    position:fixed;
    top:0;
    left:50%;
    transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    border:1px solid #EEEEEE;
    text-align:center;
    background:white;
    padding:20px;
    box-shadow:0 0 10px rgba(0,0,0,.5);
    -webkit-box-shadow:0 0 10px rgba(0,0,0,.5);
    border-radius:5px;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    animation:popv 0.3s both;
    -moz-animation:popv 0.3s both;
    -ms-animation:popv 0.3s both;
    -webkit-animation:popv 0.3s both;
    z-index:2;
    opacity:0;
    display:none;
  }
</style>
