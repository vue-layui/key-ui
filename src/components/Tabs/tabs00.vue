<template>
    <div class="big">
      <div class="tabss">
        <input type="radio" name="tabs" id="tabone" checked="checked">
        <label for="tabone">
          Tab One
        </label>
        <div class="tab1">
          <h1>
            Tab One Content
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <input type="radio" name="tabs" id="tabtwo">
        <label for="tabtwo">
          Tab Two
        </label>
        <div class="tab1">
          <h1>
            Tab Two Content
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <input type="radio" name="tabs" id="tabthree">
        <label for="tabthree">
          Tab Three
        </label>
        <div class="tab1">
          <h1>
            Tab Three Content
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabs00"
    }
</script>

<style scoped>
  /**
   * Tabs
   */
  .big{
    width: 60%;
  }
  .tabss{
    display:flex;
    flex-wrap:wrap;

  }
  .tabss label {
    order:1;

  display:block;
    padding:1rem 2rem;
    margin-right:0.2rem;
    cursor:pointer;
    background:#90CAF9;
    font-weight:bold;
    transition:background ease 0.2s;
  }
  .tabss .tab1 {
    order:99;
    height:250px;
  flex-grow:1;
    width:100%;
    display:none;
    padding:1rem;
    background:#fff;
  }
  .tabss input[type="radio"] {
    position:absolute;
    opacity:0;
  }
  .tabss input[type="radio"]:checked + label {
    background:#fff;
  }
  .tabss input[type="radio"]:checked + label + .tab1 {
    display:block;
  }
  @media (max-width:45em) {
    .tabss .tab,.tabss label {
      order:initial;
    }
    .tabss label {
      width:100%;
      margin-right:0;
      margin-top:0.2rem;
    }
  }/**
 * Generic Styling
*/
  /*body {*/
    /*background:#eee;*/
    /*padding:10vw;*/
    /*font-family:"HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;*/
    /*font-weight:300;*/
    /*line-height:1.5;*/
    /*max-width:60rem;*/
    /*margin:0 auto;*/
    /*font-size:112%;*/
  /*}*/

</style>
