import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// css imports
import './assets/css/rufus.css'
import './assets/css/main.css'
import './assets/css/media.css'

createApp(App).use(router).mount('#app')
