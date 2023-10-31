import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: '/registration',
  //   name: 'Registration',
  //   component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
  // },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
  },
  {
    path: "/tickets-faq",
    name: "Tickets FAQ",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../views/TicketsFAQ.vue"),
  },
  // {
  //   path: '/schedule',
  //   name: 'Schedule',
  //   component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  // },
  // {
  //   path: '/schedule/:id',
  //   name: 'scheduleDetails',
  //   component: () => import(/* webpackChunkName: "scheduleDetails" */ '../views/SchedulePage.vue')
  // },
  // {
  //   path: '/speakers',
  //   name: 'Speakers',
  //   component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue')
  // },
  // {
  //   path: '/speakers/:id',
  //   name: 'SpeakerPage',
  //   component: () => import(/* webpackChunkName: "speaker-page" */ '../views/SpeakerPage.vue')
  // },
  {
    path: "/team",
    name: "Team",
    component: () => import(/* webpackChunkName: "team" */ "../views/Team.vue"),
  },
  {
    path: "/partners",
    name: "Partners",
    component: () =>
      import(
        /* webpackChunkName: "schedule" */ "../components/common/PartnerList.vue"
      ),
  },
  // {
  //   path: '/communities',
  //   name: 'Communities',
  //   component: () => import(/* webpackChunkName: "badge" */ '../views/Communities.vue')
  // },
  // {
  //   path: '/badge',
  //   name: 'Badge',
  //   component: () => import(/* webpackChunkName: "badge" */ '../views/Badge.vue')
  // },
  {
    path: "/code-of-conduct",
    name: "CoC",
    component: () => import(/* webpackChunkName: "badge" */ "../views/CoC.vue"),
  },
  // {
  //   path: '/exhibitors',
  //   name: 'Exhibitors',
  //   component: () => import(/* webpackChunkName: "badge" */ '../views/Exhibitors.vue')
  // },
  // {
  //   path: '/highlight',
  //   name: 'Highlights',
  //   component: () => import(/* webpackChunkName: "badge" */ '../views/highlight.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
