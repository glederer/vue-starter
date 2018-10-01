import { IAgencyState } from './state';

export interface IAgencyGetters {
  incrementPending(state: IAgencyState): boolean;
  decrementPending(state: IAgencyState): boolean;
  count(state: IAgencyState): number;
}

export const AgencyGetters: IAgencyGetters = {
  incrementPending(state: IAgencyState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IAgencyState): boolean {
    return state.decrementPending;
  },
  count(state: IAgencyState): number {
    return state.count;
  },
};
