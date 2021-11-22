import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/index"

Vue.config.productionTip = false

const vm = new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
//监听store中的state中的todoList数据的更新
vm.$watch('$store.state.todoList',{
  deep:true,
  handler(newValue){
    localStorage.setItem('todoList',JSON.stringify(newValue))
  }
})

