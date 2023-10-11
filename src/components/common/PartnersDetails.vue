<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer;"
        class="text-center py-5 ma-1 partner-card fill-height"
        :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'"
      >
        <v-avatar size="100" class="partner-image">
          <img :src="getPartnerImgUrl(data.image)" :lazy-src="getPartnerImgUrl(data.image)" alt  style="width:100%;" />
        </v-avatar>
        <!-- <p class="mt-3 mb-0 google-font mb-0" style="font-size:110%">{{ data.name }}</p> -->
        <!-- <p class="mt-1 mb-0 google-font mt-0" style="font-size:80%;">{{ data.company.name }}</p> -->
        <!-- <socialMediaDetails  :socaillinks="data.socialMedia" /> -->
      </div>
    </template>

    <v-card :class="theme.isDark ? 'grey darken-3' : 'white'" v-if="dialog">
      <v-card-text class="pa-5">
        <v-container>
          <v-row>
            <v-col md="3" cols="12" class="text-center">
              <v-avatar size="100" class="partner-image">
                <img :src="getPartnerImgUrl(data.image)" :lazy-src="getPartnerImgUrl(data.image)" alt />
              </v-avatar>
              <!-- <p class="google-font mt-3 mb-0" style="font-size:140%">
                <b>{{ data.name }}</b>
              </p> -->
              <!-- <p class="google-font mt-1" style="font-size:100%">
                {{ data.company.designation }}
                <span v-if="data.company.name">,&nbsp;</span>
                {{ data.company.name }}
              </p> -->
              <!-- {{data.social}} -->
              <socialMediaDetails class="pl-0 ml-0" :socaillinks="data.socialMedia" />
            </v-col>
            <v-col md="8" cols="12">
              <p class="google-font" style="font-size:110%">{{ data.desc }}</p>
<!-- 
              <p class="my-0 google-font mt-2" v-if="data.sessionId.length > 0" style="font-size:120%">
                <b>Sessions:</b>
              </p> -->
              <div v-if="data.links">
              <p>GDSC Indore Website Links to Join their chapter:</p>
              <ul>
                <li><span><b>Indore Institute of Science & Technology:</b></span><span class="pl-2"><a :href="data.gdsc_iist" style="text-decoration:underline;font-weight:600;" target="_blank">Beome a Member</a></span></li>
              </ul>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions :class="this.$vuetify.theme.dark == true?'grey darken-3':'grey lighten-3'">
        <v-spacer></v-spacer>
        <span v-if="!data.links"><v-btn color="primary" :href="data.website" target="_blank">Become a Partner</v-btn></span>
        <v-btn aria-label="close" color="primary" text @click="dialog = false" class="ml-2">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import socialMediaDetails from "@/components/common/EventSocialMedia";
export default {
  components: {
    socialMediaDetails
  },
  inject: ["theme"],
  props: ["data", "partnerDetails"],
  data() {
    return {
      dialog: false,
    };
  },
  mounted(){
      console.log('hiiii');
  },
  methods:{
    // binarySearchSession(id){
    //   let low = 0;
    //   let high = this.SessionDetails.length;
    //   while(low<=high){
    //     let mid = Math.floor(low+(high-low)/2);
    //     if(this.SessionDetails[mid].id == id){
    //       return [this.SessionDetails[mid]];
    //     }else if(this.SessionDetails[mid].id > id){
    //       high = mid-1;
    //     }else{
    //       low = mid+1;
    //     }
    //   }
    // }
  }
};
</script>

<style scoped>
.darkModeCard {
  background-color: #292929;
  border: 1px solid #212121;
  border-radius: 5px;
}
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  /* border-top: 4px solid #226AF2; */
  border-radius: 5px;
}

.partner-image {
  width: auto !important;
  border-radius: 0 !important;
  max-width: 254px;
  height: auto !important;
}

.partner-image img {
  max-height: 70px;
}

.partner-card {
  height: 110px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
}

@media only screen and (max-width: 660px) {
/* .partner-image {
  width: 100px !important;
} */
}
.v-dialog__content--active .partner-image > img {
  width: 100% !important;
}
</style>
