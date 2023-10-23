import './assets/main.css'

import { createApp } from 'vue'

import loadingDirective from './deirectives/loadingDirective.js'

import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(createPinia())

import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
app.config.globalProperties.$hljs = hljs;

app.use(router)
// loading
app.directive('loading',loadingDirective)

app.directive('highlight',{
    mounted(el) {
        el.style.backgroundColor = 'yellow';
        console.log(el, 'el')
        }
})
app.mount('#app')
