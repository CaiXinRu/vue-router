// vue-router的資料載進來
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    // 寫法一：這是路徑（path）＋元件（component）+name形式
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 另種寫法：外部元件後方加入一個箭頭函式，import加入使用方法
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    // 現在要在newpage底下加入子路徑
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue')
      },
      // 在後面加入:id，表動態id(轉為動態形式)
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue')
      },
      // 複製如上，其路徑做調整，並新增屬性props
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        // 在路由表上觸發route
        props: (route) => {
          console.log('route:', route)
          // 改成動態id，不寫死
          return {
            id: route.params.id
          }
          // id: '4ae794680a3eb0cd'
        }
      },
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        // 開一個子路由
        children: [
          {
            path: 'c2a',
            // 載入多個元件，所以component加s
            components: {
              left: () => import('../views/ComponentC'),
              right: () => import('../views/ComponentA')
            }
          },
          // 巢狀路由所以可以增加多個項目
          {
            path: 'a2b',
            // 載入多個元件，所以component加s
            components: {
              left: () => import('../views/ComponentA'),
              right: () => import('../views/ComponentB')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// export出來給main.js使用
export default router
