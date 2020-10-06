<template>
  <div id="app">
    <container></container>
    <header-top></header-top>
  </div>
</template>

<script>
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
export default {
  name: 'Home',
  components: {
   'container': Container,
   'header-top': Header
  }
}
</script>

<style>
  @import '../App.css';
</style>