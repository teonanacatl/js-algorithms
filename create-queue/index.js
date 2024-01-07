class Queue {
    constructor() {
        this.data = [];
    }

    add(element) {
        this.data.push(element);
    }

    remove() {
        return this.data.shift();
    }
}

module.exports = Queue;
