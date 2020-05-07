<template>
	<div id="banner">
		<v-container>
			<div id="sorter">
				<v-btn>Rødvin</v-btn>
				<v-btn>Hvidvin</v-btn>
				<v-btn>Rosevin</v-btn>
				<v-btn>Champagne</v-btn>
			</div>
		</v-container>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.container{
		margin-top: -65px;
	}

	#banner{
		background-color: map-get($map: $color, $key: cardbg);
		height: 80px;
		width: 100%;
		margin-bottom: 50px;

		#sorter{
			display: flex;
			align-items: center;
			justify-content: center;

			button{
				margin: 10px;
				box-shadow: none;
				background-color: map-get($map: $color, $key: wtext);
			}
		}
	}
</style>