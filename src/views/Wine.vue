<template>
<div>
		<v-snackbar v-model="addedSucces" bottom>
			Added items to Cart
			<v-btn color="secondary" text to="/cart">Go to Cart</v-btn>
		</v-snackbar>
	<div id="banner">
		<v-container>
			<div id="sorter">
				<v-btn v-on:click="redWine = !redWine" class="button" v-bind:class="{ active: redWine }">Rødvin</v-btn>
				<v-btn v-on:click="whiteWine = !whiteWine" class="button" v-bind:class="{ active: whiteWine }">Hvidvin</v-btn>
				<v-btn v-on:click="roseWine = !roseWine" class="button" v-bind:class="{ active: roseWine }">Rosevin</v-btn>
				<v-btn v-on:click="champagne = !champagne" class="button" v-bind:class="{ active: champagne }">Champagne</v-btn>
			</div>
		</v-container>
	</div>

	<v-container>
		<div id="products">
				<div class="card" v-for="item in menuItems" :key="item.name" v-if="item.type === 'Rødvin' && redWine === true">
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
		
				<div class="card" v-for="item in menuItems" :key="item.name" v-if="item.type === 'Hvidvin' && whiteWine === true">
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

				<div class="card" v-for="item in menuItems" :key="item.name" v-if="item.type === 'Rose' && roseWine === true">
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

				<div class="card" v-for="item in menuItems" :key="item.name" v-if="item.type === 'Champagne' && champagne === true">
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

				<div class="card" v-for="item in menuItems" :key="item.name" v-if="redWine == false && whiteWine == false && roseWine == false && champagne == false">
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
				</div>	
	</v-container>
</div>
</template>

<script>
import { dbMenuAdd } from '../../firebase'

export default {
	
    data () {
      return {
		basketDump: [],
		addedSucces: false,

		redWine: false,
		whiteWine: false,
		roseWine: false,
		champagne: false,

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
				image: item.image,
				winery: item.winery,
				name: item.name,
				price: item.price,
				quantity: item.quantity,
			});
			this.$store.commit('addBasketItems', this.basketDump);
			this.basketDump = [];
			this.addedSucces = true;
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

	.container{
		width: 1400px;
	}

	.row{
		display: flex;
	}

	.col{
		width: 300px;
	}

	#products{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
	}

	.card {
		width: 300px;
		background-color: map-get($color, cardbg);
		border-radius: 10px;

		padding: 0;
		margin: 10px;

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

				cursor: pointer;

				p{
					color: map-get($color, wtext)
				}
			}
		}
	}

	#banner{
		background-color: map-get($map: $color, $key: cardbg);
		height: 80px;
		width: 100%;
		margin-bottom: 50px;
		margin-top: -60px;

		#sorter{
			display: flex;
			align-items: center;
			justify-content: center;

			button{
				margin: 10px;
				box-shadow: none;
				background-color: map-get($map: $color, $key: wtext);
			}

			.active{
				background-color: map-get($map: $color, $key: primary);
				color: map-get($map: $color, $key: wtext)
			}
		}
	}
</style>