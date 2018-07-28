<template>
  <ul class="flex-3">
    <li v-for="article in RelatedArticles" :key="article.id">
      <router-link :to="{name: 'detail', params: {id: article.id}}">
        <img :src="'https://picsum.photos/200/100/?image='+ article.id" align="top"/>
        <h5>{{article.title}}</h5>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: [
    'RelatedArticles'
  ]
}
</script>

<style scoped>
.flex-3 {
  display: flex;
  list-style-type: none;
  margin: 2em 0 0 0;
  padding: 0;
}
.flex-3 li {
  margin-right: 5%;
  width: 30%;
}
.flex-3 li img {
  width: 100%;
  object-fit: contain;
}
.flex-3 li h5 {
  height: 38px;
  overflow: hidden;
}
.flex-3 li:last-of-type {
  margin-right: 0;
}
</style>
