<template>
  <v-main class="my-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
            <p class="gdg-heading mb-0">Speakers</p>
            <p class="google-font">Our speakers are influential women & allies who have been associated with communities within their organisations, cities, country and beyond.</p>

            <v-container fluid class="px-1">
                <v-row justify="start" align="start">
                <v-col
                md="2"
                lg="2"
                xl="2"
                sm="4"
                cols="6"
                class="px-2 py-2"
                v-for="(item, index) in SpeakersData"
                :key="index"
              >
                <SpeakerCard :speakerData="item" :sessionDetails="SessionDetails" />
              </v-col>
            </v-row>
            </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import SpeakersData from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
import SpeakerCard from '@/components/speakers/SpeakerDialog.vue'
export default {
  name: 'SpeakersView',
  components:{
    SpeakerCard
  },
  data: ()=>({
    SpeakersData:[]
  }),
  mounted() {
    this.SpeakersData = this.sortByName(SpeakersData);
    this.SessionDetails = SessionDetails.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  },
  created(){
    document.title = "Speakers | Devfest Indore 2023"
  }
}
</script>

<style>

</style>
