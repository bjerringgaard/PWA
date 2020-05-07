<template>
  <v-app id="app">
    <navigation />
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  #app{
    background-color: map-get($color, bg);
  }

  .container{
    width: 1300px;	
    margin-top: -40px;
	}
</style>
