import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'
// import cors from 'cors';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Vue.use(BootstrapVue)

// const app = createApp(App)

// const Vue = createApp(App);

// [router,BootstrapVue].forEach((x) => Vue.use(x));

library.add(fas)

createApp(App).use(router).use(BootstrapVue3).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
// app.use(BootstrapVue);
// app.use(router);
// app.mount('#app');
// createApp(App)