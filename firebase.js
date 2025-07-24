// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "LA_TUA_API_KEY",
  authDomain: "IL_TUO_DOMINIO",
  projectId: "IL_TUO_PROJECT_ID",
  storageBucket: "IL_TUO_BUCKET",
  messagingSenderId: "IL_TUO_SENDER_ID",
  appId: "LA_TUA_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
