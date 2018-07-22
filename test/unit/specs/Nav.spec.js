import Nav from '@/components/Nav'
import {
  shallowMount,
  RouterLinkStub
} from '@vue/test-utils'

const Names = ['Home', 'Search', 'Login', 'Register']

describe('Nav.vue', () => {
  it('should render list of menu', () => {
    const Wrapper = shallowMount(Nav, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    let menus = Wrapper.findAll('.menus ul li').length
    expect(menus).toBe(4)
    let rightMenus = Wrapper.findAll('.menus ul').at(1)
    expect(rightMenus.classes()).toContain('menus__right')
    let menu = Wrapper.findAll('.menus ul li a')
    Names.forEach((item, index) => {
      expect(menu.at(index).text()).toContain(item)
    })
  })
})
