import rating, { initialState } from '../rating';
import { CHANGE_RATING } from '../../../constants';

describe('Rating reducers', () => {
  it('should provide the initial state', () => {
    expect(rating(undefined, {})).toEqual(initialState);
  });

  it('should add data to the state', () => {
    expect(
      rating(initialState, { type: CHANGE_RATING, payload: '' }).average_rating,
    ).toEqual('');
  });
});
