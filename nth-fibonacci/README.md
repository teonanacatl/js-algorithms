# Nth Fibonacci Function in JavaScript

This project contains a simple implementation of a function that calculates the n-th fibonacci number in JavaScript.

## Fibonacci Function

The `fib` function takes a number `n` as input and returns the nth number in the Fibonacci sequence.

### Method

- `fib(n)`: Calculates the n-th fibonacci number. The Fibonacci sequence starts with 0 (the 0th number) and 1 (the 1st number), and each subsequent number is the sum of the previous two.

## Tests

The project includes tests for the `fib` function. The tests cover the following values of `n`:

- `n = 0`, expected output is `0`
- `n = 1`, expected output is `1`
- `n = 2`, expected output is `1`
- `n = 3`, expected output is `2`
- `n = 4`, expected output is `3`
- `n = 5`, expected output is `5`
- `n = 10`, expected output is `55`
- `n = 39`, expected output is `63245986`

## Usage

To use this function in your project, import the `fib` function from `index.js`.

```javascript
const fib = require('./index');

console.log(fib(10)); // Outputs: 55
