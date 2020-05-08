<template>
	<v-container>
		<v-row>
			<v-col offset-md="1" md="5">
				<div class="pa-2" id="info_box">
					<h1>Add new item</h1>
						<div id="info">
						<v-overflow-btn :items="dropdown_winery" label="Winery" v-model="winery"></v-overflow-btn>
						<v-overflow-btn :items="dropdown_type" label="Type" v-model="type"></v-overflow-btn>
						<v-overflow-btn :items="dropdown_area" label="Area" v-model="area"></v-overflow-btn>
						<v-overflow-btn :items="dropdown_country" label="Country" v-model="country"></v-overflow-btn>
						<v-text-field label="Name" required v-model="name"></v-text-field>
						<v-text-field label="Description" required v-model="description"></v-text-field>
						<v-text-field label="Price" required v-model="price"></v-text-field>
						<v-file-input label="File input" @change="uploadImage"></v-file-input>

						<v-btn color="complete" v-on:click="addNewMenuItem" :disabled="btnDisable">
							Add Item
						</v-btn>
							<v-btn color="incomplete">
							Cancel
						</v-btn>
					</div>
				</div>
			</v-col>
			<v-col offset-md="1" md="4">
				<div class="pa-2" id="info_box">
					<h1>Preview</h1>
					<div id="info">
						<v-simple-table id="menu-table">
							<thead>
								<tr>
									<th class="text-left" style="width:70%">Name</th>
									<th class="text-left" style="width:100px">Price DKK</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span id="td_name">{{ name }}</span> <br>
										<span id="td_desc">{{ description }}</span>
									</td>
									<td id="td_preview">{{ price }}</td>
								</tr>
							</tbody>
						</v-simple-table>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
/* eslint-disable no-unused-vars */
import { dbMenuAdd, fb } from '../../../firebase.js'

export default {
	data() {
		return {
			winery: '',
			type: '',
			area: '',
			country: '',
			name: '',
			description: '',
			price: '',
			image: null,	
			btnDisable: true,
			dropdown_winery: ['Batzella', 'Bonfanti', 'Celestiere', 'Delmeran', 'Domaine Agape', 'Domaine lavillaudiere', 'linaje Garsea'],
			dropdown_type: ['Hvidvin', 'Rødvin', 'Rose', 'champagne'],
			dropdown_area: ['Bolgheri', 'Valpolicella', 'Alsace', 'Provence', 'Rhone', 'Sancerre', 'Ribera Del Duero', 'Cigales', 'Rueda'],
			dropdown_country: ['Italien', 'Frankrig', 'Spanien'],

		}
	},
	methods: {
		uploadImage(e){
			let file = e;
			console.log(e); 
			var storageRef = fb.storage().ref('products/' + file.name);

			let uploadTask = storageRef.put(file);

			uploadTask.on('state_changed', (snapshot) => {
			}, (error) =>  {

			}, () => {
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					this.image = downloadURL;
					this.btnDisable = false;	
					console.log('File available at', downloadURL);
				});
			});
		},

		addNewMenuItem(){
			dbMenuAdd.add({
				winery: this.winery,
				name: this.name,
				type: this.type,
				area: this.area,
				country: this.country,
				description: this.description,
				price: this.price,
				image: this.image,
				quantity: 1,
			}), 
			this.$router.push({name:'Vare'});
		}
	}
}
</script>

<style lang="scss" scoped>

	#info{
		background-color: white;
		padding: 10px;
	}

	tr th{
		font-weight: 300;
	}

	#td_name {
		font-weight: bold;	
	}

	#td_desc{
		font-style: italic;
		font-weight: 300;
		font-size: 13px;
	}

	tr td{
		padding: 10px 10px 10px 16px;
	}

	h1 {
		font-weight: bold;
		text-transform: uppercase;
		font-size: 16px;
		text-align: right;
	}

		.col:last-child h1 {
			text-align: left;
		}
	
	#basket_checkout{
		background-color: white;
		font-size: 13px;
		padding-left: 20px;
		padding-top: 30px;
		width: 100%;
	}
		#basket_checkout p:first-child {
			line-height: 2px;
		}

		#basket_checkout .col:nth-child(2){
			text-align: right;
			margin-right: 7%;
		}

</style>