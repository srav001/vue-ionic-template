import { createApp } from 'vue';

import { createPinia } from 'pinia';

import { IonicVue } from '@ionic/vue';

import App from './App.vue';
// eslint-disable-next-line
import router from './router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/vue/css/normalize.css';
// import '@ionic/vue/css/structure.css';
// import '@ionic/vue/css/typography.css';

/* Import the bootstrap grid system */
import 'bootstrap/dist/css/bootstrap-grid.min.css';

/* Theme variables */
import './theme/variables.css';

/* Import the tailwaind files */
import '../index.css';

const app = createApp(App).use(createPinia()).use(IonicVue).use(router);

router.isReady().then(() => {
    app.mount('#app');
});
