<template>
	<div style="padding-top: 15px;padding-left: 15px;">
		<router-link to='/login' class="btn btn-primary">登录</router-link>&nbsp;
		<router-link to="/register" class="btn btn-primary">注册</router-link>&nbsp;
		<router-link to="/list" class="btn btn-primary">列表详情</router-link>&nbsp;
		<router-link to="/add" class="btn btn-primary">增加项目</router-link>&nbsp;
		<router-view></router-view>
	</div>	  
</template>

<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import List from './page/List.vue'
import Add from './page/Add.vue'

export default{
	name:"App",
	components:{
	Register,
	Login,
	List,
	Add
	}
}
</script>

<style>

</style>
