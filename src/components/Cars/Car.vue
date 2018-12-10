<template>
    <div>
        <div class="K-dis">
            <div id="table">
                <div class="cart">
                    <h1>购物车模块</h1>
                </div>
                <div class="key_car">
                    <div class="title">
                        <div class="information">商品信息</div>
                        <div class="single"></div>
                        <div class="num">商品数量</div>
                        <div class="total">总金额</div>
                        <div class="edit">编辑</div>
                    </div>
                    <div class="commodity" v-for="(i,index) in List">
                        <ul>
                            <li class="comInformation">
                                <div class="choose">
                                    <transition name="fade">
                                        <div class="gou" v-show="i.show" @click="choose(index)">√</div>
                                    </transition>
                                    <transition name="fade">
                                        <div class="cha" v-show="!i.show" @click="choose(index)">×</div>
                                    </transition>
                                </div>
                                <div class="photo"> <img v-bind:src="i.images"></div>
                                <div class="name">
                                    <div class="nametop">{{i.name}}</div>
                                </div>
                            </li>
                            <li class="comSingle">￥{{i.single}}</li>
                            <li class="comNum">
                                <button class="cut" @click="cut(index)" :disabled="i.num === 1">-</button><input v-model="i.num" @click="saveIndex(index)"><button class="add" @click="add(index)">+</button>
                            </li>
                            <li class="comTotal">￥{{(i.single * i.num).toFixed(1)}}</li>
                            <li class="comEdit">
                                <div class="" @click="RList(index)">删除</div>
                            </li>
                        </ul>
                    </div>
                    <div class="footer">
                        <div class="footer-left">
                            <div class="manner">
                                <div class="footer-gou" v-show="allShow" @click="allChoose()">√</div>
                                <div class="footer-cha" v-show="!allShow" @click="allChoose()">×</div>
                            </div>
                            <div class="allchoose" @click="allChoose()">全选</div>
                            <div class="all" @click="all()">删除</div>
                        </div>
                        <div class="footer-right">
                            <div class="itemtotal">商品总计:
                                <div class="money">{{accountNum.toFixed(1)}}</div>
                            </div>
                            <div class="settlement">结账</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="CarMobile">
            <span>~案例展示~</span>
            <img src="../../../static/img/car.gif" alt=""/>
        </div>
        <keyUiLogo></keyUiLogo>
    </div>

</template>

<script>
    import keyUiLogo from '../common/keyUiLogo'
    export default {name: "Car",
        components:[
            keyUiLogo
        ],
      data() {
          return {
            List: [{
              name: 'GG Marmont系列男生钱包',
              images: "../../../static/img/gucci.jpg",
              single: 3900,
              num: 1,
              show: true
            }, {
              name: 'GG Marmont系列绗缝迷你手袋',
              images: "../../../static/img/gucci2.jpg",
              single: 14100,
              num: 2,
              show: false
            }],
            allShow: false,
            accountNum: 0,
            listIndex: 0
          }
      },
      mounted() {
        this.account()
      },
      watch: {
        List: {
          handler: function(oldVal) {
            var oldVal = oldVal[this.listIndex].num
            const regex = /^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/
            if (!regex.test(oldVal)) { //如果小于等于零
              this.List[this.listIndex].num = 1 //等于一
              console.log(this.List[this.listIndex].num)
            }
            this.account()
          },
          deep: true
        }
      },
      methods: {
        saveIndex: function(index) {
          this.listIndex = index
        },
        account: function() {
          this.accountNum = 0
          var that = this
          this.List.forEach(function(item, index) {
            if (item.show == true) {
              that.accountNum += item.single * item.num
            }
          })
        },
        RList: function(i) {
          this.List.splice(i, 1);
          this.account()
        },
        add: function(i) {
          this.listIndex = i
          this.List[i].num++;
          this.account()
        },
        cut: function(i) {
          this.listIndex = i
          this.List[i].num--;
          this.account()
        },
        allChoose: function() {
          this.allShow = !this.allShow
          for (var i in this.List) {
            this.List[i].show = this.allShow
          }
          this.account()
        },
        choose: function(i) {
          this.List[i].show = !this.List[i].show
          console.log(this.List.length)
          var choose = this.List.filter(function(i) {
            return i.show == true;
          });
          choose.length == this.List.length ? this.allShow = true : this.allShow = false
          this.account()
        },
        all: function() {
          for (var i = this.List.length - 1; i >= 0; i--) {
            console.log(i);
            if (this.List[i].show == true) {
              this.List.splice(i, 1);
            }
          }
          this.account()
        }
      }
    }
</script>

<style scoped lang="scss">
  .K-dis{
    margin-left: 230px;
  }
  #table{
    width: 100%;
  }
  .key_car{
    border:1px solid #ccc;
  }
  .cart {
    margin-top:100px;
  }
  h1 {
    padding:10px 20px;
    background:#f2f2f2;
    border-left:4px solid #009688;
    font-size:16px;
    border-radius: 3px;
    position:relative;
    margin-bottom:30px;
  }
  .title {
    height:40px;
    line-height:40px;
    background:#5d5d5d;
    color:white;
    display:flex;
    justify-content: space-around;
    font-size:16px;
    font-weight:bolder;
  }
  .single{
    width:120px;
  }
  .information{
    width:150px;
    text-align: center;
  }
  .single,.num,.total,.edit {
    justify-content:center;
    align-items:center;
    display:flex;
  }
  .commodity {
    height:140px;
    display:flex;
  }
  .commodity ul {
    display:flex;
    width:100%;
    border-bottom:1px solid #aaaaaa;
    border-top:1px solid #aaaaaa;
  }
  .comInformation {
    flex:5;
  }
  .comSingle,.comNum,.comTotal,.comEdit {
    flex:1;
    justify-content:center;
    align-items:center;
    display:flex;
  }
  input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
    -webkit-appearance:none !important;
    margin:0;
  }
  .comNum input {
    width:37px;
    height:25px;
    text-align:center;
    margin-left:3px;
    margin-right:3px;
  }
  .add,.cut {
    font-weight:bolder;
  }
  :hover {
    cursor:pointer;
  }
  .gou {
    background:#f07b19;
  }
  .cha {
    background:red;
  }
  .gou,.cha {
    width:14px;
    height:14px;
    border-radius:7px;
    font-size:7px;
    color:white;
    border:solid 1px #bcbcbc;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    position:absolute;
  }
  .comInformation {
    display:flex;
  }
  .photo {
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
  }
  .photo img {
    width:72px;
    height:72px;
  }
  .choose {
    width:15px;
    display:flex;
    height:100%;
    justify-content:center;
    align-items:center;
    margin-left:22px;
    margin-right:22px;
  }
  .name {
    display:flex;
    flex-direction:column;
    flex:1;
    font-size:14px;
  }
  .nametop {
    flex:1;
    display:flex;
    align-items:center;
  }
  .footer {
    display:flex;
    justify-content:space-between;
    height:60px;
    line-height:60px;
    margin-top:100px;
  }
  .footer-left,.footer-right {
    display:flex;
  }
  .footer-gou,.footer-cha {
    width:14px;
    height:14px;
    border-radius:7px;
    font-size:7px;
    color:white;
    border:solid 1px #bcbcbc;
    margin-left:22px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
  }
  .footer-gou {
    background:#f07b19;
  }
  .footer-cha {
    background:red;
  }
  .allchoose {
    margin-left:24px;
    font-size:14px;
    color:#f07b19;
    line-height:60px;
    cursor:pointer;
  }
  .all {
    font-size:14px;
    line-height:60px;
    margin-left:14px;
    cursor:pointer;
  }
  .settlement {
    width:205px;
    height:51px;
    margin-left:30px;
    display:flex;
    justify-content:center;
    background:linear-gradient(to top,#fb3023,#f21305);
    color:white;
    font-size:14px;
    font-weight:bolder;
  }
  .manner {
    line-height:60px;
    height:60px;
    display:flex;
    align-items:center;
  }
  .money {
    color:red;
  }
  .itemtotal {
    display:flex;
  }
  button {
    width:15px;
    height:15px;
  }

</style>
