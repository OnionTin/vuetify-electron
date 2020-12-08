import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new Router({
    base: "/yys/",
    routes: [
      {
        path: "/",
        name: "Index",
        component: Index,
        meta: { title: "云药师", tabShow: true, tabStatus: 0 }
      }
    ]
});

export default router;