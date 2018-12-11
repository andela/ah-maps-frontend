import { EDIT_PROFILE, PROFILE_FETCH, UPDATE_IMAGE } from '../../../constants';
import { profileFetched, onEditProfile, updateImage } from '../profile';

describe('Profile action creators', () => {
  it('Should dispatch PROFILE_FETCH type', () => {
    expect(profileFetched({}).type).toEqual(PROFILE_FETCH);
  });
});

describe('Profile edit action creators', () => {
  it('should dispatch EDIT_PROFILE type', () => {
    expect(onEditProfile({}).type).toEqual(EDIT_PROFILE);
  });
});

describe('Profile update image action creator', () => {
  it('should dispatch UPDATE_IMAGE type', () => {
    expect(updateImage({}).type).toEqual(UPDATE_IMAGE);
  });
});
