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
    <FormGroupComponent text="form group text" />
    <ListComponent />
    <ListFieldAbstractComponent :field-object="{}" :row="{}" />
    <ModalComponent :modal-object="{}" />
    <NavComponent nav="sidebar"/>
    <SearchTextComponent />
    <SummaryComponent />
    <SummaryFieldAbstractComponent :field-object="{}" type="text" :value="1" />
    <SummaryFieldArrayComponent :field-object="{}" :value="[1]" />
    <SummaryFieldDatetimeComponent :field-object="{}" :value="1980" />
    <SummaryFieldEnumComponent :field-object="{}" :value="1" />
    <SummaryFieldObjectComponent :field-object="{}" :value="30" />
    <SummaryGroupComponent text="summary group text"/>
    <TabsComponent :tabs-list="[]" />
    <ViewComponent view="login">
      <PageComponent :page-object="{}">
        <PaginationComponent :total="100"/>
      </PageComponent>
    </ViewComponent>

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
    SummaryFieldArrayComponent,
    SummaryFieldDatetimeComponent,
    SummaryFieldEnumComponent,
    SummaryFieldObjectComponent,
    SummaryGroupComponent,
    TabsComponent,
    ViewComponent
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
    SummaryFieldArrayComponent,
    SummaryFieldDatetimeComponent,
    SummaryFieldEnumComponent,
    SummaryFieldObjectComponent,
    SummaryGroupComponent,
    TabsComponent,
    ViewComponent,
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
