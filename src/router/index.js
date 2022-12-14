import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(
        '../views/Login.vue'
      )
  },

  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(
        '../views/Register.vue'
      )
  },
  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(
        '../views/Home.vue'
      ),
    children: [
      {
        path: 'userinfo',
        name: 'userinfo',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/UserInfo')
      },
      {
        path: 'orderquery',
        name: 'orderquery',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/OrderQuery')
      },
      {
        path: 'userstar',
        name: 'userstar',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/UserStar')
      },
      {
        path: 'hotfood',
        name: 'hotfood',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/HotFood')
      },

      {
        path: 'restaurants',
        name: 'restaurants',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/RestaurantList')
      },
      {
        path: 'restaurant',
        name: 'restaurant',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/Restaurant')
      },
      {
        path: 'food',
        name: 'food',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/Food')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/User')
      },
      {
        path: 'ordernow',
        name: 'ordernow',
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('../views/OrderNow')
      },
      {
        path: 'orders',
        name: 'orders',
        meta: {
          keepAlive: true,
          reqsuireAuth: true
        },
        component: () => import('../views/Orders')
      }
    ]
  }
  // {
  //   path: "/test",
  //   name: "test",
  //   component: () =>
  //       import(
  //           "../views/test"
  //           ),
  //   children: [
  //     {
  //       path: "/zoumadeng",
  //       name: "zoumadeng",
  //       meta: {
  //         title: '????????????',
  //         requireAuth: true,
  //         keepAlive: true
  //       },
  //       component: () => import("../views/zoumadeng")
  //     },
  //   ],
  // }
  //???????????????????????????
  // {
  //   path: "/",
  //   name: "Home", //Home????????????????????????????????????????????????????????????????????????children????????????Home???????????????????????????
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "login" */
  //       "../views/Home.vue"
  //     ),
  //   children: [
  //     // {
  //     //     path: "user",
  //     //     name: "user",
  //     //     meta: {
  //     //         title: '????????????',
  //     //         requireAuth: true,
  //     //         keepAlive: true
  //     //     },
  //     //     component: () => import("../views/User.vue")
  //     // },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
