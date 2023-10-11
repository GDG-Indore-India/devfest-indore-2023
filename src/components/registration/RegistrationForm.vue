<template>
  <v-container fluid class="my-0 py-0">
    <v-row>
      <v-col>
        <h3 class="google-font">Your details</h3>
        <p class="mb-8">Required fields are marked with an asterisk</p>
      </v-col>
    </v-row>

    <v-row class="my-0 py-0">
      <v-col class="my-0 py-0" md="9">
        <v-form ref="form" autocomplete="off">
          <!-- Email Id -->
          <TextField
            :model.sync="user.email"
            label="Email"
            :required="true"
            :disabled="true"
          />
          <!-- Email Id -->

          <!-- Full Name -->
          <TextField
            :model.sync="response.name"
            label="Name"
            :required="true"
            :disabled="false"
          />
          <!-- Full Name -->

          <!-- City -->
          <TextField
            :model.sync="response.city"
            label="City"
            :required="true"
            :disabled="false"
          />
          <!-- City -->

          <!-- Country -->
          <CountrySelect :model.sync="response.country" />
          <!-- Country -->

          <!-- Company/Org -->
          <TextField
            :model.sync="response.org"
            label="Company / Institute Name"
            :required="true"
            :disabled="false"
          />
          <!-- Company/Org -->

          <!-- Role -->
          <TextField
            :model.sync="response.role"
            label="Role / Designation"
            :required="true"
            :disabled="false"
          />
          <!-- Role -->

          <!-- Gender -->
          <RadioBtn
            label="How would you like to identify yourself as?"
            :model.sync="response.gender"
            :options="['Male', 'Female', 'Prefer not to say']"
          />
          <!-- Gender -->

          <!-- Experience -->
          <RadioBtn
            class="mt-5"
            label="Years of experience"
            :model.sync="response.experience"
            :options="[
              '0 - 2 years',
              '3 - 5 years',
              '6 - 10 years',
              '11 - 20 years',
              '21+ years',
            ]"
          />
          <!-- Experience -->

          <!-- Are you a part of GDG? -->
          <RadioBtn
            class="mt-5"
            label="Are you part of the GDG/WTM/GDSC program?"
            :model.sync="response.isGDGMember"
            :options="['Yes', 'No']"
          />
          <!-- Are you a part of GDG? -->

          <!-- KnowAbout  -->
          <KnowAboutRadio
            label="How did you get to know about this event?"
            class="mt-4"
            :model.sync="knownByGoogleProgram"
            :knownByOrtherCommunity.sync="knownByOrtherCommunity"
            :options="[
              'Women Techmakers (WTM)',
              'Google Developer Groups (GDG)',
              'Google Developer Student Clubs (GDSC)',
              'Google Developers Experts (GDE)',
              'Google Crowdsource Community',
              'Meetup',
              'Twitter',
              'Facebook',
              'LinkedIn',
              'Other Communities',
            ]"
          />
          <!-- KnowAbout  -->

          <!-- Share -->
          <p style="font-size: 105%; color: black" class="mb-0 mt-4">
            What are your expected takeaways from this event?
          </p>
          <v-textarea
            outlined
            class="mt-3"
            placeholder="What are your expected takeaways from this event?"
            v-model="response.share"
          ></v-textarea>
          <!-- Share -->

          <!-- WTM Event 1st Time? -->
          <RadioBtn
            class="mt-5"
            label="Have you attended our any Women Techmakers (WTM) event before?"
            :model.sync="response.isFirstWTMEvent"
            :options="['Yes', 'No']"
          />
          <!-- WTM Event 1st Time? -->

          <!-- Accepts TC -->
          <div>
            <v-checkbox
              color="#4285F4"
              v-model="istcChecked"
              :rules="[(v) => !!v || 'You must agree to register!']"
              label="By checking this box, I confirm that: "
            ></v-checkbox>
            <p class="mt-3">
              I agree to let IWD India Organisers use the information
              collected in this form to be used for my participation in "IWD
              India 2022 Event" and receive further communications from the
              organising team.
            </p>
            <p>
              I have read and agree to the
              <router-link to="/code-of-conduct" target="_blank"
                >Code of conducts</router-link
              >
              &
              <a
                href="https://developers.google.com/community-guidelines"
                rel="“noreferrer”"
                target="_blank"
                >Community Guidelines</a
              >
            </p>
          </div>
          <!-- Accepts TC -->

          <v-btn
            depressed
            dark
            rounded
            class="mt-3"
            large
            :loading="loader"
            @click="saveData"
            color="#000"
            >Submit</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {registerUser, } from "../../services/registrationService";
import TextField from "../registration/FormComponents/TextField.vue";
import RadioBtn from "../registration/FormComponents/GenderRadio.vue";
import KnowAboutRadio from "../registration/FormComponents/KnowAbout.vue";
import CountrySelect from "../registration/FormComponents/CountorySelect.vue";
export default {
  name: "",
  props: ["user"],
  components: {
    TextField,
    RadioBtn,
    CountrySelect,
    KnowAboutRadio,
  },
  data: () => ({
    istcChecked: "",
    gdgCommunity: "",
    otherCommunity: "",
    knownByGoogleProgram: "",
    knownByOrtherCommunity: "",
    loader: false,
    response: {
      name: "",
      email: "",
      city: "",
      country: "",
      role: "",
      org: "",
      gender: null,
      experience: "",
      knowAbout: [],
      share: "",
      photoURL: "",
      registrationConfirmationEmail: false,
      code: "",
      isFirstWTMEvent:null,
      isGDGMember: null
    },
  }),
  created() {
    this.response.name = this.user.displayName;
    this.response.email = this.user.email;
    this.response.photoURL = this.user.photoURL
      ? this.user.photoURL
      : "https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png";
  },
  methods: {
    async saveData() {
      if (this.$refs.form.validate()) {
        this.loader = true;
        if (this.knownByGoogleProgram === "Other Communities") {
          this.response.knowAbout = this.knownByOrtherCommunity.toUpperCase();
        } else {
          this.response.knowAbout = this.knownByGoogleProgram.toUpperCase();
        }
        if (Object.keys(this.$route.query) == "code") {
          if (this.$route.query["code"].length > 2) {
            this.response.code = this.$route.query["code"];
          }
        }
        try {
          let res = await registerUser(this.response, this.user.uid);
          if (res.success) {
            this.loader = false;
            this.$emit("registerSuccess");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        this.loader = false;
        alert("Please fill the required fields before submitting the form :)");
      }
    },
    checkData(data) {
      return data.length > 0 ? data.toUpperCase() : null;
    },
  },
};
</script>

<style>
/* .unstyled, .v-input > .v-input-control > .v-input-slot > .v-text-field__slot > input > ::-webkit-inner-spin-button, ::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    } */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
