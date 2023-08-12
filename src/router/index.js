import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventosView from '../views/EventosView.vue'
const routes = [
  {
    path: '/',
    name: 'dash',
    component: HomeView,
    meta: { title: 'Painel de controlo de ativedades' }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { title: 'Painel de controlo de ativedades' }
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: EventosView,
    meta: { title: 'Eventos, Registros de Eventos' }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Alterar o título da página com base na rota atual
router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title || 'APupu Eventos'; // Título padrão se não estiver definido para a rota
  document.title = pageTitle;
  next();
});

export default router
