import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ThankYou from '../components/ThankYou.vue'



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/thanks',
    name: 'ThankYou',
    component: ThankYou
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
