import { required } from './Form';

test('When required is called with empty string, an error should be returned', () => {
  const result = required('');
  expect(result).toBe('This must be populated');
});

test('When required is called with value, an empty value should return', () => {
  const result = required('test');
  expect(result).toBe('');
});
