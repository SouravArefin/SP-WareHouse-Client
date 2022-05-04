// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyCu7XY2fiHg3T0a-KrDibSIbxOEmpfigro",
  //   authDomain: "sp-warehouse.firebaseapp.com",
  //   projectId: "sp-warehouse",
  //   storageBucket: "sp-warehouse.appspot.com",
  //   messagingSenderId: "855551625035",
  //   appId: "1:855551625035:web:b531cfb8a8addd23114ace"
  // };
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;