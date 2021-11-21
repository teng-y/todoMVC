<template>
    <footer class="footer" v-show="showFooter">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{num}}</strong> item left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed" v-show="showClearCompleted" @click="clearDone">Clear completed</button>
    </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
    name:"Footer",
    methods:{
        clearDone(){
            this.$store.commit('clearDone')
        }
    },
    computed:{
        ...mapState({todoList:'todoList'}),
        num(){
            return this.todoList.filter(item=>!item.done).length
        },
        showFooter(){
            return this.todoList.length
        },
        showClearCompleted(){
            return this.todoList.some(item=>item.done)
        }
    }
}
</script>

<style>

</style>