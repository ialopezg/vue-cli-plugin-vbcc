import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import {
    VueBCCPlugin,
    ActionComponent,
    ActionListComponent,
    FilterComponent,
    FilterFieldComponent,
    FilterFieldAbstractComponent,
    FilterFieldResourceComponent,
    FormComponent,
    FormFieldComponent,
} from 'vue-bcc'

Vue.use(VeeValidate)
Validator.extend('alpha_spaces_points', {
    validate: (value) => new RegExp(/^[A-Za-z .]+$/u).test(value),
})

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
    xmlConfig: require('../../app.config.js').xmlConfig
})