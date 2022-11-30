import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home-vue',
      meta: {
        icon: 'home-vue', title: 'Home'
      },
      component: () => import(/* webpackChunkName: "home" */ './pages/home/HomeVue')
    },
    {
      name: 'gerenciamento-notas',
      path: '/ghe-notas',
      meta: {
        icon: 'list-ul', title: 'Lista Notas'
      },
      component: () => import(
        /* webpackChunkName: "expenses-list" */
        './pages/ghe-notas/GerenciamentoNotas'
      )
    },
  
    {
      name: 'login-vue',
      path: '/login',
      meta: {title: 'Login'},
      component: () => import(/* webpackChunkName: "login" */ './pages/login/LoginVue')
    },

    {
      name: 'register-vue',
      path: '/register',
      meta: { title: 'RegisterVue' },
      component: () => import(/* webpackChunkName: "register" */ './pages/register/RegisterVue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - GHE UESB`
  if(!window.uid && to.name !== 'login-vue' && to.name !== 'register-vue'){
    next({name: 'login-vue'})
  }else{
    next()
  }//fim do else
})


export default router