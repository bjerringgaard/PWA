<template>
<div>
	<Sorter />
	<v-container>	
		<v-row>
			<v-col v-for="item in menuItems" :key="item.name">
				<div class="card">
					<div class="img">
						<v-img v-bind:src="item.image"></v-img>
					</div>
					<h3 id="vinhus">{{ item.winery }}</h3>
					<h2 id="title">{{ item.name }}</h2>
					<p id="info">{{ item.type }} fra {{ item.area }}, {{ item.country }}</p>
					<div id="price">{{ item.price }} DKK</div>
					<div id="bottom">
						<div id="quantity">
							<v-icon v-on:click="decreaseQtn(item)">mdi-minus-box</v-icon>
							<p>{{ item.quantity }}</p>
							<v-icon v-on:click="increaseQtn(item)">mdi-plus-box</v-icon>
						</div>
						<div id="addToCart" v-on:click="addToBasket(item)">
							<p>Add to Cart</p>
						</div>
					</div>
				</div>
			</v-col>
				<v-col offset-md="1" md="4">
				<div class="pa-2" id="info_box">
					<h1>Basket</h1>
					<v-simple-table id="menu_table" v-if="basket.length > 0">
							<thead>
								<tr>
									<th class="text-left" style="width:30%">Quantity</th>
									<th class="text-left" style="width:50%">Name of item</th>
									<th class="text-left" style="width:20%">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in basket" :key="item.name">
									<td>
										<v-icon v-on:click="decreaseQtn(item)">mdi-minus-box</v-icon>
										{{ item.quantity }}
										<v-icon v-on:click="increaseQtn(item)">mdi-plus-box</v-icon>
									</td>
									<td>{{ item.name }}</td>
									<td>{{ item.price }}</td>
								</tr>
							</tbody>
					</v-simple-table>

					<v-simple-table v-else>
						<p>The Basket is Empty</p>
					</v-simple-table>

					<div id="basket_checkout" style="margin:0;" class="mt-4">
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
								<v-btn color="orange" class="mb-4" v-on:click="addCheckoutItem()">CheckOut</v-btn>
							</v-col>
						</v-row>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</div>
</template>

<script>
import Sorter from '../components/Sorter.vue';
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
		addToBasket(item) {
			this.basketDump.push({
				name: item.name,
				price: item.price,
				quantity: item.quantity,
			});
			this.$store.commit('addBasketItems', this.basketDump);
			this.basketDump = [];
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
	.v-application p{
		margin-bottom: 0;
	}

	.col{
		width: 300px;
	}

	.card {
		width: 300px;
		background-color: map-get($color, cardbg);
		border-radius: 10px;

		padding: 0;
		margin: 0;

		.img{
		width: 300px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: map-get($color, card);
		}

		h3{
			padding-top: 10px;
			font-weight: 400;
		}

		h2, h3, p, #price{
			padding-left: 10px;
		}
		#price {
			margin-top: 20px;
			padding-bottom: 10px;
			font-weight: 600;
			font-size: 26px;
		}

		#bottom{
			display: flex;
			margin-right: 10px;
			margin-left: 10px;

			#quantity{
				height: 44px;
				width: 50%;

				display: flex;
				justify-content: center;
				align-items: center;
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;

				background-color: map-get($color, wtext);

				p{
					width: 20%;
				}
			}

			#addToCart{
				height: 44px;
				width: 50%;
				padding: 10px;
				margin-bottom: 10px;

				display: flex;
				justify-content: center;
				align-items: center;

				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;

				background-color: map-get($color, primary);
				color: map-get($color, wtext);

				p{
					color: map-get($color, wtext)
				}
			}
		}
	}
</style>