import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
const Demo2 = ()=>import('../views/Demo2.vue');
const Demo3 = ()=>import('../views/Demo3');
const Demo4 = ()=>import('../views/Demo4');
Vue.use(VueRouter);

const routes = [

  {
    path:'/demo',
    name:'Demo',
    component:Demo
  },
  {
    path:'/demo2',
    name:'Demo2',
    component:Demo2
  },
  {
    path:'/demo3',
    name:'Demo3',
    component:Demo3
  },
  {
    path:'/demo4',
    name:'Demo4',
    component:Demo4
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
