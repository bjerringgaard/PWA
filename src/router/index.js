import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Wine from '../views/Wine.vue'
import Wineries from '../views/Wineries.vue'
import Login from '../components/admin/Login.vue'
import Orders from '../views/Orders.vue'
import AddNewItems from '../components/admin/AddNewItems.vue'


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

  //Admin
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/addNew',
    name: 'addNew',
    component: AddNewItems
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
})

export default router
