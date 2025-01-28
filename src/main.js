import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
// Importa apenas o estilo global
import '@/styles/main.scss';

library.add(faLinkedin, faGithub, faFilePdf);
const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
