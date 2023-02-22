import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjiexM9rFodCjHwAqdhgxElumIa9SblLU",
  authDomain: "invoice-db-fb998.firebaseapp.com",
  projectId: "invoice-db-fb998",
  storageBucket: "invoice-db-fb998.appspot.com",
  messagingSenderId: "280963460714",
  appId: "1:280963460714:web:d3969c8ba8334a03256413",
  measurementId: "G-SJ578XYC2G",
};

//  REMEMBER DO .ENV FILE FOR HIDE APIKEY ETC...

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
