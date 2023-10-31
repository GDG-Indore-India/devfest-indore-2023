<template>
  <v-main class="pt-m">
    <v-container
      fluid
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/hero-side-img.svg') + ')',
      }"
      style="background-position: top right; background-size: 38%"
      class="bg-faq-image"
    >
      <v-row justify="center" align="center">
        <v-col cols="12" md="10">
          <p class="gdg-heading mb-0 primary-text">
            Have questions about our various tickets?
          </p>
          <p>Need Answers? Everything you need to know</p>
          <v-container fluid class="px-0 mx-0 mt-10">
            <v-row>
              <v-col
                md="7"
                lg="8"
                sm="11"
                cols="12"
                class="pa-0 ma-0 px-3 mx-0"
              >
                <v-expansion-panels accordion class="" flat>
                  <v-expansion-panel v-for="i in faqsData" :key="i" :id="i.id">
                    <v-expansion-panel-header>
                      <p
                        class="google-font"
                        style="font-size: 150%; margin: auto"
                      >
                        {{ i.ticketType }}
                      </p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-expansion-panels accordion class="" flat>
                        <v-expansion-panel
                          v-for="(faq, j) in i.questions"
                          :key="j"
                          class="pl-3 mx-s"
                          style="
                            border-bottom: 1px solid #e0e0e0;
                            background: #fff;
                          "
                        >
                          <v-expansion-panel-header class="px-0">
                            <p
                              class="google-font"
                              style="font-size: 125%; margin: auto"
                            >
                              {{ faq.question }}
                            </p>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content class="px-0">
                            <p
                              class="google-font my-0 ma-0 ml-n6 mt-n1"
                              style="font-size: 100%"
                              v-html="faq.answer"
                            ></p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from "@/assets/data/tickets-faq.json";
export default {
  data: () => ({
    faqsData: data,
  }),
  components: {},
};
</script>

<style>
@media only screen and (max-width: 900px) {
  .bg-faq-image {
    background: none !important;
  }
}
</style>
