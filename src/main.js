import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

AOS.init();
createApp(App)
  .use(router)
  .use(vuetify)
  .use(AOS)
  .mount('#app')
