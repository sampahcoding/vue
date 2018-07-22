<template>
  <div class="reload" @click="$parent.doReload">
    <img src="../../assets/refresh.gif" class="col-1"/>
    <div>Reload</div>
  </div>
</template>

<script>
export default {
  name: 'Reload'
}
</script>

<style scoped>
.reload {
  margin: 3em auto;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
img {
  width: 100px;
}
</style>
