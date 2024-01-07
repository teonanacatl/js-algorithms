# Queue Class Implementation in JavaScript

This project contains a simple implementation of a queue data structure in JavaScript.

## Queue Class

The `Queue` class represents a queue data structure. Each instance of the `Queue` class has a `data` property that stores the elements in the queue.

### Methods

- `add(element)`: Adds a new element to the end of the queue.
- `remove()`: Removes and returns the element at the start of the queue. If the queue is empty, it returns `undefined`.

## Tests

The project also includes tests for the `Queue` class. The tests cover the constructor, `add`, and `remove` methods.

## Usage

To use this Queue implementation in your project, import the `Queue` class from `index.js`.

```javascript
const Queue = require('./index');

const q = new Queue();
q.add('Hello, World!');
console.log(q.remove()); // Outputs: 'Hello, World!'
