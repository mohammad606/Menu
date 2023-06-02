import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'
import { getDatabase } from 'firebase/database';
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAufHNdn_PJWfE6ijKqnfhGLtw5knY7VCM",
  authDomain: "food-list-bdb10.firebaseapp.com",
  databaseURL: "https://food-list-bdb10-default-rtdb.firebaseio.com",
  projectId: "food-list-bdb10",
  storageBucket: "food-list-bdb10.appspot.com",
  messagingSenderId: "205891303435",
  appId: "1:205891303435:web:95d72cd9a8faf0ca81af0e"
};



firebase.initializeApp(firebaseConfig)

export const app = firebase.initializeApp(firebaseConfig)
export const data = getDatabase(app)

export const auth = getAuth(app)
export default firebase
