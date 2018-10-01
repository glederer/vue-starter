import { Module }                             from 'vuex';
import { AgencyDefaultState, IAgencyState } from './state';
import { AgencyActions }                     from './actions';
import { AgencyGetters }                     from './getters';
import { AgencyMutations }                   from './mutations';

export const AgencyModule: Module<IAgencyState, IAgencyState> = {
  namespaced: true,
  actions:    {
    ...AgencyActions,
  },
  getters:    {
    ...AgencyGetters,
  },
  state:      {
    ...AgencyDefaultState(),
  },
  mutations:  {
    ...AgencyMutations,
  },
};
