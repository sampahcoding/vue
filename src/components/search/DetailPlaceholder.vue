<template>
  <div>
    <div class="h2"></div>
    <div class="h2 --short"></div>
    <div class="gap">
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p--short"></div>
    </div>
    <div class="gap">
      <div class="p"></div>
      <div class="p"></div>
      <div class="p--short"></div>
    </div>
    <div class="detail__footer">
      <div class="detail__footer__img" align="top"></div>
      <div class="detail__footer__left">
        <span class="label"></span>
        <span class="label"></span>
        <br>
        <time></time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPlaceholder'
}
</script>

<style scoped>
.h2 {
  background: lightgrey;
  height: 20px;
  width: 80%;
  margin: auto;
  margin-bottom: 10px
}
.h2.--short {
  width: 20%;
  margin-bottom: 30px;
}
.p {
  background: lightgrey;
  height: 15px;
  width: 100%;
  margin-bottom: 7px;
}
.p--short {
  background: lightgrey;
  height: 15px;
  width: 80%;
  margin-bottom: 15px;
}
.gap {
  margin-bottom: 20px;
}
.detail__footer__img {
   border-radius: 50%;
   margin-right: 15px;
   width: 50px;
   height: 50px;
   background: lightgrey;
   display: inline-block;
}
.detail__footer {
  margin-top: 40px;
  display: flex;
}
span.label {
  border-radius: 6px;
  background: #f4f6f9;
  width: 100px;
  height: 25px;
  display: inline-block;
}
time {
  background: lightgrey;
  width: 70px;
  height: 15px;
  display: inline-block;
  border-radius: 6px;
}
.detail__footer__left {
  width: calc (100% - 50px);
}
</style>
