import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyAXPKiFBIAbXQ5aC7PInCYMI5OkAtfqrkg",
authDomain: "my-first-project-df673.firebaseapp.com",
projectId: "my-first-project-df673",
storageBucket: "my-first-project-df673.appspot.com",
messagingSenderId: "443303895673",
appId: "1:443303895673:web:4a5c9edbc3e55a2cd56aa8",
measurementId: "G-D7FFVVVGNZ"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();
export {auth, db};