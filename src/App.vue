<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" class="icon">
      <navigation></navigation>
    </header>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    'navigation': Nav
  }
}
</script>

<style>
#app, input, select {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 700px;
  margin: auto;
}
.icon {
  height: 30px;
}
header {
  margin-bottom: 30px;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
