import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store/index.js";
import "view-design/dist/styles/iview.css";
import 'normalize.css';
import './common/css/index.less';
import view from "./config/iview.js";
import i18n from "./i18n/index.js";

view(Vue);

Vue.config.productionTip = false;
new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
