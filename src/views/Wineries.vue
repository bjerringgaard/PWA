<template>
	<v-container>
		<div>
			<div class="banner">
				<h1>Vingårde</h1>
			</div>
			<v-row>
				<v-col md="3">
					<div class="frame">
						<img src="../assets/Wineries/Batzella-1-300x300.png" alt="Batzella">
					</div>
				</v-col>
				<v-col md="3">
					<div class="frame">
						<img src="../assets/Wineries/Bonfanti-300x300.png" alt="Bonfanti">
					</div>
				</v-col>
				<v-col md="3">
					<div class="frame">
						<img src="../assets/Wineries/Celestiere-300x300.png" alt="Celestiere">
					</div>
				</v-col>
				<v-col md="3">
					<div class="frame">
						<img src="../assets/Wineries/Dalmeran-1-300x300.png" alt="Dalmeran">
					</div>
				</v-col>
				<v-col md="3">
					<div class="frame">
						<img src="../assets/Wineries/Domaine-Agape-300x300.png" alt="Agape">
					</div>
				</v-col>
				<v-col md="3">
					<div class="frame">
						<img src="../assets/Wineries/Domaine-Lavillaudiere-1-300x300.png" alt="Domaine Lavillaudiere">
					</div>
				</v-col>
				<v-col md="3">
					<div class="frame">
						<img src="../assets/Wineries/Linaje-Garsea-300x300.png" alt="Garsea">
					</div>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.v-content {
		padding: 0;
	}

	.banner{
		width: 100%;
		height: 300px;
		margin-bottom: 20px;
		
		background-color: map-get($color, secondary);
		border-radius: 10px;

		display: flex;
		align-items: center;
		justify-content: center;

		h1{
			color: map-get($color, wtext);
			text-transform: uppercase;
			font-size: 48px;
		}
	}

	.frame {
		width: 300px;
		height: 300px;
		background-color: map-get($color, lightgrey);
		border-radius: 10px;

			img{
				border-radius: 10px;
			}
	}
</style>