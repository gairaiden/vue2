import { createRouter, createWebHashHistory } from 'vue-router'
// import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OutPut from '@/components/OutPut' //①import

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/outputs',
    name: 'OutPuts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: OutPut
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
