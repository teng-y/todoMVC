import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex)
//注册Vuex
const state = {
    // todoList:[
    //     {id:"001",name:"游泳",done:false},
    //     {id:"002",name:"吃饭",done:true},
    //     {id:"003",name:"跳舞",done:false},
    //   ],
    todoList:JSON.parse(localStorage.getItem('todoList')) || []
}
const mutations = {
    //点击选择按钮改变li状态
    change(state,payload){
        let item = state.todoList.find(item=>item.id===payload)
        item.done = !item.done
    },
    //输入框回车添加li
    add(state,payload){
        if(!payload) return alert('不能为空');
        state.todoList.unshift({
            id:Date.now(),
            name:payload,
            done:false
        })
    },
    //双击修改内容
    changeValue(state,payload){
        const {id,editValue} = payload
        const item = state.todoList.find(item=>item.id === id)
        item.name = editValue
    },
    //删除某个li
    delOne(state,payload){
        state.todoList.splice(payload,1)
    },
    clearDone(state){
        state.todoList = state.todoList.filter(item=>!item.done)
    },
    //点击全选按钮全选列表
    set(state,payload){
        console.log(payload);
        state.todoList.forEach(item=>item.done = payload)
    }
}
const getters = {
    num(state){
        return state.todoList.filter(item=>!item.done).length
        // return this.todoList.reduce((prev,item)=>prev +(!item.done?1 : 0),0)
    },
}
export const store = new Vuex.Store({
    strict:true,
    state,
    mutations,
    getters
})