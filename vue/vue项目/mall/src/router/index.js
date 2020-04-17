import Vue from "vue";
import Router from "vue-router";
import Category from "pages/category";
import Home from "pages/home";
import Cart from "pages/cart";
import Personal from "pages/personal";
import Search from "pages/search";
import Product from "pages/product";

Vue.use(Router);

const routes = [
  {
    name: "category",
    path: "/category",
    component: () => import("pages/category")
  },
  {
    name: "home",
    path: "/home",
    component: () => import("pages/home"),
    children: [
      {
        name: "home-product",
        path: "product/:id",
        component: () => import("pages/product")
      }
    ]
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("pages/cart")
  },
  {
    name: "personal",
    path: "/personal",
    component: () => import("pages/personal")
  },
  {
    name: "search",
    path: "/search",
    component: () => import("pages/search")
  },
  {
    path: "*",
    redirect: "/home"
  }
];

export default new Router({
  routes
});
