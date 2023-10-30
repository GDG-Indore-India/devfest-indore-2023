<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        v-ripple
        style="
          cursor: pointer;
          background: white;
          border-radius: 15px;
        "
        class="text-center py-5 ma-1 fill-height"
      >
        <v-avatar size="100">
          <!-- :src="require('@/assets/img/team/' + item.image)" :lazy-src="require('@/assets/img/team/' + item.image)" -->
          <img
            :src="getTeamImgUrl(item.image)"
            :lazy-src="getTeamImgUrl(item.image)"
            :alt="item.name"
            class="img-wrapper"
          />
        </v-avatar>
        <p class="mt-3 mb-0 google-font mb-0" style="font-size: 105%; color: #000">
          {{ item.name }}
        </p>
        <p class="mt-0 mb-0 google-font mt-0" style="font-size: 80%;color: #000;padding:0 15px;">
          {{ item.community.name }}
        </p>
        <SocialMediaDetails :socialInfo="item.social" />
      </div>
    </template>

    <v-card v-if="dialog">
      <v-card-text class="pa-5">
        <v-container>
          <v-row align="start" justify="center">
            <v-col md="4" cols="12" class="text-center">
              <v-avatar size="100">
                <img
                  :src="getTeamImgUrl(item.image)"
                  :lazy-src="getTeamImgUrl(item.image)"
                  :alt="item.name"
                  class="img-wrapper"
                />
              </v-avatar>
              <p class="google-font mt-3 mb-0" style="font-size: 140%">
                <b>{{ item.name }}</b>
              </p>
              <p class="google-font mt-1" style="font-size: 100%">
                {{ item.community.designation }}, {{ item.community.name }}
              </p>
              <socialMediaDetails class="pl-0 ml-0" :socialInfo="item.social" />
            </v-col>
            <v-col md="8" cols="12">
              <p class="google-font" style="font-size: 110%">{{ item.bio }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="primary" text @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SocialMediaDetails from "@/components/common/PersonSocialInfo";
export default {
  components: {
    SocialMediaDetails,
  },
  inject: ["theme"],
  props: ["item"],
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {},
};
</script>
<style scoped>
.img-wrapper {
  object-fit: cover !important;
  object-position: center !important;
}
</style>
