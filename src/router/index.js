import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/IndexPage'
import DocuMent from '@/pages/DocuMent'
import Biaodan from '../components/BiaoDan'
import WebPages from '../components/WebPages'
import WebPaging from '../components/WebPaging'
import DocumentRight from '../components/DocumentRight'
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
      component: DocuMent,
        children: [
            {
                path: '/DocumentRight',
                name: 'DocuDocumentRightMent',
                component: DocumentRight,
                children:[
                    {
                        path: '/Biaodan',
                        name: 'Biaodan',
                        component: Biaodan
                    },
                    {
                        path: '/WebPaging',
                        name: 'WebPaging',
                        component: WebPaging
                    },
                ]
            },
        ]
    },
      {
          path: '/WebPages',
          name: 'WebPages',
          component: WebPages
      },

  ]
})
