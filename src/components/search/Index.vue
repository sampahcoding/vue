<template>
  <div class="search">
    <div class="search-filter">
      <fieldset>
        <input type="text" v-model="q" v-on:change="update">
      </fieldset>
      <fieldset>
        <label> Sortby </label>
        <div class="search-filter__sort">
          <span :class="sortby == 'title' ? '--active': ''" v-on:click="updateSortby('title')">A -> Z</span>
          <span :class="sortby == 'id' ? '--active': ''" v-on:click="updateSortby('id')">ID</span>
        </div>
      </fieldset>
    </div>
    <Placeholder v-if="progress === true"></Placeholder>
    <div class="no-result" v-if="reload === true || no_result === true">
      <Reload v-if="reload === true"></Reload>
      <div v-if="no_result === true">No Result for "{{ q }}"</div>
    </div>
    <ul class="search-result" v-if="progress === false && reload === false && no_result === false">
      <li v-for="data in datas" :key="data.id" class="flex-grid">
        <div class="no-img"><span>Not found</span></div>
        <img :src="'https://picsum.photos/200/300/?image='+ data.id" class="col-1"/>
        <div class="col-2">
          <router-link :to="{ name: 'detail', params: { id: data.id }}">{{ data.title }}</router-link>
          <div class="search-result__subcontent">
            <template v-for="tag in data.title.split(' ', 2)" >
              <span class="label" :key="tag">{{ tag }}</span>
            </template>
            <br>
            <time>4 days ago</time>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Placeholder from './IndexPlaceholder'
import Reload from './Reload'
import { searchArticles } from '../../api/searchArticles'
var initData = {
  datas: [],
  progress: true,
  reload: false,
  no_result: false
}
export default {
  name: 'Index',
  components: {
    'Placeholder': Placeholder,
    'Reload': Reload
  },
  data () {
    return {
      ...initData,
      sortby: this.$route.query._sort || 'id',
      q: this.$route.query.q
    }
  },
  created: function () {
    this.update()
  },
  methods: {
    update: function (e) {
      let self = this
      Object.assign(this.$data, initData)
      // will use promise all for other api call maybe
      let promises = Promise.all([searchArticles(self.q, self.sortby)])
      promises.then(function (results) {
        let delay = results[0].delay
        setTimeout(() => {
          console.log(results)
          Object.assign(self.$data, results[0])
          self.$router.push({ name: 'Search', query: { q: self.q, _sort: self.sortby } })
        }, delay)
      })
    },
    updateSortby: function (val) {
      this.sortby = val
      this.update()
    },
    doReload: function () {
      this.update()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grid {
  display: flex;
  margin-bottom: 15px;
  position: relative;
}
.col-1 {
  width: 170px;
  height: 100px;
  object-fit: cover;
  z-index: 2;
}
.no-img {
  background: lightgrey;
  position: absolute;
  top: 0;
  left: 0;
  width: 170px;
  height: 100px;
  z-index: 1;
  text-align: center;
  font-size: 12px;
  display: table;
}
.no-img span {
  vertical-align: middle;
  display: table-cell;
}
.col-2 {
  flex: 2;
  padding-left: 10px;
  font-size: 14px;
  position: relative;
}
input {
  border-radius: 3px;
  height: 30px;
  outline: none;
  border: 1px solid #42b983;
  padding-left: 15px;
  font-size: 14px;
  color: #2c3e50;
  font-weight: 300;
  width: 90%;
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
.no-result {
  font-size: 1em;
  text-align: center;
  margin-top: 100px;
  width: 70%;
}
span.label {
  border: 1px solid #f4f6f9;
  border-radius: 6px;
  font-size: 10px;
  padding: 1px 10px;
  background: #f4f6f9;
  color: #b1b6bb;
  letter-spacing: 0.5px;
  font-weight: bold;
  margin-right: 10px;
}
time {
  color: #99a4af;
  font-size: 10px;
}
.search-result__subcontent {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 10px;
}
a {
  color: inherit;
  text-decoration: none;
}
.search-filter__sort {
  height: 30px;
  width: 100%;
  background: white;
  border: 1px solid #42b983;
  border-radius: 6px;
  text-align: center;
  display:flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
}
.search-filter__sort span {
  width: 50%;
  display: inline-block;
  color: #42b983;
  padding-top: 5px;
  font-weight: bold;
  cursor: pointer;
}
.search-filter fieldset {
  margin: 0 0 15px;
  border: none;
}
.search-filter__sort span.--active {
  width: 50%;
  display: inline-block;
  background: #42b983;
  color: white;
  cursor: default;
}
</style>
