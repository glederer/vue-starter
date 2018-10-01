import { AgencyMutations }                   from './mutations';
import { AgencyDefaultState, IAgencyState } from './state';

describe('AgencyMutations', () => {
  let testState: IAgencyState;

  beforeEach(() => {
    testState = AgencyDefaultState();
  });

  test('it should set the count', () => {
    AgencyMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    AgencyMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    AgencyMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
