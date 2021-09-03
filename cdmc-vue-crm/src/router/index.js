import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/KidsList.vue'),
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '/analitics',
    name: 'Analitics',
    component: () => import(/* webpackChunkName: "about" */ '../views/Analitics.vue'),
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'login'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/time-line',
    name: 'Временная линия',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TimeLine.vue')
  },
  {
    path: '/task-list',
    name: 'Задачи',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskList.vue'),
    meta: {
      layout: 'task-list'
    }
  }
  ,
  {
    path: '/task-detail',
    name: 'TaskDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskDetail.vue'),
    meta: {
      layout: 'task-detail'
    }
  },
  {
    path: '/kids-list',
    name: 'KidsList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      layout: 'default-layout'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
