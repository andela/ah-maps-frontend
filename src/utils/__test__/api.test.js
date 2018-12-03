import api from '../api';

describe('Should test axios api requests', () => {
  it('should test get object', () => {
    api.get('').then((data) => {
      expect(data).toEqual(Promise({}));
    });
  });

  it('should test post object', () => {
    api.post('', {}).then((data) => {
      expect(data).toEqual(Promise({}));
    });
  });

  it('should test put object', () => {
    api.put('', {}).then((data) => {
      expect(data).toEqual(Promise({}));
    });
  });
});
