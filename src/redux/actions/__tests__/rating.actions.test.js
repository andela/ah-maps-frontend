import {
  CHANGE_RATING, CHANGE_USER_RATING, START_LOADING,
} from '../../../constants';

import {
  changeRating, changeUserRating, startLoader,
} from '..';


describe('Rating action creators', () => {
  it('Should dispatch CHANGE_RATING type', () => {
    expect(changeRating({}).type).toEqual(CHANGE_RATING);
  });
  it('Should dispatch CHANGE_USER_RATING type', () => {
    expect(changeUserRating({}).type).toEqual(CHANGE_USER_RATING);
  });
  it('Should dispatch START_LOADING type', () => {
    expect(startLoader({}).type).toEqual(START_LOADING);
  });
});
