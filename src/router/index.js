import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LocationsView from "../views/LocationsView.vue";
import LocationShow from "../views/LocationShow.vue";
import LocationType from "../views/LocationType.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },

  {
    path: "/locations",
    name: "locations",
    component: LocationsView,
  },
  {
    path: "/location",
    name: "location",
    component: LocationShow,
  },
  {
    path: "/location/:type_id",
    name: "location",
    component: LocationType,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
