import { ADD_COMMENT, ADD_COMMENT_ERROR } from '../../../constants';
import { addComment, addCommentError } from '../comments';

describe('Comments reducer', () => {
  it('should dispatch ADD_COMMENT', () => {
    expect(addComment({}).type).toEqual(ADD_COMMENT);
  });
  it('should dispatch ADD_COMMENT_ERROR', () => {
    expect(addCommentError({}).type).toEqual(ADD_COMMENT_ERROR);
  });
});
