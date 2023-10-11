<template>
  <v-app >
    <AppToolbar />
    <AppDrawer />
    <v-main class="pa-0 ma-0 grey lighten-5" style="background: ">
      <v-slide-y-reverse-transition>
        <router-view v-show="show" />
      </v-slide-y-reverse-transition>
    </v-main>
    <AppFooter class="hidden-sm-and-down" />
    <AppBottomNav class="hidden-md-and-up" />
  </v-app>
</template>

<script>
import AppToolbar from "./components/core/AppToolbar.vue";
import AppDrawer from "./components/core/AppDrawer.vue";
import AppFooter from "./components/core/AppFooter.vue";
import AppBottomNav from "./components/core/AppBottomNav.vue";

export default {
  name: "App",
  components: {
    AppToolbar,
    AppDrawer,
    AppFooter,
    AppBottomNav,
  },
  data: () => ({
    refreshing: false,
    registration: null,
    snackBtnText: "",
    snackWithBtnText: "",
    snackWithButtons: false,
    timeout: 6000,
    show: false,
  }),
  created() {
    this.show = true;
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = "Refresh";
      this.snackWithBtnText = "New version available!";
      this.snackWithButtons = true;
      this.refreshApp();
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    }
  },
};
</script>
