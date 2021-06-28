<template>
  <div id="app">
    <ContactsMain/>
  </div>
</template>

<script>
import ContactsMain from './components/contacts/ContactsMain'

export default {
  name: 'App',
  components: {
    ContactsMain
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
}
body{
  margin: 0;
}
</style>
