import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

var article = {
  data: {},
  progress: false,
  reload: false,
  no_result: false,
  delay: 500
}

var relatedArticles = {
  datas: []
}

export const getArticle = (id) => {
  article.id = id
  return Vue.http.get('https://jsonplaceholder.typicode.com/posts/' + id, { timeout: 2000 })
    .then(function (response) {
      if (response.body.title !== '') {
        return {...article, data: response.body, delay: 1000}
      } else {
        return {...article, no_result: true}
      }
    }, function (error) {
      if (error.status === 404) {
        return {...article, no_result: true}
      } else {
        return {...article, reload: true}
      }
    })
}

export const getRelatedArticles = (limit = 3) => {
  let random = Math.floor(Math.random() * 10)
  return Vue.http.get('https://jsonplaceholder.typicode.com/posts', {params: {_limit: limit, _page: random}}, { timeout: 2000 })
    .then(function (response) {
      return {...relatedArticles, datas: response.body}
    }, function (error) {
      if (error.status === 404) {
        return relatedArticles
      } else {
        return relatedArticles
      }
    })
}
