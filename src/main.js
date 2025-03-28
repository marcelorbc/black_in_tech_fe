/* eslint-disable vue/multi-word-component-names */
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import HeaderMenu from './components/HeaderMenu.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeEventsCards from './components/HomeEventsCards.vue'
import HomeJoin from './components/HomeJoin.vue'
import HomePartners from './components/HomePartners.vue'
import HomeRodape from './components/HomeRodape.vue'
import HomeShortcutCards from './components/HomeShortcutCards.vue'
import AdminLayout from './layouts/AdminLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

// Styles
//import Aura from '@primeuix/themes/aura'
//import 'primeflex/primeflex.css'
//import 'primeicons/primeicons.css'
import './assets/styles/main.css'
import './assets/styles/theme.css'; // Our custom African-inspired theme

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.use(ConfirmationService)
app.component('MainLayout', MainLayout)
app.component('HeaderMenu', HeaderMenu)
app.component('HomeBanner', HomeBanner)
app.component('HomeShortcutCards', HomeShortcutCards)
app.component('HomeEventsCards', HomeEventsCards)
app.component('HomeJoin', HomeJoin)
app.component('HomeRodape', HomeRodape)
app.component('HomePartners', HomePartners)
app.component('AdminLayout', AdminLayout)

app.mount('#app')
