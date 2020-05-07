<template>
	<v-conainer>
		<div id="info">
			<div id="title">
				<p class="body-1 font-weight-bold pa-3 darkgrey--text">ORDERS:</p>
				<v-btn color="secondary" small text to="/addNew">
					<v-icon>mdi-plus</v-icon><span style="padding:0 10px;">Add item</span>
				</v-btn>
			</div>
		<v-simple-table id="menu_table">
			<thead>
				<tr>
					<th class="text-left" style="width:10%">Order Nr.</th>
					<th class="text-left" style="width:10%">Qty</th>
					<th class="text-left" style="width:50%">Item</th>
					<th class="text-left" style="width:20%">Status</th>
					<th class="text-left" style="width:10%">Total</th>
				</tr>
			</thead>
			<tbody class="font-weight-light">
				<tr>
					<td>1</td>
					<td class="py-3"><p style="margin:0;">2</p></td>
					<td class="py-3"><p style="margin:0;">Vinen</p></td>
					<td><div>complete</div></td>
					<td class="py-3"><p style="margin:0;">100kr.</p></td>
				</tr>
			</tbody>
		</v-simple-table>
		</div>
	</v-conainer>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	#info{
		width: 1300px;
		margin: 0 auto;

	}

	#title{
		display: flex;
		align-items: center;

		p{
			margin: 0;
		}
	}
</style>