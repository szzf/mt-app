import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('document-click', {
    bind(el, binding, vnode) {
        document.addEventListener('click', binding.value, false)
    },
    inserted() {
        console.log('22223')
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
