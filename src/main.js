import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' 
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      dark: {
        background: '#00a86b'
      },
      light: {
        background: '#d0f0c0'
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
  },
})

createApp(App).use(vuetify).mount('#app')
