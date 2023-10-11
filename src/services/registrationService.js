/**
 * ES Module for Firebase Attendee Registration Service
 * Author: Vrijraj Singh - https://vrijraj.xyz
 * Firebase SDK Version: 9
 */

import { db } from "@/config/firebase";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";

/**
 * @desc Register New Attendee
 * @param {String} attendeeData - Attendee Form Data Object
 * @param {String} uid - Firebase Auth UID
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const registerUser = (attendeeData, uid) => {
  return new Promise(async (resolve, reject) => {
    try {
      attendeeData["timestamp"] = serverTimestamp();
      await setDoc(doc(db, "edata", uid), attendeeData);
      resolve({
        success: true,
        msg: "Registration Successfully",
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
 * @desc Check user Registration Status
 * @param {String} uid - Firebase Auth UID
 * @author Vrijraj Singh
 * @returns {Promise} Promise
 */
const checkUserRegistrationStatus = (uid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = doc(db, "edata", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        resolve({
          success: true,
          msg: "User is Registered",
        });
      } else {
        resolve({
          success: false,
          msg: "User is not Registered",
        });
      }
    } catch (error) {
      reject({
        success: true,
        msg: error,
      });
    }
  });
};

export { registerUser, checkUserRegistrationStatus };
