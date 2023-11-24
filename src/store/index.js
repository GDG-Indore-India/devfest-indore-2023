import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
          showDrawer: true
        },
      },
      {
        text: "Schedule",
        to: "/schedule",
        icon: "mdi-format-float-left",
        meta: {  
          showToolbar: true,
          showBottomNav: true,
          showDrawer: true
        },
      },
      {
        text: "Speakers",
        to: "/speakers",
        icon: "mdi-account-switch",
        meta: {
          showToolbar: true,
          showBottomNav: true,
          showDrawer: true
        },
      },
      {
        text: "Team",
        to: "/team",
        icon: "mdi-account-multiple",
        meta: {
          showToolbar: true,
          showBottomNav: true,
          showDrawer: true
        },
      },
      {
        text: "Partners",
        to: "/partners",
        icon: "mdi-account-multiple",
        meta: {
          showToolbar: true,
          showBottomNav: true,
          showDrawer: true
        },
      },
      // {
      //   text: "Register",
      //   to: "/registration",
      //   icon: "mdi-account-circle-outline",
      //   meta: {
      //     showToolbar: false,
      //     showBottomNav: true,
      //     showDrawer: true
      //   },
      // },
      // {
      //   text: "Communities",
      //   to: "/communities",
      //   icon: "mdi-star-outline",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //     showDrawer: true
      //   },
      // },
      {
        text: "Badge",
        to: "/badge",
        icon: "mdi-sticker-emoji",
        meta: {
          showToolbar: true,
          showBottomNav: true,
          showDrawer: true
        },
      },
      {
        text: "FAQ",
        to: "/faq",
        icon: "mdi-star-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
          showDrawer: true
        },
      },
      {
        text: "Code of Conduct",
        to: "/code-of-conduct",
        icon: "mdi-file-link-outline",
        meta: {
          showToolbar: false,
          showBottomNav: false,
          showDrawer: true
        },
      },
      // {
      //   text: "Exhibitors",
      //   to: "/exhibitors",
      //   icon: "mdi-file-link-outline",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //     showDrawer: true
      //   },
      // },
      // {
      //   text: "Highlights",
      //   to: "/highlight",
      //   icon: "mdi-file-link-outline",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //     showDrawer: true
      //   },
      // }
    ],
  },
  getters: {
    links: (state) => state.items,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
  },
  actions: {
  },
  modules: {
  }
})
