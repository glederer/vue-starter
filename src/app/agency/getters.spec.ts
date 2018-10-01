import { AgencyGetters }      from './getters';
import { AgencyDefaultState, IAgencyState } from './state';

describe('AgencyGetters', () => {
  let testState: IAgencyState;

  beforeEach(() => {
    testState = AgencyDefaultState();
  });

  test('it should get the count', () => {
    expect(AgencyGetters.count(testState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(AgencyGetters.incrementPending(testState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(AgencyGetters.decrementPending(testState)).toBe(false);
  });

});
