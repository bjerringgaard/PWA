<template>
	<div>
	<v-col offset-md="2" md="8">
		<div class="pa-2" id="info_box">
			<h1>Cart</h1>
			<v-simple-table id="menu_table" v-if="basket.length > 0">
				<thead>
					<tr>
						<th class="text-left" style="width:2%"></th>
						<th class="text-left" style="width:15%">Image</th>
						<th class="text-left" style="width:40%">Items</th>
						<th class="text-left" style="width:10%">Price</th>
						<th class="text-left" style="width:10%">Quantity</th>
						<th class="text-left" style="width:10%">Total</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in basket" :key="item.name">
						<td><v-icon v-on:click="removeItem(item)">mdi-delete</v-icon></td>
						<td id="td_img"><v-img v-bind:src="item.image" contain height="100px" width="100px"></v-img></td>
						<td>{{ item.winery }}, {{ item.name }}</td>
						<td>{{ item.price }} DKK</td>
						<td>
							<v-icon v-on:click="decreaseQtn(item)">mdi-minus-box</v-icon>
							{{ item.quantity }}
							<v-icon v-on:click="increaseQtn(item)">mdi-plus-box</v-icon>
						</td>
						<td>{{ item.price * item.quantity }} DKK</td>
					</tr>
				</tbody>
		</v-simple-table>

		<v-simple-table v-else>
			<p>The Basket is Empty</p>
		</v-simple-table>
		
		<div id="basket_checkout" style="margin:0;" class="mt-4">
			<hr>
			<v-row>
				<v-col style="width: 30%;">
					<p>Subtotal: </p>
					<p>Total delivery: </p>
					<p>Total Amount: </p>
				</v-col>
				<v-col style="width: 30%;">
					<p>{{ subTotal }} DKK</p>
					<p>10 DKK</p>
					<p><b>{{ total }} DKK</b></p>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-btn color="primary" class="mb-4" v-on:click="addCheckoutItem()">CheckOut</v-btn>
				</v-col>
			</v-row>
			</div>
		</div>
	</v-col>
	</div>
</template>

<script>
	import { dbMenuAdd } from '../../firebase'

export default {
    data () {
      return {
		basketDump: [],
      }
	},
	beforeCreate() {
		this.$store.dispatch('setMenuItems')
	},
	methods: {
		addCheckoutItem(){
			this.$store.dispatch('setCheckoutItem')
		},

		increaseQtn(item) {
			item.quantity++
		},
		decreaseQtn(item) {
			item.quantity--;

			if(item.quantity === 0){
				this.basket.splice(this.basket.indexOf(item), 1)
			}
		},
		removeItem(item){
			this.basket.splice(this.basket.indexOf(item), 1)
		}
	},

	computed: {
		basket() {
			return this.$store.getters.getBasketItems
		},
		menuItems() {
			return this.$store.getters.getMenuItems
		},

		subTotal() {
			var subCost = 0;
			for(var items in this.basket){
				var individualItem = this.basket[items];
				subCost += individualItem.quantity * individualItem.price;
			}
			return subCost
		},
		total(){
			var deliveryPrice = 10;
			var totalCost = this.subTotal
			return totalCost + deliveryPrice
		},
	},
  }
</script>

<style lang="scss" scoped>

</style>