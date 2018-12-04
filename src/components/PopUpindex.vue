<template>
  <div class="KeyNav">
    <p class="KeyuiNavTit">导航相关-页面元素</p>
    <hr class="KeyHr"/>
    <div class="KeyUiP">
      导航一般指页面引导性频道集合，多以菜单的形式呈现，可应用于头部和侧边，是整个网页画龙点晴般的存在。
      千万不要忘了加载 element模块。虽然大部分行为都是在加载完该模块后自动完成的，但一些交互操作，
      如呼出二级菜单等，需借助element模块才能使用。
    </div>
      <h5>水平导航——下划线移动</h5>
      <pop></pop>
      <div class="KeyUiNavCode">
          <p>组件代码</p>
          <div class="NavCode">
              <ul>
                  <li>01.</li>
                  <li>02.</li>
                  <li>03.</li>
                  <li>04.</li>
                  <li>05.</li>
                  <li>06.</li>
                  <li>07.</li>
                  <li>08.</li>
                  <li>09.</li>
                  <li>10.</li>
                  <li>11.</li>
                  <li>12.</li>
                  <li>13.</li>
                  <li>14.</li>
                  <li>15.</li>
                  <li>16.</li>
                  <li>17.</li>
                  <li>18.</li>
                  <li>19.</li>
                  <li>20.</li>
                  <li>21.</li>
                  <li>22.</li>
                  <li>23.</li>
                  <li>24.</li>
                  <li>25.</li>
                  <li>26.</li>
                  <li>27.</li>
                  <li>28.</li>
                  <li>29.</li>
                  <li>30.</li>
                  <li>31.</li>
                  <li>32.</li>
                  <li>33.</li>
                  <li>34.</li>
                  <li>35.</li>
                  <li>36.</li>
                  <li>37.</li>
                  <li>38.</li>
                  <li>39.</li>
                  <li>40.</li>
                  <li>41.</li>
                  <li>42.</li>
                  <li>43.</li>
                  <li>44.</li>
                  <li>45.</li>
                  <li>46.</li>
                  <li>47.</li>
                  <li>48.</li>
                  <li>49.</li>
                  <li>50.</li>
                  <li>51.</li>
                  <li>52.</li>
                  <li>53.</li>
                  <li>54.</li>
              </ul>
              <div class="NavCodeimg">
                  <img src="../../static/img/navcode1.png" alt=""/>
                  <img src="../../static/img/navcode2.png" alt=""/>
                  <img src="../../static/img/navcode3.png" alt=""/>
              </div>
          </div>
      </div>
      <h5>水平导航——下划线变化</h5>
      <underlineChange style="background: #2F4056;width:500px"></underlineChange>
      <div class="KeyUiNavCode">
          <p>组件代码</p>
          <div class="NavCode">
              <ul>
                  <li>01.</li>
                  <li>02.</li>
                  <li>03.</li>
                  <li>04.</li>
                  <li>05.</li>
                  <li>06.</li>
                  <li>07.</li>
                  <li>08.</li>
                  <li>09.</li>
                  <li>10.</li>
                  <li>11.</li>
                  <li>12.</li>
                  <li>13.</li>
                  <li>14.</li>
                  <li>15.</li>
                  <li>16.</li>
                  <li>17.</li>
                  <li>18.</li>
                  <li>19.</li>
                  <li>20.</li>
                  <li>21.</li>
                  <li>22.</li>
                  <li>23.</li>
                  <li>24.</li>
                  <li>25.</li>
                  <li>26.</li>
                  <li>27.</li>
                  <li>28.</li>
                  <li>29.</li>
                  <li>30.</li>
                  <li>31.</li>
                  <li>32.</li>
                  <li>33.</li>
                  <li>34.</li>
                  <li>35.</li>
              </ul>
              <div class="NavCodeimg">
                  <img src="../../static/img/navchangecode1.png" alt=""/>
                  <img src="../../static/img/navchangecode2.png" alt=""/>
              </div>
          </div>
      </div>
      <h5>当然你可以根据自己的心情更改导航主题颜色</h5>
      <underlineChange style="background: #2f4056;width:500px;margin-top:20px;"></underlineChange>
      <underlineChange style="background: #b21eff;width:500px;margin-top:20px;"></underlineChange>
      <underlineChange style="background: #1e9fff;width:500px;margin-top:20px;margin-bottom:30px;"></underlineChange>
      <div class="KeyUiP">
         Keyui用心与你沟通
      </div>
      <keyUiLogo></keyUiLogo>
  </div>
</template>


<script>
  import pop from './PopUp/PopUp'
  import underlineChange from './PopUp/underlineChange'
  import keyUiLogo from '../components/common/keyUiLogo'
    export default {
      name: "PopUpindex",
      components:{
          pop,
          underlineChange,
          keyUiLogo
      }
    }
</script>

<style  lang="scss" scoped>
  .KeyNav{
    width:80%;
    margin-top:70px;
    float:left;
    margin-left:210px;
    padding-right:20px;
    box-sizing: border-box;
    .KeyuiNavTit{
      font-size:30px;
    }
    .KeyHr{
      margin-top:10px;
      margin-bottom:20px;
    }
    .KeyUiP{
      width:96%;
      padding:10px 20px;
      background:#f2f2f2;
      border-left:4px solid #009688;
      font-size:16px;
      border-radius: 3px;
    }
    h5{
      font-size:20px;
      line-height:60px;
      color:#2F4056;
    }
  }
  .KeyUiNavCode{
      width:90%;
      border:1px solid #ccc;
      margin-top:10px;
      p{
          width:100%;
          padding-left:10px;
          background:#f2f2f2;
          height:30px;
          line-height:30px;
          color:#737383;
          font-size:16px;
          box-sizing: border-box;
      }
  }
  .NavCode{
      width:100%;
      display:flex;
      ul{
          width:5%;
          border-right:1px solid #ccc;
          text-align:center;
      }
  }
  .NavCodeimg{
      width:95%;
      img{
          width:100%;
          margin:0;
          padding:0;
      }
  }
</style>
