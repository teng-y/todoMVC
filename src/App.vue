<template>
    <section class="todoapp" id="todoapp">
        <TodoHeader></TodoHeader>
		<TodoMain></TodoMain>
		<TodoFooter></TodoFooter>
	</section>
</template>

<script>
import './assets/css/index.css'
import './assets/css/base.css'
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";

import { mapState } from "vuex";
export default {
    name:"App",
    components:{TodoHeader,TodoMain,TodoFooter},
    computed:{
        ...mapState({todoList:'todoList'})
    }

}
</script>

<style>

</style>