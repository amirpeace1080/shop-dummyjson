import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue'
import CartView from '../views/CartView.vue'
import DetailPhone from '../components/phone/DetailPhone.vue'
import Login from '../views/Login.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: ':id',
        component: DetailPhone
      },
    ]
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) === true &&
    store.getters.isLoggedIn === false
  )
    next({ name: "login" });
  else next();
  // return console.log(to.matched.some(record => record.meta.requiresAuth))
});

export default router
