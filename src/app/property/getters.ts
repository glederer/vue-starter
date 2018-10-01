import { IPropertyState } from './state';

export interface IPropertyGetters {
  incrementPending(state: IPropertyState): boolean;
  decrementPending(state: IPropertyState): boolean;
  count(state: IPropertyState): number;
}

export const PropertyGetters: IPropertyGetters = {
  incrementPending(state: IPropertyState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IPropertyState): boolean {
    return state.decrementPending;
  },
  count(state: IPropertyState): number {
    return state.count;
  },
};
