import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: (resolve) => require(['@/views/index'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['@/views/index'], resolve)
    },
    {{#each list}}
    {
      path: '/{{name}}',
      name: '{{name}}',
      component:  (resolve) => require(['@/views/{{name}}'], resolve),
    }
    {{/each}}
  ]
})
