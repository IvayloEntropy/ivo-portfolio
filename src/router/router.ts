import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Contacts from "../views/Contacts.vue"
import Articles from "../views/Articles.vue"
import Article from "../views/Article.vue"

import Project from "../views/Project.vue"
import Projects from "../views/Projects.vue"

import About from "../views/About.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/articles", component: Articles },
  { path: "/blog-post", component: Article },

  { path: "/contacts", component: Contacts },
  { path: "/projects", component: Projects },
  { path: "/project", component: Project },
  { path: "/about", component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      console.log("moving to top of the page");
      window.scrollTo(0, 0);
    }
 }
})
