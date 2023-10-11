<template>
  <v-container fluid>
    <v-row md="12">
      <v-col
        cols="12"
        md="12"
        class="px-0 my-0 py-0 google-font"
        v-for="itemp in speakerData.sessionId"
        :key="itemp.id"
      >
        <v-container fluid class="">
          <v-row align="center" justify="start">
              <!-- style="border-bottom:1px solid #e0e0e0" -->
            <v-col
              :md="small?12:6"
              class="px-0"
              
              v-for="item in binarySearchSession(itemp)"
              :key="item.id"
            >
              <SpeakerSessionDialog :item="item"/> 
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SpeakerSessionDialog from '@/components/speakers/SpeakerSessionDialog.vue'
export default {
  name: "SpeakerSessionCards",
  data: () => ({}),
  props: ["speakerData", "sessionDetails", 'small'],
  components:{
    SpeakerSessionDialog
  },
  mounted(){
    // console.log('Seesion card Calling')
  },
  methods: {
    binarySearchSession(id) {
      let low = 0;
      let high = this.sessionDetails.length;
      while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (this.sessionDetails[mid].id == id) {
          return [this.sessionDetails[mid]];
        } else if (this.sessionDetails[mid].id > id) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    },
  },
};
</script>

<style></style>