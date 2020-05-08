<template>
	<v-container>
		<v-snackbar v-model="updatedSucces" bottom>
			{{ updatedText }}
			<v-btn color="pink" text @click="updatedSucces = false">Close</v-btn>
		</v-snackbar>

				<div class="pa-2" id="info_box">
					<div id="title">
						<p class="body-1 font-weight-bold pa-3 darkgrey--text">VARE:</p>
						<v-btn color="secondary" small text to="/addNew">
							<v-icon>mdi-plus</v-icon><span style="padding:0 10px;">Add item</span>
						</v-btn>
					</div>
					<v-simple-table id="menu_table">
							<thead>
								<tr>
									<th class="text-left" style="width:15%">Image</th>
									<th class="text-left" style="width:60%">Name & Description</th>
									<th class="text-left" style="width:10%">Price</th>
									<th class="text-left" style="width:50px">Edit & Delete</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in menuItems" :key="item.name">
									
									<td id="td_img"><v-img v-bind:src="item.image" contain height="100px" width="100px"></v-img></td>
									<td>
										<span id="td_name"><b>{{ item.name }}</b></span> 
										<br><br>
										<span id="td_desc">{{ item.description }}</span>
									</td>
									<td>{{ item.price }} DKK</td>
									<td>
										<v-btn small text v-on:click.stop="dialog = true" v-on:click="editItem(item)">
											<v-icon color="secondary">mdi-pencil</v-icon>
										</v-btn>
										<v-btn small text v-on:click="deleteItem(item.id)">
											<v-icon color="red">mdi-delete</v-icon>
										</v-btn>
									</td>			
								</tr>
							</tbody>
					</v-simple-table>
				</div>

			<v-dialog
				v-model="dialog"
				max-width="80vw"
				>
				<v-card>
					<div id="info_box">
						<h1>Edit item</h1>
						<div id="info">
							<v-overflow-btn :items="dropdown_winery" label="Winery" v-model="item.winery"></v-overflow-btn>
							<v-overflow-btn :items="dropdown_type" label="Type" v-model="item.type"></v-overflow-btn>
							<v-overflow-btn :items="dropdown_area" label="Area" v-model="item.area"></v-overflow-btn>
							<v-overflow-btn :items="dropdown_country" label="Country" v-model="item.country"></v-overflow-btn>
							<v-text-field v-model="item.name"></v-text-field>
							<textarea v-model="item.description"></textarea>
							<v-text-field v-model="item.price"></v-text-field>
								<v-btn color="primary" v-on:click="updateItem()" v-on:click.stop="dialog = false">Edit</v-btn>
								<v-btn color="red" v-on:click.stop="dialog = false">Close</v-btn>
						</div>
					</div>
				</v-card>
			</v-dialog>
	</v-container>
</template>

<script>
	import { dbMenuAdd } from '../../firebase'

export default {
    data () {
    return {
		basket: [],
		dialog: false,
		item: [],
		activeEditItem: null,
		updatedSucces: false,
		updatedText: 'Menu item has beed updated',

		dropdown_winery: ['Batzella', 'Bonfanti', 'Celestiere', 'Delmeran', 'Domaine Agape', 'Domaine lavillaudiere', 'linaje Garsea'],
		dropdown_type: ['Hvidvin', 'Rødvin', 'Rose', 'champagne'],
		dropdown_area: ['Bolgheri', 'Valpolicella', 'Alsace', 'Provence', 'Rhone', 'Sancerre', 'Ribera Del Duero', 'Cigales', 'Rueda'],
		dropdown_country: ['Italien', 'Frankrig', 'Spanien'],
      }
	},
	beforeCreate() {
		this.$store.dispatch('setMenuItems')
	},
	methods: {
		editItem(item){
			this.item = item
			this.activeEditItem = item.id
		},

		updateItem(){
			dbMenuAdd.doc(this.activeEditItem).update(this.item)
			.then(() => {
				this.updatedSucces= true;
				console.log("Document successfully updated!");
			})
			.catch(function(error) {
				console.error("Error updating document: ", error);
			});
		},

		deleteItem(id){
			dbMenuAdd.doc(id).delete().then(function(){
			//	console.log("Item Deleted");
			}).catch(function(error){
				console.error("Error when deleting: ", error);
			});
		},
	},

	computed: {
		menuItems() {
			return this.$store.getters.getMenuItems
		},
	},
  }
</script>

<style lang="scss" scoped>
	#title{
		display: flex;
		align-items: center;

		p{
			margin: 0;
		}
	}

	textarea{
		width: 100%;
		height: 200px;
	}
</style>