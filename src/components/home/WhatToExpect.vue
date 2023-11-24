<template>
  <v-container fluid class="expect-details-card" style="background-color: rgb(249 249 249)  !important;">
    <v-row>
      <v-col md="12" cols="12" class="text-center">
        <p class="gdg-heading mb-0 google-font expect-heading-text" style="font-weight: 600;padding-top: 16px;">What You Can Expect this year at <span class="text-primary">DevFest Indore 2023</span></p>
        <p class="google-font" style="font-size: 18px;">
          Here is what to expect from Devfest Indore 2023 this year 
        </p>
      </v-col>
    </v-row>
     <v-row class="align-center">
      <v-col md="5" cols="12" class="text-center">
      <div>
          <img src="../../assets/img/what-to-expect.png" alt="expect">
        </div>
      </v-col>
      <v-col md="7" cols="12" class="text-center">
        <v-row>
          <v-col md="6" cols="6" class="text-center" v-for="(item, index) in whatToExpect" :key="index">
            <p class="gdg-heading mb-0 google-font" style="font-weight: 600;color: rgb(50, 129, 213);">{{ item.count }}</p>
            <p class="google-font" style="font-size: 18px;font-weight: 600;">
              {{ item.desc }}
            </p>
          </v-col>
      </v-row>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col md="12" cols="12" class="text-center">
        <p class="gdg-heading mb-0 google-font" style="font-weight: 600;">WHAT TO EXPECT</p>
        <p class="google-font">
          Here is what to expect from Devfest Indore 2023 this year 
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container fluid class="ma-0 pa-0">
          <v-row>
            <v-col md="3" cols="12" v-for="(item, index) in whatToExpect" :key="index" class="card-block">
              <div class="card">
                <v-icon color="black" class="ml-2" size="35">{{item.img}}</v-icon>
                <p class="mb-1 google-font" style="font-size:22px;font-weight: 600;">
                {{ item.title }}
                </p>
                <p class="google-font" style="font-size:105%">{{ item.desc }}</p>
                </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: "WhatToExpect",
  data: () => ({
    // whatToExpect: [
    //   {
    //     title: "Technical sessions",
    //     img: "mdi-access-point",
    //     desc: "We have experts in the field of Android, ML, Web, Cloud and Flutter who will be sharing valuable tips and technical knowledge.",
    //   },
    //   {
    //     title: "Non Technical sessions",
    //     img: "mdi-clipboard-list",
    //     desc: "An excellent line up of events that will motivate, inspire and empower you to do more and help in your career.",
    //   },
    //   {
    //     title: "Networking opportunities",
    //     img: "mdi-abacus",
    //     desc: "Connect with speakers, WTM ambassadors and allies, other members at IWD to share experiences and collaborate.",
    //   },
    //   {
    //     title: "Goodies, Swags many more...",
    //     img: "mdi-sticker-emoji",
    //     desc: "Even though IWD India is online, we still have SWAGS!",
    //   },
    // ],
    whatToExpect: [
      {
        count: "500+",
        desc: "Attendees",
      },
      {
        count: "03",
        desc: "Multiple Tracks",
      },
      {
        count: "20+",
        desc: "Sessions",
      },
      {
        count: "01",
        desc: "Day",
      },
    ],
  }),
};
</script>

<style>
.card {
    background-color: rgb(199, 239, 238);
    border-color: rgb(199, 239, 238);
    border-radius: 7px;
    height: 227px;
    width: 296px;
    padding: 37px 8px 8px 8px;
}
.card-block:nth-child(2n) .card {
    background-color: rgb(199, 239, 238);
    border-color: rgb(199, 239, 238);
}
.card-block:nth-child(odd) .card {
    background-color: rgb(255, 232, 205);
    border-color: rgb(255, 232, 205);
}
.expect-details-card {
  background: white;
  border: 1px solid #d4d3d3;
  border-radius: 20px;
  margin: 80px 0;
  padding: 25px 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px, rgb(218, 220, 224) 0px -1px 0px 0px inset !important;
}
.expect-heading-text {
  width: 70%;
    margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
