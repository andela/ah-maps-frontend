import { LIKE_SUCCESS, DISLIKE_SUCCESS, GET_LIKES } from '../../../constants';
import { likeSuccess, dislikeSuccess, getTheLikes, liker, disliker, getLikes } from '..';


describe('Like action types', () => {
  it('Should dispatch LIKE_SUCCESS type', () => {
    expect(likeSuccess().type).toEqual(LIKE_SUCCESS);
  });

  it('Should dispatch DISLIKE_SUCCESS type', () => {
    expect(dislikeSuccess().type).toEqual(DISLIKE_SUCCESS);
  });

  it('Should dispatch GET_LIKES type', () => {
    expect(getTheLikes({}).type).toEqual(GET_LIKES);
  });
});

describe('Like actions', () => {
  it('should do liker action', () => {
    const payload = {
      slug: 'mirriam-117',
    };
    expect(liker(payload).type).toEqual(likeSuccess.type);
  });

  it('should do disliker action', () => {
    const payload = {
      slug: 'mirriam-117',
    };
    expect(disliker(payload).type).toEqual(dislikeSuccess.type);
  });

  it('should do getlikes action', () => {
    const getlikes = jest.fn(getLikes);
    const payload = {
      slug: 'mirriam-117',
    };
    expect(getlikes(payload).type).toEqual(getTheLikes.type);
  });
});
