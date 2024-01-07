const Queue = require('./index');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});

test('can add multiple elements to a queue', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
});

test('removing from an empty queue returns undefined', () => {
  const q = new Queue();
  expect(q.remove()).toEqual(undefined);
});

test('adding and removing elements maintains order', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  expect(q.remove()).toEqual(1);
  q.add(3);
  expect(q.remove()).toEqual(2);
});
