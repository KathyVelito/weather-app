import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import './index.css'

createApp(App).use(store).use(router).use(Vueaxios,axios).use(moment).mount('#app')
