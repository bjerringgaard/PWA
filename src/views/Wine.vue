<template>
<div>
	<Sorter />
	<v-container>	
		<v-row>
			<v-col>
				<div class="card">
					<div class="img">
						<img src="https://byensvinhandel.dk/wp-content/uploads/2019/05/Agape-Pinot-Blanc-Expression-300x300.png" alt="Wine">
					</div>
					<h3 id="vinhus">Domine Agape</h3>
					<h2 id="title">Pinot Blanc</h2>
					<p id="info">Hvidvin fra Alsace, Frankrig</p>
					<div id="price">100kr.</div>
					<div id="bottom">
						<div id="quantity">
							<v-icon>mdi-minus-box</v-icon>
							<p>6</p>
							<v-icon>mdi-plus-box</v-icon>
						</div>
						<div id="addToCart">
							<p>Add to Cart</p>
						</div>
					</div>
				</div>
			</v-col>

			<!-- Test Items -->
				<v-col>
				<div class="card">
					<div class="img">
						<img src="https://byensvinhandel.dk/wp-content/uploads/2019/05/Agape-Pinot-Blanc-Expression-300x300.png" alt="Wine">
					</div>
					<h3 id="vinhus">Domine Agape</h3>
					<h2 id="title">Pinot Blanc</h2>
					<p id="info">Hvidvin fra Alsace, Frankrig</p>
					<div id="price">100kr.</div>
					<div id="bottom">
						<div id="quantity">
							<v-icon>mdi-minus-box</v-icon>
							<p>6</p>
							<v-icon>mdi-plus-box</v-icon>
						</div>
						<div id="addToCart">
							<p>Add to Cart</p>
						</div>
					</div>
				</div>
			</v-col>
				<v-col>
				<div class="card">
					<div class="img">
						<img src="https://byensvinhandel.dk/wp-content/uploads/2019/05/Agape-Pinot-Blanc-Expression-300x300.png" alt="Wine">
					</div>
					<h3 id="vinhus">Domine Agape</h3>
					<h2 id="title">Pinot Blanc</h2>
					<p id="info">Hvidvin fra Alsace, Frankrig</p>
					<div id="price">100kr.</div>
					<div id="bottom">
						<div id="quantity">
							<v-icon>mdi-minus-box</v-icon>
							<p>6</p>
							<v-icon>mdi-plus-box</v-icon>
						</div>
						<div id="addToCart">
							<p>Add to Cart</p>
						</div>
					</div>
				</div>
			</v-col>
				<v-col>
				<div class="card">
					<div class="img">
						<img src="https://byensvinhandel.dk/wp-content/uploads/2019/05/Agape-Pinot-Blanc-Expression-300x300.png" alt="Wine">
					</div>
					<h3 id="vinhus">Domine Agape</h3>
					<h2 id="title">Pinot Blanc</h2>
					<p id="info">Hvidvin fra Alsace, Frankrig</p>
					<div id="price">100kr.</div>
					<div id="bottom">
						<div id="quantity">
							<v-icon>mdi-minus-box</v-icon>
							<p>6</p>
							<v-icon>mdi-plus-box</v-icon>
						</div>
						<div id="addToCart">
							<p>Add to Cart</p>
						</div>
					</div>
				</div>
			</v-col>
			<!-- Test Items -->
		</v-row>
	</v-container>
</div>
</template>

<script>
	import Sorter from '../components/Sorter.vue';

	export default {
		components: {
			Sorter
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