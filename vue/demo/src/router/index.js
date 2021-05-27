import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
const Demo2 = ()=>import('../views/Demo2.vue');
const Demo3 = ()=>import('../views/Demo3');
const Demo4 = ()=>import('../views/Demo4');
const Demo5 = ()=>import('../views/Demo5');
const Demo6 = ()=>import('../views/Demo6');
const Demo7 = ()=>import('../views/Demo7');
const Demo8 = ()=>import('../views/Demo8');
const Demo9 = ()=>import('../views/Demo9');
const Demo10 = ()=>import('../views/Demo10');
const Demo11 = ()=>import('../views/Demo11');
const Demo12 = ()=>import('../views/Demo12');
const Detail = ()=>import('../views/Detail');
const NotFound = ()=>import('../views/404')
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
    path:'/demo5/:id(\\d+)?/:type?',
    name:'Demo5',
    component:Demo5,
    children:[
      {
        path:'detail',
        name:'detail',
        component:Detail
      }
    ]
  },
  {
    path:'/demo6',
    name:'Demo6',
    component:Demo6
  },
  {
    path:'/demo7',
    //重定向
    //redirect:'demo6',
    name:'Demo7',
    alias:'/demo777',
    component:Demo7
  },
  {
    path:'/demo8',
    name:'Demo8',
    component:Demo8
  },
  {
    path:'/demo9',
    name:'Demo9',
    component:Demo9
  },
  {
    path:'/demo10',
    name:'Demo10',
    component:Demo10
  },
  {
    path:'/demo11',
    name:'Demo11',
    component:Demo11
  },
  {
    path:'/demo12/:id(\\d+)?/:type?',
    meta:{
      title:"这是demo"
    },
    name:'Demo12',
    component:Demo12
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
  },
  {
    path:"*",
    name:"NotFound",
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
