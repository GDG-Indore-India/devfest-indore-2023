<template>
  <!-- background:#F7F5FD; -->
  <div>
  <v-app-bar
    app
    fixed
    class="elevation-0"
    style="box-shadow: 0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0;-webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(8px);opacity:0.93"
    hide-on-scroll
  >
    <v-app-bar-nav-icon
      aria-label="Hamburger Btn"
      @click="toggleDrawer"
      class="d-md-none d-lg-none"
    ></v-app-bar-nav-icon>

    <div class="d-flex align-center">
       <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none;"
      >
         <v-img
          alt="WTM Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/gdg-indore-logo.png')"
          width="250px"
        /> 
      </router-link> 
    </div>
    <!-- <v-toolbar-title class="google-font px-0" style="width: 300px">
      <router-link
        to="/"
        class="google-font"
        style="text-decoration: none; font-size: 100%;color:black;"
        >
         <v-img
          alt="WTM Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/wtm.svg')"
          width="50vh"
        /> 
        </router-link
      >
    </v-toolbar-title> -->

    <v-spacer></v-spacer>
    <v-tabs
      color="black"
      right
      slider-color="black"
      :hide-slider="getRouteName()"
      class="hidden-sm-and-down google-font"
    >
      <v-tab
        class="google-font"
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        @click="onClick($event, link)"
        style="text-transform: capitalize; font-size: 100%"
        >{{ link.text }}</v-tab
      >
    </v-tabs>
    <v-btn rounded depressed target="_blank" class="mx-3 hidden-sm-and-down" color="black" dark href="https://gdg.community.dev/gdg-indore">
      <v-icon left>mdi-account-circle-outline</v-icon>
      Join us
    </v-btn>
    <!-- <v-btn rounded depressed class="mx-3 hidden-sm-and-down" color="#ea4335" dark href="https://bit.ly/devfest22indore" target="_blank">
      <a target="_blank" style="color: #fff; text-decoration: none;"><v-icon left>mdi-email-outline</v-icon>Invite Only Form</a>
    </v-btn> -->
    <v-btn
      aria-label="Share Button"
      icon
      v-on:click="shareMe"
      class="hidden-sm-and-up"
    >
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
  </v-app-bar>
      <!-- <div></div>
      <div class="container text-center my-0 text-sm-center white--text container--fluid" style="background: rgb(72, 74, 82);padding-top:4.5em;">
        <div class="row align-center justify-center">
          <div class="col-md-12 col-lg-12 col-xl-12 col">
            <p class="py-0 google-font mb-0">
              <span class="mr-md-1" style="font-size: 85%;">Keep an eye onto our website <b>#DevfestIndore2022</b>. And register from</span>
              <a id="eventbrite-widget-modal-trigger-451603737937" target="_blank" class="ml-1" style="color: white; font-size: 85%;text-decoration: underline;">here.</a>
              </p>
            </div>
          </div>
        </div> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "AppBar",
  data: () => ({
    hideSlidersOn: ["CoC"],
  }),
  components:{
  },
  computed: {
    ...mapGetters(["links"]),
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    getRouteName() {
      return this.hideSlidersOn.includes(this.$route.name) ? true : false;
    },
    shareMe() {
      // console.log(e);
      if (navigator.share) {
        navigator
          .share({
            title: "Women Techmakers International Women's Day India Summit 2021",
            url: "https://iwdindia.in/",
          })
          .then(() => {
            console.log("Thanks for sharing");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Not supporting in your browser");
      }
    },
  },
};
</script>

<style>
/* .v-toolbar .v-toolbar__content {
      border-bottom: 1px solid rgb(218, 220, 224);
} */
@media only screen and (min-width: 600px) {
  .v-toolbar .v-toolbar__content {
    padding-left: 3%;
    padding-right: 3%;
  }

  .v-toolbar {
    width: 60%;
    margin: 9px auto;
    border: 1px solid !important;
    border-radius: 20px !important;
  }
}
</style>
