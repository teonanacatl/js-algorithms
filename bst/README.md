# Binary Search Tree Implementation in JavaScript

This project contains a simple implementation of a binary search tree (BST) in JavaScript.

## Node Class

The `Node` class represents a node in the BST. Each node has a `data` property that stores the value of the node, and `left` and `right` properties that point to the node's left and right children, respectively.

### Methods

- `insert(data)`: Inserts a new node with the given data into the BST. If the data is less than the node's data, it goes to the left; if it's greater, it goes to the right.
- `contains(data)`: Searches the BST for a node with the given data. If found, it returns the node; otherwise, it returns null.

## Tests

The project also includes tests for the `Node` class. The tests cover the constructor, `insert`, and `contains` methods.

## Usage

To use this BST implementation in your project, import the `Node` class from `index.js`.

```javascript
const Node = require('./index');