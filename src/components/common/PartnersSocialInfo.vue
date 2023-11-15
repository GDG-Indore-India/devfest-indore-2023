<template>
    <v-container fluid class="">
      <v-row justify="center" align-items="center">
        <v-col class="text-center">
          <v-tooltip bottom >
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                style="background:#4285F4"
                class="mx-2 mb-2"
                v-on="on"
                color="white"
                rel="noreferrer"
                href="https://twitter.com/GDG_Indore"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </template>
            <span>Twitter</span>
          </v-tooltip>
  
           <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  icon
                  style="background:#ff0000"
                  class="mx-2 mb-2"
                  color="white"
                  v-on="on"
                  rel="noreferrer"
                  href="https://www.youtube.com/c/GDGIndore/"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </template>
              <span>YouTube</span>
            </v-tooltip>
  
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  icon
                  v-on="on"
                  style="background:#cd486b"
                  class="mx-2 mb-2"
                  color="white"
                  rel="noreferrer"
                  href="https://www.instagram.com/gdgindore/"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </template>
              <span>Instagram</span>
            </v-tooltip>
  
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  icon
                  v-on="on"
                  style="background:#0e76a8"
                  class="mx-2 mb-2"
                  color="white"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/gdgindore/"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </template>
              <span>Linkedin</span>
            </v-tooltip>
  
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  icon
                  v-on="on"
                  style="background:#4285F4"
                  class="mx-2"
                  color="white"
                  rel="noreferrer"
                  href="https://www.facebook.com/events/705286906861605/"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </template>
              <span>Facebook</span>
            </v-tooltip> -->
  
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  icon
                  v-on="on"
                  style="background:#4285F4"
                  class="mx-2"
                  color="white"
                  rel="noreferrer"
                  href="https://github.com/DevFest-India"
                  target="_blank"
                  slot="activator"
                > 
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </template>
              <span>GitHub</span>
            </v-tooltip> -->
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default {};
</script>
  
