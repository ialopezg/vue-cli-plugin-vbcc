import Vue from 'vue'
import App from './App.vue'
<%_ if (useVueBCCPluginGlobally === 'yes') { _%>
import {
    ActionComponent,
    ActionListComponent,
    FilterComponent,
    FilterFieldComponent,
    FilterFieldAbstractComponent,
    FilterFieldResourceComponent,
    FormComponent,
    VueBCCPlugin,
} from 'vue-bcc/index'

Vue.component('ActionComponent', ActionComponent)
Vue.component('ActionListComponent', ActionListComponent)
Vue.component('FilterComponent', FilterComponent)
Vue.component('FilterFieldComponent', FilterFieldComponent)
Vue.component('FilterFieldAbstractComponent', FilterFieldAbstractComponent)
Vue.component('FilterFieldResourceComponent', FilterFieldResourceComponent)
Vue.component('FormComponent', FormComponent)

Vue.use(VueBCCPlugin)
<%_ } _%>

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
