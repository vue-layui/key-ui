import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/IndexPage'
import DocuMent from '@/pages/DocuMent'
// import PopUp from '../components/PopUp'
import LoadIng from '../components/LoadIng'
import DocumentRight from '../components/DocumentRight'
import ButtOn from '../components/ButtOn'
import Car from '../components/Cars/Car'
//
import Tab from '../components/tabs'
import RotaTion from '../components/rotation'
//lzk
import WebPaging from '../components/WebPaging/WebPaging'
import Biaodan from '../components/From/BiaoDan'
//zsj
import Table from '../components/table'
import Score from '../components/score'
//nwr
import PopUpindex from '../components/PopUpindex'
import AlertIndex from '../components/AlertIndex'
import team from '../components/team'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/DocuMent',
      component: DocuMent,
      children:[
        {
          path:'',
          component:  DocumentRight
        },
        {
          path:'ButtOn',
          component: ButtOn
        },
        {
          path:'DocumentRight',
          component: DocumentRight
        },
        {
          path:'Tab',
          component: Tab
        },
        {
          path:'RotaTion',
          component: RotaTion
        },
        {
          path:'Table',
          component: Table
        },
        {
          path:'Score',
          component: Score
        },
        {
            path:'Biaodan',
            component: Biaodan
        },
        {
          path:'WebPaging',
          component: WebPaging
        },
        {
          path:'PopUpindex',
          component:PopUpindex
        },
        {
          path:'LoadIng',
          component:LoadIng
        },
        {
          path: 'Car',
          component:Car
        },{
          path: 'AlertIndex',
          component: AlertIndex
        },{
              path: 'team',
              component: team
          }
      ]
    },

  ]
})
