<template>
  <v-main class="my-0 py-0">
    <v-container fluid style="background-color: rgb(236 235 237 / 32%)">
       <!-- <v-row>
          <v-col md="12" cols="12" class="text-center">
                <v-img :src="require('@/assets/img/df22-website-header.gif')" contain style="width:100%"></v-img>
          </v-col>
      </v-row> -->
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" class="my-0 py-0 mt-[15px]">
          <Hero class="my-md-10 my-5"/>
          <v-row align="center" justify="center" class="mt-0 pt-0">
            <!-- <v-col cols="12" md="5" lg="5" sm="10" class="">
              <YouTube />
            </v-col> -->
          <!-- <v-col cols="12" md="5" lg="5" sm="10" class="google-font px-6 pb-5">
          <p
            class="google-font mb-2"
            style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
          >Explore YouTube Live Streams</p>
          <p>Women Techmakers India is all set to host Women Techmakers
            International Women's Day Summit with a focus on the exciting theme
            #ProgressNotPerfection.</p>
            <p style="font-size:130%">What is in store for the participants?</p>
            <ul style="font-size:110%">
              <li>Loads of learning and hands-on workshops</li>
              <li>
                A plethora of formats like workshops, tech talks, lightning talks
                and panel discussions.
              </li>
              <li>Amazing swags and certificates of participation!</li>
            </ul>
          </v-col> -->
        </v-row>
          <Ticketing/>
          <v-divider></v-divider>
          <WhatToExpect />
          <!-- <Ticketing class="my-10 py-10"/> -->
          <v-divider></v-divider>
          <Devfest2022/>
          <!-- <AboutDevfest class="my-10"/>  -->
          <v-divider></v-divider>
          <Partners />
          <!-- <PartnerList class="my-15"/> -->
          <!-- <v-divider></v-divider> -->
          <!-- <FAQList  class="my-15"/> -->
          <v-divider></v-divider>
          <SocialInfo class="my-15" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import SocialInfo from '../components/home/SocialInfo.vue';
import titleMixin from '@/mixins/titleMixin';
import Devfest2022 from '../components/home/Devfest2022.vue';
import WhatToExpect from '../components/home/WhatToExpect.vue';
import Partners from '../components/common/Partners.vue';
import Ticketing from '../components/home/Ticketing.vue';


export default {
  name: "Home",
  mixins: [titleMixin],
  components: {
    Hero,
    SocialInfo,
    Devfest2022,
    WhatToExpect,
    Partners,
    Ticketing
  },
  data(){
    return {
      title: 'Home'
    }
  },
  created(){
    document.title = "Home | Devfest Indore 2023"
  }
};
</script>
