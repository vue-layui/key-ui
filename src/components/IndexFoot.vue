<template>
  <div>

    <div class="Foot">
      <div class="K-Card">
        <h4>返璞归真</h4>
        <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。而 layui 偏偏回望当初，奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于原生态的书写指令，试图以最简单的方式诠释高效。</p>
      </div>
      <div class="K-Card">
        <h4>双面体验</h4>
        <p>拥有双面的不仅是人生，还有 layui。一面极简，一面丰盈。极简是视觉所见的外在，是开发所念的简易。丰盈是倾情雕琢的内在，是信手拈来的承诺。一切本应如此，简而全，双重体验。</p>
      </div>
      <div class="K-Card">
        <hr>
        <h4>返璞归真</h4>
        <hr>
        <p>拥有双面的不仅是人生，还有 layui。一面极简，一面丰盈。极简是视觉所见的外在，是开发所念的简易。丰盈是倾情雕琢的内在，是信手拈来的承诺。一切本应如此，简而全，双重体验。</p>
      </div>

    </div>
    <load-ing>

    </load-ing>
  </div>
</template>

<script>
  import LoadIng from '../components/LoadIng'
  export default {
    name: "IndexFoot",
    components: {
      LoadIng
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .Foot {
    width: 100%;
    height: 300px;
    background: #fff;
    margin-top: 60px;
    display: flex;

    .K-Card {
      padding: 20px;
      margin: 10px;
      font-size: 14px;
      color: #2F4056;
      text-align: center;
      border: 1px solid #9F9F9F;

      h4 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      p {
        display: inline;
      }
    }
  }
</style>
