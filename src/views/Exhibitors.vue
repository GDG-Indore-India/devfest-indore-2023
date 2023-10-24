<template>
  <v-main class="my-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
            <p class="gdg-heading mb-0">Exhibitors</p>
            <p class="google-font">Our exhibitors are influential who have been associated with communities within their organisations, cities, country and beyond.</p>

            <v-container fluid class="px-1">
                <v-row justify="start" align="start">
                <v-col
                md="2"
                lg="2"
                xl="2"
                sm="4"
                cols="6"
                class="px-2 py-2"
                v-for="(item, index) in AttendeeData"
                :key="index"
              >
                    <!-- <v-card class="white" style="border-radius:12px; text-align: center;">
                        <v-avatar size="100">
                        <img
                            :src="getImgUrl(item.image)"
                            :lazy-src="getImgUrl(item.image)"
                            :alt="item.name"
                            class="img-wrapper pt-2"
                        />
                        </v-avatar>
                        <p class="mt-3 mb-0 google-font mb-0" style="font-size: 105%">
                        {{ item.name }}
                        </p>
                        <p class="mt-0 mb-0 google-font mt-0" style="font-size: 80%">
                        {{ item.company.name }}
                        </p>
                        <SocialMediaDetails :socialInfo="item.social" />
                    </v-card> -->
                     <v-dialog v-model="dialog" width="850" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <div
        v-on="on"
        v-ripple
        v-bind="attrs"
        style="
          cursor: pointer;
          background: white;
          border-radius: 16px;
          
        "
        class="text-center py-4 ma-0 fill-height attendee-card"
      >
        <!-- <v-badge icon="mdi-account-group-outline" overlap bordered offset-y="25" offset-x="28" v-if="speakerData.type.includes('Networking')">
          <v-avatar size="130">
            <v-img
              :src="getImgUrl(speakerData.image)"
              :lazy-src="getImgUrl(speakerData.image)"
              :alt="speakerData.name"
            ></v-img>
          </v-avatar>
        </v-badge> -->
        <v-avatar size="110">
            <v-img
              :src="getPartnerImgUrl(item.image)"
              :lazy-src="getPartnerImgUrl(item.image)"
              :alt="item.name"
            ></v-img>
          </v-avatar>
        <p class="mt-3 mb-0 google-font mb-0" style="font-size: 110%">
          {{ item.name }}
        </p>
        <p class="mt-1 mb-0 google-font mt-0" style="font-size: 80%">
          {{ item.company.name }}
        </p>
        <!-- Social Card -->
        <!-- <socialMediaDetails class="pl-0 ml-0" :socialInfo="speakerData.social" /> -->
      </div>
    </template>
    <v-card class="white" v-if="dialog" style="border-radius:12px">
      <v-card-text class="pa-0">
        <v-container fluid class="py-8">
          <v-row>
            <v-col md="12" cols="12" class="px-md-10 px-3">
              <!-- Header -->
              <v-container fluid class="pa-0 ma-0">
                <v-row class="pa-0 ma-0">
                  <v-col md="10" class="pa-0 ma-0">
                    <v-list class="pa-0 ma-0">
                      <v-list-item class="pa-0 ma-0">
                        <v-list-item-avatar size="70">
                          <v-img
                            :src="getPartnerImgUrl(item.image)"
                            :lazy-src="getPartnerImgUrl(item.image)"
                            :alt="item.name"
                          ></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            class="google-font mb-0"
                            style="font-size: 200%;font-weight: 600;"
                            >{{ item.name }}</v-list-item-title
                          >
                          <v-list-item-subtitle
                            class="google-font mb-0"
                            style="font-size: 110%;color:black"
                            >{{
                              item.company.designation
                            }}</v-list-item-subtitle
                          >
                          <v-list-item-subtitle
                            v-if="item.company.name"
                            class="google-font mb-0"
                            style="font-size: 110%;color:black"
                          >
                            {{ item.company.name }}</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
          <v-row class="pt-0 mt-n1">
            <v-col md="12" cols="12" class="px-md-10 px-5">
              
              <!-- <p class="google-font mb-0" style="font-size: 110%"><b>Bio</b></p> -->
              <p class="google-font mt-4" style="font-size: 120%;color:black">
                {{ item.bio }}
              </p>

              <socialMediaDetails
                class="pl-0 ml-0 mb-2"
                :socialInfo="item.social"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <span><v-btn color="primary" :href="item.website" target="_blank">Visit</v-btn></span>
        <v-btn aria-label="close" class="px-10" text @click="dialog = false">Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
              </v-col>
            </v-row>
            </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import SocialMediaDetails from "@/components/common/PersonSocialInfo";
import AttendeeData from "@/assets/data/exhibitors.json";
export default {
  name: 'FeaturedAttendee',
  components: {
    SocialMediaDetails
  },
  data: ()=>({
    AttendeeData:[],
    dialog: false
  }),
  mounted() {
    this.AttendeeData = this.sortByName(AttendeeData);
  },
  created(){
    document.title = "Exhibitors | Devefest Indore 2023"
  }
}
</script>

<style>
.attendee-card {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
.v-image__image--cover {
    background-size: contain;
}
</style>
