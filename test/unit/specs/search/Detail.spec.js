import Detail from '@/components/search/Detail'
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vue from 'vue'
import vueResource from 'vue-resource'

const localVue = createLocalVue()
localVue.use(VueRouter)
Vue.use(vueResource)

const routes = [
  { path: '/detail', params: {id: 1}, component: Detail }
]

const router = new VueRouter({
  routes
})

const $http = { get: () => new Promise(resolve => {
  resolve({
    'userId': 1,
    'id': 1,
    'title': 'title 1',
    'body': 'lorem ipsum'
  })
})}

const wrapper = shallowMount(Detail, {
  localVue,
  router,
  $http
})

describe('Detail.vue', async () => {
  it('should render detail container', () => {
    expect(wrapper.contains('.detail')).toBe(true)
    setTimeout(function () {
      expect(wrapper.find('.tdd-title').text()).toBe('title 1')
    }, 3000)
  })
})
