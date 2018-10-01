import { IPropertyState } from './state';

export interface IPropertyMutations {
  SET_INCREMENT_PENDING(state: IPropertyState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IPropertyState, pending: boolean): void;

  SET_COUNT(state: IPropertyState, count: number): void;
}

export const PropertyMutations: IPropertyMutations = {
  SET_INCREMENT_PENDING: (state: IPropertyState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IPropertyState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IPropertyState, count: number) => {
    state.count = count;
  },
};
