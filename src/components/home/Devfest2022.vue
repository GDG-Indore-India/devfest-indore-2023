<template>
  <v-container fluid class="mx-md-1 mx-0 expect-card">
    <v-row>
      <v-col md="3" cols="12" class="text-center">
        <div class="pa-md-10 pa-5 list-details-card">
          <p class="google-font" style="font-size: 25px;font-weight: 600;">Call for <span class="text-primary">Speakers</span></p>
          <div>
            <img src="../../assets/img/call-for-speakers.png" class="details-card-img" alt="speakers image">
          </div>
          <p class="google-font mb-4 details-card-desc" style="margin: 0 auto; font-size: 16px;">
            We are looking for passionate speakers who can give a talk at our event. Please do fill the form if you are interested. Our team will get in touch with you after reviewing your entry. 
          </p>
          <v-btn color="primary" depressed href="https://bit.ly/devfest-cfp-speakers23" target="_blank" rounded>Submit Now</v-btn>
        </div>
      </v-col>
      <!-- call for sponsors -->
      <v-col md="3" cols="12" class="text-center">
        <div class="pa-md-10 pa-5 list-details-card">
          <p class="google-font" style="font-size: 25px;font-weight: 600;">Call for <span class="text-primary">Sponsors</span></p>
          <div>
            <img src="../../assets/img/call-for-sponsors.png" class="details-card-img" alt="sponsors image">
          </div>
          <p class="google-font mb-4 details-card-desc" style="margin: 0 auto; font-size: 16px;">
            Want massive visibility and impact in the tech community? Let's collaborate with us to ensure the outstanding success of Devfest Indore 2023. 📈
            <br/>
          </p>
          <v-btn color="primary" depressed href="https://bit.ly/devfest-sponsors23" target="_blank" rounded>Submit Now</v-btn>
        </div>
      </v-col>
      <!-- call for volunteers -->
      <v-col md="3" cols="12" class="text-center">
        <div class="pa-md-10 pa-5 list-details-card">
          <p class="google-font" style="font-size: 25px;font-weight: 600;">Call for <span class="text-primary">Volunteers</span></p>
          <div>
            <img src="../../assets/img/volunteers.png" alt="sponsors image" class="details-card-img"/>
          </div>
          <p class="google-font mb-4 details-card-desc" style="margin: 0 auto; font-size: 16px;">
            Be a <b>DevFest Indore 23</b>  Volunteer! Join us: Network with tech experts,Gain event experience,Exclusive access.
            <br/>
          </p>
          <v-btn color="primary" depressed href="https://bit.ly/devfest-volunteers23" target="_blank" rounded disabled>Submit Now</v-btn>
        </div>
      </v-col>
       <!-- call for community partners -->
       <v-col md="3" cols="12" class="text-center">
        <div class="pa-md-10 pa-5 list-details-card">
        <p class="google-font" style="font-size: 25px;font-weight: 600;">Call for <span class="text-primary">Partners</span></p>
          <div>
            <img src="../../assets/img/community-partners.png" class="details-card-img" alt="sponsors image" />
          </div>
          <p class="google-font mb-4 details-card-desc" style="margin: 0 auto; font-size: 16px;">
            As a Community Partner: Boost your community's influence,Collaborate on event promotion,Reach a diverse tech-savvy audience,Connect and share ideas,Shape the future of tech in Indore.
            <br/>
          </p>
          <v-btn color="primary" depressed href="https://bit.ly/devfest-partners23" target="_blank" rounded>Submit Now</v-btn>
        </div>
      </v-col>
      <!-- CALL FOR EXHIBITORS -->
       <!-- <v-col md="12" cols="12" class="text-center">
        <div style="background: white; border-radius: 15px" class="pa-md-10 pa-5 grey lighten-4 ">
          <p class="google-font" style="font-size: 28px;font-weight: 600;">Call for Exhibitors</p>
          <p class="google-font mb-4" style="width: 80%; margin: 0 auto; font-size: 18px;">
            We are looking for <b>Exhibitors</b> for Job Fair. We get the best talent from Central India under one roof! [2000+ people from IT]*
          </p>
          <v-btn color="primary" depressed href="https://bit.ly/devfest22exhibitor" target="_blank" rounded>Submit Now</v-btn>
        </div>
      </v-col> -->

      <!-- <v-col md="12" cols="12">
        <div style="background: white; border-radius: 15px" class="pa-md-10 pa-5">
          <p class="google-font font-weight-bold" style="font-size: 28px">
            Women Techmakers <br />
            International Women’s Day India Summit 2021
          </p>
          <p class="google-font">
            IWD India 2021 had seen unprecedented love and adulation from women
            and allies all over the world. Women Ambassadors from across India
            had gotten together to showcase exemplary teamwork, a passion to win
            and the courage to create something that hadn't been done before.
            <br /><br>
            The event was a phenomenal success, but the best part was that it
            brought out the sisterhood between communities. Together, we all
            rose. The team had tons of learnings and are now all set to make IWD
            India 2023 all the more worthy of your time. Stay tuned for a
            bigger, better and a never before experience.
          </p>
          <v-btn color="primary" href="https://2021.iwdindia.in/" target="_blank" depressed rounded class="mr-2 mb-2">See More Info</v-btn>
          <v-btn color="primary" outlined href="https://www.youtube.com/c/WomenTechmakersIndia/videos" target="_blank" class="mb-2" depressed rounded> <v-icon left>mdi-youtube</v-icon> Watch Videos</v-btn>
        </div>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.list-details-card {
  background: rgb(245, 248, 252) !important;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px, rgb(218, 220, 224) 0px -1px 0px 0px inset !important;
    height: 100%;
}
.expect-card {
  margin: 60px 0;
}
.details-card-img {
  width: 100%;
  height: 140px;
  object-fit: contain;
}

.details-card-desc {
  min-height: 170px;
}

@media screen and (max-width: 770px) {
  .details-card-img {
    height: auto;
  }

  .details-card-desc {
  min-height: auto;
}
}
</style>
