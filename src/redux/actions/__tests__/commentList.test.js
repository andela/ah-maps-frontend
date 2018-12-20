import { SET_COMMENTS } from '../../../constants';
import { setComments } from '../commentsList';

describe('Comments List reducer', () => {
  it('should dispatch SET_COMMENTS', () => {
    expect(setComments({}).type).toEqual(SET_COMMENTS);
  });
});
