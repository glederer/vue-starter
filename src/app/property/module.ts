import { Module }                             from 'vuex';
import { PropertyDefaultState, IPropertyState } from './state';
import { PropertyActions }                     from './actions';
import { PropertyGetters }                     from './getters';
import { PropertyMutations }                   from './mutations';

export const PropertyModule: Module<IPropertyState, IPropertyState> = {
  namespaced: true,
  actions:    {
    ...PropertyActions,
  },
  getters:    {
    ...PropertyGetters,
  },
  state:      {
    ...PropertyDefaultState(),
  },
  mutations:  {
    ...PropertyMutations,
  },
};
