import { client, authUserHeader } from '../api';
import { setToken } from '..';
import { USER_TOKEN } from '../../constants';

describe('Should test axios api requests', async () => {
  it('should test axios client request', () => {
    client({ url: '/', method: 'get' })
      .then((response) => {
        expect(response).toBe(Promise({}));
      });
  });

  it('should add authentication header without token', () => {
    expect(authUserHeader()).toEqual({});
  });

  it('should add authentication header with token', () => {
    setToken(USER_TOKEN);
    expect(authUserHeader()).toEqual({});
  });
});
