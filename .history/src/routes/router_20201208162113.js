import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export const constantRouterMap = [
    {
      path: '/login',
      meta: { title: i18n.t('login.title') },
      component: Login,
      hidden: true
    },
    {
      path: '/500',
      meta: { title: '500' },
      component: Error
    },
    ...iframeRoutes,
    {
      path: '/',
      meta: { title: i18n.t('app.home') },
      redirect: '/home',
      component: BasicLayout,
      children: [
        {
          path: '/home',
          meta: { title: i18n.t('app.dashboard'), affix: true, bgColor: true, keepAlive: false },
          component: Dashboard
        }
      ]
    }
  ];