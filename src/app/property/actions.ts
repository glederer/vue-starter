import { ActionContext } from 'vuex';
import { IPropertyState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IPropertyResponse {
  count: number;
}

export interface IPropertyActions {
  increment(context: ActionContext<IPropertyState, IPropertyState>): Promise<any>;

  decrement(context: ActionContext<IPropertyState, IPropertyState>): Promise<any>;
}

export const PropertyActions: IPropertyActions = {
  increment({ commit, state }: ActionContext<IPropertyState, IPropertyState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IPropertyResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IPropertyState, IPropertyState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IPropertyResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
