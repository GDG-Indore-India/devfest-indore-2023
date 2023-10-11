/**
 * ES Module for Firebase Auth Service
 * Author: Vrijraj Singh - https://vrijraj.xyz
 * Firebase SDK Version: 9
*/

import { auth } from "@/config/firebase";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

/**
 * @description Login with Google
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const loginWithGoogle = () => {
  return new Promise(async (resolve, reject) => {
    console.log('CALLING');
    const provider = new GoogleAuthProvider();
    try {
      let userInfo = await signInWithPopup(auth, provider);
      resolve({
        success: true,
        data: userInfo.user,
      });
    } catch (error) {
      reject({
        success: false,
        msg: error,
      });
    }
  });
};

/**
 * @description Logout user
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const logoutUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await signOut(auth);
      resolve({
        success: true,
        msg: "User Sign Out",
      });
    } catch (error) {
      reject({
        success: true,
        msg: error,
      });
    }
  });
};

/**
 * @description Current Logged In User Info
 * @author Vrijraj Singh
 * @returns Promise
 */
const getCurrentUserLoggedInInfo = () => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser;
    if (user != null) {
      resolve({
        success: true,
        data: user,
      });
    } else {
      reject({
        success: false,
        msg: "User is Not Logged In",
      });
    }
  });
};

/**
 * @description Sign Up User with Email and Password
 * @param {String} email
 * @param {String} Password
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const signUpUserWithEmailAndPassword = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await createUserWithEmailAndPassword(auth, email, password);
      let userInfo = await res.user;
      resolve({
        success: true,
        data: userInfo,
      });
    } catch (error) {
      reject({
        success: false,
        msg: error,
      });
    }
  });
};

/**
 * @description SignIn User with Email and Password
 * @param {String} email
 * @param {String} Password
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const signInUserWithEmailAndPassword = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await signInWithEmailAndPassword(auth, email, password);
      let userInfo = await res.user;
      resolve({
        success: true,
        data: userInfo,
      });
    } catch (error) {
      reject({
        success: false,
        msg: error,
      });
    }
  });
};

/**
 * @description Check the state of the user
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const checkLoginState = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve({
          success: true,
          data: user,
        });
      } else {
        reject({
          success: false,
          msg: "User is Not Login",
        });
      }
    });
  });
};

/**
 * @description Send Verification Mail
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const sendVerificationEmail = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await sendEmailVerification(auth.currentUser);
      resolve({
        success: true,
        msg: "Email verification sent!",
      });
    } catch (error) {
      reject({
        success: false,
        msg: error,
      });
    }
  });
};

export {
  loginWithGoogle,
  logoutUser,
  getCurrentUserLoggedInInfo,
  signUpUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  checkLoginState,
  sendVerificationEmail,
};
