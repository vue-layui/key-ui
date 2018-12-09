<template>
    <div class="K-all LayOutBox">

      <div class="Keybtn1">
        <div class="flex">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div class="K-ae">
          <button class="K-add">button</button>
        </div>
      </div>
      <div class="K-row row1">
        <input type="checkbox" id="simple_1">
        <label for="simple_1"></label>
        <input type="checkbox" id="simple_2">
        <label for="simple_2" class="red"></label>
        <input type="checkbox" id="simple_3">
        <label for="simple_3" class="green"></label>
      </div>
      <div class="K-all K_But">
        <div class="K-ord">a</div>
        <div class="K-ord">b</div>
        <div class="K-ord">c</div>
      </div>
      <div class="K-all K_But">
        <div class="K-ord">a</div>
        <div class="K-ord">c</div>
      </div>
      <div class="K-all K_But">
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
      </div>
      <div class="K-all K_But">
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
        <div class="K-ord">a</div>
      </div>
      <div>
        <button class="K-btn">
          基础按钮
        </button>
        <button class="K-btn1">
          基础按钮
        </button>
        <button class="K-btn2">
          基础按钮
        </button>
      </div>

      <!--/2/-->
      <div>
        <button class="K-btn3">
          基础按钮
        </button>
        <button class="K-btn4">
          基础按钮
        </button>
        <button class="K-btn5">
          基础按钮
        </button>
      </div>

      <!--/3/-->
      <div>
        <button class="K-btn6">
          基础按钮
        </button>
        <button class="K-btn7">
          基础按钮
        </button>
        <button class="K-btn8">
          基础按钮
        </button>
      </div>
      <!--/4/-->
     <div>
       <button class="K-btn9">
         基础按钮
       </button>
       <button class="K-btn10">
         基础按钮
       </button>
       <button class="K-btn11">
         基础按钮
       </button>
     </div>
      <!--/5/-->
      <div>
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
