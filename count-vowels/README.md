# Count Vowels Function in JavaScript

This project contains a simple implementation of a function that counts the number of vowels in a given string in JavaScript.

Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.

## Vowels Function

The `vowels` function takes a string as input and returns the number of vowels in the string. It is case-insensitive, meaning it treats 'a' and 'A' as the same vowel.


### Method

- `vowels(str)`: Counts the number of vowels in the given string `str`. If the string contains no vowels, it returns 0.

## Tests

The project also includes tests for the `vowels` function. The tests cover various scenarios, including strings with all vowels, strings with no vowels, and strings with mixed case.

## Usage

To use this function in your project, import the `vowels` function from `index.js`.

```javascript
const vowels = require('./index');

console.log(vowels('Hello, World!')); // Outputs: 3
