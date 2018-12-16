import { validate } from '../validation';

describe('Validate', () => {
  it('should validate objects', () => {
    const errors = validate({ title: 'title', body: [{ text: 'text' }] });
    expect(errors).toEqual({});
  });
  it('should validate empty objects', () => {
    const errors = validate({ title: '', body: [{ text: '' }] });
    expect(errors.title).toEqual('Title field required');
  });
});
