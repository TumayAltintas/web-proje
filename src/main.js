import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'animate.css'
import 'bulma/css/bulma.css'
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import store from "./stores/counter";


// const firebaseConfig = {
// 	apiKey: "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",
// 	authDomain: "vueeee-tmy.firebaseapp.com",
// 	projectId: "vueeee-tmy",
// 	storageBucket: "vueeee-tmy.appspot.com",
// 	messagingSenderId: "1094212795494",
// 	appId: "1:1094212795494:web:02266ef85c8a05262641a7"
// };
//
//
// initializeApp(firebaseConfig);
//



const app = createApp(App)
app.use(store)
app.use(router)


app.mount('#app')
