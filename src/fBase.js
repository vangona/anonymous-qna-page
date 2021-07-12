import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdKuvipqVEbHicVyXLDjx_frIUA0EHMsw",
  authDomain: "myowndrawer-98874.firebaseapp.com",
  projectId: "myowndrawer-98874",
  storageBucket: "myowndrawer-98874.appspot.com",
  messagingSenderId: "278557159432",
  appId: "1:278557159432:web:ef028ac7dec9f98b35e1bd",
  measurementId: "G-4ZY2ZWVK8V"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();