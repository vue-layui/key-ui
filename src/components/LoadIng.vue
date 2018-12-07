<template>
    <div class="K-dis">
      <div class="introduction"><p>图片懒加载</p></div>
      <div class="K-ref">
        <ul class="flow-default" id="LAY_demo1"></ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LoadIng",
        mounted(){
          layui.use('flow', function(){
            var flow = layui.flow;

            flow.load({
              elem: '#LAY_demo1'
              ,done: function(page, next){ //执行下一页的回调
                setTimeout(function(){
                  var lis = [];
                    lis.push('<li>' +'<img src="../../static/img/xx.jpg" style="width:400px;height:400px;margin-bottom:10px;">'+'</li>')
                  next(lis.join(''), page < 5); //假设总页数为 10
                  //最后这个数字，是表示每次加载所用的时间。
                },1500);
              }
            });
          });
        }
    }
</script>

<style lang="scss" scoped>
  .K-dis {
      width:100%;
      margin-left: 230px;
      margin-top:80px;
     display:flex;
      flex-direction: column;

  }

/*li{*/
  /*width: 400px;*/
  /*height: 400px;*/
/*}*/

</style>
