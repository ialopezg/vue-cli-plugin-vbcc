<template>
  <div id="app">
    <ActionComponent :action-item-object="{}" />
    <ActionListComponent :actions-list="[]"/>
    <FilterComponent filter="filter" />
    <FilterFieldComponent />
    <FilterFieldAbstractComponent type="sdk"/>
    <FilterFieldResourceComponent />
    <FormComponent name="login"></FormComponent>
    <FormFieldComponent />
    <FormFieldAbstractComponent validator="required" />
    <FormFieldContainerComponent text="text" />
    <FormFieldEnumComponent :field-object="{}" />
    <FormGroupComponent text="group text" />
    <ListComponent />
    <ListFieldAbstractComponent :field-object="{}" :row="{}"/>
    <ModalComponent :modal-object="{}" />
    <NavComponent nav="sidebar"/>
    <PageComponent page-object=""/>
    <PaginationComponent  total="100"/>
    <SearchTextComponent />
    <SummaryComponent />
    <SummaryFieldAbstractComponent  field-object="" type="text"  value="1"/>

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
<%_ if (vueBCCPluginImport === 'demanded') { _%>
import {
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
  } from 'vue-bcc/index'
<%_ } _%>

export default {
  name: 'App',
  components: {
<%_ if (vueBCCPluginImport === 'demanded') { _%>
    ActionComponent,
    ActionListComponent,
    FilterComponent,
    FilterFieldComponent,
    FilterFieldAbstractComponent,
    FilterFieldResourceComponent,
    FormComponent,
    FormFieldComponent,
    FormGroupComponent,
    ListComponent,
    ModalComponent,
    NavComponent,
    PageComponent,
    PaginationComponent,
    SearchTextComponent,
    SummaryComponent,
    SummaryFieldAbstractComponent,
<%_ } _%>
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
