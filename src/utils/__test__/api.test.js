import { client, authUserHeader, api } from '../api';
import { setToken } from '..';
import { USER_TOKEN } from '../../constants';

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

  it('should add authentication for logged in users header', () => {
    setToken(USER_TOKEN);
    expect(authUserHeader()).toHaveProperty('Authorization');
  });

  it('should test update user profile promise', () => {
    api.user.update({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
  });
  it('should test update article request promises', () => {
    api.article.list({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
    api.article.single({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
    api.article.update({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
    api.article.delete({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
    api.article.create({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
  });
});
