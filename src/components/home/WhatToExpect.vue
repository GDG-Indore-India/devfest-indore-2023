<template>
  <v-container fluid>
    <v-row>
      <v-col md="12" cols="12" class="text-center">
        <p class="gdg-heading mb-0 google-font" style="font-weight: 600;">WHAT TO EXPECT</p>
        <p class="google-font">
          Here is what to expect from Devfest Indore 2022 this year 
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WhatToExpect",
  data: () => ({
    whatToExpect: [
      {
        title: "Technical sessions",
        img: "mdi-access-point",
        desc: "We have experts in the field of Android, ML, Web, Cloud and Flutter who will be sharing valuable tips and technical knowledge.",
      },
      {
        title: "Non Technical sessions",
        img: "mdi-clipboard-list",
        desc: "An excellent line up of events that will motivate, inspire and empower you to do more and help in your career.",
      },
      {
        title: "Networking opportunities",
        img: "mdi-abacus",
        desc: "Connect with speakers, WTM ambassadors and allies, other members at IWD to share experiences and collaborate.",
      },
      {
        title: "Goodies, Swags many more...",
        img: "mdi-sticker-emoji",
        desc: "Even though IWD India is online, we still have SWAGS!",
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
@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
