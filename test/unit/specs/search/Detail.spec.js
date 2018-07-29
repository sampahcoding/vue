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
    expect(wrapper.find('.tdd-title').exists()).toBe(false)
    expect(wrapper.find('.tdd-progress').exists()).toBe(true)
    expect(wrapper.find('.tdd-no-result').exists()).toBe(false)
    expect(wrapper.find('.tdd-reload').exists()).toBe(false)
    setTimeout(function () {
      expect(wrapper.find('.tdd-title').text()).toBe('title 1')
      expect(wrapper.find('.tdd-progress').exists()).toBe(false)
      expect(wrapper.find('.tdd-no-result').exists()).toBe(false)
      expect(wrapper.find('.tdd-reload').exists()).toBe(false)
    }, 3000)
  })
  it('should render only loader on progress true', () => {
    wrapper.setData({progress: true, reload: false, no_result: false})
    expect(wrapper.find('.tdd-title').exists()).toBe(false)
    expect(wrapper.find('.tdd-progress').exists()).toBe(true)
    expect(wrapper.find('.tdd-no-result').exists()).toBe(false)
    expect(wrapper.find('.tdd-reload').exists()).toBe(false)
  })
  it('should render only no result message on no result true', () => {
    wrapper.setData({progress: false, reload: false, no_result: true})
    expect(wrapper.find('.tdd-title').exists()).toBe(false)
    expect(wrapper.find('.tdd-progress').exists()).toBe(false)
    expect(wrapper.find('.tdd-no-result').exists()).toBe(true)
    expect(wrapper.find('.tdd-reload').exists()).toBe(false)
  })
})
