<template>
  <v-main class="">
    <v-container fluid>
      <v-row justify="center" class="align-center">
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row>
              <v-col md="7" cols="12">
                <p
                  class="google-font gdg-heading mb-0 font-weight-bold mt-16"
                  style="line-height: 1.22;font-weight:600;"
                >
                  Our Partners
                </p>
                <p class="google-font mb-5" style="font-size:120%">
                  Partners all over the India have gathered together to make
                  Devfest Indore 2023 a success. Show some interest towards GDG
                  Community and join us right here!
                </p>
                <!-- <v-btn
                  rounded
                  depressed
                  href="https://bit.ly/devfest-partners23"
                  outlined
                  target="_blank"
                  class="mb-2 mr-2"
                  color="#4184F7"
                  dark
                  style="border: 1px solid #4184f7;"
                  >Become a Community Partner</v-btn
                > -->
                <v-btn
                  rounded
                  depressed
                  href="https://bit.ly/devfest-sponsors23"
                  target="_blank"
                  class="mb-2 mr-2"
                  color="#4184F7"
                  dark
                  style="border: 1px solid #4184f7;"
                  >Become a Sponsor Partner</v-btn
                >
                <p class="mt-4 google-font"><b>You can check the brochure from here:</b> </p>
                <v-btn
                  rounded
                  depressed
                  href="https://drive.google.com/file/d/1K75Ei8vFwu0O66ZXK9u3Yx0kkigsigXN/view?usp=drivesdk"
                  target="_blank"
                  class="mb-2 mr-2 google-font"
                  color="#202124"
                  dark
                  style="border: 1px solid #202124;"
                  >Sponsorship Deck</v-btn
                >
              </v-col> 
              <v-col md="5" cols="12">
                <div><img src="../../assets/img/community-partners.png" alt="partners" style="width: 100%;"/></div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="align-center">
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0 mt-10">
            <v-row class="justify-mb-center">
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in partnersData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="partnersData" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="justify-mb-center">
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-col md="10" lg="12" sm="10" cols="12" class="px-1">
              <div><p class="mt-4 google-font"><b>Community Partners:</b></p></div>
            </v-col>
            <v-row class="justify-mb-center">
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in sponsorsData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="sponsorsData" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="10" lg="12" sm="10" cols="12" class="px-1">
        </v-col>
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row>
              <v-col md="10" lg="12" sm="10" cols="12" class="px-1">
                <div><p class="mt-4 google-font"><b>Diversity & Inclusion Partner:</b></p></div>
              </v-col>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in diversityData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="diversityData" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="justify-mb-center">
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row class="justify-mb-center">
              <v-col md="10" lg="12" sm="10" cols="12" class="px-1">
                <div><p class="mt-4 google-font"><b>Venue Partner:</b></p></div>
              </v-col>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in venueData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="venueData" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

            <!-- <v-row>
        <v-col md="10" lg="12" sm="10" cols="12" class="px-1">
          <div><p class="mt-4 google-font pl-10"  style="text-align: center"><b>Merchandise Partner:</b></p></div>
        </v-col>
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row justify="center">
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in merchandiseData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="merchandiseData" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row> -->
      <v-row class="justify-mb-center">
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row class="justify-mb-center">
              <v-col md="10" lg="12" sm="10" cols="12" class="px-1">
                <div><p class="mt-4 google-font"><b>Media Partner:</b></p></div>
              </v-col>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in mediaData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="mediaData" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="justify-mb-center">
        <v-col md="10" lg="12" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row class="justify-mb-center">
              <v-col md="10" lg="12" sm="10" cols="12" class="px-1">
                <div><p class="mt-4 google-font"><b>Photography Partner:</b></p></div>
              </v-col>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in photographyData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="photographyData" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import partnersData from "@/assets/data/partnersData.json";
import sponsorsData from "@/assets/data/sponsorsData.json";
import venueData from "@/assets/data/venuePartners.json";
import diversityData from "@/assets/data/diversityData.json";
import merchandiseData from "@/assets/data/merchandiseData.json";
import mediaData from "@/assets/data/mediaPartners.json";
import photographyData from "@/assets/data/photographyPartners.json";
export default {
  data: () => ({
    CommunityData: [],
    partnersData: partnersData,
    partnerDetails: [],
    sponsorsData: [],
    venueData:[],
    diversityData: [],
    merchandiseData: [],
    mediaData: [],
    photographyData: [],
  }),
  components: {
    Partners: () => import("@/components/common/PartnersDetails"),
    // SocialShare: () => import("@/components/common/SocialInfo")
  },
  mounted() {
    this.partnersData = this.sortByName(partnersData);
    this.sponsorsData = this.sortByName(sponsorsData);
    this.venueData = this.sortByName(venueData);
    this.diversityData = this.sortByName(diversityData);
    this.merchandiseData = this.sortByName(merchandiseData);
    this.mediaData = this.sortByName(mediaData);
    this.photographyData = this.sortByName(photographyData);
    // console.log(this.CommunityData);
  },
};
</script>

<style>
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.community-card {
  height: 100px;
}

.community-card:hover {
  transition: 0.3s all ease-in-out;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
}

.community-card .v-responsive {
  height: 100%;
}

.community-card .v-image__image--cover {
  background-size: contain;
}

.partners-img {
  height: 150px;
  object-fit: contain;
  width:100%;
}

@media only screen and (max-width: 770px) {
  .justify-mb-center {
    justify-content: center;
    text-align: center;
  }
}
</style>

<style scoped>
.client-logo {
  height: 90px;
  padding: 12px 12px;
  border-radius: 7px;
  background: white;
  border: 1px solid #ebebeb;
  text-align: center;
}
</style>
