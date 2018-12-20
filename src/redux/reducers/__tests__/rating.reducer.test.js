import rating, { initialState } from '../rating';
import { CHANGE_RATING, CHANGE_USER_RATING, START_LOADING } from '../../../constants';

describe('Rating reducers', () => {
  it('should provide the initial state', () => {
    expect(rating(undefined, {})).toEqual(initialState);
  });

  it('should add data to the state', () => {
    expect(
      rating(initialState, { type: CHANGE_RATING, payload: '' }).average_rating,
    ).toEqual('');
  });

  it('should add data to the state', () => {
    expect(
      rating(initialState, { type: CHANGE_USER_RATING }).loading,
    ).toEqual(false);
  });

  it('should add data to the state', () => {
    expect(
      rating(initialState, { type: START_LOADING, payload: '' }).loading,
    ).toEqual(true);
  });
});
