import { client, authUserHeader } from '../api';

describe('Should test axios api requests', () => {
  it('should test get object', () => {
    client({ url: '/', method: 'get' })
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
  });

  it('should add authentication header', () => {
    expect(authUserHeader()).toEqual({});
  });
});
