<template>
  <div>
    <v-navigation-drawer v-model="drawer" app right>
		<ul>
			<router-link tag="li" to="/"><v-icon>mdi-home</v-icon>Home</router-link>
			<router-link tag="li" to="/wine"><v-icon>mdi-glass-wine</v-icon>Wine</router-link>
			<router-link tag="li" to="/wineries"><v-icon>mdi-barn</v-icon>Wineries</router-link>
			<router-link tag="li" to="/about"><v-icon>mdi-information</v-icon>About</router-link>
			<router-link tag="li" to="/login"><v-icon>mdi-lock</v-icon>Login</router-link>
		</ul>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
	<v-toolbar-title><router-link tag="li" to="/"><v-icon>mdi-fruit-grapes</v-icon>The Winery</router-link></v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
	<v-content></v-content>
  </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: 0,
    }),
  }
</script>

<style lang="scss" scoped>

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