import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';
import http from '@/utils/http.js'
import store from './store'
import {share,getImgPath} from '@/utils/common.js'
import myRequest from './utils/base_api.js'
import checkToken from './utils/check_token.js'

Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.use(uView);
Vue.mixin(share)
Vue.mixin(getImgPath)
Vue.prototype.$http=http
App.mpType = 'app'

Vue.prototype.$myRequest = myRequest
Vue.prototype.$checkToken = checkToken

const app = new Vue({
    ...App
})
app.$mount()
