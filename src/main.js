import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown, faArrowUp)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


