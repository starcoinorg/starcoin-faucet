import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:network',
    name: 'Main',
    component: MainView,
  },
  { path: '*', redirect: '/barnard' }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
