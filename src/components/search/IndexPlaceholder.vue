<template>
  <ul class="search-result">
    <li v-for="i in 5" :key="i" class="flex-grid">
      <div class="col-1"></div>
      <div class="col-2">
        <div class="search-result__title"></div>
        <div class="search-result__subcontent">
          <span class="label"></span>
          <span class="label"></span>
          <br>
          <time></time>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'IndexPlaceholder'
}
</script>

<style scoped>
.flex-grid {
  display: flex;
  margin-bottom: 15px;
}
.col-1 {
  width: 170px;
  height: 100px;
  background: lightgrey;
}
.col-2 {
  width: calc(100% - 170px);
  padding-left: 10px;
  margin-left: 10px;
  position: relative;
}
.search-result__title {
  background: lightgrey;
  height: 20px;
}
.search-filter {
  width: 30%;
}
.search-result {
  width: 70%;
  margin: 0;
}
.search {
  display: flex;
}
span.label {
  border: 1px solid #f4f6f9;
  border-radius: 6px;
  padding: 1px 10px;
  background: #f4f6f9;
  display: inline-block;
  width: 50px;
  height: 12px;
  margin-top: 10px;
}
time {
  font-size: 10px;
  width: 76px;
  border-radius: 7px;
  height: 15px;
  display: inline-block;
  background: lightgrey;
}
.search-result__subcontent {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 10px;
}
</style>
