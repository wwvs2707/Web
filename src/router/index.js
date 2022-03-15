import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PageHead from "@/components/PageHead";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "PageHead",
      component: PageHead
    }
  ]
});
