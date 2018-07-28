import RelatedArticles from '@/components/search/RelatedArticles'
import {
  shallowMount
} from '@vue/test-utils'
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)
var wrapper = shallowMount(RelatedArticles)
var articles = [{
  'userId': 1,
  'id': 1,
  'title': 'sunt aut facere',
  'body': 'quia et '
}, {
  'userId': 1,
  'id': 2,
  'title': 'qui est esse',
  'body': 'est'
}, {
  'userId': 1,
  'id': 3,
  'title': 'ea molestias quasi',
  'body': 'et iusto sed quo'
}]

describe('RelatedArticles.vue', async () => {
  it('should render 0 related articles if props empty', () => {
    wrapper.setProps({RelatedArticles: []})
    expect(wrapper.findAll('.flex-3 li').length).toBe(0)
  })

  it('should render 3 related articles', () => {
    wrapper.setProps({RelatedArticles: articles})
    expect(wrapper.findAll('.flex-3 li').length).toBe(3)
  })
})
