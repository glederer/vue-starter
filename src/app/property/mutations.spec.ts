import { PropertyMutations }                   from './mutations';
import { PropertyDefaultState, IPropertyState } from './state';

describe('PropertyMutations', () => {
  let testState: IPropertyState;

  beforeEach(() => {
    testState = PropertyDefaultState();
  });

  test('it should set the count', () => {
    PropertyMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    PropertyMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    PropertyMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
