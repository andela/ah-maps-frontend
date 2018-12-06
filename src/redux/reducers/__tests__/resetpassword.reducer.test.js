import resetpassword, { initialState } from '../resetpassword';
import { SUCCESS_MESSAGE } from '../../../constants';

describe('ResetPassword reducers', () => {
  it('should provide the initial state', () => {
    expect(resetpassword(undefined, {})).toEqual(initialState);
  });

  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: SUCCESS_MESSAGE, payload: '' }).success,
    ).toEqual(true);
  });
});
