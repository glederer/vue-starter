import { IAgencyState } from './state';

export interface IAgencyMutations {
  SET_INCREMENT_PENDING(state: IAgencyState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IAgencyState, pending: boolean): void;

  SET_COUNT(state: IAgencyState, count: number): void;
}

export const AgencyMutations: IAgencyMutations = {
  SET_INCREMENT_PENDING: (state: IAgencyState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IAgencyState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IAgencyState, count: number) => {
    state.count = count;
  },
};
