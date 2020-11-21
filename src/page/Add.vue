<template>
	<div id="app" style="margin-top: 30px;padding-left: 50px;">
		<form>
			<div class="form-group">
				<select v-model="type">
					<option disabled="disabled"value="">支出类型</option>
					<option >服饰美容</option>
					<option >休闲生活</option>
					<option >充值缴费</option>
					<option >餐饮美食</option>
					<option >生活日用</option>
					<option >通讯物流</option>
				</select>
			</div>
			<div class="form-group">
				日期：<input type="date" name="date" v-model="date">
			</div>
			<div class="form-group">
				金额：<input type="text" name="amount" v-model="amount">
			</div>
			<div class="form-group">
				支出项目：<input type="text" name="item"  v-model="item"/>
			</div>
			<div class="form-group">
				<button type="button" @click="add">添加</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				type:'',
				date:'',
				amount:'',
				item:''
			}
		},
		methods:{
			add:function(){
				var self=this
				this.$axios.post('http://localhost:8080/add',{
					"type":self.type,
					"date":self.date,
					"amount":self.amount,
					"item":self.item
				})
				.then(function(response){
					if(response.data=="success"){
						alert("添加成功！");
					}else{
						alert("添加失败!");
					}
				})
				.catch(function(error){
					alert("Add Failed!");
				})
			}
			
		}
	}
</script>

<style>
</style>
