<template>
    <v-main class="partners-card-wrap">
      <v-container fluid>
        <v-row justify="center" class="align-center">
          <v-col md="10" lg="12" sm="10" cols="12">
            <v-container class="mb-0 pb-0">
              <v-row>
                <v-col md="7" cols="12">
                  <p
                    class="google-font gdg-heading mb-0 font-weight-bold"
                    style="line-height: 1.22;font-weight:600;"
                  >
                    Our <span class="text-primary">Partners</span>
                  </p>
                  <p class="google-font mb-5" style="font-size:120%">
                    Partners all over the India have gathered together to make
                    Devfest Indore 2023 a success. Show some interest towards GDG
                    Community and join us right here! For more Info  <router-link to="/partners" style="text-decoration:none">visit here</router-link>.
                  </p>
                  <v-btn
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
                  >
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
            <v-container class="mb-0 pb-10 pt-0">
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
      </v-container>
    </v-main>
  </template>
  
  <script>
  import partnersData from "@/assets/data/partnersData.json";
  export default {
    data: () => ({
      partnersData: partnersData,
    }),
    components: {
      Partners: () => import("@/components/common/PartnersDetails"),
      // SocialShare: () => import("@/components/common/SocialInfo")
    },
    mounted() {
      this.partnersData = this.sortByName(partnersData);
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

  .partners-card-wrap {
    background: white;
    border: 1px solid #d4d3d3;
    border-radius: 20px;
    margin: 80px 0;
    padding: 25px 15px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px, rgb(218, 220, 224) 0px -1px 0px 0px inset !important;
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
  
