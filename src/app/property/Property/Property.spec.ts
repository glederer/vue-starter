import { createLocalVue, mount } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { i18n }                  from '../../shared/plugins/i18n/i18n';
import Property                   from './Property.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Property.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
                                   modules: {
                                     property: {
                                       namespaced: true,
                                       getters:    {
                                         count: () => 0,
                                         incrementPending: () => false,
                                         decrementPending: () => false,
                                       },
                                       actions:    {
                                         increment: jest.fn(),
                                         decrement: jest.fn(),
                                       },
                                     },
                                   },
                                 });
    const wrapper = mount(Property, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('Property');
  });

  test('should do this', () => {

  });

  test('should do that', () => {

  });

});
