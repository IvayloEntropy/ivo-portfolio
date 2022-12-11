import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Contacts from "../views/Contacts.vue"
import Articles from "../views/Articles.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/articles", component: Articles },
  { path: "/contacts", component: Contacts },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})