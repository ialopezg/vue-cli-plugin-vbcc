<template>
  <div id="app">
    <FilterComponent filter="filter" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
<%_ if (useVueBCCPluginGlobally === 'no') { _%>
import { FilterComponent } from 'vue-bcc/index'
<%_ } _%>

export default {
  name: 'App',
  components: {
<%_ if (useVueBCCPluginGlobally === 'no') { _%>
    FilterComponent,
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
