import Vue from 'vue'
import Router from 'vue-router'
import Buffer from '../components/buffer/Buffer.vue'
import Agarose from '../components/agarose/Agarose.vue'
import Weight from '../components/Weight.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/buffer'
    },
    {
      path: '/buffer',
      name: 'Buffer',
      component: Buffer
    },
    {
      path: '/agarose',
      name: 'Agarose',
      component: Agarose
    },
    {
      path: '/weight',
      name: 'Weight',
      component: Weight
    }
  ]
})
