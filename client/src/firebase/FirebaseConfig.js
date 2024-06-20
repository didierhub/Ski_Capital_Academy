
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {

  apiKey:import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId: "testfirebase-f6066",
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: "721577990112",
  appId:import.meta.env.VITE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(firebaseApp);
export const db=getFirestore(firebaseApp)

export default firebaseApp;