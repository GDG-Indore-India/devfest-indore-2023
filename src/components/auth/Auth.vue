<template>
  <v-container fluid class="my-0 py-0">
    <v-row>
      <v-col>
        <h3 class="google-font">Login with your Google Account</h3>
        <p class="google-font">
          Sign in and register to get your entry tickets of the IWD India 2023.
        </p>

        <!-- Check Auth -->
        <div
          v-if="
            Object.keys(userInfo).length == 0 &&
              checkingUserStatus &&
              !userLoggedInFound
          "
        >
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>

        <!-- Login Screen -->
        <div
          v-if="
            Object.keys(userInfo).length == 0 &&
              !checkingUserStatus &&
              !userLoggedInFound
          "
        >
          <v-btn
            class="mt-2"
            depressed
            style="text-transform: capitalize"
            v-on:click="signIn"
            dark
            rounded
            color="black"
          >
            <v-icon size="20px" left>mdi-google</v-icon>Sign In with Google
          </v-btn>

          <br /><br />
          <p class="google-font mb-2">
            No Google Account? Create an Account/ Sign in with Email.
          </p>
          <CustomAuth @checkStatus="checkAuth()" />
        </div>

        <!-- User Info Screen -->
        <div
          v-if="
            Object.keys(userInfo).length > 0 &&
              !checkingUserStatus &&
              userLoggedInFound
          "
        >
          <v-list-item v-if="emailVerified" class="ml-0 pl-0">
            <v-list-item-avatar size="65" style="border:1px solid #e0e0e0">
              <v-img
                :src="
                  userInfo.photoURL
                    ? userInfo.photoURL
                    : 'https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png'
                "
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                class="google-font"
                v-html="userInfo.displayName"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-html="userInfo.email"
              ></v-list-item-subtitle>
              <v-list-item-subtitle
                v-on:click="logout"
                style="color:#4285f4;cursor: pointer"
              >
                <u>Logout as a {{ userInfo.email }}</u>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- Email Not Verified -->
          <div v-if="!emailVerified">
            <v-chip class="my-2">{{userInfo.email}}</v-chip>
            <p style="font-size:18px;color:red">
              Kindly verify your email by clicking on the link sent to your email
              address. Also, do refresh this page post verification to move ahead
              with the registration.
            </p>
            <v-btn v-on:click="logout" rounded dark depressed color="red">Logout</v-btn>
          </div>

        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {checkLoginState, loginWithGoogle, sendVerificationEmail, logoutUser } from '@/services/authService.js'
import {checkUserRegistrationStatus} from '@/services/registrationService'
import CustomAuth from "../auth/CustomEmailPasswordAuth.vue";
export default {
  name:'emailpassComponent',
  components: {
    CustomAuth,
  },
  data: () => ({
    userInfo: {},
    userLoggedInFound: false,
    checkingUserStatus: true,
    snackBarMessage: "",
    emailVerified: null
  }),
  created() {
    this.checkAuth();
  },
  methods: {
    async checkAuth() {
      this.checkingUserStatus = true
      try {
        let res = await checkLoginState()
        // User is Logged In
        if(res.success){
          // Email Verified
          if(res.data.emailVerified){
            this.emailVerified = true
            this.userInfo = res.data
            this.userLoggedInFound = true
            let userRegistrationStatus = await checkUserRegistrationStatus(res.data.uid)
            if(userRegistrationStatus.success){
              // User is already Registered
              this.$emit('userStatus', {
                userInfo: this.userInfo,
                userRegistered: true
              })
            }else{
              // User is not Registered
              this.$emit('userStatus', {
                userInfo: this.userInfo,
                userRegistered: false
              })
            }
          }else{
            this.userInfo = res.data;
            this.userLoggedInFound = true;
            this.emailVerified = false
            let emailVeriMail = await sendVerificationEmail()
            
            if(emailVeriMail.success){
              // Email Sent Successfully
              this.emailVerified = false
              this.$emit('showSnackbar','Kindly verify your email by clicking on the link sent to your email')
            }
          }
        }else{
          console.log('User Is not loggedin');
          this.userLoggedInFound = false;
        }
        
      } catch (error) {
        // console.log(error);
        // this.$emit('showSnackbar', error.message)
      }
      this.checkingUserStatus = false;
    },
    async signIn() {
      try {
        let res = await loginWithGoogle();
        self.snackBarMessage = "Signed In with " + res.email;
        this.checkAuth()
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        const res = await logoutUser()  
        if(res.success){
          this.userLoggedInFound = false
          this.userInfo = {}
          this.checkAuth()
          this.$emit("showSnackbar", 'User Logged Out Successfully') 
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
