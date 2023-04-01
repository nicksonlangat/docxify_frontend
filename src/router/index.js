import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Notes from '../views/Notes.vue'
import Tasks from '../views/Tasks.vue'
import Documents from '../views/Documents.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/documents',
    name: 'documents',
    component: Documents
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: '!bg-rose-400 px-2 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300',
})

export default router
