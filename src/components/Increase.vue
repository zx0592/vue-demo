<template>
	<div id="increase" style="margin-top: 30px;padding-left: 50px;">
		<form action="">
			<div class="form-group">
				<span>支出项目: </span><input type="text":placeholder="item" v-model="upItem">
			</div>
			<div class="form-group">
				<span>支出类型: </span><input type="text" :placeholder="type" v-model="upType">
			</div>
			<div class="form-group">
				<span>金额: </span><input type="text" :placeholder="amount" v-model="upAmount">
			</div>
			<div class="form-group">
				<span>日期: </span><input type="date" name="upDate" v-model="upDate">
			</div>
			<div class="form-group">
				<button @click="update">保存</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"-----------------",
				itemId:this.$route.query.itemId,
				item:this.$route.query.item,
				type:this.$route.query.type,
				date:this.$route.query.date,
				amount:this.$route.query.amount,
				upItem:'',
				upAmount:'',
				upType:'',
				upDate:'',
			}
		},
		methods:{
			update:function(){
				var self =this
				this.$axios.post('http://localhost:8080/update',{
					"id":self.itemId,
					"item":self.upItem,
					"amount":self.upAmount,
					"type":self.upType,
					"date":self.upDate
				})
				.then(function(response){
					if(response.data=="success"){
						alert("修改成功！");
					}else{
						alert("修改失败!");
					}
					
				})
				.catch(function(error){
					alert("修改失败！");
				})
				
			}
		}
		
		
	}
</script>

<style>
</style>
