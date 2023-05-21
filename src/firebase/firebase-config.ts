import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzLDJZ3yHXK8HCgB5uC3LGylu5cU6e3eg",
  authDomain: "invoice-db1.firebaseapp.com",
  projectId: "invoice-db1",
  storageBucket: "invoice-db1.appspot.com",
  messagingSenderId: "219594136439",
  appId: "1:219594136439:web:e6724b0c9c7eec20be5f72",
  measurementId: "G-09CHCV82VD",
};

//  REMEMBER DO .ENV FILE FOR HIDE APIKEY ETC...

// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
