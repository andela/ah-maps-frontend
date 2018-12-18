import profile, { initialState } from '../profile';
import { EDIT_PROFILE, PROFILE_FETCH, UPDATE_IMAGE } from '../../../constants';

describe('Profile reducers', () => {
  it('should provide the initial state', () => {
    expect(profile({}, {})).toEqual({});
  });

  it('should add Profile details to the state', () => {
    expect(profile({}, {})).toEqual({});
  });

  it('should add bio to the state', () => {
    expect(profile(initialState, { type: EDIT_PROFILE }).modal).toEqual(true);
  });

  it('should get Profile details to the state', () => {
    expect(profile(initialState, { type: PROFILE_FETCH, payload: initialState }).modal).toEqual(false);
  });

  it('should update profile image to the state', () => {
    expect(profile(initialState, { type: UPDATE_IMAGE, payload: initialState }).modal).toEqual(false);
  });
});
