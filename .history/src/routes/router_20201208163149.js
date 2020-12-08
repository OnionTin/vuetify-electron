import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from ''
let router = new Router({
    base: "",
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