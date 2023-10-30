<template>
  <v-main class="my-0 background-overlay-team">
    <v-container fluid>
      <v-row align="center" style="padding-top: 3rem;" justify="center">
        <v-col cols="12" justify="center" align="center" md="10">
          <!-- <p class="gdg-heading mb-0">Our Team.</p>
            <p class="google-font" style="width:80%;">We know that when we support each other, incredible things happen. We volunteer to encourage, elevate and support and under-represented groups in the tech industry.</p> -->
          <div class="d-flex flex-column justify-center align-center" style="width:83%;">
            <h1 class="gdg-heading">Our Team</h1>
            <p class="google-font" style="width:80%; text-align: center;">We know that when we support each other, incredible things happen. We volunteer to encourage, elevate and support and under-represented groups in the tech industry.</p>
          </div>
          <v-container fluid class="px-0">
            <v-row justify="start" align="start">
              <v-col md="3" lg="2" xl="2" sm="4" cols="6" class="px-1 py-1" v-for="(item, index) in team" :key="index">
                <TeamCard :item="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TeamData from "@/assets/data/team.json";
import TeamCard from '@/components/team/TeamDetails.vue'
export default {
  name: 'SpeakersView',
  components: {
    TeamCard
  },
  data: () => ({
    team: []
  }),
  mounted() {
    this.team = this.sortByName(TeamData);
  },
}
</script>

<style>
.background-overlay-team {
  /* background-image: url('../../assets/img/about.jpg'); */
  background:linear-gradient(0deg, rgb(0 0 0 / 86%), rgb(0 0 0 / 81%)), url(../assets/img/team_img_ccd.jpg);
  background-repeat: no-repeat;
    background-size: cover;
    background-color: #000;
    background-position: center;
    /* border-radius: 20px; */
    color: #fff;
    opacity: 0.8;
    text-align: center;
    min-height: 450px;
    padding-top: 0;
    box-shadow: 0px 3px 75px #d0cbcb;
}

.background-overlay-team .v-main__wrap {
  background: transparent !important;
  padding-bottom:4rem;
}
@media only screen and (max-width: 660px) {
  .gdg-heading {
    font-size: 32px !important;
  }
}
</style>
