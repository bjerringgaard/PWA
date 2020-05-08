import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Wine from '../views/Wine.vue'
import Wineries from '../views/Wineries.vue'
import Login from '../components/admin/Login.vue'
import Orders from '../views/Orders.vue'
import AddNewItems from '../components/admin/AddNewItems.vue'
import Cart from '../components/Cart.vue'
import Vare from '../views/Vare.vue'

import Batzella from '../views/wineries/Batzella.vue'
import Bonfanti from '../views/wineries/Bonfanti.vue'
import Celestiere from '../views/wineries/Celestiere.vue'
import Dalmeran from '../views/wineries/Dalmeran.vue'
import Agape from '../views/wineries/Agape.vue'
import Lavillaudiere from '../views/wineries/Lavillaudiere.vue'
import Garsea from '../views/wineries/Garsea.vue'


import firebase from 'firebase'
import 'firebase/firestore'


Vue.use(VueRouter)

  const routes = [
  //User
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wine',
    name: 'Wine',
    component: Wine
  },
  {
    path: '/wineries',
    name: 'Wineries',
    component: Wineries
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
	},
	
	//Wineries
	{
    path: '/batzella',
    name: 'Batzella',
    component: Batzella
	},
	{
    path: '/bonfanti',
    name: 'Bonfanti',
    component: Bonfanti
	},
	{
    path: '/celestiere',
    name: 'Celestiere',
    component: Celestiere
	},
	{
    path: '/dalmeran',
    name: 'Dalmeran',
    component: Dalmeran
	},
	{
    path: '/agape',
    name: 'Agape',
    component: Agape
	},
	{
    path: '/lavillaudiere',
    name: 'Lavillaudiere',
    component: Lavillaudiere
	},
	{
    path: '/garsea',
    name: 'Garsea',
    component: Garsea
	},


  //Admin
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/orders',
    name: 'Orders',
    meta: {requiresAuth : true},
    component: Orders
  },
  {
    path: '/addNew',
    name: 'addNew',
    meta: {requiresAuth : true},
    component: AddNewItems
  },
  {
    path: '/vare',
    name: 'Vare',
    meta: {requiresAuth : true},
    component: Vare
  },

  //Redirect
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach ((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else next();
})

export default router

