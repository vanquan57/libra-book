import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import vue3GoogleLogin from 'vue3-google-login';


import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_APP_KEY_GOOGLE
});
app.use(router);
app.use(ElementPlus);
app.mount('#app');
