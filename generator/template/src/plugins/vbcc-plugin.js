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
    FormFieldAbstractComponent,
    FormFieldContainerComponent,
    FormFieldEnumComponent,
    FormGroupComponent,
    ListComponent,
    ListFieldAbstractComponent,
    ModalComponent,
    NavComponent,
    PageComponent,
    PaginationComponent,
    SearchTextComponent,
    SummaryComponent,
    SummaryFieldAbstractComponent,
    SummaryFieldArrayComponent,
    SummaryFieldDatetimeComponent,
    SummaryFieldEnumComponent,
    SummaryFieldObjectComponent,
    SummaryGroupComponent,
} from 'vue-bcc/index'

Vue.use(VeeValidate, {
    fieldsBagName: 'validationFields',
})
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
Vue.component('FormFieldAbstractComponent', FormFieldAbstractComponent)
Vue.component('FormFieldContainerComponent', FormFieldContainerComponent)
Vue.component('FormFieldEnumComponent', FormFieldEnumComponent)
Vue.component('FormGroupComponent', FormGroupComponent)
Vue.component('ListComponent', ListComponent)
Vue.component('ListFieldAbstractComponent', ListFieldAbstractComponent)
Vue.component('ModalComponent', ModalComponent)
Vue.component('NavComponent', NavComponent)
Vue.component('PageComponent', PageComponent)
Vue.component('PaginationComponent', PaginationComponent)
Vue.component('SearchTextComponent', SearchTextComponent)
Vue.component('SummaryComponent', SummaryComponent)
Vue.component('SummaryFieldAbstractComponent', SummaryFieldAbstractComponent)
Vue.component('SummaryFieldArrayComponent', SummaryFieldArrayComponent)
Vue.component('SummaryFieldDatetimeComponent', SummaryFieldDatetimeComponent)
Vue.component('SummaryFieldEnumComponent', SummaryFieldEnumComponent)
Vue.component('SummaryFieldObjectComponent', SummaryFieldObjectComponent)
Vue.component('SummaryGroupComponent', SummaryGroupComponent)

Vue.use(VueBCCPlugin, {
    app: 'app',
    xmlConfig: require('../../app.config.js').xmlConfig
})
