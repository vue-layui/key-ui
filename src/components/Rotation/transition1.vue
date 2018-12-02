<template>
  <div id="app">

    <nav class="nav-container">
      <svg viewBox="0 0 13 20" class="nav nav--prev" @click="nav(-1)" title="Prev">
        <polyline points="10,3 3,10 10,17"></polyline>
      </svg>

      <svg viewBox="0 0 13 20" class="nav nav--next" @click="nav(1)" title="Next">
        <polyline points="10,3 3,10 10,17" transform="rotate(180 6.5,10)"></polyline>
      </svg>
    </nav>

    <transition-group tag="div" class="slide-group" :name="transitionName" @before-leave="sgBeforeLeave">

      <h1 class="slide-group__header" key="title">FLIPing Slides With <code>&lt;transition-group&gt;</code></h1>

      <div :key="current" class="slide" @click="nav(1)">
        <img :src="slides[current].image" width="800" height="200" />
        <div v-html="slides[current].content"></div>
      </div>

      <div key="checkbox">
        <label class="toggle">
          <input v-model="use3d" type="checkbox" /> 3D Transition</label>
      </div>

      <footer class="slide-group__footer" key="footer"><small>Notice how this small text and the title above smoothly transition to new positions based on the height of the new content? That's FLIPing awesome.</small>
      </footer>
    </transition-group>

    <!-- super simple 'preloader' for the images -->
    <div class="preloader">
      <img v-for="slide in slides" :src="slide.image" />
    </div>

  </div>
</template>

<script>
    export default {
        name: "transition1",
      mounted(){
        setTimeout(()=>{ this.nav(1); },200);
      },

      methods: {

        nav(dir){
          this.dir = dir;
          var len = this.slides.length;
          // Loop around the array so last slide goes to first slide & vice-versa.
          this.current = ( ( this.current + dir % len) + len ) % len;
        },

        // When transitioning an element out, applying `position: absolute` or `position: fixed` keeps the container from snapping in size dramatically and helps the whole transition run smoother.
        // You can use CSS on the `-leave-active` class (see commented out CSS in the CSS tab), but that often leads to the element flying out in weird directions or snapping to the edges of the container.
        // Instead, let's apply the positioning in JavaScript with `position: fixed` and the right positioning + sizing to elements that are leaving so they don't snap in odd ways.
        sgBeforeLeave(el){
          var rect = el.getBoundingClientRect();
          el.style.width = (rect.right - rect.left) + 'px';
          el.style.height = (rect.bottom - rect.top) + 'px';
          el.style.position = 'fixed';
          el.style.top = rect.top + 'px';
          el.style.left = rect.left + 'px';
        }
      },

      computed: {
        transitionName(){
          return 'sg-' +
            ( this.use3d ? '3d-' : '' ) +
            ( this.dir > 0 ? 'right' : 'left' );
        }
      },

      data: ()=>({
        dir: 0,
        current: 0,
        use3d: true,
        slides: [{
          image: 'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658',
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt imperdiet, nibh elit laoreet felis, a bibendum nisl tortor non orci. Donec pretium fermentum felis, quis aliquet est rutrum ut. Integer quis massa ut lacus viverra pharetra in eu lacus.</p><p>Aliquam tempus odio adipiscing diam pellentesque rhoncus. Curabitur a bibendum est. Mauris vehicula cursus risus id luctus. Curabitur accumsan venenatis nibh, non feugiat a erat. Ut tempus iaculis augue vel pellentesque.</p>'
        }, {
          image: 'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658',
          content: '<p>Vestibulum nunc massa, gravida quis porta nec, feugiat id metus. Nunc ac arcu dolor, quis vestibulum leo. Cras viverra mollis ipsum, non rhoncus lectus aliquam et. Morbi faucibus purus sit amet lacus aliquet elementum. Donec sit amet posuere enim. Cras in eros id tortor fringilla ultricies. Mauris faucibus ullamcorper velit, pulvinar varius odio eleifend eu. </p>',
        }, {
          image: 'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658',
          content:
            '<p>Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet vulputate at, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio.</p><p>In elit urna, tincidunt a pellentesque et, scelerisque at nibh. Sed nec est sapien. Aliquam ullamcorper eros eu quam ultrices vel faucibus eros interdum. Etiam ma sapien, et sagittis nulla. Quisque id odio metus. Morbi adipiscing ultricies posuere. Pellentesque elementum porttitor eros in molestie. Maecenas ut leo quis nisi tempor tincidunt.</p>',
        }, {
          image: 'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658',
          content:
            '<p>Aliquoms nec luctus id, iaculis nec urna. Cras vitae mi ut augue ultricies tempus.</p>',
        },
        ]
      })
    }
</script>

<style scoped>
  .sg-left-move,
  .sg-right-move {
    -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: -webkit-transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97), -webkit-transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
  }
  .sg-left-leave-active,
  .sg-right-leave-active {
    -webkit-transition: opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92);
    transition: opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92);
    transition: opacity 0.3s linear, transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92);
    transition: opacity 0.3s linear, transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92), -webkit-transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92);
  }
  .sg-left-enter-active,
  .sg-right-enter-active {
    -webkit-transition: opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: opacity 0.3s linear, transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: opacity 0.3s linear, transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97), -webkit-transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    -webkit-transition-delay: .25s, .3s;
    transition-delay: .25s, .3s;
  }
  .sg-left-enter,
  .sg-right-enter,
  .sg-left-leave-to,
  .sg-right-leave-to {
    opacity: 0;
  }
  .sg-left-leave-to,
  .sg-right-enter {
    -webkit-transform: translateX(30%);
    transform: translateX(30%);
  }
  .sg-left-enter,
  .sg-right-leave-to {
    -webkit-transform: translateX(-30%);
    transform: translateX(-30%);
  }
  /* ////////////////////////////////////////////////////////////////////////// */

  .sg-3d-left-move,
  .sg-3d-right-move {
    -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: -webkit-transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97), -webkit-transform 0.6s cubic-bezier(0.29, 0.15, 0.24, 0.97);
  }
  .sg-3d-left-leave-active,
  .sg-3d-right-leave-active,
  .sg-3d-left-enter-active,
  .sg-3d-right-enter-active {
    -webkit-transform: perspective(700px) rotateY(0deg);
    transform: perspective(700px) rotateY(0deg);
  }
  .sg-3d-left-leave-active,
  .sg-3d-right-leave-active {
    -webkit-transition: opacity 0.1s linear, -webkit-transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92);
    transition: opacity 0.1s linear, -webkit-transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92);
    transition: transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92), opacity 0.1s linear;
    transition: transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92), opacity 0.1s linear, -webkit-transform 0.3s cubic-bezier(0.64, 0.01, 0.67, 0.92);
    -webkit-transition-delay: 0s, .2s;
    transition-delay: 0s, .2s;
  }
  .sg-3d-left-enter-active,
  .sg-3d-right-enter-active {
    -webkit-transition: opacity 0.1s linear, -webkit-transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: opacity 0.1s linear, -webkit-transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    transition: transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97), opacity 0.1s linear;
    transition: transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97), opacity 0.1s linear, -webkit-transform 0.3s cubic-bezier(0.29, 0.15, 0.24, 0.97);
    -webkit-transition-delay: .2s, .2s;
    transition-delay: .2s, .2s;
  }
  .sg-3d-left-enter,
  .sg-3d-right-enter,
  .sg-3d-left-leave-to,
  .sg-3d-right-leave-to {
    opacity: 0;
  }
  .sg-3d-left-leave-to,
  .sg-3d-right-enter {
    -webkit-transform: perspective(700px) translateZ(-300px) rotateY(90deg);
    transform: perspective(700px) translateZ(-300px) rotateY(90deg);
  }
  .sg-3d-left-enter,
  .sg-3d-right-leave-to {
    -webkit-transform: perspective(700px) translateZ(-300px) rotateY(-90deg);
    transform: perspective(700px) translateZ(-300px) rotateY(-90deg);
  }
  /* ////////////////////////////////////////////////////////////////////////// */

  .slide-group {
    width: 80%;
    max-width: 30em;
    margin-left: 5%;
    text-align: center;
  }
  .slide {
    background: #FFF;
    text-align: left;
    border: solid 1px #ccc;
    padding: 1rem;
    margin: 1rem 0;
  }
  .slide img {
    display: block;
    margin-bottom: 1rem;
  }
  /* ////////////////////////////////////////////////////////////////////////// */
#app{
  position: relative;
}
  .nav-container {
    width: 100%;
    max-width: 36em;
    /*margin: auto;*/
    position: absolute;
    /*position: fixed;*/
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    z-index: 2;
  }
  .nav {
    display: block;
    width: 2em;
    fill: none;
    stroke: #000;
    cursor: pointer;
    -webkit-transition: stroke 0.2s linear;
    transition: stroke 0.2s linear;
  }
  .nav:hover,
  .nav:focus {
    stroke: #f15268;
  }
  /* ////////////////////////////////////////////////////////////////////////// */

  .preloader {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    padding: 1px;
    box-sizing: content-box;
    overflow: hidden;
  }
  /* ////////////////////////////////////////////////////////////////////////// */

  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  svg,
  img {
    max-width: 100%;
    height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0 0 1rem;
  }
  body:last-child {
    margin-bottom: 0;
  }
  html {
    width: 100%;
    height: 100%;
    background: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  body {
    margin: auto;
    width: 100%;
    position: relative;
  }
</style>
