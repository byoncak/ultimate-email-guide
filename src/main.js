import { createApp } from "vue";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import App from "./App.vue";
import router from "./router";

import "@/styles/main.scss";
import "@/styles/global.scss";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



const firebaseConfig = {
  apiKey: "AIzaSyBgDcKjViYe8Wqmt9xKW9zD3AhYaZjy3o0",
  authDomain: "email-list-c9a83.firebaseapp.com",
  projectId: "email-list-c9a83",
  storageBucket: "email-list-c9a83.appspot.com",
  messagingSenderId: "6619082035",
  appId: "1:6619082035:web:de69c2b4a10cf1ea356246",
};

initializeApp(firebaseConfig);

const db = getFirestore();

library.add(faUser, faEnvelope, faTimes, faInstagram, faTwitter)

const app = createApp(App);


app.component('font-awesome-icon', FontAwesomeIcon)


app.use(router);
app.provide("db", db);
app.mount("#app");
