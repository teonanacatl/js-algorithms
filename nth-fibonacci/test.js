const fib = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('calculates correct Fibonacci value for n = 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct Fibonacci value for n = 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct Fibonacci value for n = 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct Fibonacci value for n = 4', () => {
  expect(fib(4)).toEqual(3);
});

test('calculates correct Fibonacci value for n = 39', () => {
  expect(fib(39)).toEqual(63245986);
});

test('calculates correct Fibonacci value for n = 0', () => {
  expect(fib(0)).toEqual(0);
});

test('calculates correct Fibonacci value for n = 5', () => {
  expect(fib(5)).toEqual(5);
});

test('calculates correct Fibonacci value for n = 10', () => {
  expect(fib(10)).toEqual(55);
});
