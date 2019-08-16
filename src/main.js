import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "zh",
  messages: {
    zh: require("./assets/i18n/zh"),
    en: require("./assets/i18n/en")
  }
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
