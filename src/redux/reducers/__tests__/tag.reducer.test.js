import tag, { initialState } from '../tag';
import { GET_TAGS } from '../../../constants';

describe('Tag reducers', () => {
  it('should provide the initial state', () => {
    expect(tag(undefined, {})).toEqual(initialState);
  });

  it('should add data to the state', () => {
    expect(
      tag(initialState, { type: GET_TAGS, payload: '' }).tags,
    ).toEqual('');
  });
});
