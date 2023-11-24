<template>
  <v-container fluid class="margin">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <p class="gdg-heading mb-0">Speakers</p>

        <v-container fluid class="px-1">
          <v-row justify="center" class="fill-height">
            <v-col
              md="4"
              lg="3"
              xl="2"
              sm="2"
              cols="6"
              style="max-width: none !important;"
              class="shadows"
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
  .shadows {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.07), 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  }
  .shadows:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .margin {
    margin-top: 20vh;
    margin-bottom: 2rem;
  }
</style>
