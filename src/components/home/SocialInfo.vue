<template>
  <v-container fluid class="py-0 my-0">
     <v-row align="center" justify="center" class="">
        <v-col cols="12" md="10" lg="10" sm="10" class="text-center pt-15">
          <p class="google-font my-0" style="font-size:2.0em;font-weight:600">
            Keep in touch with <span class="primary-text">#DevfestIndore2023</span> for the latest announcements
          </p>
          <p class="google-font">
            Let's get connected so that we can reach out to each other via a
            <br/>simple notification. Stake out <span class="primary-text">#DevfestIndore23</span> for the updates and
            news.
          </p>
        </v-col>
      </v-row>
    <v-row class="py-0 my-0" justify="center" align="start">
      <v-col md="12" lg="12" sm="12" cols="12" class="py-0 my-0 text-center">
        <SocialMediaButtons/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SocialMediaButtons from "../common/EventSocialMedia.vue"
export default {
  name: "SocialInfo",
  components:{
    SocialMediaButtons
  }
};

</script>
<style scoped>
.v-btn--icon.v-size--default {
    height: 30px;
    width: 30px;
    background:#202124;
}
.v-btn--icon.v-size--default .v-icon {
  font-size: 18px;
}
</style>
