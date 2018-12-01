<template>
  <div id='test' class="container">
    <table border="1">
      <tr>
        <th>
          <button v-on:click='selectedAll'>全选</button>
        </th>
        <th>id</th>
        <th>描述</th>
        <th>删除</th>
      </tr>
      <tr v-for='(tr,index) in trArr' :key='index'>
        <td>
          <input type="checkbox" v-model="selected" v-bind:value='tr.td1' />
        </td>
        <td>{{tr.td2}}</td>
        <td>{{tr.td3}}</td>
        <td>
          <button v-on:click='removeTr($index)'>删除</button>
        </td>
      </tr>
    </table>
    <!--<span>{{selected |json}}</span>-->
    <button class="deleteAll" v-on:click='removeAll'>全部删除</button>
    <button class="deleteAll" v-on:click='multipleSelected1'>选中删除</button>
    <button class="addTr deleteAll" @click='showAdd'>{{addL}}</button>
    <div class="addList" v-show='showT'>
      <input type="text" v-model='addTd1' placeholder='请输入内容'>
      <input type="text" v-model='addTd2' placeholder='请输入内容'>
      <input type="text" v-model='addTd3' placeholder='请输入内容'>
      <button @click='addList'>确定添加</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "tables2",
      data() {
        return {
          addTd1: '',
          addTd2: '',
          addTd3: '',
          addL: '添加',
          showT: false,
          trArr: [{
            td1: '44',
            td2: '王明',
            td3: '清华大学',
            td4: ''
          }, {
             td1: '32',
            td2: '李磊',
            td3: "复旦大学",
            td4: '<button>删除</button>'
          }, {
             td1: '76767',
            td2: '陈晨',
            td3: '交通大学',
            td4: '<button>删除</button>'
          }],
          selected: []
        }
      },
      methods: {
        removeTr: function(index) {
          this.trArr.splice(index, 1);
        },
        selectedAll: function() {
//this.selected=this.selected==false?true:false;
          if (this.selected.length != this.trArr.length) {
            this.selected = [];
            for (var i = 0; i < this.trArr.length; i++) {
              this.selected.push(this.trArr[i].td1);
            }
          } else {
            this.selected = [];
          }
        },
        removeAll: function(e) {
          if (this.selected.length <= 0) {
            return false;
          } else if (this.selected.length == this.trArr.length) {
            this.trArr = [];
            this.selected=[];
          }
        },
        multipleSelected: function(e) {
          var arr = [];
          for (var i = 0; i < this.trArr.length; i++) {
//arr.push(this.trArr[i].td1)
            for (var j = 0; j < this.selected.length; j++) {
              if (this.trArr[i].td1 == this.selected[j]) {
                arr.push(i)
              }
            }
          }
          return arr
        },
        multipleSelected1:function(){
          var multipleSelected=this.multipleSelected().reverse();
          console.log(multipleSelected)
          for(var i=0;i<multipleSelected.length;i++){
            this.trArr.splice(multipleSelected[i],1);
          }
          this.selected=[];
          return console.log(this.trArr);
        },
        addList: function() {
          if (this.addTd1 == '' || this.addTd2 == '' || this.addTd3 == '') {
            alert('请输入完整内容')
            return false;
          } else {
            this.trArr.push({
              td1: this.addTd1,
              td2: this.addTd1,
              td3: this.addTd2,
              td4: 'wewe'
            });
          }

          this.addTd1 = '';
          this.addTd2 = '';
          this.addTd3 = '';
        },
        showAdd: function() {
          this.showT = this.showT == false ? true : false;
        }
      }
    }
</script>

<style scoped>
  .container {
    width: 100%;
    font-size: 16px;
    text-align: center;
  }
  .container button{
    background: #8c8c8c;
    border: none;
    border-radius: 5px;
    color: white;
    height: 30px;
}
  .container table {
    width: 100%;
  }

  .container table tr th,
  .container table tr td {
    padding: 10px;
  }

  .container table tr td input[type=checkbox] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .deleteAll {
    float: right;
    margin: 20px;
  }
  .addList input[type=text] {
    border: 1px solid #999;
    text-indent: 5px;
    font-size: 14px;
    padding: 5px;
    margin: 20px 0;
  }
</style>
