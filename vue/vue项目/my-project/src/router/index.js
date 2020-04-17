import Vue from "vue";
import Router from "vue-router";
import Test1 from "@/pages/test1/work1";
import Test2 from "@/pages/test2/test";
import Demo1 from "@/pages/demo1/index";
import Demo2 from "@/pages/demo1/index1";
import Demo3 from "@/pages/demo3/index";
import Demo4 from "@/pages/demo4/index";
import Demo5 from "@/pages/demo5/index";
import Demo6 from "@/pages/demo6/index";
import Demo7 from "@/pages/demo7/index";
import Demo8 from "@/pages/demo8/index";
import Demo9 from "@/pages/demo9/index";
import Demo10 from "@/pages/demo10/index";
import Demo11 from "@/pages/demo11/index";
import Demo12 from "@/pages/demo12/index";
import Demo13 from "@/pages/demo13/index";
import Demo14 from "@/pages/demo14/index";
import Demo15 from "@/pages/demo15/index";
import Demo16 from "@/pages/demo16/index";
import Demo17 from "@/pages/demo17/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/demo1",
      name: "demo1",
      component: Demo1
    },
    {
      path: "/demo2",
      name: "demo2",
      component: Demo2
    },
    {
      path: "/demo3",
      name: "demo3",
      component: Demo3
    },
    {
      path: "/demo4",
      name: "demo4",
      component: Demo4
    },
    {
      path: "/demo5",
      name: "demo5",
      component: Demo5
    },
    {
      path: "/demo6",
      name: "demo6",
      component: Demo6
    },
    {
      path: "/demo7",
      name: "demo7",
      component: Demo7
    },
    {
      path: "/test1",
      name: "test1",
      component: Test1
    },
    {
      path: "/test2",
      name: "test2",
      component: Test2
    },
    {
      path: "/demo8",
      name: "demo8",
      component: Demo8
    },
    {
      path: "/demo9/:useName:userId",
      name: "demo9",
      component: Demo9
    },
    {
      path: "/demo10",
      name: "demo10",
      component: Demo10
    },
    {
      path: "/demo11",
      name: "demo11",
      component: Demo11
    },
    {
      path: "/demo12",
      name: "demo12",
      component: Demo12
    },
    {
      path: "/demo13",
      name: "demo13",
      component: Demo13
    },
    {
      path: "/demo14",
      name: "demo14",
      component: Demo14
    },
    {
      path: "/demo15",
      name: "demo15",
      component: Demo15
    },
    {
      path: "/demo16",
      name: "demo16",
      component: Demo16
    },
    {
      path: "/demo17",
      name: "demo17",
      component: Demo17
    },
  ]
});
