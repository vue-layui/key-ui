import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/IndexPage'
import DocuMent from '@/pages/DocuMent'
import PopUp from '../components/PopUp'
import DocumentRight from '../components/DocumentRight'
import table from '../components/table'
import score from '../components/score'

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
          path:'PopUp',
          component: PopUp
        },
        {
          path:'DocumentRight',
          component: DocumentRight
        },
        {
          path:'table',
          component: table
        },
        {
          path:'score',
          component: score
        }
      ]
    },

  ]
})
