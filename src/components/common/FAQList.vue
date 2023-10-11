<template>
  <v-container fluid class="">
    <v-row class="">
      <v-col class="px-4">
        <p class="google-font mb-0 gdg-heading primary-text">
          Frequently asked questions
        </p>
        <p class="google-font mb-4" style="font-size:110%">
          Need Answers? Everything you need to know, Find them 
          <router-link to="/faq" style="text-decoration:none">here</router-link>.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="7" lg="8" sm="11" cols="12" class="pa-0 ma-0 px-4 mx-0 ">
        <v-expansion-panels accordion class="" flat>
          <v-expansion-panel
            v-for="(faq, i) in faqsData"
            :key="i"
            class="px-0 mx-0"
            style="border-bottom:1px solid #E0E0E0;background: #ffffff;"
          >
            <v-expansion-panel-header class="px-0 expansion-panel-header">
              <p class="google-font" style="font-size:125%;margin:auto;line-height:25px;">
                {{ faq.question }}
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="px-0">
              <p
                class="google-font my-0 ma-0 ml-n6 mt-n1"
                style="font-size:110%;"
                v-html="faq.answer"
              ></p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "@/assets/data/faq.json";
export default {
  name: "Faqs",
  data: () => ({
    faqsData: [],
  }),
  mounted() {
    this.faqsData = data.slice(0, 5);
  },
};
</script>

<style scoped>
.expansion-panel-header {
  background: #fff;
}
</style>
