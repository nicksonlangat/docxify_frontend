import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Notes from '../views/Notes.vue'
import Tasks from '../views/Tasks.vue'
import Documents from '../views/Documents.vue'
import Create from '../views/Create.vue'
import store from '@/store'

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
    component: Notes,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/documents',
    name: 'documents',
    component: Documents,
    meta: {
      requiresAuth: true,
    },
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
  mode: 'history',
  routes,
  linkExactActiveClass: '!bg-rose-400 px-2 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300',
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("isAuthenticated")) {
      next('/login')
   }
   return next()
  } else {
     next()
  }
})

export default router
