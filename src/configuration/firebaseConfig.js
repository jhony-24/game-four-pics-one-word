import firebase from "firebase/app";
import { FIREBASE_SERVICE_KEY } from "./env";

firebase.initializeApp(FIREBASE_SERVICE_KEY);
export const firebaseAuth = firebase.auth;