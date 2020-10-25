import Vue from 'vue'
import Router from 'vue-router'
// コンポーネントを読み込む
import Main from '@/components/Main.vue'
import Page1 from '@/components/1.vue'
import Page2 from '@/components/2.vue'
import Page3 from '@/components/3.vue'
import Page4 from '@/components/4.vue'
import Page5 from '@/components/5.vue'
import Goal from '@/components/Goal.vue'

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
      path: '/teOr2X',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/CRygWR',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/KOqB9y',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/iPFmMS',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/GvTiWl',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/aYuon8',
      name: 'Goal',
      component: Goal
    }
  ]
})
