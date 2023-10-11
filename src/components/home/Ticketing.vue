<template>
  <v-container fluid>
    <v-row>
      <v-col md="12" cols="12" class="text-center">
        <p class="gdg-heading mb-0 google-font" style="font-weight: 600;">Book your Tickets</p>
        <!-- <div class="mt-2 text-center">
            <v-btn rounded depressed large color="#ea4335" id="eventbrite-widget-modal-trigger-451603737937" dark style="border: 1px solid #ea4335;">Book Now!</v-btn>
        </div> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container fluid class="ma-0 pa-0">
          <v-row justify="center" align="center">
            <v-col md="2" cols="12" v-for="(item, index) in Ticketing" :key="index" class="card-block">
              <div class="card text-center" :style="{opacity: item.opacity}">
                <v-icon color="#202124" class="ml-2" size="35">{{item.img}}</v-icon>
                <p class="gdg-heading mb-1 google-font grey--text text--darken-2" style="font-size:22px;color:#202124 !important;">
                {{ item.title }}
                </p>
                <!-- <p class="google-font grey--text text--darken-2" style="font-size:105%">{{ item.desc }}</p> -->
                <div class="text-center">
                    <v-btn rounded depressed to="/" small color="#202124" dark style="border: 1px solid #202124;">{{ item.desc }}</v-btn>
                </div>
                </div>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col md="12" cols="12" class="mt-2">
              <h3 class="google-font" style="text-align:center">2500+ Registrations so far. See you at Event!🎉</h3>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Ticketing",
  data: () => ({
    Ticketing: [
      {
        title: "Early Bird",
        img: "mdi-access-point",
        desc: "Sold Out",
        opacity: "0.7"
      },
      {
        title: "Professional",
        img: "mdi-clipboard-list",
        desc: "Sold Out",
        opacity: "0.7"
      },
      {
        title: "Student",
        img: "mdi-abacus",
        desc: "Sold Out",
        opacity: "0.7"
      },
      {
        title: "Late Bird",
        img: "mdi-sticker-emoji",
        desc: "Sold Out",
        opacity: "0.7"
      },
    ],
  }),
};
</script>

<style>
.card {
    border-radius: 7px;
    height: 170px;
    width: 160px;
    padding: 37px 8px 8px 8px;
    background: #fbbc04;
    margin: 0 auto;
    /* opacity: 0.7; */
}
.card-block:nth-child(2n) .card {
    background-color: rgb(52 168 83 / 34%);
    border-color: rgb(52 168 83 / 34%);
}
.card-block:nth-child(odd) .card {
    background-color: rgb(251 188 4 / 40%);
    border-color: rgb(251 188 4 / 40%);
}
@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
  .ticketing-btn {
    width: 100% !important;
  }
}
</style>
