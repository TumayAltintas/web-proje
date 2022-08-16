import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",
    authDomain: "vueeee-tmy.firebaseapp.com",
    projectId: "vueeee-tmy",
    storageBucket: "vueeee-tmy.appspot.com",
    messagingSenderId: "1094212795494",
    appId: "1:1094212795494:web:02266ef85c8a05262641a7"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth,db}

