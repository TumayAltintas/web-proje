import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'animate.css'
import 'bulma/css/bulma.css'
import {useCounterStore} from "./piniaStore";

const app = createApp(App)
app.use(router)

app.mount('#app')
