import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../middleware/auth'
import VueRouteMiddleware from 'vue-route-middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: () => import('../views/Posts.vue'),
    meta: {
      middleware: auth
    }
  },
  {
    path: '/posts/:postId',
    name: 'OnePost',
    component: () => import('../views/OnePost.vue'),
    meta: {
      middleware: auth
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/Signup.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(VueRouteMiddleware())

export default router
