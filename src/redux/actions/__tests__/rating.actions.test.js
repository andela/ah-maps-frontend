import {
  CHANGE_RATING, CHANGE_USER_RATING,
} from '../../../constants';

import {
  changeRating, changeUserRating,
} from '..';


describe('Rating action creators', () => {
  it('Should dispatch CHANGE_RATING type', () => {
    expect(changeRating({}).type).toEqual(CHANGE_RATING);
  });
  it('Should dispatch CHANGE_USER_RATING type', () => {
    expect(changeUserRating({}).type).toEqual(CHANGE_USER_RATING);
  });
});
