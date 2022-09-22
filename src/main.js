import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


library.add(fas)

createApp(App).use(router).use(BootstrapVue3).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap.js"