export interface IPropertyState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const PropertyDefaultState = (): IPropertyState => {
  return {
    incrementPending: false,
    decrementPending: false,
    count:            0,
  };
};
