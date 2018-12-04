<template>
  <div>

    <div class="Foot">
      <div class="K-Card">
        <h4 @click="back($event)">返璞归真</h4>
        <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。而 Keyui 偏偏回望当初，奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于原生态的书写指令，试图以最简单的方式诠释高效。</p>
      </div>
      <div class="K-Card">
        <h4>双面体验</h4>
        <p>拥有双面的不仅是人生，还有 Keyui。一面极简，一面丰盈。极简是视觉所见的外在，是开发所念的简易。丰盈是倾情雕琢的内在，是信手拈来的承诺。一切本应如此，简而全，双重体验。</p>
      </div>
      <div class="K-Card">
        <h4>星辰大海</h4>
        <p>如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。待，秋风萧瑟时，散作满天星辰，你看那四季轮回，正是 Keyui 不灭的执念。</p>
      </div>
    </div>
    <keyUiLogo></keyUiLogo>
  </div>
</template>

<script>
  import keyUiLogo from '../components/common/keyUiLogo'
  export default {
    name: "IndexFoot",
    components: {
        keyUiLogo
    },
    methods: {
      back(e) {
        console.log(e.target)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Foot {
    width: 100%;
    height: 450px;
    background: #eee;
    padding-top: 100px;
    display: flex;
    box-sizing: border-box;
    .K-Card {
      padding: 50px;
      margin: 30px;
      font-size: 14px;
      color: #2F4056;
      text-align: center;
      border: 1px solid #666;
       border-radius: 15px;
      box-shadow: 0 0 10px 0 #2F4056;
      h4 {
        font-size: 20px;
        margin-bottom: 30px;
      }

      p {
        display: inline;
        line-height:24px;
      }
     }
  }

</style>
