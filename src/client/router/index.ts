import Vue from 'vue';
import VueRouter from 'vue-router';
import { CONSTANTS } from '../constants';

Vue.use(VueRouter);

import GenerateUser from '../pages/generateUser/index.vue';
import CalcInsuline from '../pages/calcInsuline/index.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: CONSTANTS.ROUTERS.MAIN,
            name: 'main',
            component: GenerateUser
        },
        {
            path: CONSTANTS.ROUTERS.CALC_INSULINE,
            name: 'calcInsuline',
            component: CalcInsuline
        },
        { path: '*', component: GenerateUser },
    ]
});
