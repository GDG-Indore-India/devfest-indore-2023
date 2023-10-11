<template>
  <v-main>
    <v-container fluid class="mb-0 pb-15">
      <v-row align="center" justify="center">
        <v-col md="11" lg="9" cols="12" class="google-font my-0 my-0">
          <v-container fluid class="px-0 mx-0">
            <v-row justify="start" align="start">
              <v-col md="4" cols="12" class="pr-md-5">
                <h1 class="h1-heading mt-0">Google Developers Group Communities across India</h1>
                <p class="google-font mt-2" style="font-size:17px;line-height: 32px;">
                  Communities from each chapter, all over the India have gathered together to make IWD a success. Locate your nearest google developer group and join them right here!
                </p>
              </v-col>
              <v-col md="8" cols="12">
                <div v-if="loading" class="my-md-15 text-center pa-15">
                  <v-progress-circular
                    indeterminate
                    color="#4184F7"
                    :width="5"
                    :size="50"
                  >
                  </v-progress-circular>
                </div>

                <iframe
                  v-show="!loading"
                  @load="load"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1HgngXKLmZCFYEsoqCHW4GLG3mClLtSf4&ehbc=2E312F&z=4&ll=22.61232179333003%2C73.23908933896988"
                  width="100%"
                  height="500"
                  style="border-radius:18px;border:0"
                ></iframe>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <!-- <v-col md="11" lg="9" class="google-font mb-12 d-block d-sm-block d-md-none">
          <v-container fluid class="ma-0 pa-0">
            <v-row>
              <v-col md="4" sm="6" cols="12">
                <v-card
                  outlined
                  color="#FFE8CD"
                  style="text-decoration: none;border-radius:18px"
                  href="https://bit.ly/df21-partners"
                  rel="noreferrer"
                  target="_blank"
                  class="pa-6"
                >
                  <v-icon x-large class="my-2" color="#202124"
                    >mdi-account-multiple-check</v-icon
                  >
                  <p
                    style="font-size: 22px; font-weight: 500; margin-bottom: 10px"
                  >
                    Partner with us!
                  </p>
                  <p style="font-size: 16px">
                    Keep up with the latest DevFest India news and
                    announcements. Join the conversation on Discord Server.
                  </p>
                  <v-card-actions class="ml-n2 mb-0">
                    <a
                      color="#E38D28"
                      text
                      class="px-0 py-0"
                      style="text-transform: capitalize;font-weight:600;text-decoration: none;color:#202124"
                      href="https://bit.ly/df21-partners"
                      rel="noreferrer"
                      target="_blank"
                      >Show your Interest</a
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col> -->
      </v-row>

      <v-row align="center" justify="center" v-if="communitiesList.length">
        <v-col md="11" lg="9" cols="12" class="google-font">
          <h3 class="google-font mb-12">
            Partner Communities
          </h3>
          <v-row class="-px-4">
            <v-col
              lg="3"
              md="3"
              sm="4"
              cols="12"
              v-for="(item, index) in communitiesList"
              :key="index"
            >
              
              <v-card :href="item.externalLink" target="_blank" flat class="d-flex px-2 py-2 community-card" rounded="lg">
                <v-row justify="center" align="center" class="py-2">
                  <v-col cols="3" class="pl-md-6 pl-5 community-image">
                    <v-avatar>
                    <v-img
                      width="50px"
                      height="50px"
                      :src="getCommunityImage(item.image)"
                      :lazy-src="getCommunityImage(item.image)"
                      :alt="item.title"
                    />
                    </v-avatar>
                  </v-col>
                  <v-col cols="9">
                    <p style="font-size:18px;font-weight:600" class="mb-0">{{item.title}}</p>
                    <p class="mx-0 my-0 caption text--secondary" v-if="item.externalLink">View community <v-icon size="15px">mdi-chevron-right</v-icon></p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import communitiesList from "@/assets/data/communities.json";
export default {
  name: "Communities",
  data: () => ({
    loading: true,
    communitiesList: communitiesList,
  }),
  created() {
    document.title = "Communities | DevFest India";
    this.communitiesList = communitiesList.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
  },
  methods: {
    load() {
      this.loading = false;
    },
    getCommunityImage: (name) => {
      return require('@/assets/img/communities/' + name)
    }
  }
};
</script>

<style>
.community-image .v-image__image--cover {
  background-size: contain;
}
.community-card {
  min-height: 100px;
}
</style>
