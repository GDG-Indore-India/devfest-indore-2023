<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h3 class="google-font" v-if="newRegisteredAttendee== true">
          Thank you for registering for
          <a
            href="https://twitter.com/WTMIndia"
            rel="noreferrer"
            target="_blank"
            style="text-decoration: none; color: #202124"
          >
            <b>#IWDIndia</b> </a
          >.
        </h3>
        <h3 class="google-font" v-else>
           You have already submitted this form.
        </h3>
        <p class="google-font mt-3 mb-0" style="font-size: 110%">
          Thank you for registering for
          <b>#IWDIndia</b>. We can’t wait to host you at the Grand Event.
          Till then follow #IWDIndia so that you don’t miss any update from
          us. <br /><br />You will be receiving the confirmation mail soon from:
          <br />
          <span style="color: red">no-reply@iwdindia.in</span>
        </p>

        <div class="mt-5">
          <v-btn rounded depressed to="/badge" color="#4184F7" dark style="border: 1px solid #4184F7;border-radius:16px" class="mr-3">Create your badge</v-btn>
        </div>
        <div class="mt-5">
            <p>Share with social platforms:</p>
             <v-btn rounded depressed color="#202124" dark style="border: 1px solid #202124;border-radius:50%;min-width: auto;" href="https://twitter.com/intent/tweet?url=&text=Yipee%21%21%20I%20just%20registered%20for%20International%20Women%27s%20Day%28IWD%29%20India%202022%20Summit%20hosted%20by%20%40WtmIndia%20%0A%0AExcited%20about%20attending%20the%20event%20on%20April%202nd%20and%203rd%202022%21%20Find%20more%20info%20at%20iwdindia.in%0A%0A%23IWDIndia%20%23IWDIndia2022%20" target="_blank" rel=”noreferrer” class="pa-2 mr-2"> <v-icon color="#fff">mdi-twitter</v-icon></v-btn>
            <v-btn rounded depressed color="#202124" dark style="border: 1px solid #202124;border-radius:50%;min-width: auto;" href="https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fiwdindia.in" target="_blank" rel=”noreferrer” class="pa-2 mr-2"> <v-icon color="#fff">mdi-linkedin</v-icon></v-btn>
            <v-btn rounded depressed color="#202124" dark style="border: 1px solid #202124;border-radius:50%;min-width: auto;" href="whatsapp://send?text=Yipee!!%20I%20just%20registered%20for%20International%20Women's%20Day(IWD)%20India%202022%20Summit%20hosted%20by%20@WtmIndia%20%0A%0AExcited%20about%20attending%20the%20event%20on%20April%202nd%20and%203rd%202022!%20Find%20more%20info%20at%20https://iwdindia.in%0A%0A#IWDIndia%20#IWDIndia2022" target="_blank" rel=”noreferrer” class="pa-2 mr-2"> <v-icon color="#fff">mdi-whatsapp</v-icon></v-btn>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegistrationStatus",
  props: ["newRegisteredAttendee"],
};
</script>

<style>
</style>
