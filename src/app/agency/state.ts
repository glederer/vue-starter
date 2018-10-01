export interface IAgencyState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const AgencyDefaultState = (): IAgencyState => {
  return {
    incrementPending: false,
    decrementPending: false,
    count:            0,
  };
};
