// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASNNn7Zq70rKYyokxSaXM9o-mRjejCXJs",
  authDomain: "devfest-2022-web.firebaseapp.com",
  projectId: "devfest-2022-web",
  storageBucket: "devfest-2022-web.appspot.com",
  messagingSenderId: "501272921455",
  appId: "1:501272921455:web:45533890cb4057f492949a",
  measurementId: "G-ZDRG0WTM06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {auth, db}
