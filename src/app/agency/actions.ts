import { ActionContext } from 'vuex';
import { IAgencyState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IAgencyResponse {
  count: number;
}

export interface IAgencyActions {
  increment(context: ActionContext<IAgencyState, IAgencyState>): Promise<any>;

  decrement(context: ActionContext<IAgencyState, IAgencyState>): Promise<any>;
}

export const AgencyActions: IAgencyActions = {
  increment({ commit, state }: ActionContext<IAgencyState, IAgencyState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IAgencyResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IAgencyState, IAgencyState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IAgencyResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
