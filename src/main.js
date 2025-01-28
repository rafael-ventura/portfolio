import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

// Importa apenas o estilo global
import '@/styles/main.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.mount('#app');
