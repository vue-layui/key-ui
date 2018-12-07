<template>
  <div id="app">
    <div class="collapse">
      <div class="collapse-item" v-for="(item,inx) in list" :key="item" :class="{'is-active':activeNames.indexOf(inx)>-1}">
        <div class="collapse-item-tab" @click.prevent="handleChange(event,inx)">{{item.title}}<i class="wbicon"></i></div>
        <transition name="my" @enter="enter">
          <div class="collapse-item-wrap" v-show="activeNames.indexOf(inx)>-1">
            <div class="collapse-item-content" v-html="item.content"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  var list = [{
    'title': '一致性 Consistency',
    'content': '<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div><div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>'
  }, {
    'title': '反馈 Feedback',
    'content': '<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div><div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>'
  }, {
    'title': '效率 Efficiency',
    'content': '<div>简化流程：设计简洁直观的操作流程；</div><div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div><div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>'
  }, {
    'title': '可控 Controllability',
    'content': ' <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div><div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>'
  }, ]
    export default {
      name: "navigation1",
      data(){
        return{
          activeNames: [],
          list: list
        }
      },
      methods: {
        handleChange(e, inx) {
          if (this.activeNames.indexOf(inx) > -1) {
            var i = this.activeNames.indexOf(inx)
            this.activeNames.splice(i, 1)
          } else {
            this.activeNames.splice(0, 0, inx)
          }
          console.log(this.activeNames)
        },
        enter(el) {
          var h= el.scrollHeight
          el.style.setProperty('--h', h + 'px')

        }
      }
    }
</script>

<style scoped>
  .collapse{
    width: 500px;
  }
.collapse-item-tab{
  padding: 10px;
  background: #337ab7;
  color: white;
  cursor: pointer;
  border-bottom: 1px solid #c9e2b3;
}
  .collapse-item-content{
    background: #122b40;
    color: #cccccc;
    font-size: 14px;
    padding: 10px;
  }
</style>
