<template>
  <v-container fluid class="py-0 my-0">
    <v-row align="center" justify="center" class="">
      <!-- <v-col cols="12" md="10" lg="10" sm="10" class="text-center pt-15">
          <p class="google-font my-0" style="font-size:2.0em;font-weight:600">
            Keep in touch with <span class="primary-text">#DevfestIndore2023</span> for the latest announcements
          </p>
          <p class="google-font">
            Let's get connected so that we can reach out to each other via a
            <br/>simple notification. Stake out <span class="primary-text">#DevfestIndore23</span> for the updates and
            news.
          </p>
        </v-col> -->
      <div class="d-flex justify-space-between align-center pa-5 pa-lg-8 social-responsive"
        style="width: 95%; border: 2px solid black; border-radius: 1rem;">
        <div class="container-div">
          <h1 class="google-font" style="font-size: 2rem;">Keep in touch with <br /><span class="green-text">#<span
                class="primary-text">Devfest</span><span class="yellow-text">Indore</span><span
                class="red-text">2023</span></span> for the latest announcements</h1>
          <p class="google-font" style="font-size: 1rem;">
            Let's get connected so that we can reach out to each other via a simple notification. <br /> Stake out <span
              class="green-text">#<span class="primary-text">Devfest</span><span class="yellow-text">Indore</span><span
                class="red-text">2023</span></span> for the updates and
            news.
          </p>
        </div>
        <div class="d-flex justify-center align-center container-div">
          <SocialMediaButtons />
        </div>
      </div>
    </v-row>
    <!-- <v-row class="py-0 my-0" justify="center" align="start">
      <v-col md="12" lg="12" sm="12" cols="12" class="py-0 my-0 text-center">
        <SocialMediaButtons/>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import SocialMediaButtons from "../common/EventSocialMedia.vue"
export default {
  name: "SocialInfo",
  components: {
    SocialMediaButtons
  }
};

</script>
<style scoped>
.v-btn--icon.v-size--default {
  height: 30px;
  width: 30px;
  background: #202124;
}

.v-btn--icon.v-size--default .v-icon {
  font-size: 18px;
}

.container-div {
  width: 50%;
}

/* Small Scale Display */
@media only screen and (max-width: 600px) {


  .container-div {
    margin: 1rem 0;
    width: 100%;
  }

  .social-responsive {
    text-align: center;
    flex-direction: column;
    padding: 1px;
  }
}
</style>
