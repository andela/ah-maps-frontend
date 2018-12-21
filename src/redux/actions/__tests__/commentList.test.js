import { SET_COMMENTS } from '../../../constants';
import {
  setComments, getComments,
  deleteComments, editComments,
  createThread,
} from '../commentsList';

describe('Comments List reducer', () => {
  it('should dispatch SET_COMMENTS', () => {
    expect(setComments({}).type).toEqual(SET_COMMENTS);
  });

  it('should make sure comment actions are defined', () => {
    expect(getComments('slug')).toBeDefined();
    expect(deleteComments('slug')).toBeDefined();
    expect(editComments('slug')).toBeDefined();
    expect(createThread('slug')).toBeDefined();
  });
});
