# labo-vue-dock

> a dock menu for vue

## 一个简单的vue底部菜单栏组件

### 安装

``` bash
# install
npm install --save labo-vue-dock
```

### 使用

在你的router.js中，

``` javascript
import dockMenu from 'labo-vue-dock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: dockMenu, // 在此处引用组件
      props: { // 参数通过router的props形式传入
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
      children: [{  // 将在底部组件中出现的页面vue放入该路由的子路由中
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
```
只需配置路由并未底部导航栏及页面留出页面高度的节点（通常为根节点）即可