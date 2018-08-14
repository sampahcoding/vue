import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

var articles = {
  datas: [],
  progress: false,
  reload: false,
  no_result: false,
  delay: 500
}

export const searchArticles = (q, sortby = 'ID') => {
  articles = {...articles, sortby: sortby, q: q}
  return Vue.http.get('https://jsonplaceholder.typicode.com/posts', {params: {_limit: 15, q: q, _sort: sortby}}, { timeout: 2000 })
    .then(function (response) {
      if (response.data.length === 0) {
        return {...articles, no_result: true}
      }
      return {...articles, datas: response.data, delay: 1000}
    }, function (error) {
      if (error.status === 404) {
        return {...articles, no_result: true}
      } else {
        return {...articles, reload: true}
      }
    })
}
