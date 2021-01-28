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
