import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'leaflet/dist/leaflet.css'
import '@vue-leaflet/vue-leaflet'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.min.js'
import 'material-icons/iconfont/material-icons.css'

createApp(App).use(store).use(router).mount('#app')
