import { PropertyGetters }      from './getters';
import { PropertyDefaultState, IPropertyState } from './state';

describe('PropertyGetters', () => {
  let testState: IPropertyState;

  beforeEach(() => {
    testState = PropertyDefaultState();
  });

  test('it should get the count', () => {
    expect(PropertyGetters.count(testState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(PropertyGetters.incrementPending(testState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(PropertyGetters.decrementPending(testState)).toBe(false);
  });

});
