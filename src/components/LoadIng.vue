<template>
    <div>
        <ul class="flow-default" id="LAY_demo1">
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LoadIng",
        mounted(){
          layui.use('flow', function(){
            var flow = layui.flow;

            flow.load({
              elem: '#LAY_demo1' //流加载容器
              ,done: function(page, next){
                setTimeout(function(){
                  var lis = [];
                  for(var i = 0; i < 2; i++){
                    lis.push('<li>'+ ( (page-1)*2 + i + 1 ) +'</li>')
                  }
                  next(lis.join(''), page < 10);
                },1500);
              }
            });
          });
        }
    }
</script>

<style lang="scss" scoped>
  .flow-default{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #1E9FFF;
    list{
      width: 30%;
      height:50px ;
      background: #01AAED;
    }
  }

</style>
