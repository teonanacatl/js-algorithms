const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  expect(node.left.data).toEqual(5);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(17);
});

test('Contains returns node with the same data', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  const three = node.left.left.right;
  expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});

test('Contains returns null if small value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(-9999)).toEqual(null);
});

test('Node does not insert duplicate data', () => {
  const node = new Node(10);
  node.insert(10);
  expect(node.left).toEqual(null);
  expect(node.right).toEqual(null);
});

test('Contains returns null on an empty tree', () => {
  const node = new Node(10);
  expect(node.contains(10)).not.toEqual(null);
  expect(node.contains(5)).toEqual(null);
});