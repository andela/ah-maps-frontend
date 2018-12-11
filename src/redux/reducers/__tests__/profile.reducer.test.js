import profile, { initialState } from '../profile';
import { EDIT_PROFILE, PROFILE_FETCH, UPDATE_IMAGE } from '../../../constants';

describe('Profile reducers', () => {
  it('should provide the initial state', () => {
    expect(profile({}, {})).toEqual({});
  });

  it('should add Profile details to the state', () => {
    expect(profile({}, {})).toEqual({});
  });
});
