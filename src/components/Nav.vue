<template>
  <div class="menus">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Search'}">Search</router-link>
      </li>
    </ul>
    <ul class="menus__right">
      <li>
        <router-link :to="{name: 'login'}">Login</router-link>
      </li>
      <li>
        <router-link to="/">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menus {
  width: calc(100%  - 36px);
  display: inline-block;
}
.menus__right {
  text-align: right;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: inline-block;
  width: calc((100%  - 36px) / 2);
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
