import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import CategoryDish from "./components/category/CategoryDish.vue";
import CategoryDessert from "./components/category/CategoryDessert.vue";
import CategoryDrink from "./components/category/CategoryDrinks.vue";
import ProductPage from './components/products/ProductPage.vue';
import HomePage from "./components/home/HomePage.vue";
import NotFound from "./components/home/NotFound.vue";
import ContactPage from "./components/pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/contact",
      component: ContactPage,
    },
    {
      path: "/dishes",
      component: CategoryDish,
    },
    {
      name: "Dishes",
      path: "/dishes/:catId/:productId",
      component: ProductPage,
    },
    {
      path: "/drinks",
      component: CategoryDrink,
    },
    {
      name: "Drinks",
      path: "/drinks/:catId/:productId",
      component: ProductPage,
    },
    {
      path: "/deserts",
      component: CategoryDessert,
    },
    {
      name: "Deserts",
      path: "/deserts/:catId/:productId",
      component: ProductPage,
    },

    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
const app = createApp(App);
app.use(router);
app.mount("#app");
