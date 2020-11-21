<template>
	<div id="list" >
		<div>
			<table class="table table-striped"">
				<thead>
					<tr>
						<th>日期</th>
						<th>支出项目</th>
						<th>金额</th>
						<th>支出类型</th>
						<th>操作</th>
					</tr>
				</thead>
				<thead v-for="(obj,index) in items">
					<tr >
						<td>{{obj.date.substring(0,10)}}</td>
						<td>{{obj.item}}</td>
						<td>{{obj.amount}}</td>
						<td>{{obj.type}}</td>
						<td><button @click="update(obj)" class="btn btn-info">更新</button></td>
						<td><button @click="deldata(obj.itemId)" class="btn btn-danger">删除</button></td>
					</tr>	
				</thead>				
			</table>
		</div>
	</div>
</template>

<script>
	import Increase from '../components/Increase.vue'
	export default{
		data(){
			return{
				items:[],
				itemId:'',
				index:'',
				item:[]
			}
		},
		mounted:function(){
			this.queryItemAll()
		},
		methods:{
			queryItemAll:function(){
				var self=this;
				this.$axios.post('http://localhost:8080/queryItemAll')
				.then(function(response){
					self.items=response.data	
				})
				.catch(function(error){
					alert("queryItemerror");
				})
			},
			deldata:function(itemId){
				var self=this;
				alert(itemId);
				this.$axios.post('http://localhost:8080/delItem',{
					"itemId":itemId
				})
				.then(function(response){
					if(response.data=="success"){
						alert("删除成功！");
					}else{
						alert("删除失败!");
					}
				})
				.catch(function(error){
					alert("del Error!");
				})
			},
			update:function(obj){
				alert(obj.itemId);
				this.$router.push({name:'increase',query:{itemId:obj.itemId,type:obj.type,amount:obj.amount,item:obj.item,date:obj.date}})
			}
		}
		
	}
</script>

<style>
</style>
