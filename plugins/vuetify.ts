import { defineNuxtPlugin } from '#app'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(vuetify)
})
