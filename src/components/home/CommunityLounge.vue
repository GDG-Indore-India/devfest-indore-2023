<template>
    <v-container fluid class="theme-color border-details-block" style="margin-top: 4rem;background-color: #fff !important;">
      <v-row>
        <v-col md="12" cols="12" class="text-center">
          <p class="gdg-heading mb-0 google-font" style="font-weight: 600;">Introducing Our <span class="green-text">Community</span> & <span class="yellow-text">Expert</span> Lounge</p>
          <!-- <div class="mt-2 text-center">
              <v-btn rounded depressed large color="#ea4335" id="eventbrite-widget-modal-trigger-451603737937" dark style="border: 1px solid #ea4335;">Book Now!</v-btn>
          </div> -->
        </v-col>
      </v-row>
      <v-row class="align-center" justify="center" style="margin: 0 auto;">
        <v-col md="4" cols="12" class="text-center">
            <img src="../../assets/img/team-work-activity.png" alt="lounge image" class="img-block" />
        </v-col>
        <v-col md="7" cols="12">
          <div style="width: 70%;margin: 0 auto 30px;">
            <p class="google-font">
              This year, GDG Indore brings the Community & Expert lounge where you can get a chance:
            </p>
            <ul v-for="(item, index) in CommunityLounge" :key="index">
              <li>{{item.text}}</li>
            </ul>
          </div>

            <!-- <div class="text-center">
                <v-btn rounded depressed target="_blank" href="https://konfhub.com/devfest-indore-23" small  dark class="v-btn v-btn--has-bg v-btn--rounded theme--light v-size--default primary">Book Your Tickets</v-btn>
            </div> -->
        </v-col>
      </v-row>
    </v-container>
    </template>
    <script>
        export default{
          name: "CommunityLounge",
  data: () => ({
    CommunityLounge: [
      {
        text: "Join us in our Community Lounge to get around the know-hows of Community"
      },
      {
        text: "Get a chance to interact with our Tech experts for a one-on-one in our Expert Lounge & resolve your queries"
      }
    ],
  }),
};
        
    </script>
    <style>
    .img-block {
      width: 75%;
      height: 252px;
    object-fit: cover;
    }

    @media only screen and (max-width: 660px) {
      .img-block {
        width: 100%;
        height: auto;
      }
    }
  </style>
