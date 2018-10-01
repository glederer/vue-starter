import { AppDefaultState, IAppState }         from './app/state';
import { CounterDefaultState, ICounterState }         from './counter/state';
import { PropertyDefaultState, IPropertyState }         from './property/state';
import { AgencyDefaultState, IAgencyState }         from './agency/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  counter?: ICounterState;
  property?: IPropertyState;
  agency?: IAgencyState;
}

export const DefaultState: IState = {
  app:     {
    ...AppDefaultState(),
  },
  counter: {
    ...CounterDefaultState(),
  },
  property: {
    ...PropertyDefaultState(),
  },
  agency: {
    ...AgencyDefaultState(),
  },
};
