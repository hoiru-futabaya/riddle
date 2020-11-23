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
import Congrats from '@/components/Congrats.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // このパスにアクセスしたら
      name: 'Main',
      component: Main // このコンポーネントを呼ぶ
    },
    {
      path: '/teOr2X',
      name: 'teOr2X',
      component: Page1
    },
    {
      path: '/CRygWR/',
      name: 'CRygWR',
      component: Page2
    },
    {
      path: '/KOqB9y/',
      name: 'KOqB9y',
      component: Page3
    },
    {
      path: '/iPFmMS/',
      name: 'iPFmMS',
      component: Page4
    },
    {
      path: '/GvTiWl/',
      name: 'GvTiWl',
      component: Page5
    },
    {
      path: '/aYuon8/',
      name: 'aYuon8',
      component: Goal
    },
    {
      path: '/wD4BgH/',
      name: 'wD4BgH',
      component: Congrats
    }
  ]
})
