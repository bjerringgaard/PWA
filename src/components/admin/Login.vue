<template>
	<v-container>
		<v-row>
			<v-col offset-md="4" md="4" xs="12">
				<div id="banner">
					<h1>Admin Login</h1>
				</div>
				<div id="info">
					<v-text-field background-color="wtext"  outlined v-model="email" label="Email" required></v-text-field>
					<v-text-field background-color="wtext"  outlined v-model="password" label="Password" required></v-text-field>
					<v-btn color="primary" v-on:click.prevent="signIn()">Login</v-btn>
					<v-btn color="red" v-on:click.prevent="signOut()">LogOut</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signIn() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
					this.$router.replace('admin')
				}).catch(function(error) {
					var errorCode = error.code;
					var errorMessage = error.message;
					if (errorCode === 'auth/wrong-password') {
						alert("Wrong Password")
					} else {
						alert (errorMessage)
					}
					console.log(error)
				})
			},

			signOut() {
				firebase.auth().signOut().then(() => {
					alert("Logged Out");
					this.$router.replace('/')
				}).catch(error => {
					alert(error)
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.col {
		padding: 20px;
		margin-top: 20vh;
		display: flex;
		flex-direction: column;
		background-color: map-get($map: $color, $key: card);
		border-radius: 10px;

		#banner{
			background-color: map-get($color , secondary);
			color: map-get($color, wtext);
			text-transform: uppercase;
			height: 100px;
			margin-bottom: 20px;
			border-radius: 10px;

			display: flex;
			align-items: center;
			justify-content: center;
		}

		button{
			color: map-get($map: $color, $key: wtext);
			margin-right: 10px;
		}
	}
</style>