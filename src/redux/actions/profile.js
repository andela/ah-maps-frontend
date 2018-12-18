import { api } from '../../utils';

import {
  EDIT_PROFILE,
  PROFILE_FETCH,
  UPDATE_IMAGE,
} from '../../constants';

export const profileFetched = payload => ({
  type: PROFILE_FETCH,
  payload,
});

export const onEditProfile = payload => ({
  type: EDIT_PROFILE,
  payload,
});

export const updateImage = payload => ({
  type: UPDATE_IMAGE,
  payload,
});


export const getProfile = username => dispatch => api.user.profile(username);

export const saveProfile = (username, data) => dispatch => api.user.editProfile(username, data)
  .then((response) => {
    dispatch(updateImage());
    dispatch(onEditProfile(response.data.profile));
  })
  .catch(error => console.log(error));
