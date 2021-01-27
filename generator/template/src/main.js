import Vue from 'vue'
import App from './App.vue'
<%_ if (useVueBCCPluginGlobally === 'yes') { _%>
import { FilterComponent, VueBCCPlugin } from 'vue-bcc/index'

Vue.component('FilterComponent', FilterComponent)

Vue.use(VueBCCPlugin)
<%_ } _%>

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
