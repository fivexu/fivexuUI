import Vue from 'vue'
import App from './App'
import router from './router'

import '../src/common/style/index.less'

import global from 'base/index'

Vue.use(global);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
