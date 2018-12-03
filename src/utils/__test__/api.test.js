import { client, authUserHeader } from '../api';

describe('Should test axios api requests', async () => {
  it('should test axios client request', () => {
    client({ url: '/', method: 'get' })
      .then((response) => {
        expect(response).toBe(Promise({}));
      });
  });

  it('should add authentication header', () => {
    expect(authUserHeader()).toEqual({});
  });
});
