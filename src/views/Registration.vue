<template>
  <v-main class="">
    <Snackbar
      :message="snackBarMessage"
      :isShow.sync="isSnackBarVisible"
      :color="snackBarColor"
      :timeout="snackBarTimeOut"
    />
    <v-container style="max-width: 1300px" class="mt-0">
      <v-row justify="center" align="center">
        <v-col md="11" lg="7">
          <p class="gdg-heading">Registration</p>
          <p style="font-size: 19px">
           IWD India 2022 Summit is back with our flagship event with the theme this year as <span class="primary-text">#ProgressNotPerfection</span>. We have an amazing line up of sessions brought to you by amazing and passionate women. Speakers with inspiring stories, technical events, workshops and discussions with exemplary women are what is in store for you.
          </p>
          <p style="font-size: 19px">
           Come join us on <b>April 2nd and 3rd, 2022 from 3:00pm to 7:00pm</b>. The event will be hosted live on our youtube channel. We invite all women and allies to enjoy the event from the comfort of your homes.
          </p>

          <v-container fluid>
            <!--  -->
            <!-- Auth Screen -->
            <!--  -->
            <v-row align="start" justify="start">
              <v-col md="2" cols="2" class="text-center">
                <v-avatar color="#202124">
                  <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font pl-0" cols="10">
                <AuthUI @userStatus="checkUserStatus" @showSnackbar="showSnackbar" />
              </v-col>
            </v-row>
            <!--  -->
            <!-- Auth Screen -->
            <!--  -->

            <!--  -->
            <!-- Registration Form -->
            <!--  -->
            <v-row
              class="my-8"
              align="start"
              justify="start"
              v-if="
                userRegistered != null &&
                !userRegistered &&
                userInfo != null &&
                userRegisterSuccess != null &&
                !userRegisterSuccess
              "
            >
              <v-col md="2" cols="2" class="text-center">
                <v-avatar color="#202124">
                  <v-icon dark>mdi-format-align-justify</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font pl-0" cols="10">
                <RegistrationForm
                  v-if="userInfo != null"
                  :user="userInfo"
                  @registerSuccess="userRegisterSuccess = true"
                />
              </v-col>
            </v-row>
            <!--  -->
            <!-- Registration Form -->
            <!--  -->

            <!--  -->
            <!-- Registration Success -->
            <!--  -->
            <v-row
              class="my-8"
              align="start"
              justify="start"
              v-if="
                userRegistered != null &&
                !userRegistered &&
                userInfo != null &&
                userRegisterSuccess != null &&
                userRegisterSuccess
              "
            >
              <v-col md="2" cols="2" class="text-center">
                <v-avatar color="#202124">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <RegistrationStatus :newRegisteredAttendee="true"/>
              </v-col>
            </v-row>
            <!--  -->
            <!-- Registration Success -->
            <!--  -->

            <!--  -->
            <!-- Already Registered -->
            <!--  -->
            <v-row
              class="my-8"
              align="start"
              justify="start"
              v-if="
                userRegistered != null && userRegistered && userInfo != null
              "
            >
              <v-col md="2" cols="2" class="text-center">
                <v-avatar color="#202124">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <RegistrationStatus :newRegisteredAttendee="false"/>
              </v-col>
            </v-row>
            <!--  -->
            <!-- Already Registered -->
            <!--  -->
          </v-container>

          <!-- <v-btn @click="loginWihGoogle">Login with Google</v-btn> -->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AuthUI from "../components/auth/Auth.vue";
import Snackbar from "../components/common/Snackbar.vue"
import RegistrationForm from "../components/registration/RegistrationForm.vue";
import RegistrationStatus from "../components/registration/RegistrationStatus.vue"
export default {
  name: "Registration",
  data: () => ({
    snackBarMessage: "",
    isSnackBarVisible: false,
    snackBarColor: "green",
    snackBarTimeOut: 5000,
    userInfo: {},
    userRegistered: null,
    userRegisterSuccess: false,
  }),
  components: {
    AuthUI,
    RegistrationForm,
    RegistrationStatus,
    Snackbar
  },
  methods: {
    showSnackbar(event) {
      this.isSnackBarVisible = true;
      this.snackBarMessage = event;
      this.userInfo = {}
      this.userRegistered = null
    },
    checkUserStatus(user) {
      this.userInfo = user.userInfo;
      this.userRegistered = user.userRegistered;
    },
  },
  created(){
    document.title = "Registration | IWD India 2022"
  }
};
</script>
