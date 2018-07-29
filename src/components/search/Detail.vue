<template>
  <div class="detail">
    <Placeholder v-if="progress === true" class="tdd-progress"></Placeholder>
    <div class="no-result" v-if="reload === true || no_result === true">
      <Reload v-if="reload === true" class="tdd-reload"></Reload>
      <div v-if="no_result === true" class="tdd-no-result">No Result detail id "{{ id }}"</div>
    </div>
    <div v-if="Object.keys(data).length > 0">
      <h2 class="tdd-title"> {{ data.title }} </h2>
      <p v-for="i in 2" :key="i">
        <template v-for="m in 5">
          {{ data.body + m }}
        </template>
      </p>
      <div class="detail__footer">
        <img :src="'https://picsum.photos/50/50/?image='+ id" align="top"/>
        <div class="detail__footer__left">
          <span class="label">expedita</span>
          <span class="label">consequuntur</span>
          <br>
          <time>4 days ago</time>
        </div>
      </div>
    </div>
    <RelatedArticles :RelatedArticles="datas"/>
  </div>
</template>

<script>
import Placeholder from './DetailPlaceholder'
import { getArticle, getRelatedArticles } from '../../api/Articles'
import Reload from './Reload'
import RelatedArticles from './RelatedArticles'
var initData = {
  progress: true,
  reload: false,
  no_result: false,
  datas: []
}

export default {
  name: 'Detail',
  components: {
    'Placeholder': Placeholder,
    'Reload': Reload,
    'RelatedArticles': RelatedArticles
  },
  data () {
    return {
      ...initData,
      id: this.$route.params.id,
      data: {}
    }
  },
  created: function () {
    this.getArticle()
  },
  methods: {
    getArticle: function (e) {
      let self = this
      Object.assign(self.$data, initData)
      let promises = Promise.all([getArticle(this.id), getRelatedArticles(3)])
      promises.then(function (results) {
        let delay = results[0].delay
        setTimeout(() => {
          Object.assign(self.$data, results[0], results[1])
        }, delay)
      })
    },
    doReload: function () {
      this.getArticle()
    }
  }
}
</script>
<style scoped>
h2 {
  text-align: center;
}
p {
  text-align: justify;
}
.detail__footer img {
   border-radius: 50%;
   margin-right: 15px;
   width: 50px;
   background: lightgrey;
}
.detail__footer {
  margin-top: 40px;
  display: flex;
}
span.label {
  border: 1px solid #f4f6f9;
  border-radius: 6px;
  font-size: 11px;
  padding: 5px 15px;
  background: #f4f6f9;
  color: #b1b6bb;
  letter-spacing: 0.5px;
  font-weight: bold;
}
time {
  color: #99a4af;
  font-size: 10px;
}
.detail__footer__left {
  width: calc (100% - 50px);
}
.no-result {
  font-size: 1em;
  text-align: center;
  margin: 200px 0;
}
</style>
