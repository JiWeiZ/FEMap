# vue-router

router-link会被渲染成一个a标签，当 `<router-link>` 对应的路由匹配成功，将自动设置 class 属性值 `.router-link-active`

```html
<router-link to="/foo">To Foo</router-link>
```

路由匹配到的组件将渲染在router-view中

```html
<router-view></router-view>
```

如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

## 如何使用vue-router？

首先定义路由组件 Foo

然后定义路由，一般在vue-cli生成的项目中，在router/index中设置

```js
...
import Router from 'vue-router'
...
Vue.use(Router)
...
export default new Router({
  mode: 'hash', // 或 'history',
  routes:[
    {
      path: '/',
      component: Home
    },{
      path: '/foo',
      component: Foo
    }
  ]
})
```

然后src/main.js中导入这个router

```js
import router from './router'
...
new Vue({
  el: '#app',
  ...,
  router
})
```

组件内部可以使用`this.$router`访问路由器，通过`this.route`访问当前路由

## 动态路由匹配

path: 'foo/:id'

## 嵌套路由

```js
{ path: 'blogList', 
  component: [{}]
}
```

