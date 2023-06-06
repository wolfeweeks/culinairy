import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCdqdJPh5UF_m-ZfJz-Jw-uI2iRkRutR_E",
  authDomain: "maichef-83d7d.firebaseapp.com",
  projectId: "maichef-83d7d",
  storageBucket: "maichef-83d7d.appspot.com",
  messagingSenderId: "1032153575463",
  appId: "1:1032153575463:web:b1d9b84d803324ed8a5e02",
  measurementId: "G-MWY1ZGR89V"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {
  auth as a,
  db as d
};
