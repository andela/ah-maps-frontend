import {
  GET_TAGS,
} from '../../../constants';

import {
  getTags,
} from '..';


describe('Tag action creators', () => {
  it('Should dispatch GET_TAGS type', () => {
    expect(getTags({}).type).toEqual(GET_TAGS);
  });
});
