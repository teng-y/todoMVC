<template>
    <header class="header">
		<h1>todos</h1>
		<input class="new-todo" v-model.trim="todoName" @keyup.enter="add" placeholder="What needs to be done?" autofocus>
	</header>       
</template>

<script>
export default {
    name:"Header",
    data(){
        return {
            todoName:""
        }
    },
    methods:{
        //增加清单
        add(){
            this.$store.commit('add',this.todoName)
            this.todoName = ''
        }
    }
}
</script>

<style>

</style>