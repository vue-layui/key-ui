import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/IndexPage'
import DocuMent from '@/pages/DocuMent'
import Biaodan from '../components/BiaoDan'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/DocuMent',
      name: 'DocuMent',
      component: DocuMent
    },
    {
      path: '/Biaodan',
      name: 'Biaodan',
      component: Biaodan
    },


  ]
})
