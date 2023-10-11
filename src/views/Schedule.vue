<template>
  <v-main class="my-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
          <p class="gdg-heading mb-0">Schedule</p>
          <p class="google-font">Check out the schedule below.</p>

          <v-toolbar flat class="px-0" style="border-radius:15px">
            <v-tabs v-model="model" color="black" slider-color="black">
              <v-tab href="#day1">Day 1</v-tab>
              <v-tab href="#day2">Day 2</v-tab>
            </v-tabs>
          </v-toolbar>

          <v-container fluid class="px-0 mx-0" >
            <v-row justify="center" align="center" style="border-radius:15px">
              <v-col>
                <v-tabs-items v-model="model">
                  <v-tab-item value="day1">
                    <!-- <p class="h1-heading">Day 1 Schdule</p>
                            <p class="h1-subheading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore provident maiores et pariatur illum quis enim nam labore deserunt voluptate! Amet hic voluptate ad? Sed, eius laudantium. Quo, voluptate inventore!</p> -->
                    <ScheduleDetails :data="ScheduleData[0]" />
                  </v-tab-item>
                  <v-tab-item value="day2">
                    <!-- <p class="h1-heading">Day 2 Schdule</p>
                            <p class="h1-subheading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore provident maiores et pariatur illum quis enim nam labore deserunt voluptate! Amet hic voluptate ad? Sed, eius laudantium. Quo, voluptate inventore!</p> -->
                    <ScheduleDetails :data="ScheduleData[1]" />
                  </v-tab-item>
                  <v-tab-item value="day3">
                    <ScheduleDetails :data="ScheduleData[2]" />
                  </v-tab-item>
                </v-tabs-items>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ScheduleDetailsData from "@/assets/data/schedule.json";
import ScheduleDetails from "@/components/schedule/ScheduleDetails";
export default {
  name: "ScheduleView",
  data: () => ({
    model: "day1",
    ScheduleData: [],
  }),
  components: {
    ScheduleDetails,
  },
  mounted() {
    let tabs = ["day1", "day2", "day3"];
    if (Object.keys(this.$route.query) == "tab") {
      if (tabs.indexOf(this.$route.query["tab"]) != -1) {
        this.model = this.$route.query["tab"];
      }
    }
    this.ScheduleData = ScheduleDetailsData;
  }
};
</script>

<style scoped>
    .v-toolbar__content{
        padding: 0;
    }
</style>
