import Vue from 'vue'
import Router from 'vue-router'

// welcome page
import pageA from './view/page-a.page'
import pageB from './view/page-b.page'
import dockMenu from '../src'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: dockMenu,
      props: {
        areaClass: 'test-dock',
        dock: [
          {
            text: 'pageA',
            path: '/a'
          },{
            text: 'pageB',
            path: '/b'
          }
        ]
      },
      children: [{
        path: '/a',
        name: 'pageA',
        component: pageA
      },{
        path: '/b',
        name: 'pageB',
        component: pageB
      }]
    }
  ]
})
