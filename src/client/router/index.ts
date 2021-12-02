import Vue from 'vue';
import VueRouter from 'vue-router';
import { CONSTANTS } from '../constants';

Vue.use(VueRouter);

import Hello from '../components/templates/hello/index.vue';


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: CONSTANTS.ROUTERS.MAIN,
            name: 'main',
            component: Hello
        },
        { path: '*', component: Hello },
    ]
});
