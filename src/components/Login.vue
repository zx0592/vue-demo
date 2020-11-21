<template>
	<div id="login" style="margin-top: 30px;padding-left: 50px;">
		<form >
			<div class="form-group">
				<label><input type="text"  v-model="username" placeholder="用户名" class="form-control"></label>
			</div>
			<div class="form-group">
				<label ><input type="password"  v-model="password" placeholder="密码" class="form-control"></label>
			</div>
			<button class="btn btn-info" type="button" @click="login">登录</button>
		</form>
	</div>
</template>
<script>	
	export default{
		name:"Login",
		data(){
			return{
				username:'',
				password:''	
			}
		},
		methods:{
			login:function(){
				var self=this;
				this.$axios.post('http://localhost:8080/login',{
					username:self.username,
					password:self.password
				})
				.then(function(response){
					console.log(response.data);
					if(response.data=="success"){
						alert("登录成功");
					}else{
						alert("登录失败");
					}
				})
				.catch(function(error){
					alert("error");
				})
				
			}
		}
	}
</script>

<style>
</style>
