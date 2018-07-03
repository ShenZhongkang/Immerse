import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Activeties from '@/components/Activeties'
import Mine from '@/components/Mine'
import Recommend from '@/pages/Recommend'
import Songlist from '@/pages/Songlist'
import Radiostation from '@/pages/Radiostation'
import Musiclist from '@/pages/Musiclist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage,
      children: [
        {
          path: '/recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/songlist',
          name: 'Songlist',
          component: Songlist
        },
        {
          path: '/radiostation',
          name: 'Radiostation',
          component: Radiostation
        },
        {
          path: '/musiclist',
          name: 'Musiclist',
          component: Musiclist
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/activeties',
      name: 'Activeties',
      component: Activeties
    }
  ]
})
