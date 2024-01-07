const vowels = require('./index');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});

test('returns the number of vowels used in a sentence', () => {
  expect(vowels('The quick brown fox')).toEqual(5);
});

test('returns the number of vowels used in a sentence with mixed case', () => {
  expect(vowels('The Quick Brown Fox')).toEqual(5);
});

test('returns zero when the input is an empty string', () => {
  expect(vowels('')).toEqual(0);
});

test('returns zero when the input is a string without vowels', () => {
  expect(vowels('BCDFGHJKLMNPQRSTVWXYZ')).toEqual(0);
});

