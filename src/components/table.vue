<template>
    <div class="TableBox">
        <div class="TableTitle">表格-页面组件</div>
        <p class="TableTxt">本篇为你介绍表格的HTML使用，你将通过内置的自定义属性对其进行风格的多样化设定。请注意：这仅仅局限于呈现基础表格。</p>
        <div class="TableLine">
            <p class="TableBase">常规用法</p>
        </div>
        <TableOne></TableOne>

        <div class="KeyUiNavCode">
            <p>组件代码</p>
            <iframe  src="../../static/table.txt" >

            </iframe>
        </div>

        <div class="TableLine">
            <p class="TableBase">表格其他风格</p>
        </div>
        <p class="tip">除了默认的表格风格外，我们还提供了其它几种风格，你可以按照实际需求自由设定</p>
        <TableTwo></TableTwo>
        <TableThree></TableThree>
        <div class="TableLine">
            <p class="TableBase">更多款式表格</p>
        </div>
        <p class="tip">除了以上表格，我们还提供了更多款式表格，你可以按照实际需求自由选择</p>
        <TableFour></TableFour>
        <TableFive></TableFive>
        <div class="TableLine">
            <p class="TableBase">结语</p>
        </div>
        <p class="tip">再次温馨提醒：如果你需要对表格进行排序、数据交互等一系列功能性操作，你需要进一步阅读 keyui 的重要组成：table模块</p>
        <p class="TableTxt">keyui - 用心与你沟通</p>
    </div>
</template>

<script>
    import TableOne from '../components/table/TableOne.vue'
    import TableTwo from '../components/table/TableTwo.vue'
    import TableThree from '../components/table/TableThree.vue'
    import TableFour from '../components/table/TableFour.vue'
    import TableFive from '../components/table/TableFive.vue'

    export default {
      components: {
        TableOne,
        TableTwo,
        TableThree,
        TableFour,
        TableFive
      },
     
    }
</script>

<style scoped lang="scss">
ul li{
    list-style:none;
}
.TableBox{
    width: 75%;
    margin: 60px 20px 60px 230px;
    float: left;
}
.AppTable{
    color: #565656;
    font-size: 15px;
    box-sizing: border-box;
    text-align: center;
    margin: 20px 0;
}
.TableTitle{
    font-size: 27px;
    color: #393d49;
    line-height: 52px;
    border-bottom: 1px solid #eeeeee;
}
.TableTxt{
    font-size: 14px;
    background: #f2f2f2;
    padding: 20px;
    border-left: 5px solid #009688;
}
.TableLine{
    border-bottom: 1px solid #eeeeee;
    position: relative;
    margin-top: 40px;
}
.TableBase{
    color: #333;
    font-size: 20px;
    padding:  0 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: -35px;
    left: 25px;
}
.TableBase:hover{
    color: #777;
}

.layui-code-h3 {
    color: #333333;
    font-size: 12px;
    padding: 0 10px;
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #e2e2e2;
    border-left: 5px solid #e2e2e2;
    background: #fafafa;
    margin: 0;
}
.TxtLis{
    width: 50px;
    background: #fafafa;
    margin: 0;
    float: left;
}
.TxtLis li{
    list-style: decimal;
    text-align: center;
    color: #333333;
    font-size: 12px;
    line-height: 22px;
    border-left: 5px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
}

.tip{
    font-size: 14px;
    margin: 20px 0;
}
.KeyUiNavCode {
    width: 90%;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-bottom: 20px;
    p {
        width: 100%;
        padding-left: 10px;
        background: #f2f2f2;
        height: 30px;
        line-height: 30px;
        color: #737383;
        font-size: 16px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
    }

    iframe{
        width: 100%;
        height: 500px;
        background: #f0f0f0;
        border: 0;
        resize: none;
    }
}


</style>
