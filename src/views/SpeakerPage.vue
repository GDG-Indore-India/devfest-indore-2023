<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="11" sm="11" lg="9" class="google-font my-15 py-10">
          <v-container
            fluid
            v-if="SpeakersData != null && Object.keys(SpeakersData).length > 0"
          >
            <!-- Heading -->
            <v-row justify="center" align="center">
              <v-col>
                <router-link class="mb-10" style="text-decoration:none;color:black" to="/speakers"><v-icon>mdi-keyboard-backspace</v-icon> Back to All Speakers</router-link>
                <!-- <v-avatar size="100">
                    <v-img
                      :src="getImgUrl(SpeakersData.image)"
                      :lazy-src="getImgUrl(SpeakersData.image)"
                      :alt="SpeakersData.name"
                    ></v-img> 
                    </v-avatar> -->
                <p class="gdg-heading mt-2">
                  {{ SpeakersData.name }}
                </p>
                <p class="mt-n4" style="font-size:20px">
                  {{ SpeakersData.company.designation }},
                  {{ SpeakersData.company.name }}
                </p>
                <p style="font-size:20px;opacity:0.8" class="mt-10">
                  {{ SpeakersData.bio }}
                </p>

                <!-- Socail Card -->
                <div>
                  <v-chip
                    class="mr-2"
                    color="rgb(29, 161, 242)"
                    text-color="white"
                    target="_blank"
                    v-if="SpeakersData.social.twitter.length > 0"
                    :href="SpeakersData.social.twitter"
                  >
                    <v-icon left>
                      mdi-twitter
                    </v-icon>
                    Twitter
                  </v-chip>
                
                  <v-chip
                    class="mr-2"
                    color="rgb(0, 119, 181)"
                    text-color="white"
                    target="_blank"
                    v-if="SpeakersData.social.linkedin.length > 0"
                    :href="SpeakersData.social.linkedin"
                  >
                    <v-icon left>
                      mdi-linkedin
                    </v-icon>
                    LinkedIn
                  </v-chip>
                  
                </div>
                <!-- Social Card -->


                <!-- Sessions Info -->
                <div v-if="SpeakersData.sessionId.length">
                <p style="font-size:35px;font-weight:500" class="mb-0 mt-10">
                  <span v-if="SpeakersData.sessionId.length == 1">Session</span>
                  <span v-else>Sessions</span>
                </p>
                <p class="mt-n2" style="font-size:20px;opacity:0.9">
                  Here are the list of Sessions
                </p>
                <!-- <v-chip large style="font-size:30px;font-weight:500" class="px-10 py-4 mt-10">Session</v-chip> -->
                <SpeakerSessionsCard
                  :speakerData="SpeakersData"
                  :sessionDetails="SessionsData"
                />
                </div>
                <!-- Sessions Info -->
              </v-col>
            </v-row>
            <!-- Heading -->
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import SpeakersDataTemp from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
import SpeakerSessionsCard from "@/components/speakers/SpeakerSessionCards.vue";
export default {
  name: "SpeakerPageComponent",
  components: {
    SpeakerSessionsCard,
  },
  data: () => ({
    SpeakersData: {},
    SessionsData: [],
    isFound: false,
    loader: true,
  }),
  created() {
    this.loader = true;
    this.SpeakersData = SpeakersDataTemp.filter(
      (res) => res.id == this.$route.params.id
    )[0];
    if (this.SpeakersData == null) {
      this.isFound = false;
      this.$router.push("/speakers");
    } else {
      this.isFound = true;
      document.title = this.SpeakersData.name + " Details | IWD India 2023";
      this.SessionsData = SessionDetails.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
    }
    this.loader = false;
  },
};
</script>

<style scoped></style>
