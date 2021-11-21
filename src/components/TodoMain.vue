<template>
    <section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox" v-model="checkAll" :checkAll="checkAll">
		<label for="toggle-all" v-show="showToggleALL" >Mark all as complete</label>
		<ul class="todo-list">
			<!-- These are here just to show the structure of the list items -->
			<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
		<li :class="{completed:item.done,editing:isEditing === item.id}" v-for="(item,index) in todoList" :key="item.id">
				<div class="view">
					<input class="toggle" type="checkbox"  :checked="item.done" @change="change(item.id)">
					<label @dblclick="editing(item.id,item.name)">{{item.name}}</label>
					<button class="destroy" @click="delOne(index)"></button>
				</div>
				<input class="edit" v-focus v-model="editValue" @keyup.enter="changeValue(item.id)" @keyup.esc="cancelEdit(item.id)" @blur="cancelEdit" value="Rule the web">
			</li>
		</ul>
	</section>
</template>

<script>
import { mapState } from "vuex";
export default {
    name:"Main",
	data(){
		return {
			isEditing:'',
			editValue:""
		}
	},
	methods:{
		//点击选择按钮改变li状态，使用vuex的方法，将事件传递到store去执行
		change(id){
			this.$store.commit('change',id)
		},
		//双击进入编辑状态
		editing(id,name){
			this.isEditing = id
			this.editValue = name
		},
		//将键盘回车 修改事件传递给store执行
		changeValue(id){	
			this.$store.commit('changeValue',{
				id:id,
				editValue:this.editValue
			})
			this.isEditing = ''
		},
		//取消修改
		cancelEdit(){
			this.isEditing = ''
		},
		//将删除事件发送给sore执行
		delOne(id){
			this.$store.commit('delOne',id)
		},
		
	},
	computed:{
		//映射store中的todoList
		...mapState({
			todoList:'todoList'
		}),
		checkAll:{
			get(){
				return this.todoList.every(item=>item.done)
			},
			set(value){
				this.$store.commit('set',value)
			}
		},
		showToggleALL(){
			return this.todoList.length
		}
	},
	//自定义属性
	directives:{
		focus:{
			//在数据发生改变的时候创建一个获取焦点的自定义指令
			update:(el)=>{
				el.focus()
			}
		}
	}
}
</script>

<style>

</style>