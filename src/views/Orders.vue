<template>
<div>
		<div id="info">
			<div id="title">
				<p class="body-1 font-weight-bold darkgrey--text">ORDERS: </p>
				<p id="totalRevenueText" class="font-weight-regular darkgrey--text">REVENUE: <span id="totalRevenueTextTotal"> {{ revenueTotal }}</span></p>
			</div>
		<v-simple-table id="menu_table">
			<thead>
				<tr>
					<th>Delete</th>
					<th class="text-left" style="width:7%">Order Nr.</th>
					<th class="text-left" style="width:5%">Qty</th>
					<th class="text-left" style="width:50%">Item</th>
					<th class="text-left" style="width:10%">Status</th>
					<th class="text-left" style="width:10%">Price</th>
					<th class="text-left" style="width:10%">Total</th>
				</tr>
			</thead>
			<tbody class="font-weight-light">
				<tr v-for="item in orderItems" :key="item.name" v-if="item.storeOrder == false">
					<td><v-icon v-on:click="deleteOrderItem(item.id)">mdi-delete</v-icon></td>
					<td>{{ item.orderNumber }}</td>
					<td class="py-3"><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;"> {{ subitem.quantity }} </p></td>
					<td class="py-3"><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;">{{ subitem.winery }}, {{ subitem.name }}</p></td>
					<td><div id="status_box" v-bind:class="item.status" v-on:click="switchStage(item.id)"> {{ item.status }} </div></td>
					<td class="py-3"><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;"> {{ subitem.price }} DKK</p></td>
					<td class="py-3"><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;"> {{ subitem.price * subitem.quantity }} DKK</p></td>
				</tr>
			</tbody>
		</v-simple-table>
		</div>
		</div>
</template>

<script>
import { dbOrders } from '../../firebase'

export default {
    data () {
      return {
		basketDump: [],
      }
	},
	beforeCreate() {
		this.$store.dispatch('setOrderItems')
	},
	methods: {
		switchStage(id) {
			let selectedOrderItem = this.orderItems.filter(item => item.id === id)[0];

			if(selectedOrderItem.status === "inprogress"){
				dbOrders.doc(id).update({status:"complete"})
				.then(() => {
				})
			}

			else if(selectedOrderItem.status === "incomplete"){
				dbOrders.doc(id).update({status:"inprogress"})
				.then(() => {
				})
			}

			else if(selectedOrderItem.status === "complete"){
				dbOrders.doc(id).update({status:"incomplete"})
				.then(() => {
				})
			}
		},

		deleteOrderItem(id){
			dbOrders.doc(id).delete().then(() => {

			}).catch((error) => {

			})
		},
	},

	computed: {
		orderItems() {
			return this.$store.getters.getOrderItems
		},
		revenueTotal() {
			var revenueIncome = 0;

			this.orderItems.forEach(element => {
				if(element.status === "complete") {
					element.orderLines.forEach(el =>{
						revenueIncome += el.price * el.quantity
					})
				}
			});
			return revenueIncome
		},
	},
  }
</script>

<style lang="scss" scoped>
	#status_box{
		height: 35px;
		width: 90px;

		font-size:12px;
		border-radius: 2px;
		display: flex;
		justify-content: center;
		align-items: center;
		
		margin: 5px;
		color: white;
		text-shadow: 1px 1px 1px rgb(54, 54, 54);
	}

	.inprogress{
		background-color: map-get($map: $color, $key: secondary);
	}
	.complete{
		background-color: map-get($map: $color, $key: lightgrey);
	}
	.incomplete{
		background-color: map-get($map: $color, $key: red);
	}

	#info{
		width: 1300px;
		margin: 0 auto;
	}

	#title{

		p{
			margin: 0;
		}
	}

	#totalRevenueText {
		font-size: 16px;
	}
</style>