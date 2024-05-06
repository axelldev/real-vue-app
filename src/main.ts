import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import type { FlashMessageStore } from './types'

const app = createApp(App)
const GStore = reactive<FlashMessageStore>({
  flashMessage: {
    message: null,
    type: 'success'
  }
})
app.provide('GStore', GStore)
app.use(createPinia())
app.use(router)
app.mount('#app')
