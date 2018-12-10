<template>
  <div>
    <index-header></index-header>
  <div class="K-data">
    <div class="row">
      <div class="col" v-for="(i,item) in Ndata">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <a class="K-four six" style="justify-content: space-between;border-bottom: 1px solid #f6f6f6;">
              <span class="K-us">{{i.user}}</span>
              <span :class="i.cname">{{i.day}}</span>
            </a>
            <h5 class="card-title">{{i.num}}</h5>
            <a class="K-four K-at"><span class="K-us">{{i.what}}</span><span class="badge">{{i.allnum}} <i>{{i.ico}}</i></span></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <a class="K-four K-at"><span class="K-us">访问量</span>
        <span class="badge">
        <div class="d-inline p-2 bg-primary text-white">今年</div>
        <div class="d-inline p-2 bg-dark text-white" @click="toggle">去年</div>
        </span>
      </a>
      <div class="row">
        <div class="col-8">
        <fullscreen ref="fullscreen" @change="fullscreenChange">

            <canvas id="myChart" width="400" height="200"></canvas>

        </fullscreen>
        </div>

        <div class="col-4">
          <h3>月访问数</h3>
          <p>同上期增长</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
                 aria-valuemin="0" aria-valuemax="100" style="width: 75%">75%
            </div>
          </div>
          <!--//-->
          <h3>月下载数</h3>
          <p>同上期增长</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 20%">20%
            </div>
          </div>
          <!--//-->
          <h3>月收入</h3>
          <p>同上期增长</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%">25%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import IndexHeader from '../components/IndexHeader'
  import Fullscreen from "vue-fullscreen/src/component.vue"
  import Chart from 'chart.js';
  export default {
    name: "BigData",
    components:{
      Fullscreen,
      IndexHeader
    },
    props:[

    ],
    data() {
      return {
        Ndata: [
          {
            user: '访问量',
            day: '周',
            num: '99，9666',
            what: '总计访问量',
            allnum: '88万',
            cname: 'badge badge-primary',
            ico: '♥'
          },
          {
            user: '下载',
            day: '年',
            num: this.$store.state.count,
            what: '新下载',
            allnum: '10%',
            cname: 'badge badge-success',
            ico: '😀'
          },
          {
            user: '收入',
            day: '年',
            num: '88，8666',
            what: '总收入',
            allnum: '***',
            cname: 'badge badge-warning',
            ico: '📌'
          },
          {
            user: '活跃用户',
            day: '月',
            num: '66，6666',
            what: '最近一个月',
            allnum: '15%',
            cname: 'badge badge-info',
            ico: '👥'
          },

        ],
        fullscreen: false,
        background:'#fff'
      }
    },
    methods:{
      toggle () {
        this.$refs['fullscreen'].toggle()
      },
      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
      }
    },
    mounted() {
      var ctx2 = document.getElementById("myChart");
      var myChart = new Chart(ctx2, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: '下载量',
            data: [78, 65, 45, 64, 88, 55, 45],
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
          },
            {
              label: '访问量',
              data: [71, 60, 50, 63, 74, 44, 75],
              backgroundColor: 'transparent',
              borderColor: '#009688',
              borderWidth: 4,
              pointBackgroundColor: '#009688',
            }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: true,
          },
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/bootstrap.css';

  .K-data {
    margin-top: 60px;
    width: 100%;
    height: auto;
    background: #f2f2f2;

    .row {
      margin: 0;
      padding: 10px 0  0  0;
      width: 100%;

      .col {
        display: flex;
        text-align: center;
        justify-content: space-around;
        border-bottom: 1px solid #f6f6f6;
        align-items: center;
      }
    }
  }

  .badge {
    float: right;
    margin-top: 10px;
  }

  .K-us {
    float: left;
  }

  .K-at {
    display: flex;
    justify-content: space-around;
  }

  .card-title {
    display: flex;
    font-size: 30px;
    margin-top: 10px;
  }

  .K-small {
    display: flex;
    width: 10px;
    height: 10px;
    background: red;
    padding: 5px;
  }

  .K-four {
    text-align: center;
    line-height: 44px;
    width: 100%;
    height: 44px;
    display: block;
  }

  .container {
    border-bottom: 0.3rem;
    margin-top: 10px;
    max-width: 1300px;
    background: #fff;
    height: 473px;
  }

  .col-8 {
    position: relative;
    height: 340px;
  }
  .col-4{
    h3{
      margin: 20px 0;
    }
  }
  #myChart {
    height: 400px;
  }
</style>
