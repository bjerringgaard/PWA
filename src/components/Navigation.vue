<template>
  <div>
    <v-navigation-drawer v-model="drawer" app right>
		<ul>
			<router-link tag="li" to="/"><v-icon>mdi-home</v-icon>Home</router-link>
			<router-link tag="li" to="/wine"><v-icon>mdi-glass-wine</v-icon>Wine</router-link>
			<router-link tag="li" to="/wineries"><v-icon>mdi-barn</v-icon>Wineries</router-link>
			<router-link tag="li" to="/about"><v-icon>mdi-information</v-icon>About</router-link>
			<router-link tag="li" to="/orders" class="primary--text" v-if="currentUser"><v-icon color="primary">mdi-clipboard-text</v-icon>Orders</router-link>
			<router-link tag="li" to="/vare" class="primary--text" v-if="currentUser"><v-icon color="primary">mdi-package-variant</v-icon>Products</router-link>

			<router-link tag="li" to="/login" class="red--text" v-if="!currentUser"><v-icon color="red">mdi-lock</v-icon>Login</router-link>
			<li v-on:click.prevent="signOut()" class="red--text" v-if="currentUser"><v-icon color="red">mdi-lock</v-icon>LogOut</li>
		</ul>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
	<v-toolbar-title><router-link tag="li" to="/"><v-icon>mdi-fruit-grapes</v-icon>The Winery</router-link></v-toolbar-title>
      <v-spacer />
	  <router-link tag="li" to="/cart"><v-icon id="cart">mdi-cart</v-icon></router-link>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
	<v-content></v-content>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { db } from '../../firebase'
/* eslint-enable no-unused-vars */

import firebase from 'firebase'
import 'firebase/firestore'
import store from '../store/index.js'

firebase.auth().onAuthStateChanged(function(user){
	if(user) {
		store.dispatch('setUser', user)
	} else{
		store.dispatch('setUser', null)
	}
});

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: 0,
	}),

	methods: {
		signOut() {
				firebase.auth().signOut().then(() => {
					alert("Logged Out");
					this.$router.replace('/')
				}).catch(error => {
					alert(error)
				})
			}
	},
	
	computed: {
		currentUser(){
			return this.$store.getters.currentUser
		}
	}
  }
</script>

<style lang="scss" scoped>

#cart{
	font-size: 20px;
	margin-right: 10px;
}

	li{
		list-style-type: none;
		cursor: pointer;
	}


	nav{
		ul {
		padding: 0;
		margin-top: 20px;
		text-decoration: none;
		}
		li{
			margin-left: 25%;
			padding: 10px 20px;
			list-style-type: none;
			cursor: pointer;
		}
		li i{
			margin-right: 10px;
		}
		li:last-child {
			position: absolute;
			bottom: 40px;
		}
	}
	

	.v-toolbar__title{
		li{
			padding: 10px 20px;
			list-style-type: none;
			cursor: pointer;
		}
		li i{
			margin-right: 10px;
		}
	}
		

</style>