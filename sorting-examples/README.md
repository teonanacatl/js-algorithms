# Sorting Algorithms in JavaScript

This project contains simple implementations of three sorting algorithms in JavaScript: Bubble Sort, Selection Sort, and Merge Sort.

## Sorting Functions

Each sorting function takes an array as input and returns a sorted version of the array.

### Bubble Sort

The `bubbleSort` function implements the Bubble Sort algorithm. It compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no more swaps are needed.

### Selection Sort

The `selectionSort` function implements the Selection Sort algorithm. It divides the input list into a sorted and an unsorted region. The sorted region is built up from left to right at the front of the list.

### Merge Sort

The `mergeSort` function implements the Merge Sort algorithm. It divides the unsorted list into n sublists, each containing one element, and repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining.

## Tests

The project also includes tests for each sorting function. The tests cover various scenarios, including arrays in ascending and descending order.

## Usage

To use these sorting functions in your project, import the functions from `index.js`.

```javascript
const S = require('./index');
const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const mergeSort = S.mergeSort;

console.log(bubbleSort([3, 2, 1])); // Outputs: [1, 2, 3]
console.log(selectionSort([3, 2, 1])); // Outputs: [1, 2, 3]
console.log(mergeSort([3, 2, 1])); // Outputs: [1, 2, 3]
