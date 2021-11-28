// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfa7qeHKlYM9ZHkAbAVmfgXq3s7qJsZGU",
  authDomain: "fir-auth-fd3db.firebaseapp.com",
  projectId: "fir-auth-fd3db",
  storageBucket: "fir-auth-fd3db.appspot.com",
  messagingSenderId: "399661303302",
  appId: "1:399661303302:web:b0f2f21d305169e5d06587"
};

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };