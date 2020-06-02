import Vue from 'vue'
import App from '@/App'
import router from '@/router/index.js'
new Vue({
    //先把全局事件总线安排好
    el:'#root',
    render: h => h(App),
   router
})