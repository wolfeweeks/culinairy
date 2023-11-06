import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCdqdJPh5UF_m-ZfJz-Jw-uI2iRkRutR_E',
  authDomain: 'maichef-83d7d.firebaseapp.com',
  projectId: 'maichef-83d7d',
  storageBucket: 'maichef-83d7d.appspot.com',
  messagingSenderId: '1032153575463',
  appId: '1:1032153575463:web:b1d9b84d803324ed8a5e02',
  measurementId: 'G-MWY1ZGR89V'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const func
// console.log('asdfasdfasdf');

// export function initializeFirebase() {
// 	if (!app) {
// 		app = initializeApp(firebaseConfig);
// 		auth = getAuth(app);
// 		db = getFirestore(app);
// 	}

// 	return { auth, db };
// }
