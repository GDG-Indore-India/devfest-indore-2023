<template>
  <v-main class="my-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
            <v-container fluid>
            <v-row align="start" justify="start">
              <v-col md="11" lg="11">
                <p class="mb-0 gdg-heading text-center">Highlights</p>
                <v-container fluid class="ma-0 pa-0">
                  <v-row align="start" justify="start">
                    <v-col
                      md="12"
                      cols="12"
                    >
                            <div class="text-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/GO32M5G5mm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "CoCComponent",
  created() {
    document.title = "Highlights | Devfest Indore 2023";
  },
};
</script>

<style>

</style>
