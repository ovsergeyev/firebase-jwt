import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app"
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyCYOqlSDFHmJ2xHeaAMEoDju1CmSrDffwo",
  authDomain: "jwt-firebase-vue3-d34d7.firebaseapp.com",
  projectId: "jwt-firebase-vue3-d34d7",
  storageBucket: "jwt-firebase-vue3-d34d7.appspot.com",
  messagingSenderId: "97570742509",
  appId: "1:97570742509:web:ff128aa4af151a7a9d2ce4"
};

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')