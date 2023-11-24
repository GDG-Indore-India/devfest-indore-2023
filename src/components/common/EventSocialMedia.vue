<template>
  <div style="display: grid;  grid-template-columns: 1fr 1fr; grid-gap: 1rem 1rem;" >
    <v-btn
      aria-label="social media btn"
      class="ml-0 mt-0 mx-0 mr-2 pa-10 social-btn"
      href="https://twitter.com/GDG_Indore"
      target="_blank"
    >
      <v-icon color="#000" style="font-size: 3rem;">mdi-twitter</v-icon>
    </v-btn>

    <v-btn
      aria-label="social media btn"
      class="mt-0 mx-0 mr-2 pa-10 social-btn"
      href="https://www.youtube.com/c/GDGIndore/"
      target="_blank"
    >
      <v-icon color="#000" style="font-size: 3rem;">mdi-linkedin</v-icon>
    </v-btn>
    <v-btn
      aria-label="social media btn"
      class="ml-0 mt-0 mx-0 mr-2 pa-10 social-btn"
      href="https://instagram.com/gdgindore"
      target="_blank"
    >
      <v-icon color="#000" style="font-size: 3rem;">mdi-instagram</v-icon>
    </v-btn>
    <v-btn
      aria-label="social media btn"
      class="mt-0 mx-0 mr-2 pa-10 social-btn"
      href="https://www.youtube.com/c/GDGIndore/"
      target="_blank"
    >
      <v-icon color="#000" style="font-size: 3rem;">mdi-youtube</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style>
.social-btn {
  width: 200px;
  border-radius: 1rem;
  background: transparent;
  /* background: #202124; */
  border: 2px solid #4285f3;
}

.social-btn:nth-child(2) {
  border: 2px solid #34A853;
}

.social-btn:nth-child(3) {
  border: 2px solid #EA4335;
}

.social-btn:nth-child(4) {
  border: 2px solid #F9AB00;
}

/* Small Scale Display */
@media only screen and (max-width: 600px) {
      .social-btn {
        width: 120px;
      }
  }
</style>
