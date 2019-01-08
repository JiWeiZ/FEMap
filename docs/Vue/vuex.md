# vuex

```js
// main.js
import store from './vuex'
new Vue({
  store,
  ...
})
```

然后vuex/index.js

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {...},
  actions: {...},
  mutations: {...},
  getters: {...}
})
```

![vuex](https://vuex.vuejs.org/vuex.png)

vuex的核心是一个store，store中的state包含着应用中的状态变量，state变量是响应式的，能及时渲染到vue组件上；状态变量不能由组件直接改变，必须通过组件派发actions，然后行为提交mutations，最后mutations改变状态。vuex规定mutations必须是同步操作，异步操作必须放在actions中完成。

组件该数据必须先调用actions，这里可以进行一些异步处理，或者一些比较复杂的同步操作也可以。

actions再去调用mutations，只有通过mutations才能改变state的值；

当然一些简单的操作，也可以让组件直接修改mutations，从而修改state的数据

由于我们在main.js里把store添加到Vue实例化参数里了，所以每一个vue实例都能访问$store参数，在组件中可以直接使用$store访问state

```html
<div>{{this.$store.state.foo}}</div>
```

在组件里可以使用dispatch方法派发一个action

```js
this.$store.dispatch('changeFoo', foo)
```

第一个参数是要触发的action的名字，第二个参数是要传入的数据，可以是一个基本类型，也可以是对象；当我们要传入多个参数的时候就必须使用对象。

然后我们在vuex/index.js中需要定义changeFoo方法

```js
actions: {
  changeFoo (ctx, foo) {
    // do something with foo
  }
},
```

ctx对象包含以下属性：

```js
{
  state,      // 等同于 `store.state`，若在模块中则为局部状态
  rootState,  // 等同于 `store.state`，只存在于模块中
  commit,     // 等同于 `store.commit`
  dispatch,   // 等同于 `store.dispatch`
  getters,    // 等同于 `store.getters`
  rootGetters // 等同于 `store.getters`，只存在于模块中
}
```

这样我们就可以在actions中提交变化

```js
actions: {
  changeFoo (ctx, foo) {
    ctx.commit('mutateFoo', foo)
  }
},
```

当然还要定义mutateFoo

```js
mutations {
  mutateFoo (state, foo) {
    state.foo = foo
  }
}
```

mutations总是接收state为第一个参数

也可以在组件直接调用commit方法

```js
this.$store.commit('mutateFoo', foo)
```

## 辅助函数

在组建中导入mapState

```js
import {mapState} from 'vuex'
```

然后在计算属性中展开mapState

```js
// 使用数组展开
computed: {
  ...mapState(['foo'])
}
// 使用对象展开
computed: {
  ...mapState({
    currentFoo: 'foo'
  })
}
```

可以在methods中展开mutations和actions

```js
methods: {
  ...mapMutations(['mutateFoo']),
  ...mapActions(['changeFoo'])
}
```

### getters

getters和计算属性类似

