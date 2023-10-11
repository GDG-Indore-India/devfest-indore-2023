<template>
  <v-main class="my-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
            <p class="gdg-heading mb-0">Our Team.</p>
            <p class="google-font" style="width:80%;">We know that when we support each other, incredible things happen. We volunteer to encourage, elevate and support and under-represented groups in the tech industry.</p>

            <v-container fluid class="px-0">
                <v-row justify="start" align="start">
                <v-col
                md="3"
                lg="2"
                xl="2"
                sm="4"
                cols="6"
                class="px-1 py-1"
                v-for="(item, index) in team"
                :key="index"
              >
                <TeamCard :item="item"/>
              </v-col>
            </v-row>
            </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TeamData from "@/assets/data/team.json";
import TeamCard from '@/components/team/TeamDetails.vue'
export default {
  name: 'SpeakersView',
  components:{
    TeamCard
  },
  data: ()=>({
    team:[]
  }),
  mounted() {
    this.team = this.sortByName(TeamData);
  },
}
</script>

<style>

</style>
