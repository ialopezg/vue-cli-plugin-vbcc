import VeeValidate from 'vee-validate'
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
    FormFieldComponent,
    VueBCCPlugin,
} from 'vue-bcc/index'
<%_ } _%>

Vue.use(VeeValidate)

<%_ if (useVueBCCPluginGlobally === 'yes') { _%>
Vue.component('ActionComponent', ActionComponent)
Vue.component('ActionListComponent', ActionListComponent)
Vue.component('FilterComponent', FilterComponent)
Vue.component('FilterFieldComponent', FilterFieldComponent)
Vue.component('FilterFieldAbstractComponent', FilterFieldAbstractComponent)
Vue.component('FilterFieldResourceComponent', FilterFieldResourceComponent)
Vue.component('FormComponent', FormComponent)
Vue.component('FormFieldComponent', FormFieldComponent)

Vue.use(VueBCCPlugin, {
    app: 'app',
    xmlConfig: require('../app.config.js').xmlConfig,
})
<%_ } _%>

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
