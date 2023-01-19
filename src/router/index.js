import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/Signup.vue";
import HomePage from "../views/Home.vue";
import LoginPage from "../views/Login.vue";
import ErrPage from "../views/ErrPage.vue";
import MissingPerson from "../views/MissingPerson.vue";
import SearchMissing from "../views/SearchMissing.vue";
import ContactUs from "../views/ContactUs";
import Aboutus from "../views/Aboutus";
import ThePerson from "../views/ThePerson";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/missing-person",
    name: "MissingPerson",
    component: MissingPerson,
  },
  {
    path: "/search-person",
    name: "SearchMissing",
    component: SearchMissing,
  },
  {
    path: "/Aboutus",
    name: "Aboutus",
    component: Aboutus,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/ThePerson",
    name: "ThePerson",
    component: ThePerson,
  },
  // stays last
  {
    path: "/:catchAll(.*)",
    name: "ErrPage",
    component: ErrPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.params.pageTitle !== undefined) {
    document.title = `${to.name} | ${to.params.pageTitle} | ${process.env.VUE_APP_TITLE} `;
  } else {
    if (to.name == null) {
      document.title = `unknown page | ${process.env.VUE_APP_TITLE}`;
    } else {
      document.title = `${to.name} | ${process.env.VUE_APP_TITLE} `;
    }
  }

  next();
});

export default router;
