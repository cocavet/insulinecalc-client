import router from "../router";
import App from './index.vue';
import Vue from 'vue';

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");