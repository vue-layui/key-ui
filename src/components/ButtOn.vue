<template>
  <div class="K-dis">
    <div class="introduction"><p>这是一段按钮样式选择</p></div>
    <div class="K-bbox">
      <div class="K-pe">
      <button class="K-btn">
        K-btn
      </button>
      <button class="K-btn1">
        K-btn1
      </button>
      <button class="K-btn2">
        K-btn2
      </button>
      <!--/2/-->
      <button class="K-btn3">
        K-btn3
      </button>
      <button class="K-btn4">
        K-btn4
      </button>
      <button class="K-btn5">
        K-btn5
      </button>
      </div>
      <!--/3/-->
      <div class="K-pe">
      <button class="K-btn6">
        K-btn6
      </button>
      <button class="K-btn7">
        K-btn7
      </button>
      <button class="K-btn8">
        K-btn8
      </button>
      <!--/4/-->
      <button class="K-btn9">
        K-btn9
      </button>
      <button class="K-btn10">
        K-btn10
      </button>
      <button class="K-btn11">
        K-btn11
      </button>
      </div>
      <!--/5/-->
      <button class="K-btn12">
        K-btn12
      </button>
      <button class="K-btn13">
        K-btn13
      </button>
      <button class="K-btn14">
        K-btn14
      </button>
    </div>
    <div class="introduction"><p>这是按钮的样式开关，使用时加上class名即可</p></div>
    <div class="row">
      <input type="checkbox" id="simple_1">
      <label for="simple_1"></label>
      <input type="checkbox" id="simple_2">
      <label for="simple_2" class="red"></label>
      <input type="checkbox" id="simple_3">
      <label for="simple_3" class="green"></label>
    </div>

    <div class="row">
      <input type="checkbox" id="md_1">
      <label for="md_1"></label>
      <input type="checkbox" id="md_2">
      <label for="md_2" class="red"></label>
      <input type="checkbox" id="md_3">
      <label for="md_3" class="green"></label>
    </div>

    <div class="row">
      <input type="checkbox" id="mds_1">
      <label for="mds_1"></label>
      <input type="checkbox" id="mds_2">
      <label for="mds_2" class="red"></label>
      <input type="checkbox" id="mds_3">
      <label for="mds_3" class="green"></label>
    </div>

    <div class="row">
      <input type="checkbox" id="border_1">
      <label for="border_1"></label>
      <input type="checkbox" id="border_2">
      <label for="border_2" class="red"></label>
      <input type="checkbox" id="border_3">
      <label for="border_3" class="green"></label>
    </div>

    <div class="row">
      <input type="checkbox" id="inset_1">
      <label for="inset_1"></label>
      <input type="checkbox" id="inset_2">
      <label for="inset_2" class="red"></label>
      <input type="checkbox" id="inset_3">
      <label for="inset_3" class="green"></label>
    </div>

    <div class="row">
      <input type="checkbox" id="box_1">
      <label for="box_1"></label>
      <input type="checkbox" id="box_2">
      <label for="box_2" class="red"></label>
      <input type="checkbox" id="box_3">
      <label for="box_3" class="green"></label>
    </div>

    <div class="introduction"><p>还可以是别的样式的按钮</p></div>

    <div class="K-ae">
      <button class="K-add">button</button>
    </div>
    <a class="btn-epic" href="#">
      <div><span>Get Ticket</span><span>Get Ticket</span></div>
    </a>
  </div>

</template>

<script>
  export default {
    name: "ButtOn"
  }
</script>

<style lang="scss" scoped>
  .K-dis {
    margin-left: 230px;
  }
</style>
