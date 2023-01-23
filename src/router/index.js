import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GamesView from "@/views/GamesView.vue";
import ChatView from "@/views/ChatView.vue";
import GameView from "@/views/GameView.vue";
import LibraryView from "@/views/LibraryView.vue";
import LoginView from "@/views/LoginView.vue";
import SignUpView from '@/views/SignUpView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/games",
    name: "games",
    component: GamesView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
  },
  {
    path: "/game/:slug",
    name: "game",
    component: GameView,
  },
  {
    path: "/library",
    name: "library",
    component: LibraryView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUpView
  }
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
