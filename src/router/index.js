import Vue from 'vue'
import Router from 'vue-router'
// コンポーネントを読み込む
import Main from '@/views/Main.vue'
import Page1 from '@/views/1.vue'
import Page2 from '@/views/2.vue'
import Page3 from '@/views/3.vue'
import Page4 from '@/views/4.vue'
import Page5 from '@/views/5.vue'
import Goal from '@/views/Goal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // このパスにアクセスしたら
      name: 'Main',
      component: Main // このコンポーネントを呼ぶ
    },
    {
      path: '/1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/goal',
      name: 'Goal',
      component: Goal
    }
  ]
})
